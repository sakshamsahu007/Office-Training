msg = "hello world"
print(msg)

st=msg.upper()
print(st)
if True:
    print('asdas')  

st1=msg.capitalize()
print(st1)

st2=msg.split()
print(st2)

def m1(string):
    print(string)
m1("welcome")
m1("Techahead")

def sum (*var):
    result=0
    for x in var :
        result=result+x
    print(result)

sum(1,2,3,4,5,6,7)   

import random

print(random.randrange(1,10))


msg1 = " hello world "
msg2 = " Bye Bye {} "
num  = 2019
num1 = 2020
num2 = 500
num3 = 10
notification = "welcome to {2}, we will invite around {1} people for our {0}th anniversary. " 

print(msg1[2:5]) #slicing

print(msg1[-5:-3]) #negative indexing

print(len(msg1)) #length

print(msg1.strip()) #removes white space from front and back

print(msg1.lower())

print(msg1.upper())

print(msg1.replace("h","t")) #case-sensitive

print(msg1.split(' '))

a='ll' in msg1  #True or Flase
print(a)

b='ll' not in msg1 
print(b)

print(msg1+msg2) # concat

print(msg2.format(num)) #combining number and string
print(notification.format(num3,num2,num1))