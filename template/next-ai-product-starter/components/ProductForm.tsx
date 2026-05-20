export function ProductForm() {
  return (
    <section className="mx-auto mb-16 max-w-3xl rounded-3xl bg-white p-6 shadow-sm ring-1 ring-emerald-100">
      <h2 className="text-2xl font-black text-[#062448]">無料AI診断フォーム</h2>
      <p className="mt-2 text-slate-600">まずはモックで動かし、あとからAI APIを接続します。</p>
      <form className="mt-6 grid gap-4">
        <label className="grid gap-2 font-bold">
          業種・テーマ
          <input className="rounded-xl border border-slate-200 p-3" placeholder="例: 整体院、採用、営業資料" />
        </label>
        <label className="grid gap-2 font-bold">
          今困っていること
          <textarea className="min-h-32 rounded-xl border border-slate-200 p-3" placeholder="例: 問い合わせ後の提案作成に時間がかかる" />
        </label>
        <button type="button" className="rounded-xl bg-[#008f68] px-5 py-4 font-black text-white">
          AI診断結果を見る
        </button>
      </form>
      <div className="mt-6 rounded-2xl bg-[#f0fbf7] p-4">
        <h3 className="font-black">モック結果</h3>
        <p className="mt-2 text-slate-700">
          ここにAIの診断結果を表示します。最初は固定文でOK。次にAPI接続へ進みます。
        </p>
      </div>
    </section>
  );
}
