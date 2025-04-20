from access_file import write_file, read_file
import json
def add_client_data_to_file(data_dic,filename):

    try:
        all_data = read_file(filename)
    except FileNotFoundError: # Handle case where file does not exist
        all_data = []
    except json.JSONDecodeError: # Handle empty file case
        all_data = []

    all_data.append(data_dic)
    write_file(filename, all_data)


if __name__ == '__main__':
    client_data = {"first_name" : "nada",
    "last_name" : "ali", "email" : "nada@gmail.com",
    "password" : "123456", "mobile_phone" : "0123456789"}
    add_client_data_to_file(client_data,'data.json')