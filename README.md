# 素因数分解アプリ

シンプルなHTML + CSS + JavaScriptで作った素因数分解のWebアプリです。

## 使い方

1. このリポジトリをローカルにクローンします。
2. `index.html` をブラウザで開くか、ローカルサーバーを起動します。
3. 整数を入力して「分解」ボタンを押すと、素因数分解の結果が表示されます。

## GitHub Pages で公開する方法

1. GitHub で新しいリポジトリを作成します。
2. このフォルダの内容をそのリポジトリに push します。
3. GitHub のリポジトリ画面で `Settings` → `Pages` を開きます。
4. `Source` を `Deploy from a branch` にし、branch を `main`、folder を `/ (root)` に設定します。
5. 保存すると、数十秒後に GitHub Pages の URL が発行されます。

## 例

- `60` → `2 × 2 × 3 × 5`
- `36` → `2 × 2 × 3 × 3`

## ファイル構成

- `index.html` : アプリの構造
- `style.css` : スタイル
- `script.js` : 素因数分解のロジック
