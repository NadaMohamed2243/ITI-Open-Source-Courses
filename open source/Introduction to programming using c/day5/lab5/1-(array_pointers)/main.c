#include <stdio.h>
#include <stdlib.h>
#define size 4

int main()
{
    int array[size];

    //int* ptr =array;
    int* ptr =&array[0];

    int i ;
    for(i=0;i<size;i++){
        printf("arr[%d]= ",i);

        //scanf("%d",&array[i]);
        //scanf("%d",&ptr[i]);
        //scanf("%d",array+i);
        scanf("%d",ptr+i);
    }
    printf("\n");
    for(i=0;i<size;i++){
        printf("arr[%d]= ptr[i]--> %d : array[i]--> %d : *(ptr+i)--> %d : *(array+i)--> %d  \n",i,ptr[i],array[i],*(ptr+i),*(array+i));
    }
    return 0;
}
