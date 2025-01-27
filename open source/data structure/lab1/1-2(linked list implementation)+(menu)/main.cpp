#include <iostream>
#include <string.h>
#include <windows.h>
#include <conio.h>
#define options_num 3
#define max_length 10

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





    //1-make a 2 dim char array for the 3 options
    //(0 --> new , 1 --> display , 2 --> exit)
    char menu[options_num][max_length]={"new","display","exit"};
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
                     cout<<"new selection"<<endl;
                     cout<<"enter the emp id : "<<endl;
                     cin>>id;

                     cout<<"enter the emp name : "<<endl;
                     cin>>name;

                     cout<<"enter the emp age : "<<endl;
                     cin>>age;
                     l1.append(id,name,age);

                 }
                 //display
                 else if (current_option==1)
                 {
                     cout<<"display selection"<<endl;
                     l1.display();
                 }
                 //exit option --> esc
                 if (current_option==2)
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

    return 0;
}
