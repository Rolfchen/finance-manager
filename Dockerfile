FROM mcr.microsoft.com/azure-sql-edge
USER root
RUN apt-get update
RUN apt-get -y install curl
RUN curl https://packages.microsoft.com/config/ubuntu/20.04/prod.list | tee /etc/apt/sources.list.d/msprod.list
USER mssql
COPY ./scripts/create-db.sql .
