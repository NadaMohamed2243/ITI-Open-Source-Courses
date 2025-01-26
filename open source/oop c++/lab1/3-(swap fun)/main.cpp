#include <iostream>

using namespace std;


void swap1(int& x,int& y)
{
    int temp = x;
    x=y;
    y=temp;
}


int main()
{
    int a , b;
    cout<<"input first num : ";
    cin>>a;
    cout<<"input second num : ";
    cin>>b;
    cout<<"before swap : \n "<<"a = "<<a<<"\n b = "<<b<<endl;
    swap1(a,b);
    cout<<"after swap : \n "<<"a = "<<a<<"\n b = "<<b<<endl;
}

