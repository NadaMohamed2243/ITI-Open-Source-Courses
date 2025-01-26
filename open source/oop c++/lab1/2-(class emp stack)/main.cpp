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
        if(_age >=30 && _age <=60)
            age = _age;
        else
            cout<<"Invalid age"<<endl;
    }

    //name
    char* getName()
    {
        return name;
    }
    void setName(char* _name)
    {
        if(strlen(_name)>=3)
            strcpy(name,_name);
        else
            cout<<"Invalid name"<<endl;
    }
};

int main()
{
    emp e1;
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
    cout<<"e1 id = "<<e1.getID()<<" :  "<<"e1 age = "<<e1.getAge()<<":  "<<"e1 name = "<<e1.getName()<<endl;
    return 0;
}
