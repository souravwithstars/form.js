const fs = require('fs');
const { Query } = require('./queryIterator.js');
const { isValidate } = require('./validators.js');

process.stdin.setEncoding('utf-8');

const storeData = responses => {
  const name = responses[0];
  const dOB = responses[1];
  const hobbies = responses[2].split(',');
  const phoneNo = responses[3];
  const address = responses.slice(4).join(', ');

  const information = { name, dOB, hobbies, phoneNo, address };
  fs.writeFileSync('informations.json', JSON.stringify(information), 'utf8');
};

const informationRegister = informations => {
  const responses = [];
  informations.currentQuery();

  process.stdin.on('data', (chunk) => {
    const response = chunk.trim();
    if (isValidate(response, informations)) {
      responses.push(response);
      informations.nextQuery();
    } else {
      informations.currentQuery();
    }
    if (informations.index >= informations.queries.length) {
      storeData(responses);
      process.stdin.emit('end');
      process.exit(0);
    }
  });

  process.stdin.on('end', () => {
    console.log('Thank You');
  });
};

const main = () => {
  const informations = new Query([
    'Please Enter your Name : ',
    'Please Enter Your D.O.B(YYYY-MM-DD) : ',
    'Please Enter Your hobbies : ',
    'Please Enter Your Phone Number : ',
    'Please Enter Your Address Line 1 : ',
    'Please Enter Your Address Line 2 : '
  ]);
  informationRegister(informations);
};

main();
