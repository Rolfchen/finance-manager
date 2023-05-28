import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
  name: 'User',
})
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  public id!: string;

  @Column({
    type: 'varchar',
    length: 250,
  })
  public firstName!: string;

  @Column({
    type: 'varchar',
    length: 250,
  })
  public lastName!: string;

  @Column({
    type: 'varchar',
    length: 250,
  })
  public firebaseId!: string;
}
