# Claude Code / Codex 導入マニュアル

## 目的

このマニュアルは、AI Webサービス制作を始めるために、Claude Code / Codex を使える状態にするための手順書です。

## 前提

- MacまたはWindows PCを使える
- GitHubアカウントを持っている
- 作りたいサービスの大まかなアイデアがある
- プログラミング経験は必須ではありません

## まず理解すること

Claude Code / Codex は、あなたの代わりにコードを書く「開発パートナー」です。
ただし、丸投げではうまくいきません。

重要なのは次の3つです。

1. 何を作りたいかを小さく切る
2. 仕様を文章で渡す
3. 動いたものを確認して、修正指示を出す

## 開発の基本フロー

```txt
アイデア整理
→ 画面と機能を決める
→ 小さい実装単位に分ける
→ AIに実装させる
→ ブラウザで確認する
→ 修正する
→ GitHubに保存する
```

## GitHubの準備

1. GitHubアカウントを作る
2. 新しいリポジトリを作る
3. リポジトリ名は英数字で短くする
   - 例: `my-ai-diagnosis-app`
   - 例: `ai-booking-assistant`


## Claude Code / Codexへのログインは必ず行う

Claude Code / Codex は、インストールしただけでは使えません。最初にログインし、使える状態か確認してください。

### Claude Code の認証

```bash
claude auth login
claude auth status --text
claude doctor
```

Anthropic ConsoleのAPI課金で使う場合は、次を使います。

```bash
claude auth login --console
```

会社や組織のSSOを使う場合は、必要に応じて次を使います。

```bash
claude auth login --sso
```

### Codex CLI の認証

ChatGPT / OpenAIアカウントで使う場合は、次を実行します。

```bash
codex login
codex login status
```

OpenAI APIキーで使う場合は、キーをチャットやGitHubに貼らず、ターミナルから渡します。

Macの場合:

```bash
export OPENAI_API_KEY="sk-..."
printenv OPENAI_API_KEY | codex login --with-api-key
codex login status
```

Windows PowerShellの場合:

```powershell
$env:OPENAI_API_KEY="sk-..."
$env:OPENAI_API_KEY | codex login --with-api-key
codex login status
```

> APIキー、パスワード、アクセストークンはSlack・チャット・GitHub・ソースコードに貼らないでください。

## スターターキットは /setup で開始できます

Claude Codeでテンプレートを開いた場合は、最初に `/setup` と入力してください。

```bash
cd template/next-ai-product-starter
claude
# Claude Code内で /setup
```

Codexで進める場合は、`/setup` をslashとして実行できなくても、ヘルプページやプロンプト集のファイルパスを渡せば同じ方針で進められます。

```text
docs/help.html と prompts/02-development-prompts.md を読んで、まず1画面MVPを作る手順で進めてください。
必要なら skills/setup/SKILL.md も参考にしてください。
```

## Claude Code / Codexに渡す最初の依頼文

```md
あなたはAI Webサービスの開発パートナーです。
私は非エンジニアですが、以下のサービスを作りたいです。

# 作りたいサービス
[ここにサービス案を書く]

# 想定ユーザー
[誰向けか]

# 最初に作りたい機能
- [機能1]
- [機能2]
- [機能3]

# 制約
- まずはMVPとして小さく作る
- ブラウザで確認できるWebアプリにする
- 難しい専門用語は説明しながら進める

まず、MVPの機能一覧、画面構成、実装順序を提案してください。
```

## よくある失敗

### 失敗1: いきなり大きく作ろうとする

最初から全部入りにすると破綻します。
最初は「1人に見せて反応をもらえる形」を目指してください。

### 失敗2: 修正指示が曖昧

悪い例:

```txt
もっといい感じにして
```

良い例:

```txt
トップページの見出しを、30代の個人事業主向けに不安解消型のコピーへ変更してください。
ボタン文言は「無料で診断する」にしてください。
```

### 失敗3: 動作確認をしない

AIが作ったコードは必ず確認してください。

- ページが開くか
- ボタンが押せるか
- 入力フォームが動くか
- エラーが出ないか

## 8週間で進める場合の目安

| 週 | やること |
|---|---|
| 1 | アイデア整理、ユーザー課題、MVP決定 |
| 2 | 画面構成、要件定義、テンプレート準備 |
| 3 | トップページ/入力画面作成 |
| 4 | AI処理/診断/提案ロジック作成 |
| 5 | 結果画面、保存、問い合わせ導線 |
| 6 | LP/申込導線/LINE導線 |
| 7 | テスト、修正、説明資料作成 |
| 8 | 公開、ユーザーヒアリング、改善計画 |

## 次にやること

1. `04-product-planning-worksheet.md` を埋める
2. `template/next-ai-product-starter` をコピーする
3. `02-development-prompts.md` のプロンプトを使って実装を始める
