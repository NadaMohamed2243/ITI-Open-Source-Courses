#include <iostream>

using namespace std;

class Complex
{
    int real;
    int imag;
    static int counter;
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
    //counter
    static int getCounter()
    {
        return counter;
    }

    //constractor
    Complex()
    {
        real=imag=0;
        counter++;
    }
    Complex(int _real)
    {
        real=_real;
        imag=0;
        counter++;
    }
    Complex(int _real,int _imag)
    {
        real=_real;
        imag=_imag;
        counter++;
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
    ~Complex()
    {
        counter--;
    }

};

int Complex:: counter = 0;

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

    cout<<"\n---------------------------\n";
    cout<<endl<<"the total number of object created (static member counter): ";
    cout<<Complex::getCounter()<<endl;

    return 0;
}
