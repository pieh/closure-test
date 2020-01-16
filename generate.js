const fs = require(`fs`);
const faker = require(`faker`);

const size = 100000;

const words = new Array(size)
  .fill(0)
  .map(() => faker.company.companyName())
  .join(`, `);

fs.writeFileSync(`./data.txt`, words);
