import { Body, Controller, Delete, Get, Inject, Param, Post, Put } from '@nestjs/common';
// import { ClientProxy } from '@nestjs/microservices';
import { OrderService } from './order.service';

@Controller('orders')
export class OrderController {
    constructor(private orderService: OrderService) { }

    @Get()
    async all() {
        return this.orderService.all();
    }

    @Post()
    async create(@Body('userId') userId: string, @Body('productId') productId: string, @Body('address') address: object) {
        const product = await this.orderService.create({
            userId,
            productId,
            address
        })

        // this.client.emit('product_created', product);

        return product;
    }

    @Get(':id')
    async getById(@Param('id') id: number) {
        return this.orderService.getById(id)
    }

    @Put(':id')
    async update(@Param('id') id: number,
        @Body('title') title: string,
        @Body('content') content: string) {

        await this.orderService.update(id, {
            title, content
        });

        const product = await this.orderService.getById(id);

        // this.client.emit('product_updated', product);

        return product;
    }

    @Delete(':id')
    async delete(@Param('id') id: number) {
        await this.orderService.delete(id);

        // this.client.emit('product_deleted', id)
    }
}
