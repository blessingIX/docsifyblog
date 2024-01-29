# 启动选项、系统变量、状态变量

## 启动选项

### 命令行

#### 长形式

以**两个**短划线`--`开头后面接完整参数名、等号和参数值的为长形式启动选项

```bash
mysql --host=127.0.0.1 --user=root --password
```

#### 短形式

以**一个**短划线`-`开头后面接参数名单个字母的参数名简写（注意大小写）和参数值的为短形式启动选项

```bash
mysql -h127.0.0.1 -uroot -p
```

#### 常用启动选项的长短形式对照

| 长形式       | 短形式 | 含义     |
| ------------ | ------ | -------- |
| `--host`     | `-h`   | 主机名   |
| `--user`     | `-u`   | 用户名   |
| `--password` | `-p`   | 密码     |
| `--port`     | `-P`   | 端口     |
| `--version`  | `-V`   | 版本信息 |

### 配置文件

#### 配置文件的路径（类Unix操作系统）

| 路径名                | 备注                                                                                              | 变量说明                                                                                                          |
| --------------------- | ------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `/etc/my.cnf`         |                                                                                                   |                                                                                                                   |
| `/etc/mysql/my.cnf`   |                                                                                                   |                                                                                                                   |
| `SYSCONFIDR/my.cnf`   |                                                                                                   | `SYSCONFDIR`表示在使用CMake构建MySQL时使用`SYSCONFDIR`选项指定的目录。默认情况下，这是位于编译安装目录下的etc目录 |
| `$MYSQL_HOME/my.cnf`  | 特定于服务器的选项（仅限服务器）                                                                  | `MYSQL_HOME`是一个环境变量，不主动设置时将自动被设置为MySQL的安装目录                                             |
| `defaults-extra-file` | 命令行指定的额外配置文件路径                                                                      |                                                                                                                   |
| `~/.my.cnf`           | 用户特定选项                                                                                      | `~`是用户家目录                                                                                                   |
| `~/.mylogin.cnf`      | 用户特定的登录路径选项（仅限客户端）。非纯文本文件，只能使用`mysql_config_editor`程序去创建或修改 | `~`是用户家目录                                                                                                   |

> MySQL按照表格中的顺序从上到下读取配置文件内容。
> 
> 遇到相同的启动选项时，后读取到的启动选项值会覆盖先读取到的。
> 
> 从命令行输入的启动选项会覆盖配置文件中读取到的启动选项值。

#### 配置文件的内容

##### 配置文件内容描述

```ini
[server]
option1         # 这是option1，该选项不需要选项值
option2=value2  # 这是option2，该选项需要选项值

[mysqld]
...

[mysqld_safe]
...

[client]
...

[mysql]
...

[mysqladmin]
...
```

+ 内容被划分成若干组，组名使用`[组名]`表示
+ `[组名]`下面为本组的启动选项
+ 启动选项有两种形式
  + 无选项值：`option1`
  + 有选项值：`option2=value2`
+ `#`以后的字符为注释内容

##### 启动命令能读取的启动选项组

| 启动命令       | 类型       | 能读取的组                                |
| -------------- | ---------- | ----------------------------------------- |
| `mysqld`       | 启动服务器 | `[mysqld]`、`[server]`                    |
| `mysqld_safe`  | 启动服务器 | `[mysqld]`、`[server]`、`[mysqld_safe]`   |
| `mysql.server` | 启动服务器 | `[mysqld]`、`[server]`、`[mysqld.server]` |
| `mysql`        | 启动客户端 | `[mysql]`、`[client]`                     |
| `mysqladmin`   | 启动客户端 | `[mysqladmin]`、`[client]`                |
| `mysqldump`    | 启动客户端 | `[mysqldump]`、`[client]`                 |

> 当读取多个组时遇到相同启动选项时，靠下的组中的启动选项会覆盖靠上的启动选项。

## 系统变量

用于MySQL服务器程序运行过程中影响程序行为的变量。

大部分的系统变量都可以被当作启动选项传入。

### 查看系统变量

```sql
SHOW VARIABLES [LIKE 匹配的模式];
```

例如：

```sql
mysql> SHOW VARIABLES LIKE 'default_storage_engine';
+------------------------+--------+
| Variable_name          | Value  |
+------------------------+--------+
| default_storage_engine | InnoDB |
+------------------------+--------+
1 row in set (0.00 sec)
```

> 注意：使用`SHOW VARIABLES [LIKE 匹配的模式];`查看系统变量时参数名中的单词只能以`_`分隔

### 设置系统变量

#### 通过启动选项设置

+ 通过命令行添加启动选项

```bash
mysqld --default-storage-engine=MyISAM --max-connections=10
```

或者

```bash
mysqld --default_storage_engine=MyISAM --max_connections=10
```

+ 通过配置文件添加启动选项

```ini
[server]
default-storage-engine=MyISAM
max-connections=10
```

或者

```ini
[server]
default_storage_engine=MyISAM
max_connections=10
```

> 注意：通过命令行/配置文件设置系统变量时参数名中的单词可以以`-`或者`_`分隔

#### 服务器程序运行过程中设置

##### 系统变量的作用范围

+ `GLOBAL`：全局变量，影响服务器的整体操作。

+ `SESSION`：会话变量，影响某个客户端连接的操作。（注：`SESSION`有个别名叫`LOCAL`）

##### 设置系统变量的语法

```sql
SET [GLOBAL|SESSION] 系统变量名 = 值;
```

或者

```sql
SET [@@(GLOBAL|SESSION).]var_name = XXX;
```

> 1. 查看、设置系统变量时不指定作用范围时默认作用范围为`SESSION`。
> 2. 改变`GLOBAL`作用范围的系统变量时不会改变现有连接中`SESSION`作用范围的系统变量，它只会影响后续的连接。

### 特殊系统变量

+ 并非所有系统变量都具有`GLOBAL`和`SESSION`的作用范围。
  + `max_connections`系统变量只具有`GLOBAL`作用范围
  + `insert_id`系统变量只具有`SESSION`作用范围
+ 有些系统变量是只读的。
  + 比如`version`

## 状态变量

用于了解MySQL服务器程序的运行情况而维护在MySQL服务器程序中的变量。

### 查看状态变量

```sql
SHOW [GLOBAL|SESSION] STATUS [LIKE 匹配的模式];
```

例如：

```bash
mysql> SHOW STATUS LIKE 'thread%';
+-------------------+-------+
| Variable_name     | Value |
+-------------------+-------+
| Threads_cached    | 0     |
| Threads_connected | 1     |
| Threads_created   | 1     |
| Threads_running   | 1     |
+-------------------+-------+
4 rows in set (0.01 sec)
```