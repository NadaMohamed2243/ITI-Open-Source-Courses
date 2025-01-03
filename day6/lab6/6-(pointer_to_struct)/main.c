#include <stdio.h>
#include <stdlib.h>
#define name_max_lenght 30

struct emp
{
    int id;
    char name[name_max_lenght];
    int age;
};

int main()
{
    struct emp e1;
    struct emp *ptr = &e1;

    printf("enter the employee id :");
    scanf("%d",&(ptr->id));

    printf("enter the employee name :");
    scanf("%s",(ptr->name));

    printf("enter the employee age :");
    scanf("%d",&(ptr->age));


    printf("\n print \n");
    printf(" the employee id : %d \n the employee name : %s \n the employee age :%d \n",ptr->id,ptr->name,ptr->age);

    return 0;
}
