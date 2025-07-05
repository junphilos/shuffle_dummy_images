## 概要

`.slider .slide img`タグに対して、サイズや比率がバラバラの画像を入れて、表示テストできる。`assets/js/script.js`のなかの`generateRandomImageUrl()`メソッドがコア機能なので、適当に移植して使ってください。

## トライ

まずは`index.html`をローカルでアクセスして、試してみてください。

## 使用ツール

Lorem Picsum  
https://picsum.photos/  
  
[Unsplash](https://unsplash.com/ja)の画像をURLで指定したサイズやエフェクター処理済みでデリバリーしてくれるツールです。

## 【おまけ機能】ランダムテキストについて

テキストは青空文庫から何個かピックアップした文章を、`BudouX`で分かち書きして、ランダムに連結しています。`assets/js/script.js`から調整可能です。

## 【付加情報】分かち書きテキストを増やす方法

- 青空文庫などの長文テキストを`assets/texts/{filename}.txt`に蔵置
- ターミナルで`task`と入力して分かち書きPythonを実行する
  - Googleの`BudouX`が蔵置したテキストファイルの文章を分かち書きして、Json形式にして、`assets/json/`内に保存してくれる
- `assets/js/script.js`のなかの`generateRandomText()`メソッドに置き直す。
