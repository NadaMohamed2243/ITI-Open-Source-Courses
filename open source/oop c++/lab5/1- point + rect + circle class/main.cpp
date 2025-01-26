#include <iostream>

using namespace std;

class Point
{
    int x;
    int y;
public:
    //constructor
    Point()
    {
        x = y = 0;
        cout<<"pointer CTOR"<<endl;
    }
    Point(int _x)
    {
        x = y =_x;
        cout<<"pointer CTOR"<<endl;
    }
    Point(int _x , int _y)
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
    Point UL;
    Point LR;
public:
    //CTOR
    Rect()
    {
        cout<<"Rect CTOR"<<endl;
    }
    //constuctor chaining
    Rect(int x1 , int y1 , int x2 , int y2):UL(x1,y1),LR(x2,y2)
    {
    }
    /*Rect(int x1 , int y1 , int x2 , int y2)
    {
        UL.setX(x1);
        UL.setY(y1);
        LR.setX(x2);
        LR.setY(y2);
    }*/
    //getter
    Point getUL()
    {
        return UL;
    }
    Point getLR()
    {
        return LR;
    }
    //setter
    //point
    void setUL(Point _UL)
    {
        UL = _UL;
    }
    //x , y
    void setUL(int x , int y)
    {
        UL.setX(x);
        UL.setY(y);
    }
    //point
    void setLR(Point _LR)
    {
        LR = _LR;
    }
    //x , y
    void setLR(int x , int y)
    {
        LR.setX(x);
        LR.setY(y);
    }
    //print
    void print()
    {
        UL.print();
        LR.print();
    }
    //Destructor
    ~Rect()
    {
        cout<<"Rect destructor"<<endl;
    }
};



class Circle
{
    Point center;
    int radius;
public:
    //CTOR
    Circle()
    {
        cout<<"Circle CTOR"<<endl;
        radius = 0;
    }

    Circle(int x , int y , int _radius):center(x,y)
    {
        radius = _radius;
        cout<<"Circle CTOR"<<endl;
    }
     Circle(int x , int y ):center(x,y)
    {
        radius = 0;
        cout<<"Circle CTOR"<<endl;
    }

    //getter
    int getRadius()
    {
        return radius;
    }
    Point getCenter()
    {
        return center;
    }
    //setter
    void setRadius(int _radius)
    {
        radius = _radius;
    }
    //x,y
    void setCenter(int x , int y)
    {
        center.setX(x);
        center.setY(y);
    }
    //point
    void setCenter(Point _center)
    {
        center = _center;
    }
    //print
    void print()
    {
        cout<<endl<<"the center : "<<endl;
        center.print();
        cout<<endl<<"the radius : "<<endl;
        cout<<radius<<endl;
    }
    //Destructor
    ~Circle()
    {
        cout<<"Circle destructor"<<endl;
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

    //Rect check
    Rect r1;
    r1.setUL(5,5);
    r1.setLR(6,8);
    cout<<"rect points using points setter : "<<endl;
    r1.print();

    cout<<endl<<"----------------"<<endl;

    Rect r2(10,20,30,40);
    cout<<"rect points using rect constructor and constructor chaining : "<<endl;
    r2.print();

    cout<<endl<<"----------------"<<endl;
    cout<<endl<<"----------------"<<endl;

    //circle
    Circle c1;
    c1.setCenter(5,5);
    c1.setRadius(7);
    cout<<"Citcle info using points setter : ";
    c1.print();

    cout<<endl<<"----------------"<<endl;

    Circle c2(10,20,5);
    cout<<"Citcle info using constructor and constructor chaining : ";
    c2.print();

    cout<<endl<<"----------------"<<endl;

    return 0;
}
