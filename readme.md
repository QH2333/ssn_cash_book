# 数据库描述

账本列表Table

- INT	编号
  STRING	主人的openid
  DATE	创建日期
  STRING	名称

账本Table

- INT	编号
  STRING	主人的openid
  DATE	消费日期
  BOOL	收/支
  INT	金额
  INT	分类
  STRING	备注



# 数据库代码

```mysql
create table users(user_id integer auto_increment, open_id varchar(32) not null, primary key(user_id));
```

```mysql
create table booklist(book_id integer auto_increment, open_id varchar(32), create_date date, book_name varchar(64), primary key(book_id));
```

```mysql
create table entry(entry_id integer auto_increment, open_id varchar(32), create_date date, in_out integer not null, amount float not null, classification integer, note varchar(256), primary key(entry_id));
```



# Web API

```java
Login(code)
CreateBook(name,open_id)
GetBookList(open_id)
AddEntry(date,in_out,amount,classification,note,book_id)
GetEntryList(book_id)
```

```
/Login?code=<code>
/CreateBook?name=<name>&openid=<openid>
/GetBookList?openid=<openid>
/AddEntry?date=<date>&in_out=<in_out>&amount=<amount>&classification=<class>&note=<note>&bookid=<bookid>&openid=<openid>
/GetEntryList?bookid=<bookid>
```

