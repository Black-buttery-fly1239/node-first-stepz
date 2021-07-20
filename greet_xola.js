const chalk = require('chalk');

const greet = require('./greet');

const styledMessage = chalk.bgGreen.black(greet('Xola'));
// console.log(styledMessage)

var figlet = require('figlet');
 
figlet('styledMessage', function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data)
});
