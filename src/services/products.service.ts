import { Injectable } from '@nestjs/common';
import { Product } from 'src/entities/product.entity';
import { nanoid } from 'nanoid';

@Injectable()
export class ProductsService {
  private products: Product[] = [
    {
      id: nanoid(4),
      name: 'Product 1',
      desciption: 'Here goes the descriotion',
      price: 12000,
      stock: 1,
      image: 'googleImageHere',
    },
  ];

  findAll() {
    return this.products;
  }

  findOne(id: string) {
    return this.products.find((item) => item.id === id);
  }

  create(payload: any) {
    const newProduct = {
      id: nanoid(4),
      ...payload,
    };
    this.products.push(newProduct);
    return newProduct;
  }

  update(id: string, payload: any) {
    const product = this.findOne(id);

    if (product) {
      const index = this.products.findIndex((item) => item.id === id);
      this.products[index] = {
        ...product,
        ...payload,
      };
      return this.products[index];
    }
    return 'Prueba nuevamente';
  }

  delete(id: string) {
    const product = this.findOne(id);
    const productIndex = this.products.indexOf(product);
    this.products.splice(productIndex, 1);

    return product;
  }
}
