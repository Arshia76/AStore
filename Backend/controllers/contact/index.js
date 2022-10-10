import ContactSchema from '../../model/Contact';

export const createRequest = async (req, res) => {
  const body = req.body;
  console.log(body);
  try {
    const request = await ContactSchema.create(body);
    console.log(request);
    return res.status(201).json(request);
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'خطای سرور',
      error,
    });
  }
};
