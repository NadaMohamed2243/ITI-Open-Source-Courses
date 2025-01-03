#include <stdio.h>
#include <stdlib.h>
#include <windows.h>

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

int main()
{
    char menu;
    do{
        system("cls");
        gotoxy(10,5);
        printf("new\n");
        gotoxy(10,6);
        printf("display\n");
        gotoxy(10,7);
        printf("exit\n");

        printf("plz the char menu\n");
        _flushall();
        scanf("%c", &menu);
        switch (menu)
        {
        case 'n':
            printf("new selection \n");
            break;
        case 'd':
            printf("display selection \n");
            break;
        case 'e':
            printf("exit selection \n");
            break;
        default:
            printf("invaild option \n");
            break;
        }
        _flushall();
        getchar();
    }while(menu != 'e' );

    return 0;
}
