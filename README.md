# cid-tools-home
huraicid's tools main page.

## 概要
このリポジトリは Nuxt 3 をベースにしたシンプルなサイトテンプレートです。TypeScript と Tailwind CSS を使用しています。開発用のスクリプトや設定ファイルが含まれています。

## 主要ファイル
- package.json — 依存関係とスクリプト
- nuxt.config.ts — Nuxt の設定
- tsconfig.json — TypeScript 設定
- tailwind.config.ts — Tailwind CSS 設定
- app/app.vue — アプリルート
- app/pages/index.vue — サンプルページ
- app/assets/css/main.css — グローバル CSS
- public/robots.txt — 公開用ファイル
- LICENSE — ライセンス

## 開発手順
1. 依存関係をインストール:
```sh
npm install
```
2. 開発サーバーを起動:
```sh
npm run dev
```
3. ビルド:
```sh
npm run build
```
4. 生成済みサイトのプレビュー:
```sh
npm run preview
```
スクリプトの詳細は `package.json` を参照してください。

## 備考
- Tailwind は Vite プラグイン経由で `nuxt.config.ts` に設定されています。
- TypeScript はstrictモードが有効です。`tsconfig.json` と `nuxt.config.ts` を確認してください。
- 開発中に生成されるファイルは `.nuxt/` に出力されます。

