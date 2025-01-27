#include <iostream>

using namespace std;

int fib(int x);

int main()
{
    int x = 7;
    int result = fib(x);
    cout<<endl<<result<<endl;
    return 0;
}

int fib(int x)
{
    if(x == 1)
        return 1;
    if(x == 2)
        return 1;
    return (fib(x-1) + fib(x-2));
}
