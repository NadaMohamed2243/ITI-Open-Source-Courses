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

void write (int col , int row , int num)
{
    gotoxy(col *4,row*2);
    printf("%d",num);
}



//y axis --> row    ----
//x axis --> col    |
//                  |

int main()
{
    int size,row,col,i=0;

    do {
        printf("Enter the magic box size (should be odd): ");
        scanf("%d", &size);
    } while (size % 2 == 0);

    system("cls");



    for(i=1;i<=size*size;i++){
        // 1 has fixed place in the first row and in the middle of cols
        if(i==1){
            col=size/2+1;
            row=1;
            write(col,row,i);
            }
        else
            {
                // numbers except 1 has two cases
                // we always look at the previous number
                // if the previous number  divided by the size so we change only rows (add one)
                if((i-1)%size==0)
                {
                    col=col;
                    row=row+1;

                    write(col,row,i);
                    if(row>size)
                    {
                        row=1;
                    }
                }
                // if the previous number not divided by the size so we change rows and cols (-1)
                else
                {
                    col=col-1;
                    row=row-1;

                    //looks like cylinder
                    if(col==0){
                        col=size;
                    }

                    if(row==0)
                    {
                        row=size;
                    }
                    write(col,row,i);
                }
            }
    }


    return 0;
}
