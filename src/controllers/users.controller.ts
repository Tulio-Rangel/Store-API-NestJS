import { Controller, Get, Post, Body } from '@nestjs/common';

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
}
