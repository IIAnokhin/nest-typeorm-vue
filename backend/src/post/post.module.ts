import { Module } from '@nestjs/common';
import { PostService } from './postservice';
import { PostController } from './post.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostEntity } from './post.entity';
import { UserEntity } from 'src/user/user.entity';
import { TagEntity } from 'src/tag/tag.entity';

@Module({
  imports:[TypeOrmModule.forFeature([PostEntity, UserEntity, TagEntity])],
  providers: [PostService],
  controllers: [PostController]
})
export class PostModule {}
