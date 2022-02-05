import {
  Controller,
  Get,
  Param,
  Query,
  Post,
  Body,
  Put,
  Delete,
  HttpCode,
  HttpStatus,
  Res,
} from '@nestjs/common';

import { Response } from 'express';
import { ProductsService } from 'src/services/products.service';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}
  //recibiendo parámetros
  @Get(':productId')
  //@HttpCode(HttpStatus.ACCEPTED)
  getOneProduct(
    // @Res() response: Response,
    @Param('productId') productId: string,
  ) {
    // response.status(200).send({
    //   message: `Este es un response de express ${productId}`,
    // });
    // return {
    //   message: `product ${productId}`,
    // };
    return this.productsService.findOne(productId);
  }

  //Query params
  @Get()
  getProducts(
    @Query('limit') limit: number,
    @Query('brand') brand: string,
    @Query('offset') offset = 0, //así se pasa un valor por defecto
  ) {
    // return {
    //   message: `product: limit => ${limit} offset => ${offset} brand => ${brand}`,
    // };
    return this.productsService.findAll();
  }

  // Esta es la forma básica de crear un post.
  @Post()
  create(@Body() payload: any) {
    // return {
    //   message: `action create product`,
    //   payload,
    //   body: {
    //     limit: 10,
    //     offset: 20,
    //     brand: '',
    //   },
    // };
    return this.productsService.create(payload);
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

  @Put(':id')
  update(@Param('id') id: string, @Body() payload: any) {
    // return {
    //   id,
    //   payload,
    // };
    return this.productsService.update(id, payload);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    // return {
    //   id,
    // };
    return this.productsService.delete(id);
  }
}
