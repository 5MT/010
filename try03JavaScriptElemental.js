'use strict';
// 厳格モードにする。厳格モードが将来既定になる可能性はあると思うが、当面これ。

//// 変数
//
// 変数は原則、const で宣言する。再代入不可。いわゆる「関数型」のプログラムにするため。
// 再代入ができる let で宣言するのはカウンタなど特殊なもののみでよさげと思ったが、
// 実際には for of 反復文でも（変数の評価は一度しか行わないので）const で間に合ってしまう。
//
// 文字列リテラルは '' でも "" でもいいが、式展開ができる `` をデフォルトにしたほうが単純かもしれない
// ただ、後述のオブジェクトリテラルの key の入力時には、`` を使うとエラーになる場合があるので、"" を使うのがいいだろう。
const sOasis1 = `Definitely Maybe`;
const sOasis2 = `(What's The Story) Morning Glory?`;

//// Console オブジェクト / コンソール
//
// この名前空間から直接使える console オブジェクト。
// console.log() は node では標準出力。
// console.time(ラベル) は計測開始
// console.timeEnd(ラベル) は計測を終了し、標準出力に結果を出す。
console.log(`# Console object (here shows log() and time mesurement examples)`);
console.log(sOasis1);
console.time(`timer`);
console.log(`2 : ${sOasis2}`);
console.timeEnd(`timer`);
console.log(``);

//// データ型
//
// データ型の一覧、typeof 演算子で確認できる。Symbol は正直よくわからない。
console.log(`# Data types`);
console.log(`* ${typeof `String`} ${`String`}`);
console.log(`* ${typeof 3.26+1.0} ${3.26+1.0}`);
console.log(`* ${typeof (1==2)} ${1==2}`);
console.log(`* ${typeof undefined} ${undefined}`);
console.log(`* ${typeof null} ${null}`);
console.log(`* ${typeof function(){}} ${function(){}}`);
console.log(`* ${typeof Symbol(`symTest`)} (Symbol data type was introduced in ES2015 - it's a bit difficult concept.)`);
console.log(``);

//// 演算子
//
// 注意が必要なものだけテスト
console.log(`# Operator`);
console.log(`* Power operator : 6 ** 2 ... (Not available in this version of node.js)`);
console.log(`* Ternary operator : (1==2) ? \`T\`:\`F\` ${(1==2) ? `T`:`F`}`);
console.log(`* Strict equal : 1===\`1\` ${1===`1`}`);
console.log(``);

//// Process オブジェクト / コマンドライン引数
// argv フィールド
// 第 1 要素は node パス
// 第 2 要素は実行する JS ファイル
// 第 3 要素以降は引数
console.log(`# Process object`);
console.log(`* process.argv ${process.argv}`);
console.log(`* process.cwd() ${process.cwd()}`);
console.log(`* process.env ${process.env}`);
console.log(`* process.version ${process.version}`);
console.log(`* process.arch ${process.arch}`);
console.log(`* process.platform ${process.platform}`);
console.log(``);


//// 標準ビルトインオブジェクトの例
// 
// Array
console.log(`# Array - a Standard Built-in Object`);
const arrAlbums = [];
arrAlbums.push(`Definitely Maybe`);
arrAlbums.push(`(What's The Story?) Morning Glory`);
arrAlbums.push(`Be Here Now`);
arrAlbums.push(`Standing On The Shoulder Of Giants`);
arrAlbums.push(`Heathen Chemistry`);
arrAlbums.push(`Don't Believe The Truth`);
arrAlbums.push(`Dig Out Your Soul`);
console.log(arrAlbums);
console.log(`* length ${arrAlbums.length}`);
// for of 反復処理で配列の要素を取り出す例
console.log(`* elements`);
for (const sEntry of arrAlbums) {
 console.log(` - ${sEntry}`);
}
// for of 反復処理で配列のインデックスと要素の表を取り出す例
console.log(`* entries (Array.entries())`);
for (const sEntry of arrAlbums.entries()) {
 console.log(` - ${sEntry}`);
}
console.log(``);
console.log(`* Spread operator`); // スプレッド演算子。配列やオブジェクトをバラして引数などの列挙にできる
console.log(`A`,`B`,`C`);   // 例えば console.log() は複数の引数を受けるとスペースでつなげて出力するので
console.log(...arrAlbums);  // こうすると配列をスペースでつなげて出せる
console.log(``);


//// 関数
//
console.log(`# Function`);
// 関数の定義
/* void */ function fncPrintPowerToTwo(x) {
 console.log(x*x);
 return;
}
// 関数の呼び出し
console.log(`* Simple numeric function`);
console.log(` - put 5.0 as the argument x into the function to calculate x power to 2`);
fncPrintPowerToTwo(5.0);
console.log(` - then 7.0`);
fncPrintPowerToTwo(7.0);
// デフォルトの引数（引数が少なかった場合の処理）とレストパラメータ（引数が多すぎた場合の処理）
// 前者では function の仮引数定義で代入する。後者は「...仮引数名」で、Array オブジェクトで渡される
/* String */ function fncPrintConcatenatedStrings(str1 = `(DEFAULT 1ST ARG)`, str2 = `(DEFAULT 2ND ARG)`, ...arrRestArgs) {
 console.log(`Concatenated 1st and 2nd arguments : ${str1}----${str2}`);
 console.log(`Rest arguments : ${arrRestArgs}`);
 return;
}
console.log(`* Default arguments and rest parameters`);
fncPrintConcatenatedStrings();
fncPrintConcatenatedStrings(`John`);
fncPrintConcatenatedStrings(`John`,`Paul`);
fncPrintConcatenatedStrings(`John`,`Paul`,`George`);
fncPrintConcatenatedStrings(`John`,`Paul`,`George`,`Ringo`);
console.log(``);


//// ホイスティング（変数宣言の巻き上げ）
// JavaScript では、関数宣言文（関数式ではなく、function fncName(){} 文）の中で
// 宣言されるローカル変数は定義スコープの最初に宣言処理が走る（代入は別）ので、
// グローバル変数と同じ名前の変数を使うときに予期しないふるまいをすることがある。
console.log(`* Hoisting of varibles in a function scope`);
/* void */ function fncPrintHoistedVariables(){
 console.log(` - sOasis1 = ${sOasis1} : Though the global variable "sOasis1" has already been initialized...?`);
 const sOasis1 = `Familiar To Millions`;
 // 上の例では、グローバル変数 sOasis1 があっても、このスコープ内でローカル変数 sOasis1 が
 // 後で宣言 + 初期化されているので、宣言が先に処理され、グローバル変数の値を引けず Ref Error になる
 // console.log(` - sOasis1 = ${sOasis1} : << After the local variable "sOasis1" is initialized`);
 return;
}
try {
 fncPrintHoistedVariables();
} catch(e) {
 console.log(e);
}
console.log(``);


//// 無名関数
//
// JavaScript を特徴づけるといわれる無名関数。関数の引数として渡すような対象の関数の定義で使う。
// https://developer.mozilla.org/ja/docs/Web/JavaScript/Guide/Functions
// 関数の引数に関数定義を渡すというケースがどのようなときにあり得るか考えると、
// 「別の関数が入力される可能性がある」ことを踏まえると
// 繰り返しなどで引数関数を意図したパターンで反復する処理を組む場合
// （繰り返される関数は違っても、繰り返し方が同じ）だろうと考えられる。 
console.log(`* Annonymous function`);
// 例として、第一引数に（引数を 1 個とる、ことにする）関数オブジェクト、
// レストパラメタに関数に食わせるベクトルをとる関数を定義
/* Array */ function fncVectorApply(fncApply, ...arrVector) {
 const arrResult = [];
 for (const intIndex of arrVector.keys()) {
  arrResult.push(fncApply(arrVector[intIndex]));
 }
 return arrResult;
}
// ベクトル演算対象の関数は、後で引数で与えるので関数式にしておく
const fncPowerToThree = function(x){return x*x*x;}; // ES2015 より前の関数オブジェクト定義
const fncPowerToFour = (x)=>{return x*x*x*x;};      // ES2015 での記法。基本、関数オブジェクトで定義汁場合はこれにしよう。
// 実行例
console.log(` - fncPowerToThree fed into fncVectorApply ---- ${fncPowerToThree.toString()}`);
console.log(`   ${fncVectorApply(fncPowerToThree,1,2,3,4)}`);
console.log(` - fncPowerToFour fed into fncVectorApply ---- ${fncPowerToFour.toString()}`);
console.log(`   ${fncVectorApply(fncPowerToFour,1,2,3,4,5,6)}`);
console.log(` - cf. fncPowerToFour single run with the argument "1.5"`);
console.log(`   ${fncPowerToFour(1.5)}`);
console.log(``);
// 無名関数の即時実行
console.log(`* Immediate run of annonymous function`);
console.log(` - (() => {return \`hahaha\`;})() --- ${(() => {return `hahaha`;})()}`);
console.log(``);


//// 標準ビルトインオブジェクト Array 再び
// ES2015 で追加された機能を試す
// Array.prototype.map(コールバック関数、引数 1) - 関数を適用した値の配列を返す
console.log(`* Array.prototype.map() function`);
const fncAddExMark = (strAlbumName)=>{return `${strAlbumName} !!!`};
console.log(` - fncAddExMark single run with "Whatever" : ${fncAddExMark(`Whatever`)}`);
console.log(` - arrAlbums.map(fncAddExMark) :\n${arrAlbums.map(fncAddExMark)}`);
console.log(``);
// Array.prototype.reduce(コールバック関数、引数 2, 最初にコールバック関数の第一引数に与えられる引数)
// - 先頭 2 要素の計算結果を 1 要素に置き換えて要素数を減らす繰り返し計算を行い、最後まで減らしてスカラー値を返す
console.log(`* Array.prototype.reduce() function`);
const fncAddLetterCount = (numFirst, strSecond)=>{return numFirst + strSecond.length;};
console.log(` - fncAddLetterCount single run with (5, "Whatever") : ${fncAddLetterCount(5, `Whatever`)}`);
console.log(` - arrAlbums.reduce(fncAddLetterCount, 0) :\n${arrAlbums.reduce(fncAddLetterCount,0)}`);
console.log(``);


//// オブジェクト
//
// まずはプロパティのみを持ったオブジェクトを作成する例。
console.log(`* Object "skuTry" example`);
const skuTry = {
  "strSKUId" : `P234567890JQK`
 ,"strPlatformName" : `Neverland`
 ,"numYearProject" : 2015
};
console.log(` - property strSKUId ---- ${skuTry.strSKUId}`);
console.log(` - property strPlatformName ---- ${skuTry.strPlatformName}`);
console.log(` - property numYearProject ---- ${skuTry.numYearProject}`);
console.log(``);
skuTry.cfgSalesFeatures = {
  "strLCD" : `13.5`
 ,"strKeyboardLocale" : `JPN`
};
console.log(` - property inserted, cfgSalesFeatures ---- ${skuTry.cfgSalesFeatures}`);
console.log(` - property inserted, cfgSalesFeatures.strLCD ---- ${skuTry.cfgSalesFeatures.strLCD}`);
console.log(` - property inserted, cfgSalesFeatures.strKeyboardLocale ---- ${skuTry.cfgSalesFeatures.strKeyboardLocale}`);
console.log(``);
// util コアオブジェクト・モジュールを読み込み。
// オブジェクトを全階層表示するには調べたところ JSON か util のコアオブジェクトを使うが、
// どういうわけか JSON は宣言しなくても使える。
// JSON の場合、メソッドは出力されず、プロパティしか出ないが、
// util.inspect() の場合 function も名前だけは出力する
const UTIL = require('util');
console.log(` - Showing the object by JSON.stringify() :\n${JSON.stringify(skuTry)}`);
console.log(` - Showing the object by util.inspect() :\n${UTIL.inspect(skuTry, false, null)}`);
console.log(``);
// メソッド……オブジェクトのファンクション
// 上で作った skuTry に追加してみる。書式は無名関数での代入になる。This は使えない
skuTry.fncGetModel = ()=>{
 return skuTry.strSKUId.substr(0,5);
};
console.log(` - fncGetModel() method to get the first 5 letters of strSKUId : ${skuTry.fncGetModel()}`);
console.log(``);
// 今度は最初からメソッド付きのオブジェクトを作ってみる
console.log(`* Object "regionUS" example with a method from the definition`);
const regionTAIS = {
  "strRegionName" : `US`
 ,"strCountryOfHeadOffice" : `United States Of America`
 ,fncSayHello() {return `Hello. I'm ${this.strRegionName}.`}
  // this は使われているメソッドの直上のオブジェクトを指す
  // this はプロパティの宣言には使えない。必ずメソッドの中。
 ,"arrCountries" : [`USA`,`Canada`,`Australia`]
 ,get strRegionCode() {return this.strRegionName.substr(1,1)} 
 // getter はプロパティのように()なしアクセス
 ,set strRegionCode(strRegionCodeInput) {this.strRegionName = `${this.strRegionName}_${strRegionCodeInput}`}
 // setter も同様。setter/getter は実プロパティと依存関係のあるプロパティで使うものだろう。
}
console.log(` - fncSayHello() : ${regionTAIS.fncSayHello()}`);
console.log(` - ${UTIL.inspect(regionTAIS, false, null)}`);
console.log(` - strRegion Code getter : ${regionTAIS.strRegionCode}`);
regionTAIS.strRegionCode = `01`;
console.log(` - strRegionName : ${regionTAIS.strRegionName} just after set strRegionCode`);
console.log(``);

//// 分割代入
//
// そもそも複数の変数を下のように一気に宣言＋初期化できる。
const [strAlbum1, strAlbum2] = arrAlbums;
console.log(`* Destructuring assignment`);
console.log(` - strAlbum1 = ${strAlbum1}`);
console.log(` - strAlbum2 = ${strAlbum2}`);
console.log(``);


//// 条件分岐制御
// switch と if
const datNow = new Date;
console.log(`* Conditional routine - Switch and If`);
console.log(` - current second = ${datNow.getSeconds()}`);
switch(datNow.getSeconds() < 30) {
 case true:
  console.log(`  + switch case 1 : Less than 30`);
  break;
 case false:
  console.log(`  + switch case 2 : More than 30`);
  break;
 default:
  break;
}
if(datNow.getSeconds()%2 === 0) {
 console.log(`  + if : Even`);
} else {
 console.log(`  + if : Odd`);
}
console.log(``);


//// Promise の実験のため、まず非同期らしいぷろぐらむを用意する。
// readline モジュール要
const READLINE = require(`readline`);
const infReader = READLINE.createInterface({"input": process.stdin, "output": process.stdout});
infReader.setPrompt("# type 0-9 numerics. q to quit. # ");
infReader.prompt(); // ★ プロンプト

// 以下、"line" 入力イベント時のハンドラ設定
infReader.on(
 "line"
,
 (strInput)=>{
  if(strInput === `q`) {
   infReader.close();
  } else if(!strInput.match(/^\d{1,1}$/)) { // 正規表現で 1 文字の数字かどうがで分岐。まず、マッチしない場合
   console.log(`Type a 1 digit numeric`);
   infReader.prompt()
  } else {                                  // マッチする場合。
   const strTimeCalled = fncGetTimeStringNow(); // 現在時刻取得
   const numSecondsToWait = Number(strInput);   // 入力値を秒数に解釈
   console.log(`${strInput}[s] to respond... Now at ${strTimeCalled}`); // 入力時刻と受け付けた秒数を表示
   // 待ち + 表示をキューに入れる
   setTimeout(
    ()=>{
     console.log(`\n>>> Thrown at ${strTimeCalled} with ${numSecondsToWait}[s] delay. Now at ${fncGetTimeStringNow()}`);
    }
   ,
    numSecondsToWait * 1000
   );
   //　待ち + 表示のキューを投げたらすぐプロンプト
   infReader.prompt();
  } // if 終わり
 }  // ハンドラの関数引数終わり
);

// 共用ルーチン、今のローカル時刻の文字列を返す。
/* String */ function fncGetTimeStringNow(){
 const datNow = new Date;
 return `(${datNow.getTimezoneOffset()}[min])${datNow.getHours()}:${datNow.getMinutes()}:${datNow.getSeconds()}.${datNow.getMilliseconds()}`;
}

console.log(`So is this the end?`); // この分は ★ プロンプトの直後に処理される
console.log(``);



