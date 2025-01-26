#include <stdio.h>
#include <stdlib.h>
#define students 3
#define subjects 4
int main()
{
    int stud_Subj_Deg [students][subjects]={0};
    int i,j;
    //input data
    for(i=0;i<students;i++)    // i row --> students
    {
        printf("%d student :- \n",i+1);
        for(j=0;j<subjects;j++)    //j col --> subjects
        {
            printf("enter the degree of %d subject of the %d student : ",j+1,i+1);
            scanf("%d",&stud_Subj_Deg[i][j]);
        }
        printf("\n");

    }


    //print data
    for(i=0;i<students;i++)    // i row --> students
    {
        printf("%d student :- \n",i+1);
        for(j=0;j<subjects;j++)    //j col --> subjects
        {
            printf("the degree of %d subject is %d \n",j+1,stud_Subj_Deg[i][j]);
        }
        printf("\n");
    }



    //sum of each row (the total student degrees for all subjects)
    //for each student we have total degree
    int total_stud_deg [students]={0};
    for(i=0;i<students;i++)    // i row --> students
    {
        for(j=0;j<subjects;j++)    //j col --> subjects
        {
            total_stud_deg[i]+=stud_Subj_Deg[i][j];
        }
        printf("\n");
    }





    for(i=0;i<students;i++)    // i row --> students
    {
        printf("the total degrees of %d student is : %d \n",i+1,total_stud_deg[i]);
    }


    return 0;
}
