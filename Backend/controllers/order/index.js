import OrderSchema from '../../model/User';

export const getUserOrders = async (req, res) => {
  const id = req.params.id;

  try {
    const orders = await OrderSchema.find({
      user: {
        _id: id,
      },
    });
    return res.status(200).json(orders);
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'خطای سرور',
      error,
    });
  }
};

export const createOrder = async (req, res) => {
  const body = req.body;
  console.log(body);
  try {
    const order = await OrderSchema.create(body);
    return res.status(201).json(order);
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'خطای سرور',
      error,
    });
  }
};
