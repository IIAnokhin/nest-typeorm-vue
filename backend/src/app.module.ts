import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostEntity } from './post/post.entity';
import { PostModule } from './post/post.module';
import { TagEntity } from './tag/tag.entity';
import { UserEntity } from './user/user.entity';
import { UserModule } from './user/user.module';
import { TagModule } from './tag/tag.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'password',
      database: 'nest',
      entities: [PostEntity, UserEntity, TagEntity],
      synchronize: true,
  }),
   PostModule, 
   UserModule, 
   TagModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
