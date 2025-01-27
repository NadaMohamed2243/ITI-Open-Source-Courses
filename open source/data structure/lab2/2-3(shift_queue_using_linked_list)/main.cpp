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
    node* next;
};
class Queue{
    node* top;
public:
    Queue()
    {
        top=NULL;
    }
    void enqueue(int id , char*name,int age)
    {
        node* temp = new node();
        if(temp != NULL)
        {
            (temp->e).id=id;
            (temp->e).age=age;
            strcpy(temp->e.name, name);

            if(top == NULL)
            {
                temp->next = temp;
                top = temp;
            }
            else
            {
                temp->next=top->next;
                top->next=temp;
                top=temp;
            }
        }
        else
        {
            cout<<"no place"<<endl;
        }

    }

    void dequeue(emp& e1)
    {
        if(top==NULL)
        {
            cout<<"the qeueu is empty"<<endl;
        }
        else
        {
            if (top->next == top)
            {
                e1=top->e;
                delete top;
                top = NULL;
            }
            else
            {
                node* result = top->next;
                e1=result->e;
                top->next = result->next;
                delete result;
            }
        }
    }
};

int main()
{
    Queue q;
    q.enqueue(1, "ahmed", 25);
    q.enqueue(2, "ali", 30);
    q.enqueue(3, "nada", 35);

    emp e;
    q.dequeue(e);
    cout<<e.id<<":"<<e.name<<":"<<e.age<<endl;
    q.dequeue(e);
    cout<<e.id<<":"<<e.name<<":"<<e.age<<endl;
    q.dequeue(e);
    cout<<e.id<<":"<<e.name<<":"<<e.age<<endl;
    return 0;
}
