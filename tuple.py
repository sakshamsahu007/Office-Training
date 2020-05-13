tuple1 = ("apple", "banana", "cherry", "orange", "kiwi", "melon", "mango")
print(tuple1[0])
print(tuple1[-1])
print(tuple1[2:5])
print(tuple1[-4:-1])

x=(1,2,3,4,5)
print(x)
y=list(x)
y[1]=22
x=tuple(y)
print(x)

for x in tuple1:
    print(x)

if "apple" in tuple1:
    print("apple is present in tuple1.")

l=len(tuple1)
print("length of tuple1 : " + str(l))

tuple2=('a','b','c','d','e')
tuple3=tuple1+tuple2
print(tuple3)


tuple4=(1,1,1,1,1,2,2,3,4,5)
print("count : " + str(tuple4.count(1)))

print("index : " + str(tuple4.index(1))) #first occurance
