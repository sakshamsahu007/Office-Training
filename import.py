import module as m
#m.greet("Saksham")
a=m.person["name"]
print(a)


from module import person
print(person["age"])


import datetime as dt
x=dt.datetime.now()
print(x)
print(x.year)
print(x.strftime("%A"))


y=dt.datetime(2020,9,11)     #creating datetime object
print(y)
print(y.strftime("%d"))
print(y.strftime("%B"))
print(y.strftime("%A"))
print(y.strftime("%Y"))


import json
a='{"name":"Saksham","age":26,"country":"India"}' #json string
b=json.loads(a)                                   #parse json
print(b)                                          #python dictionary


c={
    "name":"Jordan",
    "position":"Midfield",      #python object - dictionary
    "country":"England",
    "age":30
}

d=json.dumps(c)                 #convert into json
print(d)                        #json string



#Converting Python objects into JSON strings

print(json.dumps({"name": "John", "age": 30}))      #dictionary
print(json.dumps(["apple", "bananas"]))             #list
print(json.dumps(("apple", "bananas")))             #tuple
print(json.dumps("hello"))                          #string
print(json.dumps(42))                               #int
print(json.dumps(31.76))                            #float
print(json.dumps(True))                             #true
print(json.dumps(False))                            #false
print(json.dumps(None))                             #none


e = {
  "name": "John",
  "age": 30,
  "married": True,
  "divorced": False,
  "children": ("Ann","Billy"),
  "pets": None,
  "cars": [
    {"model": "BMW 230", "mpg": 27.5},
    {"model": "Ford Edge", "mpg": 24.1}
  ]
}

print(json.dumps(e,indent=4, sort_keys=True ,separators=(". ", " = ")))


import re

text = "The rain in Spain"
x = re.search("^The.*Spain$", text)

if (x):
  print("YES! We have a match!")
else:
  print("No match")


x = re.findall("ai", text)
print(x)

x = re.findall("Portugal", text)
print(x)


x = re.search("\s", text)
print("The first white-space character is located in position:", x.start())

x = re.search("Portugal", text)
print(x)

x = re.split("\s", text)
print(x)

x = re.split("\s", text, 1)
print(x)

x = re.sub("\s", "_", text,2)
print(x)

x = re.search("ai", text)   #If there is no match, the value None will be returned, instead of the Match Object.
print(x)

x = re.search(r"\bS\w+", text)
print(x)
print(x.span())             #Print the position (start- and end-position) of the first match occurrence
print(x.string)             #Print the string passed into the function
print(x.group())            #Print the part of the string where there was a match





