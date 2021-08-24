/**
 * const, let の変数宣言
 */
// var val1 = "var変数";
// console.log(val1);

// //varは上書きが可能
// val1 = "var変数を上書き";
// console.log(val1);

// //var変数は再宣言可能
// var val1 = "var変数を再宣言";
// console.log(val1);

// let val2 = "let変数";
// console.log(val2);

// //letは上書きが可能
// val2 = "let変数を上書き";
// console.log(val2);

// let変数は再宣言不可能
// let val2 = "let変数を再宣言";
// console.log(val2);

// const val3 = "const変数";
// console.log(val3);

// val3 = "const変数";
// console.log(val3);

// const val3 = "const変数";
// console.log(val3);

//constで定義したobjectは、プロパティの変更が可能
// const val4 = {
//   name: "てすと",
//   age: 42
// };
// val4.name = "test";
// val4.address = "kanagawa";
// console.log(val4);

//constで定義した配列は、プロパティの変更が可能
// const val5 = ["dog", "cat"];
// val5[0] = "bird";
// val5.push("monkey");
// console.log(val5);

/**
 * テンプレート文字列
 */
// const name = "てすと";
// const age = 42;

// //従来記法
// const message1 = "私の名前は" + name + "です。年齢は" + age + "です。";
// console.log(message1);

// //テンプレート文字列を用いる。文字列をバッククォートで囲み、${}で変数を展開できる
// const message2 = `私の名前は${name}です。年齢は${age}ですよ。`;
// console.log(message2);

/**
 * アロー関数
 * ※アロー関数は通常の関数と比較した際に、thisの扱いが異なるので注意。アロー時はthisは束縛（固定）される。
 */
//従来記法
// function func1(str) {
//   return str;
// }
// const func1 = function (str) {
//   return str;
// };
// console.log(func1("func1です"));

//アロー関数の場合
// const func2 = (str) =>  {
//   return str
// }
// console.log(func2("func2です"));

//アロー関数の場合、引数が1つだと、かっこを省略できる
// const func2 = str => {

//アロー関数の場合、returnや{}を省略できる。1行書きが可能。
// const func2 = (str) => str;
// console.log(func2("func2です"));

// //引数を複数取る場合
// // const func3 = (num1, num2) => {
// //   return num1 + num2;
// // };
// const func3 = (num1, num2) => num1 + num2;
// console.log(func3(10, 20));

/**
 * 分割代入
 */
// const myProfile = {
//   name: "てすと",
//   age: 42
// };
// // const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}歳です。`;
// // console.log(message1);

// //myProfileオブジェクトから指定したプロパティを明示的に抜き出して使用できる。${}の記述も短くなる。
// const { name, age } = myProfile;
// const message2 = `名前は${name}です。年齢は${age}歳です。`;
// console.log(message2);

//配列でも分割代入
// const myProfile = ["てすと", 42];
// // const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}歳です。`;

// const [name, age] = myProfile; //[0]がname, [1]がage と順番通りに名前をつけることになる
// const message4 = `名前は${name}です。年齢は${age}歳です。`;
// console.log(message4);

/**
 * デフォルト値、引数など
 */
// const sayHallo = (name = "名無しさん") =>
//   console.log(`こんにちは、${name}さん！`);
// sayHallo("てすと");

/**
 * スプレッド構文 ...
 */
//配列の展開
// const arr1 = [1, 2];
// // console.log(arr1);
// // console.log(...arr1); //配列の中身を順番に展開してくれる

// const sumFUnc = (num1, num2) => console.log(num1 + num2);
// // sumFUnc(arr1[0], arr1[1]);
// sumFUnc(...arr1); //上記と同じ。arr1の値が順番に展開されているので上記と同じこととなる。

//まとめる。展開の反対
// const arr2 = [1, 2, 3, 4, 5];
// // const [num1, num2, num3, num4, num5] = arr2;
// const [num1, num2, ...arr3] = arr2; //3,4,5がarr3にまとめて受け取ることができる。
// console.log(num1);
// console.log(num2);
// console.log(arr3);

//配列のコピーや結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];
// const arr6 = [...arr4]; //arr4と全く同じ変数を生成。配列のコピー。
// arr6[0] = 100;
// console.log(arr6);
// console.log(arr4); //arr4[0]は影響しない

// const arr7 = [...arr4, ...arr5]; //arr4とarr5 を合体した変数を生成。
// console.log(arr7);

//=のみのコピーだけだと、同じ個所を参照してしまうため、元のarr4の値も変更されてしまう。※参照渡し
// const arr8 = arr4;
// console.log(arr8);
// arr8[0] = 100;
// console.log(arr8);
// console.log(arr4); //arr8での修正が、arr4にも影響してしまう。

/**
 * mapやfilterを使った配列の処理
 * これの登場により、従来のfor文はほぼ使わなくなった
 */
// const nameArr = ["田中", "山田", "鈴木"];
// 従来
// for (let index = 0; index < nameArr.length; index++) {
//   console.log(`${index + 1}番目は、${nameArr[index]}です。`);
// }

//mapの基本的な使い方
// const nameArr2 = nameArr.map((name) => {
//   return name;
// });
// console.log(nameArr2);

//従来のfor文をmapで書き直したもの。動作は同じ。
// nameArr.map((name) => console.log(name));

// 配列のindexがない（順番の概念がない）場合、
//第2引数（ここではindex）に順番を取ることが出来る
// nameArr.map((name, index) => console.log(`${index + 1}番目は${name}です`));

//filter。条件に一致する配列値のみを取り出すような場合に使用。
// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//   // return num % 2 === 1;
//   return num % 2 === 0;
// });
// console.log(newNumArr);

//鈴木の場合のみ、「さん」を付与しない
// const newNameArr = nameArr.map((name) => {
//   if (name === "鈴木") {
//     return name;
//   } else {
//     return `${name}さん`;
//   }
// });
// console.log(newNameArr);

/**
 * 三項演算子
 * ※あまり多用すると可読性が下がるので注意
 */
// const val1 = 1 < 0 ? "true" : "false";
// console.log(val1);

// 例：数値型の場合はカンマ区切りで表示し、それ以外の型の場合はメッセージを表示
// const num = 1300;
// const num = "1300";
// // console.log(num.toLocaleString());
// const formattedNum =
//   typeof num === "number" ? num.toLocaleString() : "数値を入力して";
// console.log(formattedNum);

//例：数値比較の結果により、返答を変えて返す
// const checkSum = (num1 = 0, num2 = 0) => {
//   return num1 + num2 > 100 ? "100を超えました" : "100以内です";
// };
// console.log(checkSum(99, 2));

/**
 * 論理演算子の本当の意味
 */
//一般的な使い方
// const flag1 = true;
// // const flag2 = false;
// const flag2 = true;

// if (flag1 || flag2) {
//   console.log("1か2はtrue");
// }
// if (flag1 && flag2) {
//   console.log("1も2もtrue");
// }

// 「||」は左側がfalseとなる時、右側を返す
// const num = null;
// const num = 100;
// const fee = num || "金額未設定です"; //numがnullの時はfalseを返すので、文字列が入る
// console.log(fee);

// 「&&」は左側がtrueとなる時、右側を返す
// const num2 = null;
const num2 = 100;
const fee2 = num2 && "何か設定されました";
console.log(fee2);
