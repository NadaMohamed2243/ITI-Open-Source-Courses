# 1 - Write a program that counts up the number of vowels [a, e, i, o, u] 
# contained in the string 

word = input("Enter a string: ")

vowelsNum = 0

for i in word.lower():
    if i in ['a', 'e', 'i', 'o', 'u']:
        vowelsNum += 1

print(f"The number of vowels in the string is: {vowelsNum}")


# PEP8