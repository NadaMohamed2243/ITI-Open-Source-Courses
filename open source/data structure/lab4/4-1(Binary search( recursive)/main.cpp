#include <iostream>

using namespace std;

int BinarySearch(int arr[] , int low , int high , int key)
{
    int mid;
    mid = (low+high)/2;

    //base case
    if(low > high)
    {
        return -1;
    }
    // check if the mid is our target value
    if(key == arr[mid])
    {
        return mid;
    }
    // our target value in the right --> then change low only
    else if(key > arr[mid])
    {
        BinarySearch(arr,mid+1,high,key);
    }
    // our target value in the left --> then change high only
    else
    {
        BinarySearch(arr,low,mid-1,key);
    }
}

int main()
{
    //must be sorted array
    int arr[6]={1,2,3,4,6,9};

    // arr , low , high , key
    int res = BinarySearch(arr,0,6,4);   //3
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
