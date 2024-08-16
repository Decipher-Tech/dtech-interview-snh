"use client";
import { useRouter } from "next/navigation";
import { ChangeEvent, useTransition } from "react";
import { useLocale } from "next-intl";

const Header = () => {
    const [isPending, startTransition] =useTransition();
  const router = useRouter(); // Call useRouter to get the router instance
  const localActive = useLocale();
  const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedRoute = e.target.value;
    const fullRoute = `/${selectedRoute}`; 
    console.log(fullRoute);
    router.push(fullRoute); 
  };

  return (
    <div className="flex flex-row items-center w-full gap-2 justify-end text-sm">
      <select
        className="border border-transparent rounded-md p-2 w-1/4 bg-white text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500"
        name="localization"
        id="localization"
        defaultValue={localActive}
        onChange={onSelectChange}
        disabled={isPending}
      >
        <option value="en">English</option>
        <option value="fr">French</option>
        <option value="bn">Bengali</option>
        <option value="id">Indonesian</option>
      </select>
    </div>
  );
};

export default Header;
