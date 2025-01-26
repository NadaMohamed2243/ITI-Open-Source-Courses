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
                 cout<<" the complex num is "<<real<<"+i*"<<imag;
            }
            else if(imag==0)
            {
                cout<<" the complex num is "<<real;
            }
            else if(imag<0)
            {
                cout<<" the complex num is "<<real<<"-i*"<<-imag;
            }
        }
        else if(real==0)
        {
            if(imag>0)
            {
                 cout<<" the complex num is "<<"i*"<<imag;
            }
            else if(imag==0)
            {
                cout<<" the complex num is 0 \n";
            }
            else if(imag<0)
            {
                cout<<" the complex num is "<<"-i*"<<-imag;
            }
        }
    }

    Complex add(Complex c)
    {
        Complex resultComplx;
        resultComplx.real = c.real + real;
        resultComplx.imag = c.imag + imag;
        return resultComplx;
    }

};

 //print complex number
void printComplx(Complex c);
Complex addComplex(Complex c1 , Complex c2);

int main()
{
    Complex c1;
    Complex c2(10);
    Complex c3(5,-6);
    int real,imag;
    //input data for c1
    cout<<"input real part of the first complex number : ";
    cin>>real;
    cout<<"input imag part of the first complex number : ";
    cin>>imag;

    c1.setReal(real);
    c1.setImag(imag);
    cout<<"\n---------------------------\n";
    cout<<"print first complex number using cout and getter  : \n";
    cout<<"the real part of the complex number = "<<c1.getReal()<<"\nthe imag part of the complex number = "<<c1.getImag()<<endl;
    cout<<"\n---------------------------\n";
    cout<<"print first complex number using stand alone function  : \n";
    printComplx(c1);
    cout<<"\n---------------------------\n";
    cout<<"print first complex number using member function  : \n";
    c1.print();


    //c2 print real=10 img=0 call one param constractor
    cout<<"\n---------------------------\n";
    cout<<"print second complex number using member function  : \n";
    c2.print();


    //c2 print real=5 img=-6 call two param constractor
    cout<<"\n---------------------------\n";
    cout<<"print third complex number using member function  : \n";
    c3.print();


    // add c1 and c3
    //add using stand alone function
    Complex addResult = addComplex(c1,c3);
    cout<<"\n---------------------------\n";
    cout<<"print the addition of first and third complex number : \n";
    addResult.print();

    //add using member
    addResult = c1.add(c3);
    cout<<"\n---------------------------\n";
    cout<<"print the addition of first and third complex number : \n";
    addResult.print();

    return 0;
}

//--------------------------------------------------------
//stand alone function)
//print complex number
void printComplx(Complex c)
{
    int real = c.getReal();
    int imag = c.getImag();
    //cout<<real<<":"<<imag;

    if(real !=0)
    {
        if(imag>0)
        {
             cout<<" the complex num is "<<real<<"+i*"<<imag;
        }
        else if(imag==0)
        {
            cout<<" the complex num is "<<real;
        }
        else if(imag<0)
        {
            cout<<" the complex num is "<<real<<"-i*"<<-imag;
        }
    }
    else if(real==0)
    {
        if(imag>0)
        {
             cout<<" the complex num is "<<"i*"<<imag;
        }
        else if(imag==0)
        {
            cout<<" the complex num is 0 \n";
        }
        else if(imag<0)
        {
            cout<<" the complex num is "<<"-i*"<<-imag;
        }
    }
}

//add two complex numbers
Complex addComplex(Complex c1 , Complex c2)
{
    Complex resultComplx;
    resultComplx.setReal(c1.getReal() + c2.getReal());
    resultComplx.setImag(c1.getImag() + c2.getImag());
    return resultComplx;
}
