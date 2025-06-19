class Queue():
    def __init__(self):
        self.items = []

    #    * * #<-
    def insert(self, value):
        self.items.append(value)

    def pop(self):
        if self.is_empty():
            print("warning message :You try to pop value from an empty queue ")
            return None
        #    <- # * <-
        return self.items.pop(0)

    def is_empty(self):
        return len(self.items) == 0


q1 = Queue()
print(q1.pop())  # empty
print(q1.is_empty())  # true
q1.insert(2)           # 2
print(q1.is_empty())  # false
q1.insert(4)           # 2 4
q1.insert(10)          # 2 4 10
q1.insert(-6)          # 2 4 10 -6
print(q1.pop())        # 2
print(q1.pop())        # 4
