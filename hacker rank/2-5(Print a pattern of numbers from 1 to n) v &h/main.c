#include <stdio.h>
#include <string.h>
#include <math.h>
#include <stdlib.h>

int main()
{

    int n,i,j,min;
    scanf("%d", &n);
  	// Complete the code to print the pattern.
  	for(i = 0 ; i< 2 * n - 1 ; i++)
    {

            // Inner loop for columns
        for (j = 0 ; j < 2 * n - 1 ; j++)
        {
            min = i < j ? i : j;
            if (min > (2 * n - 1) - i - 1)
            {
                min = ( 2 * n - 1) - i - 1;
            }
            if(min > (2 * n - 1) -j - 1)
            {
                min = ( 2 * n - 1) - j -1;
            }

            printf("%d",n - min);
        }
        printf("\n");  // Newline after each row

    }
    return 0;
}
