import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Product {
    @Prop()
    id: number;

    @Prop()
    title: string;
    
    @Prop()
    content: string;

    @Prop()
    price: number;
}

export const ProductSchema = SchemaFactory.createForClass(Product);