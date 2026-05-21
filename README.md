# AI Webサービス制作スターターキット

AIプロダクト立ち上げラボ by ツギノメ の無料配布キットです。

## このキットでできること

非エンジニアの方が、Claude Code / Codex を使って「人に見せられるAI Webサービスの最初の形」を作り始めるためのスターターセットです。

## 配布物

1. 導入マニュアル HTML版
   - [Claude Code Mac版](docs/manuals/claude-code-mac.html)
   - [Claude Code Windows版](docs/manuals/claude-code-windows.html)
   - [Codex Mac版](docs/manuals/codex-mac.html)
   - [Codex Windows版](docs/manuals/codex-windows.html)
   - [はじめての人向けヘルプ・FAQ](docs/help.html)
2. [困ったときのヘルプFAQ](docs/help.html)
3. [/setup対応 skill の説明ページ](docs/manuals/setup-skill.html)
4. [開発プロンプト集 順番に貼る版 HTML](prompts/development-prompts.html)
   - まずは自分のPCで動く構成
   - 自分のPCで動くMVP制作
   - localStorage / JSON / CSV保存
   - AI API追加前の設計
   - LP・フォーム・結果画面改善
5. [skills・エージェント設計集](skills/03-skills-and-agents.md)
6. [AIプロダクト企画・要件定義ワークシート](docs/04-product-planning-worksheet.md)
7. [制作テンプレート: Next.js AI Product Starter](template/next-ai-product-starter/)

## おすすめの使い方

Claude Codeを使う場合は `/setup`、Codexを使う場合はヘルプ/プロンプト集のリンクやファイルパスを渡して進めます。どちらを使うか迷う場合は、今契約しているAIで始めてOKです。


1. まず `docs/04-product-planning-worksheet.md` で作りたいものを1ページに整理する
2. 迷ったら `docs/help.html` で、Mac/WindowsとClaude Code/Codexの選び方を確認する
3. Claude Code / Codex の導入マニュアルに沿って開発環境を整える
4. `template/next-ai-product-starter/` を自分のPCまたはリポジトリで開く
5. Claude Codeで `/setup` を実行する。Codexの場合は `docs/help.html` や `prompts/02-development-prompts.md` を渡して「この手順で進めて」と依頼する
6. 3つの質問に答えて、1画面MVPへ編集する
7. 必要に応じて `prompts/02-development-prompts.md` のプロンプトや `skills/03-skills-and-agents.md` を使う

## /setup について

制作テンプレート内に以下を同梱しています。

- `template/next-ai-product-starter/.claude/skills/setup/SKILL.md`
- `template/next-ai-product-starter/.claude/commands/setup.md`

Claude Codeでテンプレートを開き、`/setup` を実行すると、初回起動・ヒアリング・最初のWebサービス作成まで進められます。まずは自分のPCで動く形を優先します。

```bash
cd template/next-ai-product-starter
npm install
claude
# Claude Code内で /setup
```

## 個別相談

自分のテーマで8週間以内に形にできるか相談したい方はこちら。

https://timerex.net/s/tsuginome/da96046c
