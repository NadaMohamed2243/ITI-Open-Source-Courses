#include <stdio.h>
#include <stdlib.h>
struct point
{
    int x;
    int y;
};
int main()
{
    struct point p1;

    p1.x=1;
    p1.y=3;
    printf(" x = %d \n y = %d ",p1.x,p1.y);


    printf("\n");
    printf("enter x for first point :");
    scanf("%d",&p1.x);

    printf("enter y for first point :");
    scanf("%d",&p1.y);


    printf(" x = %d \n y = %d ",p1.x,p1.y);
    return 0;
}
