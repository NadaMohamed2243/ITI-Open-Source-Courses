#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include <ctype.h> // For isdigit function

int main() {
    char s[1000];
    int digitCount[10] = {0};

    fgets(s, sizeof(s), stdin);

    for (int i = 0; s[i] != '\0'; i++) {
        if (isdigit(s[i])) {
            digitCount[s[i] - '0']++;
        }
    }


    for (int i = 0; i < 10; i++) {
            printf("%d ",digitCount[i]);

    }

    return 0;
}
