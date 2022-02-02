import { Controller, Get, Post, Body } from '@nestjs/common';

@Controller('customers')
export class CustomersController {
  @Get()
  getCustomer() {
    return {
      mesaage: `Hello from customers`,
    };
  }

  @Post()
  create(@Body() payload: any) {
    return {
      message: `action create customer`,
      payload,
      body: {
        limit: 10,
        offset: 20,
        brand: '',
      },
    };
  }
}
