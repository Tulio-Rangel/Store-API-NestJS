import { Controller, Get } from '@nestjs/common';

@Controller('orders')
export class OrdersController {
  @Get()
  getOrder(): string {
    return `Hello from orders`;
  }
}
