import { Controller, Get, Render } from '@nestjs/common';

@Controller()
export class AboutController {
  @Get('about')
  @Render('about')
  home() {
    return { message: 'Hello world!' };
  }
}
