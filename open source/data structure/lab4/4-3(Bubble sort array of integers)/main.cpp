#include <iostream>

using namespace std;

void Swap(int& x , int& y )
{
    int temp = x;
    x=y;
    y=temp;
}

void bubbleSort(int* a , int n)
{
    int i,j,swapped;

    for(i=1 ; i<n ; i++)
    {
        swapped = 0;
        for(j=0;j<n-i;j++)
        {
            if(a[j]>a[j+1])
            {
                Swap(a[j],a[j+1]);
                swapped=1;
            }
        }
        if(!swapped)
        {
            break;
        }
    }
}

int main()
{
    int a[]={1,4,3,6};
    bubbleSort(a,4);
    for(int i =0 ; i<4 ; i++)
    {
        cout<<a[i];
    }
    return 0;
}
