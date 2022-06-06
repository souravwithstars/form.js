const displayError = () => {
  console.log('Invalid Input');
};

const validateName = name => {
  const regEx = /\d/;
  if (name.length < 5 || regEx.test(name)) {
    displayError();
    return;
  }
  return true;
};

const getYear = dOB => dOB.slice(0, 4);
const getMonth = dOB => dOB.slice(5, 7);
const getDate = dOB => dOB.slice(-2);

const correctFormat = dOB => {
  if (dOB[4] !== '-' || dOB[7] !== '-') {
    console.log('hello');
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
  if (!correctFormat(dOB)) {
    displayError();
    return;
  } else if (!isValidDate(dOB)) {
    displayError();
    return;
  }
  return true;
};

const validateHobbies = hobbies => {
  if (hobbies.length === 0) {
    displayError();
    return;
  }
  return true;
};

const isValidate = (response, queries) => {
  if (queries.index === 0) {
    return validateName(response);
  } else if (queries.index === 1) {
    return validateDOB(response);
  }
  return validateHobbies(response);
};

exports.isValidate = isValidate;
