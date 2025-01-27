#include <iostream>

using namespace std;

void Swap(int x , int y )
{
    int temp = x;
    x=y;
    y=temp;
}

void insertionSort(int* a , int n)
{
    int i , j , value;
    for(i=1 ; i<n ; i++)
    {
        //element fron unsorted list
        value=a[i];
        //to compare with ele in sorted list
        j=i-1;
        //don't reach the end of sorted list
        //don't meet a value smaller than me
        while(j>=0 && a[j]>value)
        {
            a[j+1]=a[j];
            j=j-1;
        }

        a[j+1] = value;
    }
}

int main()
{
    int a[]={1,4,3,6};
    insertionSort(a,4);
    for(int i =0 ; i<4 ; i++)
    {
        cout<<a[i];
    }
    return 0;
}

