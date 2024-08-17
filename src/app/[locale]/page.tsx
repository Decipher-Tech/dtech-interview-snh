import Header from "./header";
import Cards from "./components/Cards";
import OtherLanguageCards from "./components/OtherLanguageCards";
// import { useLocale } from 'next-intl';
import Loader from "./components/Loader";
import fetchPostData from "./fetch_data";

export default async function Home() {
  // const locale = useLocale();
  const locale = "en";
  const isEnglish = locale === "en";
  // const isLoading = locale === '';

  const data = await fetchPostData();
  console.log(data);
  if (!data) return null;

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-10 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white">
      {/* Header */}
      <Header />
      <section className="flex flex-col items-center justify-center w-full max-w-4xl text-gray-800 p-8 mt-10">
        {/* {isEnglish ? (
          <div className="english w-full">
            <Cards data={data} />
          </div>
        ) : (
          <div className="other-lang w-full">
            <OtherLanguageCards />
          </div>
        )} */}
        <div className="english w-full">
          <Cards data={data} />
        </div>
      </section>
      {/* Content
      {isLoading ? (
        <Loader />
      ) : (
        <section className="flex flex-col items-center justify-center w-full max-w-4xl text-gray-800 p-8 mt-10">
          {isEnglish ? (
            <div className="english w-full">
              <Cards data={data}/>
            </div>
          ) : (
            <div className="other-lang w-full">
              <OtherLanguageCards />
            </div>
          )}
        </section>
      )} */}
    </main>
  );
}
