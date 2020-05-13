class abc:
    x=5

obj=abc()
#print(obj.x)


'''class person:
    def __init__(self, name, age):
        self.name=name
        self.age=age

obj1=person("Saksham", 26)

print(obj1.name)
print(obj1.age)'''


'''class person:
    def __init__(self01, name, age):
        self01.name01=name 
        self01.age01=age 

    def display(self02):
        print("Name and age are : " + self02.name01 + str(self02.age01))

o=person("Saksham", 26)
o.display()

o.name01="Sak"
o.age01=00
o.display()'''




class person:
    def __init__(self1,fname,lname):
        self1.firstname=fname
        self1.lastname=lname

    def printname(self2):
        print(self2.firstname,self2.lastname)
    

o=person("saksham","sahu")
#o.printname()

class student(person):
    def __init__(self3,fname,lname, year):
        #person.__init__(self1,fname,lname)
        super().__init__(fname,lname)
        self3.currentyear=year

    def welcome(self4):
        print("welcome", self4.firstname, self4.lastname, "to the class of", self4.currentyear)



o1=student("Steven", "Gerrard",2020)
o1.printname()
print(o1.currentyear)

o2=student("Sadio","Mane",2020)
o2.welcome()