#include <iostream>

using namespace std;

int BinarySearch(int arr[] , int size , int key)
{
    int low = 0;
    int high = size-1;

    int mid;

    while(low <= high)
    {
        mid = (low+high)/2;
        // check if the mid is our target value
        if(key == arr[mid])
        {
            return mid;
        }
        // our target value in the right --> then change low only
        else if(key > arr[mid])
        {
            low = mid+1;
        }
        // our target value in the left --> then change high only
        else
        {
           high = mid-1;
        }
    }
     return -1;

}

int main()
{
    //must be sorted array
    int arr[6]={1,2,3,4,6,9};

    // arr , size , key
    int res = BinarySearch(arr,6,9);
    if(res == -1)
    {
        cout<<"not found";
    }
    else
    {
        cout<<res;
    }
    return 0;
}
