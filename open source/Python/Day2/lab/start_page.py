# make menu to choose (login, register, exit)
from register import register
from login import login


while True:
    print("Welcome to the our crowdfunding application! Please choose an option:\n1. Login\n2. Register\n3. Exit")

    choice = input("Enter your choice (1/2/3): ")

    if choice == '1':
        print("You have chosen to login. Please enter your login data.")
        username = input("Username: ")
        password = input("Password: ")

        login(username, password)
    elif choice == '2':
        # register()
        print(register())
    elif choice == '3':
        print("Exiting our crowdfunding application!. Goodbye!")
        break
    else:
        print("Invalid choice. Please try again.")
