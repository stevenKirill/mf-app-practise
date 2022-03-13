import { Controller, Get, Param } from '@nestjs/common';
import products, { Product } from '../../data/products/products';

@Controller('products')
export class ProductsController {
  constructor() {}

  @Get()
  async index(): Promise<Product[]> {
    return products;
  }

  @Get(':id')
  async show(@Param('id') id: string): Promise<Product> {
    const current = products.find((product: Product) => product.id === Number(id));
    return current;
  }
}
