# 后端部署

1. 打开`` 139.155.29.56:8080``，点进右边三个灰色按钮中的Manager App，登录

2. 找到Applications栏里面的``/SmartBillBackend``，把它Undeploy卸载掉

3. 在Deploy栏中的WAR file to deploy里选择仓库中的.war文件并上传，点Deploy就可以部署

**现在服务器上已经部署了后端应用，只有修改了以后需要重新部署**



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

