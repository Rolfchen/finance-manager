import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export interface ITransactionEntity {
  id: string;
  date: Date;
  amount: number;
  source: string;
  category?: string;
  type?: string;
  bucket?: string;
  tags?: string[]; // comma separated string?
  comment?: string;
  merchant?: string;
}

/**
 * Entity model for a transaction. This entity schema
 * is using MS-SQL column types
 */
@Entity({
  name: 'Transaction',
})
export class TransactionEntity implements ITransactionEntity {
  @PrimaryGeneratedColumn()
  public id!: string;

  @Column('date')
  public date!: Date;

  @Column('money')
  public amount!: number;

  @Column({
    type: 'varchar',
    length: 20,
  })
  public source!: string;

  @Column({
    type: 'varchar',
    length: 20,
  })
  public category?: string;

  @Column({
    type: 'varchar',
    length: 30,
  })
  public type?: string;

  @Column({
    type: 'varchar',
    length: 10,
  })
  public bucket?: string;

  @Column('simple-array')
  public tags?: string[];

  @Column('text')
  public comment?: string;

  @Column('text')
  public merchant?: string;
}
