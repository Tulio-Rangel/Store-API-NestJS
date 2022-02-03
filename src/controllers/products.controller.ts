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
} from '@nestjs/common';

@Controller('products')
export class ProductsController {
  //recibiendo parámetros
  @Get(':productId')
  @HttpCode(HttpStatus.ACCEPTED)
  getOneProduct(@Param('productId') productId: any) {
    return {
      message: `product ${productId}`,
    };
  }

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
      message: `action create product`,
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
