import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Delete,
  Param,
} from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get()
  getUser() {
    return {
      message: `Hello from users`,
    };
  }

  @Post()
  create(@Body() payload: any) {
    return {
      message: `action create user`,
      payload,
      body: {
        limit: 10,
        offset: 20,
        brand: '',
      },
    };
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() payload: any) {
    return {
      id,
      payload,
    };
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return {
      id,
    };
  }
}
