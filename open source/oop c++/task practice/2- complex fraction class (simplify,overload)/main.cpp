
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

    //simplify
    void simplify()
    {

        int minnum = (numerator < denominator ? numerator : denominator);
        for(int i= minnum ; i>0 ; i--)
        {
            if (numerator % i ==0 && denominator % i ==0)
            {
                numerator = numerator / i;
                denominator =  denominator / i;
                break;
            }
        }
    }


    // print
    void print()
    {
        cout<<"the fraction = "<<numerator<<" / "<<denominator<<endl;
    }
    void printsimplify()
    {
        simplify();
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

    // sub ( fraction - fraction)
    fraction operator - (fraction f)
    {
       //a/b - c/d = (a*d - b*c) / (b*d)

       fraction resultFraction( numerator*f.denominator - denominator*f.numerator  ,  denominator*f.denominator);
       return resultFraction;
    }

    // mul ( fraction * fraction)
    fraction operator * (fraction f)
    {
       //a/b * c/d = (a*c) / (b*d)

       fraction resultFraction( numerator*f.numerator  ,  denominator * f.denominator);
       return resultFraction;
    }


    // div ( fraction / fraction)
    fraction operator / (fraction f)
    {
       //a/b / c/d = (a*d) / (b*c)

       fraction resultFraction( numerator*f.denominator  ,  denominator*f.numerator);
       return resultFraction;
    }



    //f--
    fraction operator--(int)
    {
        fraction temp = *this;
        numerator -= denominator;
        denominator = denominator;
        return temp;
    }


    //prefix(++f)
    fraction operator++()
    {
        numerator += denominator;
        denominator = denominator;
        return *this;
    }


    //cast to float (float)
    explicit operator float()
    {
        return (float)numerator/denominator;
    }
};

int main()
{
    fraction f1(12,16);
    fraction f2;
    fraction f3;

    f2.setNumerator(1);
    f2.setDenominator(2);

    cout<< "f1 : "<<endl;
    f1.print();
    cout<< "f1 simplify : "<<endl;
    f1.simplify();
    f1.print();
    cout<< "f2 : "<<endl;
    f2.print();

    //add
    cout<<endl<<endl;
    f3 = f1 + f2;
    cout<< "add result : "<<endl;
    f3.print();
    cout<< "result simplify : "<<endl;
    f3.printsimplify();

    //sub
    cout<<endl<<endl;
    f3 = f1 - f2;
    cout<< "sub result : "<<endl;
    f3.print();
    cout<< "result simplify : "<<endl;
    f3.printsimplify();


    //mul
    cout<<endl<<endl;
    f3 = f1 * f2;
    cout<< "mul result : "<<endl;
    f3.print();
    cout<< "result simplify : "<<endl;
    f3.printsimplify();


    //div
    cout<<endl<<endl;
    f3 = f1 / f2;
    cout<< "div result : "<<endl;
    f3.print();
    cout<< "result simplify : "<<endl;
    f3.printsimplify();

    //++ prefix
    cout<<endl<<endl;
    f3 = ++f1;
    cout<< "prefix result f3 = ++f1: "<<endl;
    f3.print();
    cout<< "result simplify : "<<endl;
    f3.printsimplify();

    //-- postfix
    cout<<endl<<endl;
    f3 = f1--;
    cout<< "postfix result f3 = f1--: "<<endl;
    f3.print();
    cout<< "result simplify : "<<endl;
    f3.printsimplify();

    cout<< "f1 : "<<endl;
    f1.print();
    cout<< "f1 simplify : "<<endl;
    f1.simplify();
    f1.print();


    ////casting  ( x = (float) f)
    cout<<"\n---------------------------\n";
    cout<<"casting  \n";
    cout<<"x =  (float) f :- \n";
    float x;
    x=(float) f1;
    cout<<"x = "<<x;


    return 0;
}

