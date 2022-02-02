import { Controller, Get, Post, Body } from '@nestjs/common';

@Controller('brands')
export class BrandsController {
  @Get()
  getBrand() {
    return {
      message: `Hello from Brands`,
    };
  }

  @Post()
  create(@Body() payload: any) {
    return {
      message: `action create brand`,
      payload,
      body: {
        limit: 10,
        offset: 20,
        brand: '',
      },
    };
  }
}
