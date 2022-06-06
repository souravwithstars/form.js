const displayError = () => {
  console.log('Invalid Input');
};

const validateName = name => {
  const regEx = /\d/;
  return name.length >= 5 && !regEx.test(name);
};

const getYear = dOB => dOB.slice(0, 4);
const getMonth = dOB => dOB.slice(5, 7);
const getDate = dOB => dOB.slice(-2);

const correctFormat = dOB => {
  if (dOB[4] !== '-' || dOB[7] !== '-') {
    return;
  }
  return dOB.length === 10;
};

const isValidDate = dOB => {
  const year = getYear(dOB);
  const month = getMonth(dOB);
  const date = getDate(dOB);

  return isFinite(year) && isFinite(month) && isFinite(date);
}

const validateDOB = dOB => {
  return correctFormat(dOB) && isValidDate(dOB);
};

const validateHobbies = hobbies => {
  return hobbies.length !== 0;
};

const validatePhoneNo = phoneNo => {
  return phoneNo.match(/^[\d]*$/) && phoneNo.length === 10;
};

const validateAddress = address => {
  return address.length !== 0;
};

const isValidate = (response, queries) => {
  const validateFunctions = [validateName, validateDOB, validateHobbies,
    validatePhoneNo, validateAddress];

  const index = queries.index;
  const validator = index < 4 ? validateFunctions[index] : validateFunctions[4];

  if (!validator(response)) {
    displayError();
    return;
  }
  return true;
};

exports.isValidate = isValidate;
