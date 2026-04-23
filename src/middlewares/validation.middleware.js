export default function validateRequestModel(DtoClass) {
  return (req, res, next) => {
    if (!req.body)
      return res.status(400).json({ error: { message: "Data is required" } });
    const { error, value } = DtoClass.validate(req.body);
    if (error) return res.status(400).json({ error: { message: error } });
    req.value = value;
    next();
  };
}
