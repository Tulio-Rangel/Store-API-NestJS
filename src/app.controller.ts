import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return 'Firt Hello World from nestjs';
  }

  @Get('new')
  newEndpoint() {
    return 'New Endpoint';
  }



  //ruta con varios ids
  @Get('categories/:id/products/:productId')
  getCategory(@Param('id') id: string, @Param('productId') productId: string) {
    return `product ${productId} and ${id}`;
  }
}
