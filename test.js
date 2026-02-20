const fs = require('fs');

console.log('Starting test...');

// Read index.js file
const content = fs.readFileSync('index.js', 'utf8');

// Check if it contains "shwetha"
if (content.includes('Shwetha')) {
    console.log('✅ Test Passed: index.js contains "shwetha"');
    process.exit(0); // success
} else {
    console.log('❌ Test Failed: index.js does not contain "shwetha"');
    process.exit(1); // fail CI
}

setTimeout(() => console.log('Waiting 3 seconds...'), 3000);
console.log('Test complete!');
