#include <stdio.h>
#include <stdlib.h>

int main()
{

    //3-no of days in month
    int month,year;
    printf("plz input the month \n");
    scanf("%d", &month);

    switch (month)
    {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        printf("the number of days in month %d = %d \n",month,31);
        break;

    case 4:
    case 6:
    case 9:
    case 11:
        printf("the number of days in month %d = %d \n",month,30);
        break;

    case 2:
        printf("the number of days in month 2 depend on the year so please enter the year :");
        scanf("%d", &year);
        if((year %4 ==0 && year %100 !=0) || (year %400 ==0))         //1900 not   , 2000 is
            printf("the number of days in month %d = %d \n",month,28);
        else
            printf("the number of days in month %d = %d \n",month,29);

        break;

    default:
        printf("invalid month \n");
        break;

    }



    return 0;
}
