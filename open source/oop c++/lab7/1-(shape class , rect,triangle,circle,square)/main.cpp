#include <iostream>

using namespace std;


//abstract class
class Shape
{
protected:
    int dim1;
    int dim2;
public:
    //constractor
    Shape()
    {
        dim1=dim2=0;
    }
    Shape(int _dim1)
    {
        dim1=_dim1;
        dim2=_dim1;
    }
    Shape(int _dim1,int _dim2)
    {
        dim1=_dim1;
        dim2=_dim2;
    }
    //setter
    virtual int setDim1(int _dim1)
    {
        dim1=_dim1;
    }
    virtual int setDim2(int _dim2)
    {
        dim2=_dim2;
    }
    //calculate area
    //(abstract function)pure virtual funtion
    virtual int calcArea()=0;

};

class Rect : public Shape
{
public:
    Rect(int _dim1,int _dim2):Shape(_dim1,_dim2)
    {}
    //for square inheritance
    Rect(int _dim1):Shape(_dim1)
    {}
    int calcArea()
    {
        return dim1*dim2;
    }
};

class Triangle : public Shape
{
public:
    Triangle(int _dim1,int _dim2):Shape(_dim1,_dim2)
    {}
    int calcArea()
    {
        return 0.5*dim1*dim2;
    }
};

class Circle : public Shape
{
public:
    Circle(int _dim1):Shape(_dim1)
    {}

    int setDim1(int _dim1)
    {
        dim1=dim2=_dim1;
    }
    int setDim2(int _dim2)
    {
        dim1=dim2=_dim2;
    }
    int calcArea()
    {
        return (22/7)*dim1*dim2;
    }
};

class Square : public Rect
{
public:
    Square(int _dim1):Rect(_dim1)
    {}

    int setDim1(int _dim1)
    {
        dim1=dim2=_dim1;
    }
    int setDim2(int _dim2)
    {
        dim1=dim2=_dim2;
    }
    int calcArea()
    {
        return dim1*dim2;
    }
};

int areaFun(Shape* s1);
int sumFun(Shape* arr[],int s);

int main()
{
    //Shape s1;
    Rect r1(10,20);
    cout<<"the Rectangle area = "<<r1.calcArea()<<endl;

    Triangle t1(10,20);
    cout<<"the Triangle area = "<<t1.calcArea()<<endl;

    Circle c1(7);
    cout<<"the Circle area = "<<c1.calcArea()<<endl;

    Square sq1(10);
    cout<<"the Square area = "<<sq1.calcArea()<<endl;


    cout<<"---------------------------"<<endl;
    cout<<"pointer from parent to object of child :- "<<endl;

    Shape* ptr ;
    ptr=&r1;
    cout<<"the Rectangle area = "<<r1.calcArea()<<endl;

    ptr=&t1;
    cout<<"the Triangle area = "<<t1.calcArea()<<endl;

    ptr=&c1;
    cout<<"the Circle area = "<<c1.calcArea()<<endl;

    ptr=&sq1;
    cout<<"the Square area = "<<sq1.calcArea()<<endl;

    cout<<"---------------------------"<<endl;
    cout<<"fun calculate area take ref or pointer to obj :- "<<endl;

    cout<<endl<<"the Rectangle area = ";
    areaFun(&r1);

    cout<<endl<<"the Triangle area = ";
    areaFun(&t1);

    cout<<endl<<"the Circle area = ";
    areaFun(&c1);

    cout<<endl<<"the Square area = ";
    areaFun(&sq1);

    cout<<endl<<"---------------------------"<<endl;
    cout<<endl<<"fun calculate sum of area take ref or pointer to obj :- "<<endl;
    Shape* arr[4]={&r1,&t1,&c1,&sq1};
    cout<<"area sum of shapes = "<<sumFun(arr,4);
    return 0;
}

int areaFun(Shape* s1)
{
    cout<<s1->calcArea();
}

int sumFun(Shape* arr[],int s)
{
    int sum=0;

    for(int i=0;i<s;i++)
        sum += arr[i]->calcArea();

    return sum;
}
