#include <iostream>
#include <cstring>

using namespace std;

class String
{
    char* arr;
    int size;

public:
     String()
     {
         size= 10;
         arr = new char[size];
         strcpy(arr, "no name");
     }
     String(int _size)
     {
         size= _size;
         arr = new char[size];
         strcpy(arr, " ");
     }
     String(char s[])
     {
         size= strlen(s) + 10;
         arr = new char[size];
         strcpy(arr, s);
     }

     //setter
     void setSrting(char s[])
     {
        int nameSize = strlen(s) + 1;
        if (nameSize > size)
        {
            delete[] arr;
            arr = new char[nameSize];
        }
        strcpy(arr, s);
     }
     void setSize(int _size)
     {
        size=_size;
     }
     //getter
     char* getSrting()
     {
         return arr;
     }
     int getSize()
     {
         return size;
     }


     //overload
     //assignment
     String operator = (const String& s)
    {
            size = s.size;
            delete [] arr;
            arr = new char(size);
            strcpy(arr, s.arr);
            return *this;
    }

    //add
    String operator+(const String & s)
    {
            String resultString(size + s.size);
            int lengh = strlen(s.arr);
            int thislengh = strlen(arr);
            strcpy(resultString.arr, arr);
            strcat(resultString.arr, " ");
            strcat(resultString.arr, s.arr);
            return resultString;
    }



     void print()
     {
         //cout<<size<<endl;
         cout<<"the entered string :"<<arr<<endl;

     }


    String(String &s)
    {
        //cout<<"copy constructor"<<endl;
        size = s.size;
        arr = new char[size];
        strcpy(arr, s.arr);
    }
     // Destructor
    ~String()
    {
        delete[] arr;
    }

};

int main()
{
    String s1;
    String s2(20);
    String s3("ahmed");
    s3.print();

    String s6("ali");
    s6.setSize(6);
    int n = s6.getSize();
    cout<<"the size of string s6 = "<<n<<endl;

    char* arr =s6.getSrting();
    cout<<"the string s6 is : "<<arr<<endl;

    s1.setSrting("nada");
    s2.setSrting("mohamed");
    s3 = s1+ s2;
    s3.print();

    s3.setSrting("mohamed");
    String s5;
    s5 = s3;
    s5.print();
    return 0;
}
