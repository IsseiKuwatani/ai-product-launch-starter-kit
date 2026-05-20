import './globals.css';

export const metadata = {
  title: 'AI Webサービス MVP Starter',
  description: 'AI Webサービス制作テンプレート',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="ja"><body>{children}</body></html>;
}
