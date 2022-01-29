USE master
GO
IF NOT EXISTS (
 SELECT name
 FROM sys.databases
 WHERE name = N'FinanceDB'
)
 CREATE DATABASE [FinanceDB];
GO
IF SERVERPROPERTY('ProductVersion') > '12'
 ALTER DATABASE [FinanceDB] SET QUERY_STORE=ON;
GO
