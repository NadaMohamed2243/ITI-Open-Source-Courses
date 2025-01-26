#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#define name_max_lenght 30
struct emp
{
    int id;
    char name[name_max_lenght];
    int age;
    float salary;
};

int main()
{
    struct emp e1;
    struct emp e2;

    e1.id=1;
    strcpy(e1.name,"nada");
    e1.age=23;
    e1.salary=10000.0;
    printf(" e1 id is %d ,\n e1 name is %s ,\n e1 age is %d ,\n e1 salary is %f",e1.id,e1.name,e1.age,e1.salary);


    printf("\n");
    printf("enter the second employee id :");
    scanf("%d",&e2.id);

    printf("enter the second employee name :");
    scanf("%s",e2.name);

    printf("enter the second employee age :");
    scanf("%d",&e2.age);

    printf("enter the second employee salary :");
    scanf("%f",&e2.salary);


    printf(" e2 id is %d \n e2 name is %s \n e2 age is %d \n e2 salary is %f",e2.id,e2.name,e2.age,e2.salary);

    return 0;
}
