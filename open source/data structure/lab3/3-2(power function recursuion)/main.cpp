#include <iostream>

using namespace std;

int calcPower(int x, int y);

int main()
{
    int x = 2;
    int y = 4;
    int result = calcPower(x, y);
    cout<<endl<<result<<endl;
    return 0;
}

int calcPower(int x, int y)
{
    if(y == 0)
        return 1;
    return (x * calcPower(x, --y));
}
