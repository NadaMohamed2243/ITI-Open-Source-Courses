class QueueOutOfRangeException(Exception):
    pass


class EnhancedQueue():

    _queues = {}

    def __init__(self, name, size):
        self.name = name
        self.size = size
        self.queue_items = []
        EnhancedQueue._queues[name] = self

    #    * * #<-
    def insert(self, value):
        if self.is_full():
            raise QueueOutOfRangeException(
                f"We can't insert more values into Queue named: '{self.name}' because maximum size reached.")
        self.queue_items.append(value)

    def pop(self):
        if self.is_empty():
            print(
                f"warning message :You try to pop value from an empty queue {self.name}")
            return None
        #    <- # * <-
        return self.queue_items.pop(0)

    def is_empty(self):
        return len(self.queue_items) == 0

    def is_full(self):
        return len(self.queue_items) >= self.size

    # to print the object as a user friendly way
    def __str__(self):
        return f"Queue '{self.name}' (size: {self.size}/{len(self.queue_items)}): {self.queue_items}"

    @classmethod
    def get_queue_by_name(cls, name):
        return cls._queues.get(name)


q1 = EnhancedQueue("queue1", 5)
q2 = EnhancedQueue("queue2", 2)

print(q1.pop())  # empty
print(q1.is_empty())  # true
q1.insert(2)           # 2
print(q1.is_empty())  # false
q1.insert(4)           # 2 4
q1.insert(10)          # 2 4 10
q1.insert(-6)          # 2 4 10 -6
q1.insert(-8)          # 2 4 10 -6 -8

try:
    q1.insert(6)          # raise exception
except QueueOutOfRangeException as ex:
    print(ex)

print(q1.pop())        # 2
print(q1.pop())        # 4


print(EnhancedQueue.get_queue_by_name("queue1"))
