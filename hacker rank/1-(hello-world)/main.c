#include <stdio.h>
#include <stdlib.h>

int main()
{
    char s[100];
    // it accepts string only until it finds the first space.
    //scanf("%s",s);              //tab in scanf is = enter



    //In order to take a line as input, you can use scanf("%[^\n]%*c", s);
    //where  is defined as char s[MAX_LEN] where MAX_LEN is the maximum size of s.
    // Here, [] is the scanset character. ^\n stands for taking input until a newline isn't encountered.
    // Then, with this %*c, it reads the newline character and here, the used * indicates that this newline character is discarded

    scanf("%[^\n]%*c", &s);     //tab in scanf is = tab


    /* Enter your code here. Read input from STDIN. Print output to STDOUT */
    printf("Hello, World!\n");
    printf("%s",s);
    return 0;
}
