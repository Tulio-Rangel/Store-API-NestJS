import { Controller, Get } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get()
  getUser(): string {
    return `Hello from users`;
  }
}
