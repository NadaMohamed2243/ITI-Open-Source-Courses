#include <stdio.h>
#include <stdlib.h>

int main()
{
    int number,digit,reverse=0;
    printf("enter number to reverse : ");
    scanf("%d",&number);
    while(number != 0){
        digit=number%10;
        reverse=reverse *10 + digit;
        number/=10;
    }

    printf("%d",reverse);
    return 0;
}
