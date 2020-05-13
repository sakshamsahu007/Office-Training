import pymysql as p

con=None

try:
    con=p.connect("localhost","root","Tech@901","Example")
    print("connected to Example")
    cur=con.cursor()
    cur.execute("insert into product_master values (17,'a','a',1,'a','a','a','a',1,1)")
    con.commit()
except Exception as ex:
    print(ex)

'''finally:
    if con!=None:
        con.close()'''