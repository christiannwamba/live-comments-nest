import { Controller, Post, Res, Body, HttpStatus } from '@nestjs/common';
import { CommentService } from './comment.service';


@Controller('comment')
export class CommentController {
    constructor(private commentService: CommentService){}

  @Post()
  postMessage(@Res() res, @Body() data ) {
      this.commentService.addComment(data)
      res.status(HttpStatus.OK).send("Comment posted successfully")
  }
}
