import { Controller, Get, Param, Query, Post, Body } from '@nestjs/common';
import { create } from 'domain';

@Controller('products')
export class ProductsController {
  //recibiendo parámetros
  @Get(':productId')
  getProducts(@Param() params: any) {
    return {
      message: `product ${params.productId}`,
    };
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
    return {
      message: `product: limit => ${limit} offset => ${offset} brand => ${brand}`,
    };
  }

  // Esta es la forma básica de crear un post.
  @Post()
  create(@Body() payload: any) {
    return {
      message: `action create`,
      payload,
      body: {
        limit: 10,
        offset: 20,
        brand: '',
      },
    };
  }

  //Creando un Post usando una interface para no usar any
  // interface Iproduct {
  //   name: string;
  //   price: number;
  // };

  // @Post()
  // create(@Body() payload: Iproduct) {
  //   return {
  //     message: `Product list`,
  //     payload,
  //     body:{
  //       limit: 30,
  //       offset: 20,
  //       brand: '',
  //     },
  //   };
  // }
}
