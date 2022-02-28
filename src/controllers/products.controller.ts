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
  ParseIntPipe,
} from '@nestjs/common';

import { Response } from 'express';
import { ProductsService } from 'src/services/products.service';
import { CreateProductDto, UpdateProductDto } from 'src/dtos/products.dto';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}
  //recibiendo parámetros
  @Get(':productId')
  //@HttpCode(HttpStatus.ACCEPTED)
  getOneProduct(
    // @Res() response: Response,
    @Param('productId' /*ParseIntPipe*/) productId: string, /*El ParseIntPipe sirve para validar que el id que estamos recibiendo es un numero, por lo que podemos colocar que el atributo de nuestro productID es number, pero yo no lo tengo así en mi service*/
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
  create(@Body() payload: CreateProductDto) {
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
  update(@Param('id') id: string, @Body() payload: UpdateProductDto) {
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
