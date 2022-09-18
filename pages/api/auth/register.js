import connectDB from '../../../Backend/lib/ConnectDB';
import UserSchema from '../../../Backend/model/User';
import { validate } from '../../../Backend/middlewares/Validator';
import { RegisterSchema } from '../../../Backend/validators/Auth';
import { hashPassword } from '../../../Backend/utils/Auth';

const handler = async (req, res) => {
  if (req.method === 'POST') {
    await connectDB();
    const body = req.body;
    try {
      const existingEmail = await UserSchema.findOne({
        phoneNumber: body.phoneNumber,
      });
      const existingUsername = await UserSchema.findOne({
        username: body.username,
      });

      if (existingEmail) {
        return res.status(400).json({
          success: false,
          message: 'Email is in use!',
        });
      }

      if (existingUsername) {
        return res.status(400).json({
          success: false,
          message: 'username is in use',
        });
      }

      const hashedPassword = await hashPassword(body.password);

      const user = new UserSchema({
        username: body.username,
        phoneNumber: body.phoneNumber,
        password: hashedPassword,
      });

      await user.save();

      return res.status(200).json({
        id: user._id,
        username: user.username,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: 'خطای سرور',
        error,
      });
    }
  }
};

export default validate(RegisterSchema, handler);
