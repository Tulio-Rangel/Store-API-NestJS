import { Injectable } from '@nestjs/common';
import { Product } from 'src/entities/product.entity';
import { nanoid } from 'nanoid';

@Injectable()
export class ProductsService {
  private products: Product[] = [
    {
      id: nanoid(),
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
      id: nanoid(),
      ...payload,
    };
    this.products.push(newProduct);
    return newProduct;
  }

  update1(payload: any, id: string) {
    const product = this.findOne(id);

    for (let key in payload) {
      if (key !== 'id') {
        product[key] = payload[key];
      }
    }

    return product;
  }

  update2(id: string, payload: any) {
    const found = this.products.findIndex((item) => item.id === id);

    if (found === -1) throw new Error('Product not found');
    this.products[found] = {
      id: id,
      ...payload,
    };
    return {
      Message: 'Product updated',
      Updated: this.products[found],
    };
  }

  delete(id: string) {
    const product = this.findOne(id);
    const productIndex = this.products.indexOf(product);
    this.products.splice(productIndex, 1);

    return product;
  }
}
