import { Injectable } from '@nestjs/common';
import { Product } from 'src/entities/product.entity';

@Injectable()
export class ProductsService {
  private products: Product[] = [
    {
      id: 1,
      name: 'Product 1',
      desciption: 'Here goes the descriotion',
      price: 12000,
      stock: 1,
      image: 'googleImageHere',
    },
  ];
}
