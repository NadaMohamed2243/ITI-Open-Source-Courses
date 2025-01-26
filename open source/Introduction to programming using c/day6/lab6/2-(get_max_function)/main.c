#include <stdio.h>
#include <stdlib.h>

int get_max(int fnum , int snum);

int main()
{
    int fnum,snum;

    printf("enter the first num : ");
    scanf("%d",&fnum);

    printf("enter the secound num : ");
    scanf("%d",&snum);

    int max = get_max(fnum,snum);
    printf("The max number between %d and %d is %d",fnum,snum,max);

}

int get_max(int fnum , int snum)
{
    return fnum>snum?fnum:snum;
}
