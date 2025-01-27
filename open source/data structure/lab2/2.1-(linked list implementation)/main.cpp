//1-Implement linked list with menu
//Linked list includes ( append , count , search by id , search by name ,
//                       insert by ID , delete by ID,
//                       delete by name ,update , destructor,  copy ctor , = )

#include <iostream>
#include <string.h>
#include <windows.h>
#include <conio.h>
#define options_num 12
#define max_length 20

using namespace std;

void gotoxy (int column , int line)
{
    COORD coord;
    coord.X = column;
    coord.Y = line;
    SetConsoleCursorPosition(
                             GetStdHandle(STD_OUTPUT_HANDLE),
                             coord
                             );
}


//color function
void textattr(int i)
{
    SetConsoleTextAttribute(GetStdHandle(STD_OUTPUT_HANDLE),i);
}

void getDaraFromUser(int &id,char name[],int &age);

struct node
{
    int id;
    char name[max_length];
    int age;
    node * next;
    node * prev;
};
class LinkedList
{
    node * head;
    node * tail;

    //search by id pivate to return node address
    node* searchByIdPriv(int id)
    {
        node* temp = head;
        while(temp !=NULL)
        {
            if(id == temp->id)
            {
                return temp;
            }
            temp = temp->next;
        }
        return NULL;
    }

    //search by id pivate to return node address
    node* searchByNamePriv(char* name)
    {
        node* temp = head;
        while(temp !=NULL)
        {
            if(strcmp(name,temp->name)==0)
            {
                return temp;
            }
            temp = temp->next;
        }
        return NULL;

    }

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
    int counter()
    {
        int c=0;
        node* temp = head;

        while(temp !=NULL)
        {
            c++;
            temp = temp->next;
        }
        return c;
    }
    //search by id to return node itself not its address to don't make any user change with this node
    node searchById(int id)
    {
        node* resAdd = searchByIdPriv(id);
        node res;
        if(resAdd != NULL)
        {
            res.next = NULL;
            res.prev = NULL;
            res.id = resAdd->id;
            res.age = resAdd->age;
            strcpy(res.name,resAdd->name);
        }
        else
        {
            res.id=-1;
        }
        return res;
    }
    //search by name to return node itself not its address to don't make any user change with this node
    node searchByName(char* name)
    {
        node* resAdd = searchByNamePriv(name);
        node res;
        if(resAdd != NULL)
        {
            res.next = NULL;
            res.prev = NULL;
            res.id = resAdd->id;
            res.age = resAdd->age;
            strcpy(res.name,resAdd->name);
        }
        else
        {
            res.id=-1;
        }
        return res;
    }

    //insert by id before input id
    int InsertById(int id,char* name ,int age,int existingId)
    {
        node* resAdd = searchByIdPriv(existingId);


        //create linked list
        if(resAdd == NULL && head==tail && head==NULL)
        {
            append(id,name,age);
        }
        //our node will be the first one (* N) , the existing is the head
        else if(resAdd==head)
        {
            //create node
            node * temp = new node();
            temp->id=id;
            temp->age=age;
            strcpy(temp->name,name);

            //assign node into linked list
            temp->next=head;
            temp->prev=NULL;
            head = temp;
            resAdd->prev = temp;

        }
        //we don't fount id
        else if (resAdd == NULL)
        {
            return -1;
        }

        //our searched node at the middle (N * N)
        else
        {
            //create node
            node * temp = new node();
            temp->id=id;
            temp->age=age;
            strcpy(temp->name,name);

            //assign node into linked list
            temp->next=resAdd;
            temp->prev=resAdd->prev;
            resAdd->prev=temp;
            temp->prev->next=temp;

        }
        return 0;
    }

    //insert by name before input name
    int InsertByName(int id,char* name ,int age,char* existingName)
    {
        node* resAdd = searchByNamePriv(existingName);


        //create linked list
        if(resAdd == NULL && head==tail && head==NULL)
        {
            append(id,name,age);
        }
        //our node will be the first one (* N) , the existing is the head
        else if(resAdd==head)
        {
            //create node
            node * temp = new node();
            temp->id=id;
            temp->age=age;
            strcpy(temp->name,name);

            //assign node into linked list
            temp->next=head;
            temp->prev=NULL;
            head = temp;
            resAdd->prev = temp;

        }
        //we don't fount id
        else if (resAdd == NULL)
        {
            return -1;
        }

        //our searched node at the middle (N * N)
        else
        {
            //create node
            node * temp = new node();
            temp->id=id;
            temp->age=age;
            strcpy(temp->name,name);

            //assign node into linked list
            temp->next=resAdd;
            temp->prev=resAdd->prev;
            resAdd->prev=temp;
            temp->prev->next=temp;

        }
        return 0;
    }


    //delete by id
    int DeleteById(int id)
    {
        node* resAdd = searchByIdPriv(id);


        //we don't fount id
        if(resAdd == NULL)
        {
            return -1;
        }
        //only one node in the list
        else if(head==tail)
        {
            head=tail=NULL;
        }
        //first node
        else if(resAdd == head)
        {
            head = head->next;
            head->prev = NULL;
        }
        //last node
        else if(resAdd == tail)
        {
            tail = tail->prev;
            tail -> next = NULL;
        }

        //at the middle
        else
        {
            resAdd->prev->next = resAdd->next;
            resAdd->next->prev = resAdd->prev;
        }

        delete resAdd;
        return 0;
    }


    //delete by name before input name
    int DeleteByName(char* name)
    {
        node* resAdd = searchByNamePriv(name);


        //we don't fount id
        if(resAdd == NULL)
        {
            return -1;
        }
        //only one node in the list
        else if(head==tail)
        {
            head=tail=NULL;
        }
        //first node
        else if(resAdd == head)
        {
            head = head->next;
            head->prev = NULL;
        }
        //last node
        else if(resAdd == tail)
        {
            tail = tail->prev;
            tail -> next = NULL;
        }

        //at the middle
        else
        {
            resAdd->prev->next = resAdd->next;
            resAdd->next->prev = resAdd->prev;
        }

        delete resAdd;
        return 0;
    }

    //update by id
    int UpdateById(int id,char* name ,int age)
    {
        node* resAdd = searchByIdPriv(id);


        //we don't fount id , --> append
        if(resAdd == NULL)
        {
            append(id,name,age);
        }
        else
        {
            resAdd->age = age;
            strcpy(resAdd->name,name);
        }
        return 0;
    }

    // = overload  by delete nodes
    /*LinkedList& operator = (const LinkedList &l)
    {
        //if(counter() == l.counter())
        //{

           node* tempc = head;
           while(tempc !=NULL)
            {
               node* tempTemp = tempc;
               delete tempc;
               tempc = tempTemp->next;
            }
            head = NULL;


            tempc = l.head;

            while(tempc !=NULL)
            {
                append(tempc->id,tempc->name,tempc->age);
                tempc = tempc->next;
            }
        //}
        return *this;
    }*/




    LinkedList& operator=(LinkedList& l)
    {
        node * temp = head;
        node* tempc = l.head;

        if(counter() == l.counter())
        {
             while (tempc != NULL)
            {
                temp->age = tempc->age;
                temp->id = tempc->id;
                strcpy(temp->name,tempc->name);
                tempc = tempc->next;
                temp = temp->next;
            }
        }

        else if (counter() > l.counter())
        {
            while (tempc != NULL) {
                temp->age = tempc->age;
                temp->id = tempc->id;
                strcpy(temp->name, tempc->name);
                tempc = tempc->next;
                temp = temp->next;
            }
            if (temp != NULL) {
                node* tempNext;
                while (temp != NULL) {
                    head = temp->next;
                    delete temp;
                    temp = head;
                }
            }
            //head = NULL;
        }


        else
        {
            while (temp != NULL && tempc != NULL)
            {
                temp->age = tempc->age;
                temp->id = tempc->id;
                strcpy(temp->name, tempc->name);
                tempc = tempc->next;
                temp = temp->next;
            }

            // Append new nodes to the current list from the remaining nodes in the source list
            while (tempc != NULL)
            {
                append(tempc->id, tempc->name, tempc->age);
                tempc = tempc->next;
            }
        }
        return *this;
    }









    //copy constructor
    LinkedList(LinkedList &l)
    {
        node* tempc = l.head;

        while(tempc !=NULL)
        {
            append(tempc->id,tempc->name,tempc->age);
            tempc = tempc->next;
        }


    }

    ~LinkedList()
    {
        delete head;
        delete tail;
    }

};
int main()
{
    //node * n1 = new node();
    LinkedList l1;
    LinkedList l2;
    l1.append(10,"nada",20);
    l1.append(11,"ali",30);
    //l1.append(12,"naaada",40);
    //l1.append(13,"aaali",50);
    l2.append(20,"farida",20);
    l2.append(11,"ali",40);
    l2.append(12,"ali",50);



    //1-make a 2 dim char array for the 3 options
    char menu[options_num][max_length]={"new","display all","total data number","search by id","search by name","insert by ID","insert by name","delete by ID","delete by name","update","assignment result","exit"};
    int i;
    int current_option=0;
    char ch;
    // flag=1 responsible for exit the loop
    int flag=0;
    do
    {
        system("cls");
        for(i=0;i<options_num;i++)
        {
            gotoxy(10,10+i);

            // highlight the current option only
            if(current_option == i)
                // 1st num --> background  , 2nd num --> foreground
                textattr(0x65);

            printf("%s",menu[i]);
            textattr(0x07);
        }
        ch=_getch();
        //printf("%d %c",ch,ch);
        switch (ch)
        {
            // extended keys
            case -32:
                ch=_getch();

                switch(ch)
                {
                    //up ^
                    case 72:
                        current_option--;
                        if(current_option<0)
                            current_option=options_num-1;
                        break;
                    //down V
                    case 80:
                        current_option++;
                        if(current_option>options_num-1)
                            current_option=0;
                        break;
                    //home <    go to new page
                    case 75:
                        system("cls");
                        //print the current option
                        printf("new selection");
                        _getch();
                        break;
                    //end >      go to end page  and then esc
                    case 77:
                        system("cls");
                        printf("end selection");
                        flag=1;
                        _getch();
                        break;
                }


                break;
            // normal key --> enter
            case 13:
                system("cls");
                //print the current option
                 //printf("%s selection",menu[current_option]);
                 //new
                 if(current_option==0)
                 {
                     int id , age;
                     char name[10];
                     getDaraFromUser(id,name,age);
                     l1.append(id,name,age);

                 }


                 //display
                 else if (current_option==1)
                 {
                     cout<<"display selection"<<endl;
                     l1.display();
                 }


                 //couter
                 else if (current_option==2)
                 {
                     cout<<"total data number selection"<<endl;
                     int counter;
                     counter = l1.counter();
                     cout<<"total data number"<<" : "<<counter<<endl;
                 }


                 //search by id
                 else if (current_option==3)
                 {
                     cout<<"search by id selection"<<endl;
                     int id;
                     cout<<"enter the emp id : "<<endl;
                     cin>>id;
                     node res = l1.searchById(id);
                     if (res.id != -1)
                     {
                         cout<<"the data of id "<<id<<" is : "<<res.name<<" : "<<res.age<<endl;
                     }
                     else
                     {
                         cout<<"not found"<<endl;
                     }
                 }

                 //search by name
                 else if (current_option==4)
                 {
                     cout<<"search by name selection"<<endl;
                     char name[10];
                     cout<<"enter the emp name : "<<endl;
                     cin>>name;
                     node res = l1.searchByName(name);
                     if (res.id != -1)
                     {
                         cout<<"the data of name "<<name<<" is : "<<res.id<<" : "<<res.age<<endl;
                     }
                     else
                     {
                         cout<<"not found"<<endl;
                     }
                 }

                 //insert by id (***before***)
                 else if (current_option==5)
                 {
                     cout<<"insert by id selection"<<endl;
                     int existingId;
                     cout<<"enter the emp id : "<<endl;
                     cin>>existingId;

                     int id , age;
                     char name[10];
                     getDaraFromUser(id,name,age);

                     int x = l1.InsertById(id,name,age,existingId);
                     if (x == 0)
                     {
                         cout<<"insert sucessfully"<<endl;
                     }
                     else
                     {
                         cout<<"can't insert"<<endl;
                     }
                 }

                 //insert by name (***before***)
                 else if (current_option==6)
                 {
                     cout<<"insert by name selection"<<endl;
                     char existingName[10];
                     cout<<"enter the emp name : "<<endl;
                     cin>>existingName;

                     int id , age;
                     char name[10];
                     getDaraFromUser(id,name,age);

                     int x = l1.InsertByName(id,name,age,existingName);
                     if (x == 0)
                     {
                         cout<<"insert sucessfully"<<endl;
                     }
                     else
                     {
                         cout<<"can't insert"<<endl;
                     }
                 }

                 //delete by id
                 else if (current_option==7)
                 {
                     cout<<"delete by id selection"<<endl;
                     int id;
                     cout<<"enter the emp id : "<<endl;
                     cin>>id;


                     int x = l1.DeleteById(id);
                     if (x == 0)
                     {
                         cout<<"delete sucessfully"<<endl;
                     }
                     else
                     {
                         cout<<"can't delete"<<endl;
                     }
                 }

                 //delete by name
                 else if (current_option==8)
                 {
                     cout<<"delete by name selection"<<endl;
                     char name[10];
                     cout<<"enter the emp name : "<<endl;
                     cin>>name;


                     int x = l1.DeleteByName(name);
                     if (x == 0)
                     {
                         cout<<"delete sucessfully"<<endl;
                     }
                     else
                     {
                         cout<<"can't delete"<<endl;
                     }
                 }

                 //update by id
                 else if (current_option==9)
                 {
                     cout<<"update by id selection"<<endl;
                     int id , age;
                     char name[10];
                     getDaraFromUser(id,name,age);


                     int x = l1.UpdateById(id,name,age);
                     if (x == 0)
                     {
                         cout<<"update sucessfully"<<endl;
                     }
                     else
                     {
                         cout<<"can't update"<<endl;
                     }
                 }
                 else if (current_option == 10)
                 {
                     cout<<"before assignment l1 in l2 :- "<<endl;
                     cout<<"l1 :- "<<endl;
                     l1.display();
                     cout<<"l2 :- "<<endl;
                     l2.display();

                     cout<<"after assignment l1 in l2 :- "<<endl;
                     l2=l1;

                     cout<<"l1 :- "<<endl;
                     l1.display();
                     cout<<"l2 :- "<<endl;
                     l2.display();
                 }
                 //exit option --> esc
                 if (current_option==11)
                    flag=1;
                _getch();
                break;

            // normal key --> esc
            case 27:
                flag=1;
                break;
        }
    }
    while(flag != 1);
    return 0;
}



void getDaraFromUser(int &id,char name[],int &age)
{
    //int id , age;
    //char name[10];
    cout<<"new selection"<<endl;
    cout<<"enter the emp id : "<<endl;
    cin>>id;

    cout<<"enter the emp name : "<<endl;
    cin>>name;

    cout<<"enter the emp age : "<<endl;
    cin>>age;
    return;
}
