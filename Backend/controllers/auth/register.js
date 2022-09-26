import { hashPassword } from '../../utils/Auth';
import UserSchema from '../../model/User';

export const Regsiter = async (req, res) => {
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
};
