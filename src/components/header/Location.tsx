"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Loading from "./search/Loading";

const Index = () => {
  const [userCountry, setUserCountry] = useState<string | null>(null);
  const [countryCode, setCountryCode] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
const fetchUserCountry = async () => {
  try {
    const response = await fetch("https://ipapi.co/json/");
    if (!response.ok) {
      throw new Error("Failed to fetch user country.");
    }
    const data = await response.json();

    setUserCountry(data.country_name);
    setCountryCode(data.country_code.toLowerCase());
  } catch (error) {
    console.error("Error fetching user country:", error);
    toast.error("Unable to fetch your location.");
  } finally {
    setIsLoading(false);
  }
};


  useEffect(() => {
    fetchUserCountry();
  }, []);

  return (
    <div className='flex items-center gap-2'>
      {isLoading && <Loading/>}
      {countryCode && (
        <Image
          src={`https://flagcdn.com/w40/${countryCode}.png`}
          alt={userCountry || "Country Flag"}
          width={40}
          height={40}
          className='object-cover w-8'
          aria-label={`Flag of ${userCountry}`}
        />
      )}
    </div>
  );
};

export default Index;
