process.stdin.resume();
process.stdin.setEncoding('utf8');

var lines = [];
var reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
reader.on('line', (line) => {
  lines.push(line);
});
reader.on('close', () => {
    
    const S = lines[0];
    const S_ARR = S.split(/([+-])/);
    
    let ans = 0;
    
    ans += Number(S_ARR[0]);
    
    for (let i = 1; i <= S_ARR.length - 2; i = i + 2) {
        if (S_ARR[i] === '+') {
            ans += Number(S_ARR[i + 1]);
        } else {
            ans -= Number(S_ARR[i + 1]);
        }
    
    }
    
    console.log(ans);
});
