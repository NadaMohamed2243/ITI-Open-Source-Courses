#include <iostream>

using namespace std;


class Stack
{
    //static size  , all stacks will be only 5 elements
    int arr [5];
    int size;
    int tos;
public:
    // first we need constructor to initialize the attributes
     Stack()
     {
         tos=-1;
         size= 5;
         cout<<endl<<"parameterless constractor";
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
};

int main()
{
    Stack s1 ;
    s1.push(10);
    s1.push(20);
    s1.push(30);
    s1.push(40);
    s1.push(50);
    s1.push(30);  // full
    int x=0;

    //return 1 --> there is data
    //return 0 --> no data (empty)
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
    return 0;
}
