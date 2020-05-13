import DB_connect

cur=con.cursor()
cur.execute("insert into product_master values ('a','a',1,'a','a','a','a',1,1)")
con.commit()