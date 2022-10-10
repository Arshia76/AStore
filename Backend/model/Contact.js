import mongoose from 'mongoose';

const ContactModel = mongoose.Schema(
  {
    fullName: {
      type: String,
    },
    email: {
      type: String,
    },
    title: {
      type: String,
    },
    message: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Contact ||
  mongoose.model('Contact', ContactModel);
