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
    
    const N = lines[0].split(' ')[0];
    const K = lines[0].split(' ')[1];
    const A_ARR = [];
    
    for (let i = 1; i <= N; i++) {
        A_ARR.push(lines[i]);
    }
    
    const INDEX_NUMBER = A_ARR.indexOf(K);
    
    if (INDEX_NUMBER === -1) {
        console.log(INDEX_NUMBER);
    } else {
        console.log(INDEX_NUMBER + 1);
    }

});

/*
配列 A の要素数 N と整数 K , 配列 A の各要素 A_1, A_2, ..., A_N が与えられるので、
K であるような A の要素のうち、要素番号が最小のものを出力してください。
A に K が含まれない場合は -1 を出力してください。

入力される値
N K
A_1
...
A_N

・1 行目では、配列 A の要素数 N と整数 K が半角スペース区切りで与えられます。
・続く N 行では、配列 A の要素が先頭から順に与えられます。

期待する出力
A に K が含まれる場合は K であるような A の要素のうち要素番号が最小のものを、
含まれない場合は -1 を 1 行で出力してください。
また、出力の末尾には改行を入れてください。

条件
・1 ≦ N ≦ 100
・0 ≦ K , A_i ≦ 100 (1 ≦ i ≦ N)

入力例1
1 0
1

出力例1
-1

入力例2
5 3
1
2
3
4
3

出力例2
3
*/
