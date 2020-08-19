exports.validateInput = (count) => {
  if (isNaN(count) || count <= 0 || count > 100) {
    const error = new Error(
      "Please pass 'count' as query parameter and the value should be between 1 to 100."
    );
    error.statusCode = 422;
    throw error;
  }
  return true;
};

exports.getPattern = (count) => {
  count = parseInt(count);
  const patternArr = [];
  for (let i = 1; i <= count; i++) {
    patternArr.push(this.getResult(i));
  }
  return patternArr;
};

// I have exported getResult method to perform unit testing.
exports.getResult = (i) => {
  if (i % 5 == 0 && i % 3 == 0) {
    return 'FizzBuzz';
  } else if (i % 3 == 0) {
    return 'Fizz';
  } else if (i % 5 == 0) {
    return 'Buzz';
  } else {
    return i;
  }
};
