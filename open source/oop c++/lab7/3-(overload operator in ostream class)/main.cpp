//This code implements a Complex class that represents a complex number and
// overloads the << operator to allow for printing the complex number
//in a user-friendly format directly without print function.
#include <iostream>

using namespace std;

class Complex
{
    int real;
    int img;
    static int counter;
public:

    //constractor
    Complex(int _real=0,int _img=0)
    {
        real=_real;
        img=_img;
    }
    //to make it easier to access complex
    friend ostream& operator << (ostream& os , const Complex& c);
};

//The overloaded operator returns a reference to the original ostream object
ostream& operator << (ostream& os , const Complex& c)
{
    //os (std::cout) output stream
    if(c.real !=0)
        {
            if(c.img>0)
            {
                 os<<c.real<<"+i*"<<c.img;
            }
            else if(c.img==0)
            {
                os<<c.real;
            }
            else if(c.img<0)
            {
                os<<c.real<<"-i*"<<-c.img;
            }
        }
        else if(c.real==0)
        {
            if(c.img>0)
            {
                 os<<"i*"<<c.img;
            }
            else if(c.img==0)
            {
                os<<0;
            }
            else if(c.img<0)
            {
                os<<"-i*"<<-c.img;
            }
        }

    return os;
}

int main()
{
    Complex c1(2,-3);
    //we can combine insertions
    cout<<"the complex number is : "<<c1;

    return 0;
}
