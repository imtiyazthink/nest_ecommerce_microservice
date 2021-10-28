import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { OrderController } from './order.controller';
import { Order } from './order.model';
import { OrderService } from './order.service';

@Module({
  imports: [
    MongooseModule.forFeature([{name: 'Order', schema: Order}])
  ],
  controllers: [OrderController],
  providers: [OrderService]
})
export class OrderModule {}
