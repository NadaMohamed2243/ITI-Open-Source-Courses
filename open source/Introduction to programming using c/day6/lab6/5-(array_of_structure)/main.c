#include <stdio.h>
#include <stdlib.h>

#define name_max_lenght 30
#define nums_of_emps 2
struct emp
{
    int id;
    char name[name_max_lenght];
    int age;
};


int main()
{
    struct emp e[nums_of_emps];
    int i;

    // input
    for(i=0;i<nums_of_emps;i++)
    {
        printf("\n enter %d emp information : \n",i+1);
        printf("id : ");
        scanf("%d",&e[i].id);
        printf("name : ");
        scanf("%s",e[i].name);
        printf("age : ");
        scanf("%d",&e[i].age);

    }

    //print

     for(i=0;i<nums_of_emps;i++)
    {
        printf("\n %d emp information : \n",i+1);
        printf("id : %d \n",e[i].id);
        printf("name : %s \n",e[i].name);
        printf("age : %d \n",e[i].age);

    }


    return 0;
}
