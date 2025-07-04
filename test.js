const fs = require('fs');
const data = JSON.parse(fs.readFileSync('bands.json', 'utf8'));
if (!Array.isArray(data) || data.length === 0) {
  console.error('bands.json should contain an array of bands');
  process.exit(1);
}
console.log(`Loaded ${data.length} bands`);
