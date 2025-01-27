#include <iostream>

using namespace std;

class Queue
{
    int rear;
    int front;
    int size;
    int* arr;
public:
    Queue(int _size=5)
    {
        rear=front=-1;
        size=_size;
        arr = new int[size];
    }
    int isEmpty()
    {
        return (rear==-1);
    }
    int isFull()
    {
        //if rear return to 0 and continue -> front after rear by one , or (the natural )front on the begin and rear = index
        return ( (front==rear+1) || (front==0 && rear==size-1) );
    }
    void enqueue(int d)
    {
        //check, change , put
        if(isFull()==1)
        {
            cout<<endl<<"the queue is full"<<endl;
            return;
        }

        //the first value in queue
        else if(rear==-1)
        {
            rear=front=0;
        }
        // not full , and rear at the end of the queue , there is place to enqueue in the begin
        else if(rear == size-1)
        {
            rear=0;
        }
        // in the middle
        else
        {
            rear++;
        }

        arr[rear]=d;
    }
    //int --> state , alias d for result
    int dequeue(int& d)
    {
        //check , get , change
        if(isEmpty())
        {
            cout<<endl<<"the queue is Empty"<<endl;
            return 0;
        }
        d=arr[front];
        //dequeue the last element in the queue
        if (front == rear)
        {
            rear= front=-1;
        }

        //not empty and front at the end
        else if (front == size-1)
        {
            front=0;
        }
        //in the middle
        else
        {
            front++;
        }
        return 1;
    }

};
int main()
{
    Queue q1(4);
    q1.enqueue(10);  //10 <-
    q1.enqueue(20);  //10 20  <-
    q1.enqueue(30);  //10 20 30   <-
    q1.enqueue(40);  //10 20 30 40  <-
    q1.enqueue(50);  //full

    int x=0;
    if(q1.dequeue(x)==1)
    {
        cout<<endl<<x<<endl;     //10         // <- 20 30 40
    }
    if(q1.dequeue(x)==1)
    {
        cout<<endl<<x<<endl;     //20         // <- 30 40
    }
    if(q1.dequeue(x)==1)
    {
        cout<<endl<<x<<endl;     //30         // <-40
    }
    q1.enqueue(50);                           //40 50   <-
    if(q1.dequeue(x)==1)
    {
        cout<<endl<<x<<endl;     //40         // <- 50
    }
    if(q1.dequeue(x)==1)
    {
        cout<<endl<<x<<endl;     //50         // <-
    }

    if(q1.dequeue(x)==1)
    {
        cout<<endl<<x<<endl;     //empty
    }

    return 0;
}
