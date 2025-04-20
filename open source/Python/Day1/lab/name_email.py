# 7 - Ask the user for his name then confirm that he has entered his name 
# (not an empty string/integers). then proceed to ask him for his email and 
# print all this data - (Bonus) check if it is a valid email or not 

import re 

valid_email_regex = r'^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$'

name = input("Enter your name: ").strip()

while name=="" or name.isdigit():
    print("Invalid name. Please enter a valid name.")
    name = input("Enter your name: ").strip()


email = input("Enter your email: ").strip()

while not re.match(valid_email_regex, email):
    print("Invalid email. Please enter a valid email.")
    email = input("Enter your email: ").strip()


print(f"Hello, {name}! your email is {email}.")
