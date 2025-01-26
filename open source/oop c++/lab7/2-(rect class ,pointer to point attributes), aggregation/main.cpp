#include <iostream>

using namespace std;

class Point
{
    int x;
    int y;
public:
    //constructor
    Point(int _x = 0, int _y = 0)
    {
        x = _x;
        y = _y;
        cout<<"pointer CTOR"<<endl;
    }
    //setter
    void setX(int _x)
    {
        x = _x;
    }
    void setY(int _y)
    {
        y = _y;
    }
    //getter
    int getX(int _x)
    {
        return x;
    }
    int getY(int _y)
    {
        return y;
    }

    // print
    void print()
    {
        cout<<"("<< x <<" , "<< y <<")"<<endl;
    }
    //destructor
    ~Point()
    {
        cout<<"point destructor"<<endl;
    }
};

class Rect
{
    Point* UL;
    Point* LR;
public:
    //CTOR
    Rect(int x1=0 , int y1=0 , int x2=0 , int y2=0)
    {
        UL = new Point(x1,y1);
        LR = new Point(x2,y2);
        cout<<"Rect CTOR"<<endl;
    }
    //getter
    Point* getUL()
    {
        return UL;
    }
    Point* getLR()
    {
        return LR;
    }
    //setter
    //point
    void setUL(Point* _UL)
    {
        *UL = *_UL;
    }
    //x , y
    void setUL(int x , int y)
    {
        UL->setX(x);
        UL->setY(y);
    }
    //point
    void setLR(Point* _LR)
    {
        *LR = *_LR;
    }
    //x , y
    void setLR(int x , int y)
    {
        LR->setX(x);
        LR->setY(y);
    }
    //print
    void print()
    {
        UL->print();
        LR->print();
    }
    //Destructor
    ~Rect()
    {
        delete UL;
        delete LR;
        cout<<"Rect destructor"<<endl;
    }
};




int main()
{
    //check point
    Point p1(3,6);
    p1.print();

    Point p2;
    p2.setX(5);
    p2.setY(2);
    p2.print();

    cout<<endl<<"----------------"<<endl;
    cout<<endl<<"----------------"<<endl;

    //Rect check x,y
    Rect r1;
    r1.setUL(5,5);
    r1.setLR(6,8);
    cout<<"rect points using points setter : "<<endl;
    r1.print();

    cout<<endl<<"----------------"<<endl;

    //Rect check point
    r1.setUL(&p1);
    r1.setLR(&p2);
    cout<<"rect points using points setter : "<<endl;
    r1.print();

    cout<<endl<<"----------------"<<endl;

    Rect r2(10,20,30,40);
    cout<<"rect points using rect constructor : "<<endl;
    r2.print();

    cout<<endl<<"----------------"<<endl;
    cout<<endl<<"----------------"<<endl;

    return 0;
}
