import { ProductForm } from '../components/ProductForm';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7fcfa] text-[#062448]">
      <section className="mx-auto max-w-5xl px-6 py-14">
        <p className="mb-4 inline-flex rounded-full bg-[#dff7ef] px-4 py-2 text-sm font-bold text-[#008f68]">
          AI Webサービス MVP Starter
        </p>
        <h1 className="text-4xl font-black leading-tight md:text-6xl">
          あなたのノウハウを、<br />AI Webサービスの形にする
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700">
          入力フォーム、AI結果ページ、相談導線までを小さく作るためのスターターテンプレートです。
        </p>
      </section>
      <ProductForm />
    </main>
  );
}
