import { Controller, Get, Render } from '@nestjs/common';
import fetch from 'node-fetch';
@Controller()
export class HomeController {
  @Get()
  @Render('index')
  async home() {
    let products: [] = await (await fetch('https://api-quan-ly-cua-hang.herokuapp.com/product?join=reviewSanPhams')).json();
    products.forEach((product: { reviewSanPhams: [], soSao: number }) => {
      let tongSao = 0;
      if (product.reviewSanPhams.length > 0) {
        product.reviewSanPhams.forEach((element: { soSao: number }) => {
          tongSao = tongSao + element.soSao;
        });
      }
      product.soSao = tongSao / product.reviewSanPhams.length;
      if (tongSao === 0) {
        product.soSao = 5;
      }
    });
    return { products };
  }
}
