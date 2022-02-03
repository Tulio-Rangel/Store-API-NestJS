import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
  Param,
} from '@nestjs/common';

@Controller('categories')
export class CategoriesController {
  //ruta con varios ids
  @Get(':id/products/:productId')
  getCategory(@Param('id') id: string, @Param('productId') productId: string) {
    return {
      message: `product ${productId} and ${id}`,
    };
  }

  @Post()
  create(@Body() payload: any) {
    return {
      message: `action create category`,
      payload,
      body: {
        limit: 10,
        offset: 20,
        brand: '',
      },
    };
  }

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
