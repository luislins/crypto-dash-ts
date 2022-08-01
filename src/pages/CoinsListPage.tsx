import { useState } from "react";
import { CryptoCard, SelectWithFetch } from "../components";

export function CoinsListPage() {
  //variables
  const [coinsList, setCoinsList] = useState<string[]>([
    "bitcoin",
    "ethereum",
    "the-sandbox",
    "tether",
    "mm72",
    "dogecoin",
    "shiba-inu",
    "tron",
  ]);

  return (
    <div className="mt-14 ml-5 mr-5">
      <div className="bg-secondary-dark-bg p-3 m-4">
        <SelectWithFetch
          selectedValue={(coin: string) => {
            setCoinsList([...coinsList, coin]);
          }}
        />
      </div>
      <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-4 p-4">
        {coinsList.map((item, index) => (
          <CryptoCard key={index} name={item} />
        ))}
      </div>
    </div>
  );
}
