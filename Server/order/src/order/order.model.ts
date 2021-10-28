import * as mongoose from 'mongoose';

export const Order = new mongoose.Schema({
    id: Number,
    userId: String,
    productId: String,
    address: {
        street: String,
        city: String,
        pincode: String,
    }
})
