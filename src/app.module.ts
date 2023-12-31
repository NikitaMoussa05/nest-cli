import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';


@Module({
  imports: [
    ProductsModule, 
    MongooseModule.forRoot(``)
  ],// передаем uri,
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
