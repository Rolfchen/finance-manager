import { MigrationInterface, QueryRunner } from 'typeorm';

export class transactionEntity1643443248800 implements MigrationInterface {
  name = 'transactionEntity1643443248800';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "Transaction" ("id" int NOT NULL IDENTITY(1,1), "date" date NOT NULL, "amount" money NOT NULL, "source" varchar(20) NOT NULL, "category" varchar(20) NOT NULL, "type" varchar(30) NOT NULL, "bucket" varchar(10) NOT NULL, "tags" ntext NOT NULL, "comment" text NOT NULL, CONSTRAINT "PK_transaction_id" PRIMARY KEY ("id"))`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "Transaction"`);
  }
}
