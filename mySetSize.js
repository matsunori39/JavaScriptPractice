process.stdin.resume();
process.stdin.setEncoding('utf8');
// 自分の得意な言語で
// Let's チャレンジ！！

var lines = [];
var reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
reader.on('line', (line) => {
  lines.push(line);
});
reader.on('close', () => {
    
    const N = Number(lines[0]);
    
    let mySet = new Set();
    
    for (let i = 1; i <= N; i++) {
        mySet.add(lines[i]);
    }
    
    console.log(mySet.size);
});

/*
配列 A の要素数 N と配列 A の各要素 A_1, A_2, ..., A_N が与えられるので、配列 A には何種類の値が含まれているかを求めてください。

入力される値
N
A_1
...
A_N

・1 行目では、配列 A の要素数 N が与えられます。
・続く N 行では、配列 A の要素が先頭から順に与えられます。

期待する出力
配列 A に含まれている値の種類数を 1 行で出力してください。

条件
・1 ≦ N ≦ 100
・0 ≦ A_i ≦ 100 (1 ≦ i ≦ N)

入力例1
1
1

出力例1
1

入力例2
5
1
2
3
2
1

出力例2
3
*/
