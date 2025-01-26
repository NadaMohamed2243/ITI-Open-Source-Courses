#include <stdio.h>
#include <stdlib.h>

int main()
{
    int size,i;
    printf("Enter the size of the array : ");
    scanf("%d",&size);

    //array of integers (has 4 * size byte in heap)
    int* ptr = (int*) malloc(size * sizeof(int));

    if(ptr != NULL)
    {
         printf("inputs :\n");
        //input array elements
        for(i=0;i<size;i++)
        {
            printf("Enter arr[%d] : ",i);
            scanf("%d",&ptr[i]);
        }


        printf("\n");
        printf("print :\n");
        //print array elements
        for(i=0;i<size;i++)
        {
            printf("arr[%d] : %d \n",i,ptr[i]);

        }

        //free the ptr array heap area
        free(ptr);
    }

    return 0;
}
