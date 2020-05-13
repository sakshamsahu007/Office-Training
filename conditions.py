a=100
b=10
c=100

if  b>a:
    print("b is greater")
elif b==a:
    print("b and a are equal")
else:
    print("a is greater")

if a>b: print("a is greater")

print("A") if a>b else print("=") if a==b else print("B")

if a>b and c>b:
    print("both conditions are true")



x=56

if x>10:
    print("above 10")
    if x>20:
        print("above 20")
    else:
        print("not above 20")



i=1
while(i<6):
    print(i)
    if(i==3):
        break
    i+=1

j=0
while(j<6):
    j+=1
    if(j==3):
        continue
    print(j)


k=11
while(k<16):
    print(k)
    k+=1
else:
    print("k is not less than 16")


for x in "banana":
    print(x)

fruits = ["apple", "banana", "cherry", "orange", "kiwi", "melon", "mango"]
colours = ["red", "yellow", "red-pink", "orange", "brown", "yellow-green", "green"]
for x in fruits:
    print(x)
    if(x=="orange"):
        break

for x in fruits:
    if(x=="orange"):
        continue
    print(x)

for x in range(11,20,2):
    print(x)
else:
    print("loop finished")


for x in fruits:
    for y in colours:
        print(x,y)


for x in range(7):
    print(fruits[x],colours[x])










