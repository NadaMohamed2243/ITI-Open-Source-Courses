#include <iostream>

using namespace std;

class Complex
{
    int real;
    int imag;

public:
    //real
    int getReal()
    {
       return real;
    }
    void setReal(int _real)
    {
        real=_real;
    }
    //img
    int getImag()
    {
       return imag;
    }
    void setImag (int _imag)
    {
        imag=_imag;
    }

    //constractor
    Complex()
    {
        real=imag=0;
    }
    Complex(int _real)
    {
        real=_real;
        imag=0;
    }
    Complex(int _real,int _imag)
    {
        real=_real;
        imag=_imag;
    }

    // print as member function
    void print()
    {
        if(real !=0)
        {
            if(imag>0)
            {
                 cout<<real<<"+i*"<<imag;
            }
            else if(imag==0)
            {
                cout<<real;
            }
            else if(imag<0)
            {
                cout<<real<<"-i*"<<-imag;
            }
        }
        else if(real==0)
        {
            if(imag>0)
            {
                 cout<<"i*"<<imag;
            }
            else if(imag==0)
            {
                cout<<" the complex num is 0 \n";
            }
            else if(imag<0)
            {
                cout<<"-i*"<<-imag;
            }
        }
    }

    //add member function operator overload (complex + complex)
    Complex operator+ (Complex c)
    {
        Complex resultComplx(c.real + real , c.imag + imag);
        return resultComplx;
    }

    //add member function operator overload (complex + int)
    Complex operator+ (int x)
    {
        Complex resultComplx(real + x , imag);
        return resultComplx;
    }

    friend Complex operator+ (int x , Complex c);


    //equal member function operator overload (complex == complex)
    int operator== (Complex c)
    {
        return (real == c.real && imag == c.imag);
    }

    //not equal member function operator overload (complex != complex)
    int operator!= (Complex c)
    {
        return !(*this == c.real);
    }

    //casting member function operator overload (( x =(int)complex)
    explicit operator int()
    {
        return real;
    }



    //++
    //post using member function operator overload (c++)
    Complex operator++(int)
    {
        Complex temp = *this;
        real++;
        return temp;
    }


    //prefix using member function operator overload (++c)
    Complex operator++()
    {
        real++;
        return *this;
    }

    Complex(Complex &c)
    {
        cout<<"gg";
    }


};


Complex operator+ (int x , Complex& c);

int main()
{
    Complex c1(3,7);
    Complex c2(10,8);
    Complex c3;


    cout<<"c1 : "<<endl;
    c1.print();
    cout<<endl<<"c2 : "<<endl;
    c2.print();


    //add

    //Complex addResult = addComplex(c1,c3); this call copy constructor
    //add using member function operator overload (complex + complex)
    cout<<"\n---------------------------\n";
    cout<<"the addition of two complex numbers using operator overload  \n";
    cout<<"c3 = c1 + c2 :- \n";
    c3 = c1 + c2 ;
    c3.print();



    //add using member function operator overload (complex + int )
    cout<<"\n---------------------------\n";
    cout<<"the addition of complex number and int using operator overload  \n";
    cout<<"c3 = c1 + int(5) :- \n";
    c3 = c1 + 5;
    c3.print();

    //add using stand alone function operator overload ( int + complex)
    cout<<"\n---------------------------\n";
    cout<<"the addition of int  and complex number using operator overload  \n";
    cout<<"c3 =  int(4) + c1 :- \n";
    c3 = 4 + c1;
    c3.print();


    //==

    //equality using member function operator overload (complex == complex)
    cout<<"\n---------------------------\n";
    cout<<"the equality == between two complex numbers  \n";
    cout<<"c3 == c1  :- \n";

    if (c1==c2)
        cout<<"true (equal)"<<endl;
    else
        cout<<"false (not equal)"<<endl;


    // !=

    // not equal using member function operator overload (complex != complex)
    cout<<"\n---------------------------\n";
    cout<<"the not equal != between two complex numbers  \n";
    cout<<"c3 != c1  :- \n";


    if (c1!=c2)
        cout<<"true (not equal)"<<endl;
    else
        cout<<"false (equal)"<<endl;


    //casting

    //casting using member function operator overload ( x = (int) c)
    cout<<"\n---------------------------\n";
    cout<<"the casting of complex to int using operator overload  \n";
    cout<<"x =  (int)c1 :- \n";
    int x;
    x=(int) c1;
    cout<<"x = "<<x;


    //prefix
    //add using member function operator overload ( ++ complex)
    cout<<"\n---------------------------\n";
    cout<<"prefix complex number using operator overload  \n";
    cout<<"c3 = ++c1\n";
    c3 = ++c1;
    c3.print();

    //postfix
    //add using member function operator overload ( complex ++)
    cout<<"\n---------------------------\n";
    cout<<"postfix complex number using operator overload  \n";
    cout<<"c3 = c1++\n";
    c3 = c1++;
    cout<<"c3 : ";
    c3.print();
    cout<<endl<<"c1 : ";
    c1.print();


    return 0;
}

//--------------------------------------------------------
//stand alone function)

//add two complex numbers
Complex operator+ (int x , Complex c)
{
    Complex resultComplx( c.real + x , c.imag);
    return resultComplx;
}
