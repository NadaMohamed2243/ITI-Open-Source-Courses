#include <stdio.h>
#include <stdlib.h>
#include <string.h>
int main()
{
    char fName[5];
    char lName[10];
    char flName[15]={'\0'};
    printf("Enter your first name : ");
    gets(fName);
    printf("Enter your last name : ");
    gets(lName);
    strcat(flName,fName);
    strcat(flName," ");
    strcat(flName,lName);
    printf("the full name is : %s ",flName);
    return 0;
}
