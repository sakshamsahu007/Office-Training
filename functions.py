def myfun(name): #parameter
    print(name + " hello from a function")

myfun("sak!!") #argument




def arbitaryFun(name1,*name):               #arbitary arguments // the function will receive a tuple of arguments
    for i in name:
        print(i)
    print("name1 : " + name1)


arbitaryFun("sak","mak","zak","wak")


def arbitaryFun1(child3,child1,child2):     #keyword arguments 
    print("youngest child : " + child3)

arbitaryFun1(child1="mak", child2="wak", child3="zak")


def arbitaryFun2(**kid):                    #the function will receive a dictionary of arguments
    print("last name : " + kid["lname"])

arbitaryFun2(fname="sak", lname="sah")


def country(city="Liverpool"):              #default parameter
    print("I am from " + city)

country()
country("Chelsea")
country("Arsenal")


def fruitsFun(food):
    for x in food:
        print(x)

fruits = ["apple", "banana", "cherry", "orange", "kiwi", "melon", "mango"]

fruitsFun(fruits)


def returnFun(x):
    return 5*x

print(returnFun(5))
print(returnFun(4))


def tri_recursion(k):
  if(k>0):
    result = k+tri_recursion(k-1)
    print(result)
  else:
    result = 0
  return result
print("\n\nRecursion Example Results")
tri_recursion(6)


def factorial(k):
    pass
    
    
factorial(6)

x1= lambda a:a+10                   #anonymous function which is required for a short period of time
print("sum = " + str(x1(5)))

x2= lambda a,b:a*b
print("product = " + str(x2(5,10)))

x3= lambda a,b,c:a+b+c
print("sum = " + str(x3(5,6,7)))



list1 = [1, 5, 4, 6, 8, 11, 3, 12]

new_list = list(filter(lambda x: (x%2 == 0) , list1))

# Output: [4, 6, 8, 12]
print(new_list)



list2 = [1, 5, 4, 6, 8, 11, 3, 12]

new_list_2 = list(map(lambda x: x * 2 , list2))

# Output: [2, 10, 8, 12, 16, 22, 6, 24]
print(new_list_2)