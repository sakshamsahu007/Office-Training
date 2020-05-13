set1={1,2,3,4,5,6,7}

for x in set1:
    print(x)

print(1 in set1)

set1.add(8)
print(set1)

set1.update([9,10,11])
print(set1)

l=len(set1)
print("length : " + str(l))

set1.remove(11)
print(set1)

set1.discard(10)
print(set1)

set2={1,2,3,"a","b","c"}
print(set2)
set2.clear()
print(set2)

set3={1,2,3}
set4={"a","b","c"}
set5=set3.union(set4)
print(set5)

set3.update(set4)
print("set3 : " + str(set3))

#union() and update() will exclude any duplicate items

