#include <iostream>
#include <string.h>
using namespace std;

struct node
{
    int id;
    char name[10];
    int age;
    node * next;
    node * prev;
};
class LinkedList
{
    node * head;
    node * tail;
public:
    LinkedList()
    {
        head=tail=NULL;
    }
    void append(int _id,char* _name,int _age)
    {
        //create node
        node * temp = new node();
        temp->id=_id;
        temp->age=_age;
        strcpy(temp->name,_name);

        //assign node into linked list
        temp->next=NULL;
        if(head == NULL)
        {
            temp->prev=NULL;
            head=tail=temp;
        }
        else
        {
            temp->prev = tail;
            tail->next = temp;
            tail = temp;
        }
    }
    void display()
    {
        node * temp = head;

        while(temp !=NULL)
        {
            cout<< temp->id <<" : "<<temp->name<<" : "<<temp->age<<endl;
            temp = temp->next;
        }
    }
};
int main()
{
    //node * n1 = new node();
    LinkedList l1;
    l1.append(10,"nada",20);
    l1.append(11,"ali",30);

    l1.display();

    return 0;
}
