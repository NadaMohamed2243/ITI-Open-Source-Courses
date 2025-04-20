# 3 - Fill an array of 5 elements from the user, Sort it in descending and 
# ascending orders then display the output 
list_sort=[]

for i in range(5):
    list_sort.append(int(input(f'enter the {i+1} list element : ')))

list_sort.sort()



print(f"list_sort in ascending order is : {list_sort} \n list_sort in descending order is : {list_sort[::-1]}")
