
#include <iostream>

using namespace std;

class fraction
{
    int numerator; //a //c
    int denominator; //b //d

public:
    //getter
    int getNumerator()
    {
        return numerator;
    }
    int getDenominator()
    {
        return denominator;
    }
    //setter
    void setNumerator(int _numerator)
    {
        numerator = _numerator;
    }
    void setDenominator(int _denominator)
    {
        denominator = _denominator;
    }
    //constructor
    fraction()
    {
        numerator = 0;
        denominator = 1;
    }
    fraction(int _numerator)
    {
        numerator = _numerator;
        denominator = 1;
    }
    fraction(int _numerator,int _denominator)
    {
        numerator = _numerator;
        denominator = _denominator;
    }
    // print
    void print()
    {
        cout<<"the fraction = "<<numerator<<" / "<<denominator<<endl;
    }

    //operator overloading
    // add ( fraction + fraction)
    fraction operator + (fraction f)
    {
       //a/b + c/d = (a*d + b*c) / (b*d)

       fraction resultFraction( numerator*f.denominator + denominator*f.numerator  ,  denominator*f.denominator);
       return resultFraction;
    }

};

int main()
{
    fraction f1(5,7);
    fraction f2;
    fraction f3;

    f2.setNumerator(1);
    f2.setDenominator(2);

    f1.print();
    f2.print();
    f3 = f1 + f2;
    f3.print();
    return 0;
}
