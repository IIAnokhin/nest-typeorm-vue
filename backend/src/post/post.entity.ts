import { TagEntity } from 'src/tag/tag.entity';
import { UserEntity } from 'src/user/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';

@Entity()
export class PostEntity {
    
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: String;

  @Column()
  description: String;

  @OneToOne(() => UserEntity)
  @JoinColumn()
  user: UserEntity

  @OneToOne(() => TagEntity)
  @JoinColumn()
  tag: TagEntity
}
