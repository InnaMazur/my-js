
const { task } = require('gulp');
function test(cb){
    console.log('Hello test');
    cb();
}
exports.test = test;