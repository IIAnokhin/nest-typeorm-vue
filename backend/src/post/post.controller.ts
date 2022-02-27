import { Controller, Get } from '@nestjs/common';
import { PostEntity } from './post.entity';
import { PostService } from './postservice';

@Controller('post')
export class PostController {
    constructor(private readonly postService: PostService) {}

    @Get()
    getAllAction(): Promise<PostEntity[]>{
        this.postService.create()
        return this.postService.findAll();
    }
}
