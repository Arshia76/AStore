import connectDB from '../../../Backend/lib/ConnectDB';
import { validate } from '../../../Backend/middlewares/Validator';
import { Regsiter } from '../../../Backend/controllers/auth/register';
import { RegisterSchema } from '../../../Backend/validators/Auth';

const handler = async (req, res) => {
  if (req.method === 'POST') {
    await connectDB();
    await Regsiter(req, res);
  }
};

export default validate(RegisterSchema, handler);
