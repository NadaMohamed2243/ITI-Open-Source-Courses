#include <iostream>

using namespace std;

class  Queue{
int* arr;
int sizee;
int top;

public:
    Queue(int _sizee)
    {
        sizee = _sizee;
        arr = new int[sizee];
        top=-1;
    }
    void enqueue(int d)
    {
        if(top < sizee-1)
        {
            top++;
            arr[top]=d;
        }
        else
            cout<<endl<<"queue is full"<<endl;
    }

    int dequeue(int &d)
    {
        if(top != -1)
        {
            d=arr[0];
            for(int i = 0 ; i< top ; i++)
            {
                arr[i]=arr[i+1];
            }
            top--;
            return 1;
        }
        else
        {
            cout<<endl<<"queue is empty"<<endl;
            return 0;
        }

    }

    int peek(int &d)
    {
        if(top != -1)
        {
            d=arr[0];
            return 1;
        }
        else
        {
            cout<<endl<<"queue is empty"<<endl;
            return 0;
        }

    }

    int isEmpty()
    {
        return top==-1;
    }
    int isFull()
    {
        return top==sizee-1;
    }



     //assignment in queue (q1 = q1)
    Queue operator=(const Queue& q)
    {
        top = q.top;
        sizee = q.sizee;
        delete [] arr;
        arr = new int(sizee);
        for(int i = 0 ; i<=top ; i++)
        {
            arr[i]=q.arr[i];
        }
        return *this;
    }


    Queue(Queue &q)
    {
        //cout<<"copy constructor"<<endl;
        top=q.top;
        sizee = q.sizee;
        arr=new int[sizee];
        for(int i=0;i<=top;i++)
            arr[i]=q.arr[i];

    }
};
int main()
{
    Queue q1(3);
    Queue q2(3);
    q1.enqueue(10);
    q1.enqueue(20);
    q1.enqueue(30);
    q1.enqueue(40);
    int x ;
    if(q1.peek(x)==1)
    {
        cout<<endl<<x<<endl;
    }
    if(q1.dequeue(x)==1)
    {
        cout<<endl<<x<<endl;
    }
    if(q1.dequeue(x)==1)
    {
        cout<<endl<<x<<endl;
    }
    if(q1.dequeue(x)==1)
    {
        cout<<endl<<x<<endl;
    }
    if(q1.dequeue(x)==1)
    {
        cout<<endl<<x<<endl;
    }
    if(q1.dequeue(x)==1)
    {
        cout<<endl<<x<<endl;
    }
    q1.enqueue(10);
    q1.enqueue(20);
    q1.enqueue(30);
    q1.enqueue(40);
    q2=q1;
    if(q2.dequeue(x)==1)
    {
        cout<<endl<<x<<endl;
    }
    if(q2.dequeue(x)==1)
    {
        cout<<endl<<x<<endl;
    }
    if(q2.dequeue(x)==1)
    {
        cout<<endl<<x<<endl;
    }
    if(q2.dequeue(x)==1)
    {
        cout<<endl<<x<<endl;
    }
    return 0;
}
