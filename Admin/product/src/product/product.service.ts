import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './product.entity';

@Injectable()
export class ProductService {
    constructor(@InjectRepository(Product) private readonly productRepository: Repository<Product>) {}
    
    async all(): Promise<string> {
        // return this.productRepository.find();
        console.log('came here get');
        return 'came here good';

    }

    async create(data): Promise<Product> {
        console.log('came here post');

        return this.productRepository.save(data);
    }

    async getById(id: number): Promise<Product> {
        return this.productRepository.findOne(id);
    }

    async update(id: number, data): Promise<any> {
        return this.productRepository.update(id, data);
    }

    async delete(id: number): Promise<any> {
        return this.productRepository.delete(id);
    }
}
