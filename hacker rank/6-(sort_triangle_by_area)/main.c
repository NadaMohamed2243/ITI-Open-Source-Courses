#include <stdio.h>
#include <stdlib.h>
#include <math.h>

struct triangle
{
	int a;
	int b;
	int c;
};

typedef struct triangle triangle;
void sort_by_area(struct triangle* tr, int n) {
	/**
	* Sort an array a of the length n
	*/
	int i;
	double p;
	double* s = (double*) malloc(n*sizeof(double));
	for (int i = 0; i < n; i++)
    {
		p=(tr[i].a + tr[i].b + tr[i].c)/2.0;
		s[i]=sqrt(p*(p-tr[i].a)*(p-tr[i].b)*(p-tr[i].c));
	}
	for (int i = 0; i < n-1; i++) {

		for (int j = 0; j < n-i-1; j++)
        {

            if(s[j]>s[j+1])
            {
                double temparea = s[j];
                s[j]=s[j+1];
                s[j+1]=temparea;
               // int tempa = tr[j].a;
               // int tempb = tr[j].b;
               // int tempc = tr[j].c;
               // tr[j].a = tr[j+1].a;
               // tr[j].b = tr[j+1].b;
               // tr[j].c = tr[j+1].c;
               // tr[j+1].a = tempa;
               // tr[j+1].b = tempb;
               // tr[j+1].c = tempc;
                struct triangle temp = tr[j];
                tr[j]= tr[j+1];
                tr[j+1] = temp;
            }
	     }
	}
}

int main()
{
	int n;
	scanf("%d", &n);
	struct triangle *tr = (struct triangle *) malloc(n * sizeof(struct triangle));
	for (int i = 0; i < n; i++) {
		scanf("%d%d%d", &tr[i].a, &tr[i].b, &tr[i].c);
	}
	sort_by_area(tr, n);
	for (int i = 0; i < n; i++) {
		printf("%d %d %d\n", tr[i].a, tr[i].b, tr[i].c);
	}
	return 0;
}
