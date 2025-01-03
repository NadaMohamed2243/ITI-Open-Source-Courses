#include <stdio.h>
#include <stdlib.h>
#include <windows.h>
#include <string.h>
#define options_num 5
#define max_length 20
struct emp
{
    int id;
    char name[30];
    int age;
};

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
    int emp_nums,i,input_place,emp_id,emp_name[30],not_found=1;
    printf("enter the number of employees :");
    scanf("%d",&emp_nums);
    // array of struct emp (contain number of employees = emp_nums and each element has id,name,age stored in heap)
    struct emp* ptr_emps = (struct emp*) malloc(emp_nums*sizeof(struct emp));
    //make all elements id =-1 to find the empty places

    if(ptr_emps != NULL)
    {
        for(i=0;i<emp_nums;i++)
        {
            ptr_emps[i].id=-1;
        }


        //draw menu
        //1-make a 2 dim char array for the 3 options
        //(0 --> new , 1 --> display all, 2 --> display by id , 3 --> display by name, 4 --> exit)
        char menu[options_num][max_length]={"new","display all","display by id","display by name","exit"};
        int current_option=0;
        char ch;
        // flag=1 responsible for exit the loop
        int flag=0;
        do
        {
            system("cls");
            for(i=0;i<options_num;i++)
            {
                gotoxy(10,10+i);

                // highlight the current option only
                if(current_option == i)
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
                            current_option--;
                            if(current_option<0)
                                current_option=options_num-1;
                            break;
                        //down V
                        case 80:
                            current_option++;
                            if(current_option>options_num-1)
                                current_option=0;
                            break;
                        //home <    go to new page
                        case 75:
                            system("cls");
                            //print the current option
                            printf("new selection");
                            _getch();
                            break;
                        //end >      go to end page  and then esc
                        case 77:
                            system("cls");
                            printf("end selection");
                            flag=1;
                            _getch();
                            break;
                    }


                    break;
                // normal key --> enter
                case 13:
                    system("cls");
                    //print the current option
                    printf("%s selection",menu[current_option]);

                    //new option choose place and add emp
                    if(current_option==0)
                    {
                        printf("\nchoose place from this available places to write the emp information :\n");
                        //if the element is empty display places to the user to choose where he will add info
                        for(i=0;i<emp_nums;i++)
                        {
                            //print only
                            if(i<emp_nums-1)
                            {
                                printf("%d  or \t",i+1);
                            }
                            else
                            {
                                printf("%d\n",i+1);
                            }

                        }
                        printf("your choise : ");
                        scanf("%d",&input_place);

                        printf("\n");
                        printf("\n");

                        printf("the %d employee id : ",input_place);
                        scanf("%d",&ptr_emps[input_place-1].id);

                        printf("the %d employee name : ",input_place);
                        scanf("%s",ptr_emps[input_place-1].name);

                        printf("the %d employee age : ",input_place);
                        scanf("%d",&ptr_emps[input_place-1].age);


                        //printf("the id of the %d emp : %d \n",input_place,ptr_emps[input_place].id);


                        //printf("the name of the %d emp : %s \n",input_place,ptr_emps[input_place].name);


                        //printf("the age of the %d emp : %d \n",input_place,ptr_emps[input_place].age);

                    }
                    //display all not empty places
                    else if (current_option==1)
                    {
                        printf("\n\n\nall avaliable emp :\n\n");

                        for(i=0;i<emp_nums;i++)
                        {
                            //ptr_emps[i].id == -1  --> empty
                            if(ptr_emps[i].id != -1)
                            {
                                printf("the id of the %d emp : %d \n",i+1,ptr_emps[i].id);
                                printf("the name of the %d emp : %s \n",i+1,ptr_emps[i].name);
                                printf("the age of the %d emp : %d \n\n",i+1,ptr_emps[i].age);

                            }

                        }
                    }
                    //display emp by id
                    else if (current_option==2)
                    {
                        printf("\n\n\nenter the emp id to display it's information : ");
                        scanf("%d",&emp_id);
                        not_found=1;
                        //search for emp that has the same as user input
                        for(i=0;i<emp_nums;i++)
                        {
                            if(ptr_emps[i].id == emp_id)
                            {
                                printf("the id of the %d emp : %d \n",i+1,ptr_emps[i].id);
                                printf("the name of the %d emp : %s \n",i+1,ptr_emps[i].name);
                                printf("the age of the %d emp : %d \n\n",i+1,ptr_emps[i].age);
                                not_found=0;
                                break;
                            }
                        }
                        if(not_found)
                            printf("not found");
                    }
                    //display emp by name
                    else if (current_option==3)
                    {
                        printf("\n\n\nenter the emp name to display it's information : ");
                        scanf("%s",emp_name);

                        //search for emp that has the same as user input
                        for(i=0;i<emp_nums;i++)
                        {
                            not_found=1;

                            if(strcmp(ptr_emps[i].name, emp_name) == 0)
                            {
                                printf("the id of the %d emp : %d \n",i+1,ptr_emps[i].id);
                                printf("the name of the %d emp : %s \n",i+1,ptr_emps[i].name);
                                printf("the age of the %d emp : %d \n\n",i+1,ptr_emps[i].age);
                                not_found=0;
                                break;

                            }
                        }
                        if(not_found)
                            printf("not found");
                    }
                    //exit option --> esc
                    else if (current_option==4)
                        flag=1;


                    _getch();
                    break;

                // normal key --> esc
                case 27:
                    flag=1;
                    break;
            }
        }
        while(flag != 1);
        free(ptr_emps);
    }

    return 0;
}
