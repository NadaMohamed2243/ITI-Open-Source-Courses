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

    //copy constructor
    Stack(Stack &s)
    {
        cout<<"copy constructor"<<endl;
        tos=s.tos;
        size = s.size;
        arr=new int[size];
        for(int i=0;i<=tos;i++)
            arr[i]=s.arr[i];

    }

    //destractor
    ~Stack()
    {
        delete [] arr;
        cout<<"destractor"<<endl;
    }

};


void myfun(Stack& s);
void myfun2(Stack* s);
void myfun3(Stack s);

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
     // s1 --> 10
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
        cout<<endl<<x<<endl;
    }

    // calling fun --> myfun --> passing obj by ref
    //byref --> no constructor --> no destructor (only alias)
    myfun(s1);

    cout<<endl<<"-------------after calling function (any change in s --> change s1)------------------------"<<endl;

    //s1 --> 10 (20 30);
    if (s1.pop(x)==1)
    {
        cout<<endl<<x<<endl;  //30
    }


    // calling fun --> myfun2 --> passing obj by add
    //byadd --> no constructor --> no destructor (only pointer)
    myfun2(&s1);

    cout<<endl<<"-------------after calling function (any change in pointer s --> change s1)------------------------"<<endl;

    //s1 --> 10 20 (40 50);
    if (s1.pop(x)==1)
    {
        cout<<endl<<x<<endl;  //50
    }




    // calling fun --> myfun3 --> passing obj by value
    //by value -->  constructor (copy constractor) --> destructor
    myfun3(s1);

    cout<<endl<<"-------------after calling function (any change in s --> don't change s1)------------------------"<<endl;


     //s1 --> 10 20 40;
    if (s1.pop(x)==1)
    {
        cout<<endl<<x<<endl;  //40
    }



    return 0;
}


// pass obj by ref
void myfun(Stack& s)
{
    //s alias name of s1
    //any change in s --> change s1
    //s,s1 --> 10 (20 30);
    cout<<endl<<"-------------inside myfun push 20,30--------------------"<<endl;
    s.push(20);
    s.push(30);
}


// pass obj by ref
void myfun2(Stack* s)
{
    //s pointer to s1
    //any change in pointer s --> change s1
    //s,s1 --> 10 20 ( 30 40 50);
    cout<<endl<<"-------------inside myfun2 push 40,50--------------------"<<endl;
    s->push(40);
    s->push(50);
}


// pass obj by value
void myfun3(Stack s)
{
    // any change in s don't affect s1
    //s obj based on s1      (call copy constructor)
    //copy contain of s1 array to s array --> different places
    // so s and s1 each has it's own array

    //at the end of myfun3 --> destractor destroy s (destroy s array)
    // s -->  {10 20 40 (60 70)};
    cout<<endl<<"-------------inside myfun3 push 60,70--------------------"<<endl;
    s.push(60);
    s.push(70);
    int x=0;
    if (s.pop(x)==1)
    {
        cout<<endl<<x<<endl; //70
    }
}
