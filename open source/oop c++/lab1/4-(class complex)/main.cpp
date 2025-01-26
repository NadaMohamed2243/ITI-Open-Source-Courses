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

};

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

int main()
{
    Complex c1;
    int real,imag;
    cout<<"input real part of the complex number : ";
    cin>>real;
    cout<<"input imag part of the complex number : ";
    cin>>imag;
    c1.setReal(real);
    c1.setImag(imag);
    cout<<"\n---------------------------\n";
    cout<<"the real part of the complex number = "<<c1.getReal()<<"\nthe imag part of the complex number = "<<c1.getImag()<<endl;
    cout<<"\n---------------------------\n";
    printComplx(c1);
    return 0;
}

