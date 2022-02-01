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

  //recibiendo parámetros
  @Get('products/:productId')
  getProducts(@Param() params: any) {
    return `product ${params.productId}`;
  }

  // otra forma de recibir parametros
  // @Get('products/:productId')
  // getProducts2(@Param(productId) productId: string) {
  //   return `product ${productId}`;
  // }

  //ruta con varios ids
  @Get('categories/:id/products/:productId')
  getCategory(@Param('id') id: string, @Param('productId') productId: string) {
    return `product ${productId} and ${id}`;
  }

  //Query params
  @Get('products')
  getProducts2(
    @Query('limit') limit: number,
    @Query('brand') brand: string,
    @Query('offset') offset = 0, //así se pasa un valor por defecto
  ) {
    return `product: limit => ${limit} offset => ${offset} brand => ${brand}`;
  }
}
