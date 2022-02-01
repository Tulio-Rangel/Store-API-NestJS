import { Controller, Get } from '@nestjs/common';

@Controller('brands')
export class BrandsController {
  @Get()
  getBrand() {
    return {
      message: `Hello from Brands`,
    };
  }
}
