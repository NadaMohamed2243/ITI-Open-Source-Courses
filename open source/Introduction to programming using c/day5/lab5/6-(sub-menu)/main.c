#include <stdio.h>
#include <stdlib.h>
#include <windows.h>
#define options_num 3
#define max_length 10
#define sub_menu_options_num 3
#define sub_menu_max_length 10
void gotoxy (int column , int line)
{
    COORD coord;
    coord.X = column;
    coord.Y = line;
    SetConsoleCursorPosition(
                             GetStdHandle(STD_OUTPUT_HANDLE),
                             coord
                             );
}


//color function
void textattr(int i)
{
    SetConsoleTextAttribute(GetStdHandle(STD_OUTPUT_HANDLE),i);
}


int main()
{
    //1-make a 2 dim char array for the 3 options
    //(0 --> new , 1 --> display , 2 --> exit)
    char menu[options_num][max_length]={"new","display","exit"};
    char sub_menu[sub_menu_options_num][sub_menu_max_length]={"option1","option2","option3"};
    int i;
    int current_option=0;
    int sub_current_option=0;
    char ch;
    // flag=1 responsible for exit the loop
    int flag=0;
    //sub_menu_open =1 if sub menu opened
    int sub_menu_open=0;
    // flag=1 responsible for exit the sub menu loop
    int sub_flag=0;

    do
    {
        for(i=0;i<options_num;i++)
        {
            gotoxy(10,10+i);

            // highlight the current option only
            if(current_option == i )
                // 1st num --> background  , 2nd num --> foreground
                textattr(0x65);

            printf("%s",menu[i]);
            textattr(0x07);
        }
            ch=_getch();
            //printf("%d %c",ch,ch);
            switch (ch)
            {
                // extended keys
                case -32:
                    ch=_getch();

                    switch(ch)
                    {
                        //up ^
                        case 72:
                            if(sub_menu_open==0)
                            {
                                current_option--;
                                if(current_option<0)
                                    current_option=options_num-1;
                                break;
                            }

                        //down V
                        case 80:
                            if(sub_menu_open==0)
                            {
                                current_option++;
                                if(current_option>options_num-1)
                                    current_option=0;
                                break;
                            }
                        //home <    go to new page
                        //case 75:
                        //    system("cls");
                        //    //print the current option
                        //    printf("new selection");
                        //    _getch();
                        //    break;
                        //end >      go to end page  and then esc
                        case 77:
                            system("cls");
                            printf("end selection");
                            flag=1;
                            _getch();
                            break;
                      //  default:
                        //    break;
                    }


                    break;
                // normal key --> enter
                //open sub menu when click enter on the options in menu
                case 13:
                    do{
                        sub_flag=0;
                        //sub menu
                        for(i=0;i<sub_menu_options_num;i++)
                        {
                            gotoxy(20,10+i);

                            // highlight the current option only
                            if(sub_current_option == i)
                                // 1st num --> background  , 2nd num --> foreground
                                textattr(0x85);

                            printf("%s",sub_menu[i]);
                            sub_menu_open=1;
                            textattr(0x07);
                        }

                        _flushall();
                        ch=_getch();



                        switch (ch)
                        {
                            // extended keys
                            case -32:
                                ch=_getch();

                                switch(ch)
                                {
                                    //up ^
                                    case 72:
                                        if(sub_menu_open==1)
                                        {
                                           sub_current_option--;
                                           if(sub_current_option<0)
                                           sub_current_option=sub_menu_options_num-1;
                                           break;
                                        }

                                    //down V
                                    case 80:
                                        if(sub_menu_open==1)
                                        {
                                            sub_current_option++;
                                            if(sub_current_option>sub_menu_options_num-1)
                                                sub_current_option=0;
                                            break;
                                        }
                                    //home <    go to new page
                                    case 75:
                                        for(i=0;i<sub_menu_options_num;i++) {
                                        gotoxy(20,10+i);
                                        printf("           ");  // clear submenu space
                                    }
                                    sub_menu_open=0;
                                    sub_flag=1;
                                    break;
                                    //end >      go to end page  and then esc
                                    case 77:
                                        system("cls");
                                        printf("end selection");
                                        sub_flag=1;
                                        flag=1;
                                        _getch();
                                        break;
                                }


                                break;
                            // normal key --> enter
                            case 13:
                                system("cls");
                                //print the current option
                                 printf("%s selection",sub_menu[sub_current_option]);
                                 //exit option --> esc
                                sub_flag=1;
                                sub_menu_open=0;
                                _getch();
                                system("cls");
                                break;

                            // normal key --> esc
                            case 27:
                                 for(i=0;i<sub_menu_options_num;i++)
                                {
                                    gotoxy(20,10+i);
                                    printf("           ");  // clear submenu space
                                }
                                sub_flag=1;
                                flag=1;
                                _getch();
                                break;
                        }
                    }while(sub_flag != 1);

                    break;

                // normal key --> esc
                case 27:
                    flag=1;
                    break;
            }

        }
        while(flag != 1);
    return 0;
}








