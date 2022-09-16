import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { CryptoCard, SelectWithFetch } from "../components";

export function CoinsListPage() {
  const getTokens = () => {
    var coins = [];
    if (
      localStorage.getItem("coins") != null &&
      localStorage.getItem("coins") != undefined &&
      localStorage.getItem("coins") != ""
    ) {
      coins = JSON.parse(localStorage.getItem("coins") as string);
    }
    return coins;
  };

  const addSetSelectedCoinsList = (coinToRemove: string) => {
    if (selectedCoinsList.includes(coinToRemove)) {
      setSelectedCoinsList(
        selectedCoinsList.splice(selectedCoinsList.indexOf(coinToRemove), 1)
      );
    } else {
      setSelectedCoinsList([...new Set([...selectedCoinsList, coinToRemove])]);
    }
  };

  const removeToken = () => {
    var finalCoins = coinsList.filter(
      (i) => !selectedCoinsList.filter((y) => y === i).length
    );
    setCoinsList([]);
    setTimeout(() => {
      setCoinsList(finalCoins);
    }, 100);
    setSelectedCoinsList([]);
  };

  const [coinsList, setCoinsList] = useState<string[]>(getTokens());
  const [selectedCoinsList, setSelectedCoinsList] = useState<string[]>([]);

  useEffect(() => {
    localStorage.setItem("coins", JSON.stringify([...new Set(coinsList)]));
  }, [coinsList]);

  useEffect(() => {
    console.log(selectedCoinsList);
  }, [selectedCoinsList]);

  return (
    <div className="mt-14 ml-5 mr-5">
      <div className="flex items-center justify-between bg-secondary-dark-bg p-3 m-4">
        <div className="">
          <SelectWithFetch
            selectedValue={(coin: string) => {
              if (!localStorage.getItem("coins")?.includes(coin)) {
                console.log("inseriu " + coin);
                setCoinsList([...coinsList, coin]);
              }
            }}
          />
        </div>
        <div onClick={removeToken}>
          <button className="">
            <FontAwesomeIcon
              style={{
                color: "white",
                border: "1px solid white",
                borderRadius: "100px",
                width:"20px",
                padding:"5px"
              }}
              className="text-lg"
              icon={faTrash}
            />
          </button>
        </div>
      </div>
      <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-4 p-4">
        {coinsList?.map((item, index) => (
          <CryptoCard
            addSetSelectedCoinsList={addSetSelectedCoinsList}
            key={index}
            name={item}
          />
        ))}
      </div>
    </div>
  );
}
