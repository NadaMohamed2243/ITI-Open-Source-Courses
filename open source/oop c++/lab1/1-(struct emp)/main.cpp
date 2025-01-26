#include <iostream>
#include <string.h>
using namespace std;

struct emp
{
     //in struct public
    int id;
    char name[10];
    int age;
};

int main()
{
    emp e1;
    e1.id=20;
    e1.age=30;
    strcpy(e1.name,"nada");
    cout<<"e1 id = "<<e1.id<<" :  "<<"e1 age = "<<e1.age<<":  "<<"e1 name="<<e1.name<<endl;
    return 0;
}
