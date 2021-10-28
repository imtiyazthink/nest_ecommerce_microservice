import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Order } from './order.model';

@Injectable()
export class OrderService {
    constructor(@InjectModel('Order') private readonly orderModel: Model<typeof Order>) { }

    async all(): Promise<typeof Order[]> {
        return this.orderModel.find().exec();
    }

    async create(data): Promise<typeof Order> {
        return new this.orderModel(data).save();
    }

    async getById(id: number): Promise<typeof Order> {
        return this.orderModel.findOne({ id });
    }

    async update(id: number, data): Promise<typeof Order> {
        return this.orderModel.findOneAndUpdate({ id }, data)
    }

    async delete(id: number): Promise<void> {
        this.orderModel.deleteOne({id});
    }
}
