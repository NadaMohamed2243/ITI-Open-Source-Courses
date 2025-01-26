#include <stdio.h>
#include <stdlib.h>

int main()
{
    int num_to_factorial,factorial=1;
    printf("enter number to calculat factorial : ");
    scanf("%d", &num_to_factorial);
    do{
        factorial*=num_to_factorial;
        num_to_factorial--;
    }
    while(num_to_factorial >0);
    printf("The factorial is %d",factorial);
    return 0;
}
