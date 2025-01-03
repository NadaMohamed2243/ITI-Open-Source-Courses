#include <stdio.h>
#include <stdlib.h>

void swap(int* fnum , int* snum);

int main()
{
    int fnum,snum;

    printf("enter the first num : ");
    scanf("%d",&fnum);

    printf("enter the secound num : ");
    scanf("%d",&snum);

    printf("\n");
    printf("before swap : \n first number = %d \n second number = %d \n",fnum,snum);


    swap(&fnum,&snum);


    printf("\n");
    printf("after swap : \n first number = %d \n second number = %d",fnum,snum);
}

void swap(int* fnum , int* snum)
{
    int temp = *fnum;
    *fnum = *snum;
    *snum = temp;
}
