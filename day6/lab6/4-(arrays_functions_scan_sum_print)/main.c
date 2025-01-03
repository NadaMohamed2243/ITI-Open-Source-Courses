#include <stdio.h>
#include <stdlib.h>


void scan_array(int arr[],int arr_size);
void print_array(int arr[],int arr_size);
int sum(int arr[],int arr_size);

int main()
{
    int arr[5];
    int i;
    scan_array(arr,5);

    print_array(arr,5);

    int arr_sum = sum(arr,5);

    printf("the sum of array numbers is %d",arr_sum);


}
void scan_array(int arr[],int arr_size)
{
    int i;
    for(i=0;i<arr_size;i++)
    {
        printf("enter the %d number : ",i+1);
        scanf("%d",&arr[i]);
    }
}
void print_array(int arr[],int arr_size)
{
    int i ;
    for(i=0;i<arr_size;i++)
    {
        printf(" arr[%d] = %d  \n",i,arr[i]);
    }
}

int sum(int arr[],int arr_size)
{
    int sum = 0 ;
    int i;
    for(i=0;i<arr_size;i++)
    {
        sum += arr[i];
    }
    return sum;
}
