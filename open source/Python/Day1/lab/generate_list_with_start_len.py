# 2 - Write a function that accepts two arguments (length, start) to generate 
# an array of a specific length filled with integer numbers increased by one 
# from start. 

length=int(input('enter the length of the list you want : '))
start=int(input('enter the start of the list you want : '))

list_generated=[]


print(f"the generated list that start with {start} and the length {length} is {list(range(start,start+length))}")    