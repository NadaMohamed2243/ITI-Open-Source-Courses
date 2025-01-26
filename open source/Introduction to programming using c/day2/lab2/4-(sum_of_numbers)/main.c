#include <stdio.h>
#include <stdlib.h>

int main()
{

    int num_of_inputs,num_to_sum,sum=0;
    int i ;
    printf("plz input number of inputs that you want to sum them \n");
    scanf("%d", &num_of_inputs);
    for(i=0;i<num_of_inputs;i++)
    {
        printf("plz input %d num : ",i+1);
        scanf("%d", &num_to_sum);
        sum+=num_to_sum;
    }
    printf("the sum of the numbers is %d \n",sum);


    return 0;
}
