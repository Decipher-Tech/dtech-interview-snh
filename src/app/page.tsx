import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10">
      <div className="flex flex-row items-center w-full gap-2 justify-end text-sm">
        <label htmlFor="localization" >
          Choose your language:
        </label>
        <select
          className="border border-gray-300 rounded-md p-2 w-1/6"
          name="localization"
          id="localization"
        >
          <option value="en">English</option>
          <option value="fr">French</option>
        </select>
      </div>
      <div className="flex flex-col items-center justify-center w-full">
        {/* Body contents from API will go here */}
      </div>
    </main>
  );
}
