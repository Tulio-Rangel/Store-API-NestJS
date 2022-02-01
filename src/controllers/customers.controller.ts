import { Controller, Get } from '@nestjs/common';

@Controller('customers')
export class CustomersController {
  @Get()
  getCustomer(): string {
    return `Hello from customers`;
  }
}
