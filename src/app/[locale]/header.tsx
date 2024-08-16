"use client";
import { useRouter } from "next/navigation";
import { ChangeEvent, useEffect, useState, useTransition } from "react";
import { useLocale } from "next-intl";

const Header = () => {
  const [savedLocale, setSavedLocale] = useState<string | null>(null);
  const locale = useLocale();
  const router = useRouter(); 
  const [isPending, startTransition] = useTransition();

  // Only access localStorage when the component has mounted
  useEffect(() => {
    const storedLocale = localStorage.getItem("selectedRoute");
    setSavedLocale(storedLocale);

    if (storedLocale && locale !== storedLocale) {
      router.push(`/${storedLocale}`);
    }
  }, [locale, router]);

  const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedRoute = e.target.value;
    const fullRoute = `/${selectedRoute}`; 
    console.log(fullRoute);

    // Save the selected route in localStorage
    localStorage.setItem('selectedRoute', selectedRoute);

    startTransition(() => {
      router.push(fullRoute); 
    });
  };

  return (
    <div className="flex flex-row items-center w-full gap-2 justify-end text-sm">
      <select
        className="border border-transparent rounded-md p-2 w-1/4 bg-white text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500"
        name="localization"
        id="localization"
        defaultValue={savedLocale || locale}
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
