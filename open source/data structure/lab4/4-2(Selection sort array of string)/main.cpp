#include <iostream>
#include <string.h>
using namespace std;

void Swap(char* x , char* y)
{
    char temp[10];
    strcpy(temp , x);
    strcpy(x , y);
    strcpy(y , temp);
}

void SelectionSort(char arr[][10] , int size)
{
    int min;
    for(int i=0 ; i<size-1 ; i++)
    {
        min=i;
        for(int j = i+1 ; j<size ; j++)
        {
            if (strcmp(arr[min] , arr[j]) > 0)
            {
                min = j;
            }
        }
        if(min != i)
        {
            Swap(arr[i],arr[min]);
        }
    }


}

int main()
{
    char arr[4][10]={"ghada" , "ahmed" , "fareeda","nada"};

   SelectionSort(arr,4);
   for(int i=0 ; i<4 ; i++)
   {
       cout<<arr[i]<<endl;
   }
    return 0;
}
