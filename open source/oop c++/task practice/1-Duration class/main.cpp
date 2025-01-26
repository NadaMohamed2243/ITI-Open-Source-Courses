#include <iostream>

using namespace std;

class Duration
{
    int hours;
    int minutes;
    int seconds;

public:

    //------------------------------getters
    //hours getter
    int getHours()
    {
        return hours;
    }
    //minutes getter
    int getMinutes()
    {
        return minutes;
    }
    //second getter
    int getSeconds()
    {
        return seconds;
    }
    //time getter        -----------------------
    Duration getTime()
    {
        return *this;
    }

    //------------------------------setters
    //hours setter
    int setHours(int _hours)
    {
        hours = _hours;
    }
    //minutes setter
    int setMinutes(int _minutes)
    {
        if(_minutes >= 60)
        {
            hours = _minutes / 60;
            minutes = _minutes % 60;
        }
        else
            minutes = _minutes;
    }
    //second setter
    int setSeconds(int _seconds)
    {
        if(_seconds >= 60)
        {
            minutes =_seconds / 60;
            seconds = _seconds % 60;
             if(minutes >= 60)
            {
                hours = minutes / 60;
                minutes = minutes % 60;
            }
        }
        else
            seconds = _seconds;
    }
    //time setter
    Duration setTime(int _hours,int _minutes,int _seconds)
    {
        hours = _hours;
        minutes = _minutes;
        seconds = _seconds;
    }

    //------------------------------constructors
    Duration()
    {
        hours = 0;
        minutes = 0;
        seconds = 0;
    }
    Duration(int _seconds)
    {
        hours = _seconds/3600;
        _seconds%=3600;
        minutes = _seconds/60;
        seconds = _seconds%60;
    }
    Duration (int _hours,int _minutes,int _seconds)
    {
        hours = _hours;
        minutes = _minutes;
        seconds = _seconds;
    }
    Duration (int _minutes,int _seconds)
    {
        hours = _minutes/60;
        minutes = _minutes%60;
        seconds = _seconds;
    }
    //-------------------print
    void print()
    {
        if (hours == 0)
        {
            cout<<"Minutes :"<<minutes<<" , Seconds :"<<seconds<<endl;
        }
        else if (hours == 0 && minutes == 0 )
        {
            cout<<"Seconds :"<<seconds<<endl;
        }
        else if(hours == 0 && minutes == 0 && seconds==0)
        {
            cout<<"there is no time to show"<<endl;
        }
        else
        {
            cout<<"Hours: "<<hours<<", Minutes :"<<minutes<<" , Seconds :"<<seconds<<endl;
        }
    }

    //----------------------------overloading
    //D3=D1+D2
    Duration operator +(Duration d)
    {
        //hours * 3600 + minutes * 60 + seconds;
        Duration addResult;
        int sec = hours * 3600 + minutes * 60 + seconds;
        int dsec = d.hours * 3600 + d.minutes * 60 + d.seconds;
        int res = sec + dsec;
        addResult.hours = res / 3600;
        res%=3600;
        addResult.minutes = res / 60;
        res%=60;
        addResult.seconds = res;
        return addResult;
    }


    //D3=D1 + 7800
    Duration operator +(int num)
    {
        //hours * 3600 + minutes * 60 + seconds;
        Duration addResult;
        int sec = hours * 3600 + minutes * 60 + seconds;
        int res = sec + num;
        addResult.hours = res / 3600;
        res%=3600;
        addResult.minutes = res / 60;
        res%=60;
        addResult.seconds = res;
        return addResult;
    }

    //D3=666+D3
    friend Duration operator +(int num , Duration d);


    //D3=D1++ (Increase One Minute)

    Duration operator ++(int)
    {
        Duration Result =*this;
        minutes++;
        if(minutes==60)
        {
            hours += 1;     //+ minutes / 60
            minutes = 0;    //minutes % 60
        }
        return Result;
    }

    //D3 =--D2; (Decrease One Minute)
    Duration operator --()
    {
        minutes--;
        if(minutes == -1 && hours !=0)
        {
            hours -= 1;
            minutes = 59;
        }
        else if(minutes == 0 && hours ==0)
        {
            seconds=0;
        }


        return *this;
    }

    //If ( D1>D2);
    int operator > (Duration d)
    {
        int sec = hours * 3600 + minutes * 60 + seconds;
        int dsec = d.hours * 3600 + d.minutes * 60 + d.seconds;

        return (sec > dsec);
    }

    //if ( D1<=D2);
    int operator <= (Duration d)
    {
        return !(*this > d);
    }

};

int main()
{
    Duration d1;

    d1.setHours(2);

    cout<<" 2h : "<<endl;
    cout<<"h : "<<d1.getHours()<<endl;
    cout<<"m : "<<d1.getMinutes()<<endl;
    cout<<"s : "<<d1.getSeconds()<<endl;

     d1.setMinutes(260);

    cout<<" 260m : "<<endl;
    cout<<"h : "<<d1.getHours()<<endl;
    cout<<"m : "<<d1.getMinutes()<<endl;
    cout<<"s : "<<d1.getSeconds()<<endl;

    d1.setSeconds(3800);

    cout<<" 3800s : "<<endl;
    cout<<"h : "<<d1.getHours()<<endl;
    cout<<"m : "<<d1.getMinutes()<<endl;
    cout<<"s : "<<d1.getSeconds()<<endl;


    Duration D(1,10,15);
    cout<<"D : "<<endl;
    D.print();

    Duration D1(3600);
    cout<<"D1 : "<<endl;
    D1. print ();
    //Output: Hours: 1, Minutes :0 , Seconds :0

    Duration D2(7800);
    cout<<"D2 : "<<endl;
    D2. print();
    //Output: Hours: 2, Minutes :10 , Seconds :0

    Duration D3 (666);
    cout<<"D3 : "<<endl;
    D3. print ();



    Duration D4;
    D4 = D2.getTime();
    cout<<"D4 : "<<endl;
    D4.print();


    //---------------

    cout<<endl;
    cout<<"overload D5=D1+D2 : "<<endl;
    Duration D5;
    D5=D1+D2;
    cout<<"D5 : "<<endl;
    D5.print();


    cout<<"overload D6=D1 + 7800 : "<<endl;
    Duration D6;
    D6=D1+7800;
    cout<<"D6 : "<<endl;
    D6.print();


    cout<<"overload D3=666+D3 : "<<endl;
    Duration D7;
    D7=666+D3;
    cout<<"D7 : "<<endl;
    D7.print();

    cout<<"overload D1++ : "<<endl;
    Duration D8;
    D8=D1++;
    cout<<"D8 : "<<endl;
    D8.print();
    cout<<"D1 : "<<endl;
    D1.print();

    cout<<"overload --D1 : "<<endl;
    Duration D9;
    D9=--D1;
    cout<<"D9 : "<<endl;
    D9.print();
    cout<<"D1 : "<<endl;
    D1.print();


    cout<<"overload --D1 : "<<endl;
    D9=--D1;
    cout<<"D9 : "<<endl;
    D9.print();
    cout<<"D1 : "<<endl;
    D1.print();



    //If ( D1>D2);
    cout<<"overload ( D1>D2) : "<<endl;

    if ( D1>D2)
        cout<<"true ( D1>D2)"<<endl;
    else
        cout<<"false ( D1<=D2)"<<endl;


    // If ( D1<=D2);
    cout<<"overload ( D1<=D2) : "<<endl;
    if ( D1<=D2)
        cout<<"true ( D1<=D2)"<<endl;
    else
        cout<<"false ( D1>D2)"<<endl;



    return 0;







}

//D3=666+D3
Duration operator +(int num , Duration d)
{
    //hours * 3600 + minutes * 60 + seconds;
    Duration addResult;
    int sec = d.hours * 3600 + d.minutes * 60 + d.seconds;
    int res = sec + num;
    addResult.hours = res / 3600;
    res%=3600;
    addResult.minutes = res / 60;
    res%=60;
    addResult.seconds = res;
    return addResult;
}


