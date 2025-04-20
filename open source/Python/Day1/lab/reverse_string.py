# 5 - Write a function which has an input of a string from user then it will 
# return the same string reversed 

str_input = input("Enter a string: ")

str_reverse = ''.join(reversed(str_input))

print(f"The reversed string is: {str_reverse}")

