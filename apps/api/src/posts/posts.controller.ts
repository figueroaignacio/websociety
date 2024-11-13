import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { PostEntity } from './entities/post.entity';
import { PostsService } from './posts.service';

@Controller('posts')
@ApiTags('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Post()
  @ApiCreatedResponse({ type: PostEntity })
  create(@Body() createPostDto: CreatePostDto) {
    return this.postsService.create(createPostDto);
  }

  @Get()
  @ApiOkResponse({ type: PostEntity, isArray: true })
  findAll() {
    return this.postsService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: PostEntity, isArray: true })
  async findOne(@Param('id') id: string) {
    const post = await this.postsService.findOne(+id);
    if (!post) {
      throw new NotFoundException(`Post with the ${id} does not exist.`);
    }
  }

  @Get('drafts')
  @ApiOkResponse({ type: PostEntity })
  findDrafts() {
    return this.postsService.findDrafts();
  }

  @Patch(':id')
  @ApiOkResponse({ type: PostEntity })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updatePostDto: UpdatePostDto,
  ) {
    return this.postsService.update(id, updatePostDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: PostEntity })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.postsService.remove(id);
  }
}
