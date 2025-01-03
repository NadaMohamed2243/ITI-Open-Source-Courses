#include <stdio.h>
#include <stdlib.h>

int factorial(int num);

int main()
{
    int num_to_factorial;
    printf("enter number to calculat factorial : ");
    scanf("%d",&num_to_factorial);
    int factorial_result = factorial(num_to_factorial);
    printf("The factorial of %d is %d",num_to_factorial,factorial_result);
    return 0;
}

int factorial(int num)
{
    int factorial=1;
    do{
        factorial*=num;
        num--;
    }
    while(num >0);
    return factorial;
}
