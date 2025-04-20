# 9 - Write a function that takes a string and prints the longest 
# alphabetical ordered substring occured. 
# For example, if the string is 'abdulrahman' then the output is:  
# Longest substring in alphabetical order is: abdu


str_info = "abdulrahman"

longest_substring = ""
current_str= str_info[0]

for i in range(1, len(str_info)):
    if str_info[i] >= str_info[i - 1]:
        current_str += str_info[i]

    else:
        if len(longest_substring) < len(current_str):
            longest_substring = current_str
        current_str = str_info[i]

print(f"Longest substring in alphabetical order is: {longest_substring}")

