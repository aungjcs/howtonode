## About NPM

*Node.js*にはは*npm*というパッケージ管理システムが  
組込まれており、コマンドラインから簡単に  
パッケージの追加（公開）ができるようになっています。  

*Node.js*インストール時に追加されています。

```bash
$ npm -v
2.1.6
```
    

## NPM

https://www.npmjs.com/

![npm](./img/howtonode/npm.png)

  

## Install from NPM

早速、*underscore*を追加してみます。

```bash
$ npm install underscore
info attempt registry request try #1 at 22:38:25
http request GET https://registry.npmjs.org/underscore
http 200 https://registry.npmjs.org/underscore
underscore@1.8.3 ../node_modules/underscore
```

完了すればディレクトリに*node_modules*フォルダーと  
その配下に*underscore*のフォルダーができているはず。

![npm](./img/howtonode/install_underscore.png)

    

## Using NPM package

では*npm*のパッケージを使ってみます。  
*pkg01.js*の新規ファイルに下記を書き込み実行します。

```js
// pkg01.js
var _, arr;

_ = require( 'underscore' );
arr = ['red', 'green', 'blue'];

console.log( 'contains green:', _.contains( arr, 'green' ) );
console.log( 'contains white:', _.contains( arr, 'white' ) );

```

実行!!

```bash
$ node pkg01.js 
contains green: true
contains white: false
```

組込パッケージと同じ感覚で使用可能。

  

# Dive into npm

`npm <option> [コマンド] パッケージ`

*npm*のよく使われるコマンド

```bash
# パッケージの追加
npm install sqlite3

# パッケージの削除
npm uninstall sqlite3

# パッケージ一覧の表示
npm ls

# webpackというパッケージを検索
npm search webpack
```

詳細は*npm -h*か[ドキュメント](https://docs.npmjs.com/)

  

つづく


