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
         cout<<endl<<"parameterless constractor";
     }
     Stack(int _size)
     {
         tos=-1;
         size= _size;
         arr = new int[size];
         cout<<endl<<"one param constractor";
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

    //destractor
    ~Stack()
    {
        delete [] arr;
        cout<<"destractor"<<endl;
    }
};

int main()
{
    // size = 5   , parametarize constractor
    Stack s1;
    Stack s2(3);

    cout<<endl<<"--------------------s1 start push-----------------"<<endl;

    s1.push(10);
    s1.push(20);
    s1.push(30);

    int x=0;

    //return 1 --> there is data
    //return 0 --> no data (empty)
    cout<<endl<<"--------------------s1 pop-------------------"<<endl;
    if (s1.pop(x)==1)
    {
        cout<<endl<<x;
    }
    if (s1.pop(x)==1)
    {
        cout<<endl<<x;
    }
    if (s1.pop(x)==1)
    {
        cout<<endl<<x;
    }
    if (s1.pop(x)==1)
    {
        cout<<endl<<x<<endl;
    }

    cout<<endl<<"-------------s2 start push-----------------"<<endl;

    s2.push(110);
    s2.push(220);

    cout<<endl<<"-------------s2 pop------------------------"<<endl;
    if (s2.pop(x)==1)
    {
        cout<<endl<<x;
    }
    if (s2.pop(x)==1)
    {
        cout<<endl<<x;
    }
    if (s2.pop(x)==1)
    {
        cout<<endl<<x<<endl;
    }
    return 0;
}
