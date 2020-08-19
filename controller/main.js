const fizzbuzz = require('./../utils/fizzbuzz');

exports.getFizzbuzzPattern = (req, res, next) => {
  const count = req.query.count;
  let finalArr;
  const isValid = fizzbuzz.validateInput(count);
  if (isValid) {
    finalArr = fizzbuzz.getPattern(count);
  }

  return res.status(200).json(finalArr || []);
};
