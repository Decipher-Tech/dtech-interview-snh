import Header from "./header";
import Cards from "./components/Cards";
import OtherLanguageCards from "./components/OtherLanguageCards";
import { useLocale } from 'next-intl';
import Loader from "./components/Loader";

export default function Home() {
  const locale = useLocale();
  const isEnglish = locale === 'en';
  const isLoading = locale === ''; 

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-10 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white">
      {/* Header */}
      <Header />

      {/* Content */}
      {isLoading ? (
        <Loader />
      ) : (
        <section className="flex flex-col items-center justify-center w-full max-w-4xl text-gray-800 p-8 mt-10">
          {isEnglish ? (
            <div className="english w-full">
              <Cards />
            </div>
          ) : (
            <div className="other-lang w-full">
              <OtherLanguageCards />
            </div>
          )}
        </section>
      )}
    </main>
  );
}
