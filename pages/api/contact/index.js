import { getToken } from 'next-auth/jwt';
import connectDB from '../../../Backend/lib/ConnectDB';
import { validate } from '../../../Backend/middlewares/Validator';
import { ContactSchema } from '../../../Backend/validators/Contact';
import { createRequest } from '../../../Backend/controllers/contact';

const handler = async (req, res) => {
  const token = await getToken({ req });
  if (token) {
    await connectDB();
    if (req.method === 'POST') {
      await createRequest(req, res);
    }
  } else {
    return res.status(401).json({
      success: false,
      message: 'unauthenticated',
    });
  }
};

export default validate(ContactSchema, handler);
