## How to node

Node.jsとサーバーサイドjavascriptの  
開発方法を説明します。

  

## Install

先ずnode.jsをインストールします。

各環境に合わせて[ダウンロード](https://nodejs.org/en/download/)してください。

インストールはいつも通りボタンを押すだけです。

    

## インストールの確認 

コマンドラインから`node -v`でバージョンが表示されれば
インストールは成功。  
```shell
~ $node -v
v0.10.25
```

  

## Let's node

適当なフォルダーの下に`hello.js`を作ります。  
下記の１行を追加します。

```javascript
console.log( 'I am noding.' );
```

それからコマンドラインから下記のように実行します。

```sh
$node hello.js 
I am noding.
```

`console.log`関数に渡した文字列が出力されれば完璧です。

  

## Node more

もう少しプログラムぽっいものを書いてみましょう。
_fileList.js_というファイルを作成し下記を書き込みます。

```js
var fs, readPath, files;

fs = require( 'fs' );
readPath = process.argv[2];

files = fs.readdirSync( readPath );

console.log( 'files', files );
```

    

## RUN
_fileList.js_はコマンドラインから渡された  
ディレクトリーの配下のファイル一覧を  
読み込んで表示します。  
では実行してみましょう。

```sh
$node fileList.js D:¥apps¥howtonode¥
files [
  'README.md',
  'css',
  'img',
  'index.html',
  'js',
  'lib',
  'node_modules',
  'package.json' ]
```

    

## About require

_require_関数は_node.js_の組込みあるいは外部の  
ライブラリーの取込を行います。  
上記の_fs_は_FileSystem_の略で_node.js_の組込み機能です。  
node.jsの組込みライブラリー一覧は[こちらへ](https://nodejs.org/api/)  
いつの間（９月８日）に_v4.0.0_になった模様。

    

## About process

_process_はグローバルオブジェクトで  
宣言しなくても使えます。  
主な使い方は下記の用になります。
 - *process.argv[2]* コマンドライン引数を取得
 - *process.exit()* プログラムの終了　
 - *process.env.APP_VER* 環境変数の参照

processの詳細は[こちらへ](https://nodejs.org/api/process.html)  

