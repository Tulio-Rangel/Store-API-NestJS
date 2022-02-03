import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Delete,
  Param,
} from '@nestjs/common';

@Controller('brands')
export class BrandsController {
  @Get()
  getBrand() {
    return {
      message: `Hello from Brands`,
    };
  }

  @Post()
  create(@Body() payload: any) {
    return {
      message: `action create brand`,
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
