#Lists, tuples, dictionaries, and sets are all iterable objects.
#All these objects have a iter() method which is used to get an iterator.
#They are iterable containers which you can get an iterator from.


tuple1=(1,2,3,4,5,6,7)
myit=iter(tuple1)

print(next(myit))
print(next(myit))
print(next(myit))

string1="Firmino"
myit_1=iter(string1)
print(next(myit_1))
print(next(myit_1))
print(next(myit_1))





for x in tuple1:
    print(x)

#The for loop actually creates an iterator object and executes the next() method for each loop.




# ---create an iterator---

class number:
    def __iter__(self01):
        self01.a=11
        return self01

    def __next__(self02):
        x=self02.a
        self02.a +=1
        return x

obj=number()
myit_2=iter(obj)

'''for x in myit_2:
    print(x)'''

print(next(myit_2))
print(next(myit_2))
print(next(myit_2))



class digits:
    def __iter__(self01):
        self01.a=0
        return self01

    def __next__(self02):
        if self02.a <=10:
            x=self02.a    
            self02.a +=1
            return x
        else:
            raise StopIteration


obj=digits()
myit_3=iter(obj)

for x in myit_3:
    print(x)



