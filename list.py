list1 = ["apple", "banana", "cherry", "orange", "kiwi", "melon", "mango"]

print(list1[2:5])
print(list1[-1])
print(list1[:4])
print(list1[2:])
print(list1[-4:-1])


for x in list1:
    print(x)

if "apple" in list1:
    print("apple is in list1.")

l=len(list1)
print("length of list1 : " + str(l))

list1.append("append")
print("append : " + str(list1))

list1.insert(2,"insert")
print("insert : " + str(list1))

list1.remove("insert")
print(list1)

list1.pop(2)
print(list1)

list1.pop()
print(list1)

del list1[0]
print(list1)

list2 = list1.copy()
print(list2)

print(list2.clear())

list3 = list(list1)
print(list3)

list11=[1,2,3,4,5]
list22=["a","b","c","d","e"]

list33=list11 + list22
print(list33)

for x in list22:
    list11.append(x)
print(list11)

list11.extend(list22)
print(list11)