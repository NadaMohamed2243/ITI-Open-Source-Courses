import json
def write_file(file_name,data):
    with open(file_name, 'w') as file:
        json.dump(data , file , indent=4) #indent for pretty print



def read_file(file_name):
    with open(file_name, 'r') as file:
        return json.load(file)


if __name__ == '__main__':
    write_file('data.json',[{"fname":'nada'},{"lname":'moh'}])
    print(read_file('data.json'))