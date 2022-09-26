import mongoose from 'mongoose';

const OrderModel = new mongoose.Schema(
  {
    user: {
      _id: {
        type: String,
      },
      firstName: {
        type: String,
      },
      lastName: {
        type: String,
      },
      phoneNumber: {
        type: String,
      },
    },

    address: {
      country: {
        type: String,
      },
      province: {
        type: String,
      },
      city: {
        type: String,
      },
      location: {
        type: String,
      },
    },
    orders: [
      {
        productName: {
          type: String,
        },
        productPrice: {
          type: String,
        },
        productCount: {
          type: Number,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Order || mongoose.model('Order', OrderModel);
