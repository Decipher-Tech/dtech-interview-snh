import { useTranslations } from "next-intl";

export default function OtherLanguageCards() {
  const t = useTranslations("HomePage");
  const posts = Array.from({ length: 10 }, (_, i) => ({
    title: t(`title${i + 1}`),
    body: t(`body${i + 1}`)
  }));

  return (
    <main className="flex flex-col items-center justify-center w-full gap-4">
      {posts.map((post, index) => (
        <div key={index} className="w-full bg-gradient-to-r from-blue-500 to-teal-500 rounded-lg p-6 shadow-lg transform transition-all hover:scale-105 hover:shadow-2xl"> {/* Adding a margin for spacing */}
          <h2 className="text-2xl font-bold text-white mb-3">{post.title}</h2>
          <p className="text-white text-opacity-90">{post.body}</p>
        </div>
      ))}
    </main>
  );
}
