# Next.js AI Product Starter

AI WebサービスMVPを作るための最小テンプレートです。

## 使い方

```bash
cd template/next-ai-product-starter
npm install
npm run dev
```

ブラウザで `http://localhost:3000` を開きます。

## Claude Codeで /setup する

このテンプレートにはClaude Code用のセットアップ手順を同梱しています。

- `.claude/skills/setup/SKILL.md`
- `.claude/commands/setup.md`

Claude Codeでこのフォルダを開いて `/setup` を実行すると、Supabase/Vercel/外部DBを前提にせず、以下を順番に進められます。

1. Node/npm・依存関係・主要ファイルの確認
2. 作りたいサービスについて5問だけヒアリング
3. トップページとフォームを1画面MVPに編集
4. `npm run dev` で起動確認
5. 次にやる改善案を3つ提案

```bash
cd template/next-ai-product-starter
claude
# Claude Code内で /setup
```

## 次にやること

1. トップページのコピーを自分のサービス向けに変更
2. フォーム項目を変更
3. モック結果を作る
4. AI API接続を追加
5. 相談/予約導線を追加
