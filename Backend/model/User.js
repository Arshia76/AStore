import mongoose from 'mongoose';

const UserModel = new mongoose.Schema(
  {
    phoneNumber: {
      type: String,
    },
    username: {
      type: String,
    },
    password: {
      type: String,
    },
    name: {
      firstName: {
        type: String,
      },
      lastName: {
        type: String,
      },
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.User || mongoose.model('User', UserModel);
