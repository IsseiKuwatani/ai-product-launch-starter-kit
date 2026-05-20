---
name: setup
description: Next.js AI Product Starterを初回起動し、ユーザー自身のAIプロダクト案に合わせて1画面MVPへ編集するためのClaude Code setup skill。
---

# Setup Skill — Next.js AI Product Starter

> 閲覧用コピーです。実際にClaude Codeから使う本体は `template/next-ai-product-starter/.claude/skills/setup/SKILL.md` に入っています。

## 使う場面

ユーザーがテンプレートをClaude Codeで開き、`/setup` または「セットアップして」と依頼したときに使います。
目的は、ダウンロード済み/コピー済みのテンプレートをその場で起動し、ユーザーの事業アイデアに合わせて最小MVPへ整えることです。

## セットアップ手順

### 1. 現在状態の確認

```bash
pwd
ls
node -v
npm -v
```

主要ファイルを確認します。

- `package.json`
- `app/page.tsx`
- `components/ProductForm.tsx`
- `app/globals.css`
- `README.md`

### 2. 依存関係のインストール

`node_modules` が無ければ実行します。

```bash
npm install
```

### 3. ユーザーに3つだけ質問する

1. 作りたいサービス名は何ですか？
2. 誰のどんな課題を解決しますか？
3. ユーザーに何を入力してもらい、どんな結果を返したいですか？

### 4. 1画面MVPへ編集する

- `app/page.tsx`: ヒーローコピー、説明文、CTA、利用ステップ
- `components/ProductForm.tsx`: 入力項目、ボタン文言、モック結果
- `app/globals.css`: 必要に応じて色・余白・スマホ表示

ルール:

- 1回目はAI API接続まで広げすぎない
- まずモック結果で「体験」が伝わる状態にする
- APIキーや秘密情報はコードに直書きしない
- `.env.local` が必要な場合だけ作る

### 5. 起動して確認する

```bash
npm run dev
```

確認項目:

- `http://localhost:3000` が開く
- スマホ幅でも崩れない
- フォーム入力 → 結果表示まで動く
- CTA文言が具体的
- ユーザーが次に何をすればいいか分かる

### 6. 次の改善案を3つだけ出す

例:

1. AI APIを接続して本物の結果生成にする
2. 相談・予約・LINE登録などの導線を追加する
3. 利用者の入力内容を保存するDBを追加する

## 完了条件

- ローカルで起動できる
- ユーザーのサービス名・対象者・課題が画面上に反映されている
- 入力フォームとモック結果が動く
- READMEに起動方法と次にやることが書かれている
