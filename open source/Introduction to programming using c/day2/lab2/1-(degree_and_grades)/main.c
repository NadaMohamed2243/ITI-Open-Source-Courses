#include <stdio.h>
#include <stdlib.h>

int main()
{
    //1- degree and grades
    int degree;
    printf("plz input your degree \n");
    scanf("%d",&degree);

    if(degree>85)
        printf("your degree is % d so your grade is excellent\n",degree);
    else if(degree>=75)
        printf("your degree is % d so your grade is very good\n",degree);
    else if(degree>=65)
        printf("your degree is % d so your grade is good\n",degree);
    else if(degree>=60)
        printf("your degree is % d so your grade is average\n",degree);
    else
        printf("your degree is % d so your grade is fail\n",degree);

    return 0;
}
