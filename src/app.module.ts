import { AboutModule } from './about/about.module';
import { HomeModule } from './home/home.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    AboutModule, HomeModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
