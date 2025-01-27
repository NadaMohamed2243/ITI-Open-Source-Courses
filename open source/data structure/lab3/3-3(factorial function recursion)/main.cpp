#include <iostream>

using namespace std;

int fact(int x);

int main()
{
    int x = 4;
    int result = fact(x);
    cout<<endl<<result<<endl;
    return 0;
}

int fact(int x)
{
    if(x == 1)
        return 1;
    return (x * fact(x-1));
}
