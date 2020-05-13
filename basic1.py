list1= ["zero","one","two","three","four","five","six","seven","eight","nine"]
list2= [0,1,2,3,4,5,6,7,8,9]
fruits= ["apple", "banana", "cherry", "orange", "kiwi", "melon", "mango"]



print(list1)
print(list1[1])
print(list1[-1])
print(list1[2:5])
print(list1[:5])
print(list1[2:])
print(list1[-5:-1])

fruits[0]="blackcurrent"
print(fruits)

for x in fruits:
    print(x)

if "mango" in fruits:
    print("Yes, 'mango' is in the fruits list")

print(len(fruits))

fruits.append("pineapple")
print(fruits)

fruits.pop()
print(fruits)

fruits.insert(1, "pineapple")
print(fruits)

fruits.remove("pineapple")
print(fruits)

del fruits[0]
print(fruits)

#fruits.clear()
#print(fruits)

myfruits = fruits.copy()
print(myfruits)


x=100
print(isinstance(x, int))

