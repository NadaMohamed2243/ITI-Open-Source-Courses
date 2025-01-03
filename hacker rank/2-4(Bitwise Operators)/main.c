
#include <stdio.h>
#include <stdlib.h>

void calculate_the_maximum(int n, int k) {
    int desired_and_out = 0;
    int desired_or_out = 0;
    int desired_xor_out = 0;

    // Loop through all unique pairs (a, b) where 1 <= a < b <= n
    for (int a = 1; a < n; a++) {
        for (int b = a + 1; b <= n; b++) {
            int and_result = a & b;
            int or_result = a | b;
            int xor_result = a ^ b;

            // Find the maximum value of (a & b) that is less than k
            if (and_result < k && and_result > desired_and_out) {
                desired_and_out = and_result;
            }

            // Find the maximum value of (a | b) that is less than k
            if (or_result < k && or_result > desired_or_out) {
                desired_or_out = or_result;
            }

            // Find the maximum value of (a ^ b) that is less than k
            if (xor_result < k && xor_result > desired_xor_out) {
                desired_xor_out = xor_result;
            }
        }
    }

    printf("%d\n", desired_and_out);  // Maximum value for (a & b) < k
    printf("%d\n", desired_or_out);   // Maximum value for (a | b) < k
    printf("%d\n", desired_xor_out);  // Maximum value for (a ^ b) < k
}

int main() {
    int n, k;
    scanf("%d %d", &n, &k);
    calculate_the_maximum(n, k);

    return 0;
}








































//#include <stdio.h>
//#include <string.h>
//#include <math.h>
//#include <stdlib.h>
//Complete the following function.


//void calculate_the_maximum(int n, int k) {

  // int size = n*n-3*n ;
   //int desired_and_out;
   //int desired_or_out;
   //int desired_xor_out;
   //int i,counter=0;
   //int check_and_eq_k=0;
   //int check_or_eq_k=0;
   //int check_xor_eq_k=0;

   //int* and_arr = (int*) malloc(size * (sizeof(int)));
   //int* or_arr = (int*) malloc(size * (sizeof(int)));
   //int* xor_arr = (int*) malloc(size * (sizeof(int)));

    //Write your code here.
 // for(int a = 1;a <= n ; a++)
  //{
    //  if(a == n)
      //{
        //  continue;
      //}
      //for(int b = 2;b <= n ; b++)
     //{
       //  if(a !=b && a < b)
         //{

             //printf("%d %d\n",a,b);

         //    and_arr[counter]=a&b;
             //printf("a&b %d \n",and_arr[counter]);

           //  or_arr[counter]=a|b;
             //printf("a|b %d \n",or_arr[counter]);

             //xor_arr[counter]=a^b;
             //printf("a^b %d \n",xor_arr[counter]);


          //   counter++;
             //printf("counter %d\n",counter);


      //   }
     //}
  //}

  //desired_and_out = and_arr[0];
  //desired_or_out = or_arr[0];
  //desired_xor_out = xor_arr[0];
  //printf("counter %d\n",counter);
  //for(i=0;i<counter;i++)
  //{
      //and
    //  if(and_arr[i] == k)
      //{
        //  check_and_eq_k++;
      //}
      //if(desired_and_out < and_arr[i] && and_arr[i] < k)
      //{
        //  desired_and_out = and_arr[i];
          //printf("desired_and_out %d\n",desired_and_out);
      //}

    //   if(desired_and_out == k)
      //{
        //  if(i+1 ==counter)
          //{
            //  i=-1;
          //}
          //desired_and_out= and_arr[i+1];
          //if(check_and_eq_k==counter)
          //{
            //  break;
      //    }
    //  }

      //or

  //    if(or_arr[i] == k)
    //  {
      //    check_or_eq_k++;
 //     }
   //   if(desired_or_out < or_arr[i] && or_arr[i] < k)
     // {
       //   desired_or_out = or_arr[i];
          //printf("desired_and_out %d\n",desired_and_out);
     // }

   //    if(desired_or_out == k)
     // {
       //   if(i+1 ==counter)
         // {
           //   i=-1;
          //}
          //desired_or_out= or_arr[i+1];
          //if(check_or_eq_k==counter)
          //{
          //    break;
        //  }
      //}

       //xor
      //if(xor_arr[i] == k)
      //{
        //  check_xor_eq_k++;
      //}
      //if(desired_xor_out < xor_arr[i] && xor_arr[i] < k)
      //{
     //     desired_xor_out = xor_arr[i];
          //printf("desired_and_out %d\n",desired_and_out);
      //}

       //if(desired_xor_out == k)
      //{
          //if(i+1 ==counter)
          //{
            //  i=-1;
          //}
          //desired_xor_out= xor_arr[i+1];
          //if(check_xor_eq_k==counter)
          //{
        //      break;
      //    }
    //  }



  //}

  //and
  //if(check_and_eq_k==counter)
  //{
    //  desired_and_out=0;
  //}


  //or
  //if(check_or_eq_k==counter)
  //{
    //  desired_or_out=0;
  //}


  //xor
  //if(check_xor_eq_k==counter)
  //{
  //    desired_xor_out=0;
  //}


  //printf("%d\n",desired_and_out);  //desired_and_out
  //printf("%d\n",desired_or_out);   //desired_or_out
  //printf("%d\n",desired_xor_out);  //desired_xor_out
//}

//int main() {
  //  int n, k;
//
  //  scanf("%d %d", &n, &k);
   // calculate_the_maximum(n, k);
//
  //  return 0;
//}
