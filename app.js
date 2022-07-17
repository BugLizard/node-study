'use strict';

/*rocess.argv は Node.js がデフォルトで提供してくれる、コマンドライン引数が入った配列
node app.js 100 200
というコマンドで引数 2 つを指定して app.js を起動した場合、

process.argv[0] = '/usr/local/bin/node'   //nodeのパスの例
process.argv[1] = '/nodejs-study/app.js'  //app.jsのパスの例
process.argv[2] = '100'                   //コマンドライン引数の 1 つ目
process.argv[3] = '200'                   //コマンドライン引数の 2 つ目
の 4 つが配列の形でプログラムに渡されます。
*/

const number = process.argv[2] || 0;
let sum = 0;
for( let i = 1; i <= number; i++ )
{
    sum = sum + i;
}
console.log(sum);