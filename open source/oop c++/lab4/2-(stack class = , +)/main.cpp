#include <iostream>

using namespace std;


class Stack
{
    //static size  , all stacks will be only 5 elements
    int* arr;
    int size;
    int tos;
public:
    // first we need constructor to intialize the attributes
     Stack()
     {
         tos=-1;
         size= 5;
         arr = new int[size];
     }
     Stack(int _size)
     {
         tos=-1;
         size= _size;
         arr = new int[size];
     }
     //we need 2 functions to be able to deal with the stack (push and pop)
    void push(int d)
    {
        //ensure that stack is not full (there is space)
        if (tos < size-1)
        {
            // up
            tos++;
            //put value
            arr[tos] = d;
        }
        else
            cout<<endl<<"the stack is full"<<endl;

    }

    int pop(int& d)
    {
        //ensure that stack is not empty (there is data to return )
        if(tos != -1)
        {
            //get value
            d = arr[tos];
            //down
            tos--;
            return 1;
        }
        else
        {
            cout<<endl<<"the stack is empty"<<endl;
            return 0;
        }

    }

    //operator overload

    //assignment in stack (s1 = s1)
    Stack operator=(const Stack& s)
    {
        tos = s.tos;
        size = s.size;
        delete [] arr;
        arr = new int(size);
        for(int i = 0 ; i<=tos ; i++)
        {
            arr[i]=s.arr[i];
        }
        return *this;
    }

    //add two stack (s3 = s1 + s2 ) --> append
    Stack operator+(const Stack& s)
    {
        Stack resultStack(size + s.size);
        resultStack.tos = tos + s.tos + 1;  //10 20 30 //10 20 30 (2+2+1)
        //resultStack.arr = new int[resultStack.size];
        for(int i = 0 ; i<=tos ; i++)
        {
            resultStack.arr[i]=arr[i];
        }
        for(int i = 0 ; i<=s.tos ; i++)
        {
            resultStack.arr[tos + 1 + i]=s.arr[i];
        }
        return resultStack;
    }


    //copy constructor for =
    Stack(Stack &s)
    {
        //cout<<"copy constructor"<<endl;
        tos=s.tos;
        size = s.size;
        arr=new int[size];
        for(int i=0;i<=tos;i++)
            arr[i]=s.arr[i];

    }

};




int main()
{
    Stack s1;
    Stack s2(7);
    Stack s3;

    s2.push(10);
    s2.push(20);
    s2.push(30);
    s2.push(40);
    s1 = s2;

    cout<<"after assignment s2 in s1 :- "<<endl;

    int x=0;
    cout<<"s1 pop : ";
    if (s1.pop(x)==1)
    {
        cout<<endl<<x<<endl;
    }

    cout<<"s2 pop : ";
    if (s2.pop(x)==1)
    {
        cout<<endl<<x<<endl;
    }

    cout<<"add two stacks in one stack s3 = s2 + s1 :- "<<endl;
    cout<<"s1 10 20 30 :- "<<endl;
    cout<<"s2 10 20 30 :- "<<endl;
    //s3 10 20 30 10 20 30
    s3 = s1 + s2;


    cout<<"after add s1 and s2  :- "<<endl;
    cout<<"s3 pop : ";
    if (s3.pop(x)==1)
    {
        cout<<endl<<x<<endl;
    }
    if (s3.pop(x)==1)
    {
        cout<<endl<<x<<endl;
    }
    if (s3.pop(x)==1)
    {
        cout<<endl<<x<<endl;
    }
    if (s3.pop(x)==1)
    {
        cout<<endl<<x<<endl;
    }
    if (s3.pop(x)==1)
    {
        cout<<endl<<x<<endl;
    }
    if (s3.pop(x)==1)
    {
        cout<<endl<<x<<endl;
    }
    if (s3.pop(x)==1)
    {
        cout<<endl<<x<<endl;
    }
    return 0;
}


