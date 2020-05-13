dict1 = {
   "name" : "Suzuki",
   "model": "Drum Brake",
   "year" : 2018,
   "insurance": "yes"
}
print(dict1)

print(dict1["model"])
print(dict1.get("name"))

dict1["year"]="Jan,2018"
print(dict1)

for x in dict1: #print keys
    print(x) 

for x in dict1: #print values
    print(dict1[x])

for x in dict1.values():    #print values
    print(x)

for x,y in dict1.items():   #Loop through both keys and values
    print(x,y)

if "model" in dict1:
    print("yes model is in dict1")

l=len(dict1)
print("length : " + str(l))

dict1["colour"]="White"
print(dict1)

dict1.pop("insurance")
print(dict1)

dict1["optional"]="optional"
print(dict1)

dict1.popitem() #removes the last inserted item
print(dict1)

dict1["optional"]="optional"
dict1["optional1"]="optional1"
print(dict1)

del dict1["optional1"]
print(dict1)


dict2= dict1.copy()
print(dict2)

dict3=dict(dict1)
print(dict3)


family={
    "mother":{
        "name":"Rekha",
        "job":"house-wife"
    },
    "father":{
        "name":"Arun",
        "job":"government"
    },
    "sister":{
        "name":"Prachi",
        "job":"private"
    }
}
print(family)


child1={
    "name":"Sak",
    "year":"1993"
}
child2={
    "name":"Mak",
    "year":"1994"
}
child3={
    "name":"Zak",
    "year":"1995"
}

childSum={
    "child1":child1,
    "child2":child2,
    "child3":child3
}
print(childSum)

















