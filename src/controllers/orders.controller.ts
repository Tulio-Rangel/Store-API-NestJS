import { Controller, Get } from '@nestjs/common';

@Controller('orders')
export class OrdersController {
  @Get()
  getOrder() {
    return {
      message: `Hello from orders`,
    };
  }
}
