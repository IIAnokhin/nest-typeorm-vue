import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TagEntity } from 'src/tag/tag.entity';
import { UserEntity } from 'src/user/user.entity';
import { Repository } from 'typeorm';
import { PostEntity } from './post.entity';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(PostEntity)
    private postRepository: Repository<PostEntity>,
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
    @InjectRepository(TagEntity)
    private tagRepository: Repository<TagEntity>
  ) {}

  findAll(): Promise<PostEntity[]> {
    return this.postRepository.find({ relations: ["user", "tag"] });
  }

  create(){

    const user = new UserEntity();
    user.name = 'Joe Smith';
    this.userRepository.save(user);

    const tag = new TagEntity();
    tag.name = 'News';
    this.tagRepository.save(tag);

    const post = new PostEntity();
    post.title = 'test title';
    post.description = 'test text';
    post.user = user;
    post.tag = tag;
    this.postRepository.save(post);
  }
}