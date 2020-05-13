'''class myclass:
    x=5
o1=myclass()
print(o1.x)
'''

class example:
    def __init__(self):
        print("print example")

o2=example()


class student:
    def __init__(self,ids,name):   #assign values to object properties
        self.ids=ids               #operations that are necessary to do when the object is being created
        self.name=name

    def display(self):
        print("id : " + str(self.ids))
        print("name : " + self.name)

s=student(101,"Amit")
s.display()

#The self parameter is a reference to the current instance of the class, 
#and is used to access variables that belong to the class.

s.ids=102               #modify object properties
s.name="Meet"           #modify object properties
s.display()

#del s.ids               #deleting object property
#s=student(103,"Amit")
#s.display()





class person:
    def __init__(self,fname,lname):
        self.firstname=fname
        self.lastname=lname

    def display1(self):
        print(self.firstname, self.lastname)

#p=person("pink","floyd")
#p.display1()

class employee(person):
    def __init__(self,fname,lname,year):
        super().__init__(fname,lname)
        self.retire=year                  #adding a property to child class, also adding paramter to definition

    def welcome(self):
        print("welcome ", self.firstname, self.lastname, "to the group in ", self.retire)



e=employee("steven","gerrard",2014)
e.display1()
print(e.retire)
e.welcome()

#The __init__() function is called automatically every time the class is being used to create a new object.

#When you add the __init__() function, the child class will no longer inherit the parent's __init__() function.
#The child's __init__() function overrides the inheritance of the parent's __init__() function.

#To keep the inheritance of the parent's __init__() function, add a call to the parent's __init__() function.
#If you add a method in the child class with the same name as a function in the parent class, 
#the inheritance of the parent method will be overridden.

