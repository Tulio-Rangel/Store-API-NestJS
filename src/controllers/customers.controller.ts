import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Delete,
  Param,
} from '@nestjs/common';

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
