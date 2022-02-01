import { Controller, Get, Param, Query } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  //recibiendo parámetros
  @Get(':productId')
  getProducts(@Param() params: any) {
    return `product ${params.productId}`;
  }

  // otra forma de recibir parametros
  // @Get('products/:productId')
  // getProducts2(@Param(productId) productId: string) {
  //   return `product ${productId}`;
  // }
  //Query params
  @Get()
  getProducts2(
    @Query('limit') limit: number,
    @Query('brand') brand: string,
    @Query('offset') offset = 0, //así se pasa un valor por defecto
  ) {
    return `product: limit => ${limit} offset => ${offset} brand => ${brand}`;
  }
}
