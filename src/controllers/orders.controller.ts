import { Controller, Get, Post, Body } from '@nestjs/common';

@Controller('orders')
export class OrdersController {
  @Get()
  getOrder() {
    return {
      message: `Hello from orders`,
    };
  }

  @Post()
  create(@Body() payload: any) {
    return {
      message: `action create order`,
      payload,
      body: {
        limit: 10,
        offset: 20,
        brand: '',
      },
    };
  }
}
