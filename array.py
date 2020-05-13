array1=[1,2,3,4,5,6,7]
print("length : " + str(len(array1)))


cars=["Volvo","BMW","MG","Ikea","Audi"]

for x in cars:
    print(x)


cars.append("Honda")
cars.append("Hyundai")
print(cars)

cars.pop()
print(cars)

cars.append("Hyundai")
print(cars)

cars.pop(5)
print(cars)


cars.remove("Hyundai")
print(cars)