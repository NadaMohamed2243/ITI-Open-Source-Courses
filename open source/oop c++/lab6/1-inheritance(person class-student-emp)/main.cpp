#include <iostream>
#include <string.h>
using namespace std;

class Person
{
protected:
    int id;
    char name[30];
    int age;

public:

    //id
    int getID()
    {
        return id;
    }
    void setID(int _id)
    {
            id=_id;
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
        cout<<"person data : id = "<<id<<" :  "<<"age = "<<age<<":  "<<"name = "<<name<<endl;
    }

    //constractor
    /*Person(int _id,char _name[] )
    {
        id=_id;
        strcpy(name,_name);
        age = 33;

    }*/
    Person(int _id,char _name[] ,int _age = 33)
    {
        id=_id;
        strcpy(name,_name);
        age = _age;

    }

    //destractor
    ~Person()
    {
        cout<<"person object deleted"<<endl;
    }
};

class Stud : public Person
{
    int grade;
public:
    Stud(int _id,char _name[] ,int _age = 33):Person(_id,_name ,_age)
    {
        grade = 100;
    }
    int getGrade()
    {
        return grade;
    }
    void setGrade(int _grade)
    {
        grade = _grade;
    }
    //print
    void print()
    {
        Person::print();
        cout<<"Stud data : grade = "<<grade<<endl;
    }
};

class Emp : public Person
{
    int salary;
public:
    Emp(int _id,char _name[] ,int _age = 33):Person(_id,_name ,_age)
    {
        salary = 3000;
    }
    int getSalary()
    {
        return salary;
    }
    void setSalary(int _salary)
    {
        salary = _salary;
    }
    //print
    void print()
    {
        Person::print();
        cout<<"Employee data : salary = "<<salary<<endl;
    }
};

void myfun(Person p1)
{
    p1.print();
}

int main()
{

    Person p1(40,"nadaaa",20);
    cout<<"person print : "<<endl;
    p1.print();

    Emp e1(10,"nada",30);
    cout<<endl<<"Employ print : "<<endl;
    e1.print();

    Stud s1(50,"ali",30);
    cout<<endl<<"student print : "<<endl;
    s1.print();

    cout<<endl<<"person print from emp : "<<endl;
    e1.Person::print();

    cout<<"inside fun person print : "<<endl;
    myfun(p1);

    cout<<"inside fun Employ print : "<<endl;
    myfun(e1);

    cout<<"inside fun student print : "<<endl;
    myfun(s1);
    return 0;
}
