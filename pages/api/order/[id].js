import { getUserOrders } from '../../../Backend/controllers/order';
import connectDB from '../../../Backend/lib/ConnectDB';
import { validate } from '../../../Backend/middlewares/Validator';
import { OrderSchema } from '../../../Backend/validators/Order';
import { unstable_getServerSession } from 'next-auth/next';
import { authOptions } from '../auth/[...nextauth]';

const handler = async (req, res) => {
  const session = await unstable_getServerSession(req, res, authOptions);
  if (session) {
    await connectDB();
    if (req.method === 'GET') {
      await getUserOrders(req, res);
    }
  } else {
    return res.status(401).json({
      success: false,
      message: 'unauthenticated',
    });
  }
};

export default validate(OrderSchema, handler);
