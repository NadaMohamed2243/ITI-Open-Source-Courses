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
        age=_age;
        /*if(_age >=30 && _age <=60)
            age = _age;
        else
            cout<<"Invalid age"<<endl;*/
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
    emp* ptr =new emp;
    ptr->setID(7);
    ptr->setAge(55);
    ptr->setName("nada");
    cout<<"e1 id = "<<ptr->getID()<<" :  "<<"e1 age = "<<ptr->getAge()<<":  "<<"e1 name = "<<ptr->getName()<<endl;
    return 0;
}
