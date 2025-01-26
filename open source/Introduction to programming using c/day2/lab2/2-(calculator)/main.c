#include <stdio.h>
#include <stdlib.h>

int main()
{

    //2- calculation
    int num1,num2;
    char operation;
    printf("plz input num1 \n");
    scanf("%d", &num1);
    printf("plz input operation \n");
    _flushall();
    scanf("%c", &operation);
    printf("plz input num2 \n");
    scanf("%d", &num2);

    switch (operation)
    {
    case '+':
        printf("%d + %d = %d \n",num1,num2,num1+num2);
        break;
    case '-':
        printf("%d - %d = %d \n",num1,num2,num1-num2);
        break;
    case '*':
        printf("%d * %d = %d \n",num1,num2,num1*num2);
        break;
    case '/':
        printf("%d / %d = %d \n",num1,num2,num1/num2);
        break;
    default:
        printf("invalid\n");
        break;
    }


    return 0;
}
