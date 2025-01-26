#include <iostream>
#include <string.h>
using namespace std;

class emp
{
    //in class private so we need getter and setter
    int id;
    char name[10];
    int age;

public:
    //id
    int getID()
    {
        return id;
    }
    void setID(int _id)
    {
        if(id>0)
            id=_id;
        else
            cout<<"Invalid id"<<endl;

    }
    //age
    int getAge()
    {
        return age;
    }
    void setAge(int _age)
    {
        age = _age;
    }

    //name
    char* getName()
    {
        return name;
    }
    void setName(char* _name)
    {
        strcpy(name,_name);
    }


    //print
    void print()
    {
        cout<<"id = "<<id<<" :  "<<"age = "<<age<<":  "<<"name = "<<name<<endl;
    }

    //constractor
    emp(int _id,char _name[] )
    {
        id=_id;
        strcpy(name,_name);
        age = 33;

    }
    emp(int _id,char _name[] ,int _age)
    {
        id=_id;
        strcpy(name,_name);
        age = _age;

    }

    //destractor
    ~emp()
    {
        cout<<"object deleted"<<endl;
    }
};

int main()
{
    emp e1(10,"nada");
    emp e2(10,"nada");
    emp e3(20,"ali",36);
    int id ;
    int age;
    char name [30];
    cout<<"input id : ";
    cin>>id;
    cout<<"input age : ";
    cin>>age;
    cout<<"input name : ";
    _flushall();
    gets(name);
    e1.setID(id);
    e1.setAge(age);
    e1.setName(name);

    cout<<"\n-----------------------------\n";
    cout<<"the first employee info : "<<endl;
    e1.print();

    cout<<"\n-----------------------------\n";
    cout<<"the second employee info : "<<endl;
    e2.print();

    cout<<"\n-----------------------------\n";
    cout<<"the third employee info : "<<endl;
    e3.print();

    return 0;
}
