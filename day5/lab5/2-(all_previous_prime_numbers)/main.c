#include <stdio.h>
#include <stdlib.h>

int main()
{
    int number;
    int i,j;
    int prime=1;

    printf("enter number to print all previous prime numbers : ");
    scanf("%d",&number);

    if(number<=1)
    {
        printf("there is no previous prime numbers ");
    }
    for(i=2;i<number;i++)
    {
        prime=1;
        for(j=2;j<i;j++){
            if(i%j == 0){
                prime=0;
                break;
            }
        }
        if(prime==1)
        {
            printf("%d ",i);
        }

    }
    return 0;
}
