#include <stdio.h>
#include <stdlib.h>

int main()
{
    int number;
    int i;
    int prime=1;
    printf("enter number to know if this number is prime or no : ");
    scanf("%d",&number);

    if( number == 0 || number == 1){
        prime = 0;
    }
    else{
        for(i=2;i<number;i++){
            if(number%i == 0 ){
                prime=0;
                break;
            }
        }
    }

    if(prime==0){
        printf("this is not prime number");
    }
    else{
        printf("this is prime number ");
    }
    return 0;
}
