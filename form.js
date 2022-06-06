const fs = require('fs');

process.stdin.setEncoding('utf-8');

const displayQuestion = (querries, index) => {
  const question = querries[index];
  console.log(question);
};

const storeData = responses => {
  const name = responses[0];
  const dOB = responses[1];
  const hobbies = responses[2].split(',');

  const information = { name, dOB, hobbies };
  fs.writeFileSync('information.json', JSON.stringify(information), 'utf8');
};

const informationRegister = queries => {
  const responses = [];
  let index = 0;
  displayQuestion(queries, index);
  index += 1;

  process.stdin.on('data', (chunk) => {
    responses.push(chunk.trim());
    if (index === queries.length) {
      storeData(responses);
    }
    console.log(queries[index]);
    index += 1;
  });

  process.stdin.on('end', () => {
    console.log('Thank You');
  });
};

const main = () => {
  const queries = ['Please Enter your Name : ',
    'Please Enter Your D.O.B : ',
    'Please Enter Your hobbies : '
  ];
  informationRegister(queries);
};

main();
