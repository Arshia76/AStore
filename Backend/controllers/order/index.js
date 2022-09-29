import OrderSchema from '../../model/Order';

export const getUserOrders = async (req, res) => {
  const id = req.query.user;

  try {
    const orders = await OrderSchema.find({
      $match: { 'user._id': id.toString() },
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

export const getOrder = async (req, res) => {
  const id = req.query.id;

  try {
    const order = await OrderSchema.findOne({
      _id: id,
    });
    return res.status(200).json(order);
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
  if (!body.orders[0].productImage) {
    return res.status(500).json({
      success: false,
      message: body,
    });
  }
  try {
    const order = await OrderSchema.create(body);
    console.log(order);
    return res.status(201).json(order);
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'خطای سرور',
      error,
    });
  }
};
