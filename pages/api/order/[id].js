import { getUserOrders } from '../../../Backend/controllers/order';
import connectDB from '../../../Backend/lib/ConnectDB';
import { validate } from '../../../Backend/middlewares/Validator';
import { OrderSchema } from '../../../Backend/validators/Order';
import { getToken } from 'next-auth/jwt';

const handler = async (req, res) => {
  const token = await getToken({ req });
  console.log(req.query);

  if (token) {
    await connectDB();
    if (req.method === 'GET') {
      await getOrder(req, res);
    }
  } else {
    return res.status(401).json({
      success: false,
      message: 'unauthenticated',
    });
  }
};

export default validate(OrderSchema, handler);
