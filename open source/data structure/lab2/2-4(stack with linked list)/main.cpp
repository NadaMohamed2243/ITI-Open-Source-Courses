#include <iostream>
#include <string.h>
using namespace std;

struct emp
{
    int id;
    char name[10];
    int age;
};

struct node
{
    emp e;
    node* prev;
};
class Stack{
    node* tos;
public:
    Stack()
    {
        tos=NULL;
    }
    void push(int id , char*name,int age)
    {
        node* temp = new node();
        if(temp != NULL)
        {
            (temp->e).id=id;
            (temp->e).age=age;
            strcpy(temp->e.name, name);

            if(tos == NULL)
            {
                tos = temp;
                tos->prev = NULL;
            }
            else
            {
                temp->prev=tos;
                tos=temp;
            }
        }
        else
        {
            cout<<"no place"<<endl;
        }

    }

    int pop(emp& e1)
    {
        if(tos==NULL)
        {
            cout<<"the stack is empty"<<endl;
            return 0;
        }
        else
        {
            e1=tos->e;
            node* temp = tos;
            tos = tos->prev;
            delete temp;

        }
    }
};

int main()
{
    Stack s;
    s.push(1, "ahmed", 25);
    s.push(2, "ali", 30);
    s.push(3, "nada", 35);

    emp e;
    int x=0;
    if(s.pop(e)==1)
    {
        cout<<e.id<<":"<<e.name<<":"<<e.age<<endl;
    }
    if(s.pop(e)==1)
    {
        cout<<e.id<<":"<<e.name<<":"<<e.age<<endl;
    }
    if(s.pop(e)==1)
    {
        cout<<e.id<<":"<<e.name<<":"<<e.age<<endl;
    }
    return 0;
}
