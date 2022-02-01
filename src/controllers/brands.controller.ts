import { Controller, Get } from '@nestjs/common';

@Controller('brands')
export class BrandsController {
  @Get()
  getBrand(): string {
    return `Hello from Brands`;
  }
}
