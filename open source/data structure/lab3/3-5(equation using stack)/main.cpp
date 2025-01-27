#include <iostream>
#include <string.h>
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
    Stack operators; //+-/*
    Stack operands;
    int strsize;
    cout<<"input the size of the string : "<<endl;
    cin>>strsize;
    char* input = new char[strsize];
    cout<<"enter the input : "<<endl;
    cin>>input;
    cout<<input[0];

    for(int i=0 ; i<strlen(input); i++)
    {
        int priority=0;
        if (input[i] == '+' || input[i] == '-')
        {
            priority=0;
        }
        else if (input[i] == '+' || input[i] == '-')
        {
            priority=1;
        }
        if(input[i] == '+' || input[i] == '-' || input[i] == '*' || input[i] == '/')
        {
            operators.push(input[i]);
        }
        else
        {
            operands.push(input[i]);
        }

        int x=0;

        if (operators.pop(x) == 1)
        {
            cout<<x<<endl;
        }
    }




    return 0;
}

