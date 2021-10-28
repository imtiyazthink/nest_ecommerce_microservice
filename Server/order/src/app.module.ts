import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { OrderModule } from './order/order.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/nest_main',{
      autoCreate: true
    }),
    OrderModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
