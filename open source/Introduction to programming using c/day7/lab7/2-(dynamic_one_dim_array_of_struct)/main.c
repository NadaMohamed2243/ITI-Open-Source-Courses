#include <stdio.h>
#include <stdlib.h>
struct emp
{
    int id;
    char name[30];
    int age;
};
int main()
{
    int emp_nums,i;
    printf("enter the number of employees :");
    scanf("%d",&emp_nums);
    // array of struct emp (contain number of employees = emp_nums and each element has id,name,age stored in heap)
    struct emp* ptr_emps = (struct emp*) malloc(emp_nums*sizeof(struct emp));


    printf("\n");
    if(ptr_emps != NULL)
    {
        //input the employees name , id , age
         printf("inputs :\n");
        for(i=0;i<emp_nums;i++)
        {
            printf("Enter information of the %d emp : \n",i+1);
            printf("id : \n");
            scanf("%d",&ptr_emps[i].id);

            printf("name : \n");
            scanf("%s",ptr_emps[i].name);

            printf("age : \n");
            scanf("%d",&ptr_emps[i].age);

            printf("\n");
        }


        printf("\n");
        printf("\n");
        printf("print :\n");
        //print array elements
        for(i=0;i<emp_nums;i++)
        {
            printf("the id of the %d emp : %d \n",i+1,ptr_emps[i].id);


            printf("the name of the %d emp : %s \n",i+1,ptr_emps[i].name);


            printf("the age of the %d emp : %d \n",i+1,ptr_emps[i].age);

            printf("\n");

        }




        //free the ptr array heap area
        free(ptr_emps);
    }

    return 0;
}
