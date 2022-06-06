const fs = require('fs');
const { Query } = require('./queryIterator.js');
const { isValidate } = require('./validators.js');

process.stdin.setEncoding('utf-8');

const storeData = responses => {
  const name = responses[0];
  const dOB = responses[1];
  const hobbies = responses[2].split(',');

  const information = { name, dOB, hobbies };
  fs.writeFileSync('information.json', JSON.stringify(information), 'utf8');
};

const informationRegister = queries => {
  const responses = [];
  queries.currentQuery();

  process.stdin.on('data', (chunk) => {
    const response = chunk.trim();
    if (isValidate(response, queries)) {
      responses.push(response);
      queries.nextQuery();
    } else {
      queries.currentQuery();
    }
    if (queries.index >= 3) {
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
  const queries = new Query([
    'Please Enter your Name : ',
    'Please Enter Your D.O.B(YYYY-MM-DD) : ',
    'Please Enter Your hobbies : '
  ]);
  informationRegister(queries);
};

main();
