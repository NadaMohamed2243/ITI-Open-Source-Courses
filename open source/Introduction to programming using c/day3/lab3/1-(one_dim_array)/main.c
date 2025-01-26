#include <stdio.h>
#include <stdlib.h>
#define size 4
int main()
{
    int nums[size]={0};
    int i,sum=0;


    //input elements section
    for(i=0;i<size;i++)
    {
        printf("enter the %d number : ",i+1);
        scanf("%d",&nums[i]);
    }


    //calc sum of the numbers
    for(i=0;i<size;i++)
    {
        //only for print veiw
        if(i!=size-1)
        {
            printf("%d + ",nums[i]);
        }
        else
        {
            printf("%d ",nums[i]);
        }
        sum +=nums[i];
    }
    printf(" = %d \n",sum);



    int max=nums[0];
    int min=nums[0];
    //calc the min and max value
    for(i=1;i<size;i++)     //start from 1
    {
        if(nums[i] > max)
        {
            max = nums[i];
        }
        if(nums[i] < min)
        {
            min = nums[i];
        }

    }
    printf("the max number of the array = %d \n",max);
    printf("the min number of the array = %d \n",min);


    return 0;
}
