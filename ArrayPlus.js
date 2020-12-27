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
    
    const [N, K] = lines[0].split(' ').map(Number);
    
    for (let i = 1; i <= N; i++) {
        console.log(Number(lines[i]) + K);
    }
    
});

/*
配列 A の要素数 N と整数 K, 配列 A の各要素 A_1, A_2, ..., A_N が与えられるので、
配列 A の全ての要素を + K した後の A の各要素を出力してください。

入力される値
N K
A_1
...
A_N

・1 行目では、配列 A の要素数 N と A の全ての要素に足す値 K が半角スペース区切りで与えられます。
・続く N 行では、配列 A の要素が先頭から順に与えられます。

期待する出力
A_1 + K
...
A_N + K

全ての要素を + K した後の A の各要素を以上の形式で出力してください。
条件
・1 ≦ N ≦ 100
・-100 ≦ A_i, K ≦ 100 (1 ≦ i ≦ N)

入力例1
1 -5
1

出力例1
-4

入力例2
5 100
1
2
3
4
5

出力例2
101
102
103
104
105
*/
