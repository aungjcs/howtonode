## How to node

Node.jsとサーバーサイドjavascriptの開発方法を説明します。

--

## Install

先ずnode.jsをインストールします。
         
各環境に合わせて[ダウンロード](https://nodejs.org/en/download/)してください。

インストールはいつも通りボタンを押すだけです。

==

## インストールの確認 

コマンドラインから`node -v`でバージョンが表示されれば
インストールは成功。  
```shell
~ $node -v
v0.10.25
```
--

## Let's node

適当なフォルダーの下に`hello.js`を作ります。  
下記の１行を追加します。

```js
console.log( 'I am noding.' );
```

それからコマンドラインから下記のように実行します。

```sh
$node hello.js 
I am noding.
```

`console.log`関数に渡した文字が出力されれば完璧です。

