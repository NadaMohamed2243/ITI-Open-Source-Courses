import re
from add_client_data_to_file import add_client_data_to_file

def username_validation(username):
    if not username or not username.isalpha():
        return False
    return 3 <= len(username) <= 20

def email_validation(email):
    regex = r'^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$'
    return bool(email and re.match(regex, email))

def password_validation(password):
    return (
        len(password) >= 8 and
        any(char.isupper() for char in password) and
        any(char.islower() for char in password) and
        any(char.isdigit() for char in password)
    )

def mobile_phone_validation(mobile_phone):
    regex = r'^01[0125]\d{8}$'
    return bool(mobile_phone and re.match(regex, str(mobile_phone)))

def register():
    print("You have chosen to register. Please enter your details.")

    # validate first name
    while True:
        first_name = input("First Name: ").strip()
        if not username_validation(first_name):
            print("First name is required and should be alphanumeric and between 3 and 20 characters long.")
        else:
            # to be stored in file with first letter cap and all except small
            first_name = first_name.split()[0].capitalize()
            break

    while True:
        last_name = input("Last Name: ").strip()
        if not username_validation(last_name):
            print("Last name is required and should be alphanumeric and between 3 and 20 characters long.")
        else:
            last_name = last_name.split()[0].capitalize()
            break

    while True:    
        email = input("Email: ").strip()
        if not email_validation(email):
            print("Email is required and should be in a valid format.")
        else:
            break

    while True:
        password = input("Password: ")
        if not password_validation(password):
            print("Password is required and should be at least 8 characters long, contain at least one digit ,one uppercase letter and one lowercase letter.")
        else:
            break    
    
    while True:
        confirm_password = input("Confirm Password: ")
        if password != confirm_password:
            print("Passwords do not match.")
        else:
            break

    while True:
        mobile_phone = input("Mobile Phone: ").strip()
        if not mobile_phone_validation(mobile_phone):
            print("Mobile phone is required and should be in a valid format.")
        else:
            break


    client_data={"first_name" : first_name,
    "last_name" : last_name, "email" : email,
    "password" : password, "mobile_phone" : mobile_phone}

    add_client_data_to_file(client_data , "users.json")

    return f"User {first_name} {last_name} registered successfully with email {email} and mobile phone {mobile_phone}."





if __name__ == "__main__":
    pass
