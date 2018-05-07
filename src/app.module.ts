import { CommentService } from './comments/comment.service';
import { CommentController } from './comments/comment.controller';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';

@Module({
  imports: [],
  controllers: [AppController, CommentController],
  components: [CommentService],
})
export class AppModule {}
