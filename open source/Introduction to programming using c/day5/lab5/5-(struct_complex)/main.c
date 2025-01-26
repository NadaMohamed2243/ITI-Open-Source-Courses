#include <stdio.h>
#include <stdlib.h>
struct complex
{
    int real;
    int img;
};

int main()
{
    struct complex c1;
    c1.real=1;
    c1.img=3;
    printf(" the complex number is  %d+i*%d",c1.real,c1.img);

    //enter the real and imag
    printf("\n\n");
    printf("enter the real part of complex number :");
    scanf("%d",&c1.real);

    printf("enter the img part of complex number :");
    scanf("%d",&c1.img);


    //for only print process
    printf(" real = %d \n img = %d \n",c1.real,c1.img);
    if(c1.real !=0)
    {
        if(c1.img>0)
        {
             printf(" the complex num is %d+i*%d \n",c1.real,c1.img);
        }
        else if(c1.img==0)
        {
            printf(" the complex num is %d \n",c1.real);
        }
        else if(c1.img<0)
        {
            printf(" the complex num is %d-i*%d \n",c1.real,-c1.img);
        }
    }
    else if(c1.real==0)
    {
        if(c1.img>0)
        {
             printf(" the complex num is i*%d \n",c1.img);
        }
        else if(c1.img==0)
        {
            printf(" the complex num is 0 \n");
        }
        else if(c1.img<0)
        {
            printf(" the complex num is -i*%d \n",-c1.img);
        }
    }

    return 0;
}
