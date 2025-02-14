const joiValidation = (joiContacts) => {
  return (req, res, next) => {
    const { error } = joiContacts.validate(req.body);
    if (error) {
      res.status(400).json({
        message: error.message,
      });

      return;
    }
    next();
  };
};
module.exports = joiValidation;
