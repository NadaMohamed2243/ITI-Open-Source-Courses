# 6 - Ask the user to enter the radius of a circle in order to alert its calculated 
# area and circumference 
PI = 3.14


r = float(input("Enter the radius of the circle: "))


area = PI * r ** 2
circumference = 2 * pi * r

print(f"The area of the circle is: {area} \nThe circumference of the circle is: {circumference}")
