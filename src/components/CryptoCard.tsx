import axios from "axios";
import { useEffect, useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import NumberFormat from "react-number-format";

interface CryptoCardProps {
  name: string;
  addSetSelectedCoinsList: (coinToRemove: string) => void;
}
interface ICoinsData {
  symbol: string;
  icon_image: string;
  name: string;
  current_price: string;
  percentage24h: string;
  low24h: string;
  high24h: string;
  id: string;
}

export function CryptoCard({ name, addSetSelectedCoinsList }: CryptoCardProps) {
  const ICoinsDataInitialState: ICoinsData = {
    symbol: "",
    icon_image: "",
    name: "",
    current_price: "",
    percentage24h: "",
    low24h: "",
    high24h: "",
    id: "",
  };
  const [coinsData, setCoinsData] = useState<ICoinsData>(
    ICoinsDataInitialState
  );
  const [isLoading, setLoading] = useState(true);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    axios
      .get("https://api.coingecko.com/api/v3/coins/" + name)
      .then((response) => response.data)
      .then((res) => {
        var coin: ICoinsData = ICoinsDataInitialState;
        if (res.id !== undefined) {
          coin.id = res.id;
        }
        if (res.symbol !== undefined) {
          coin.symbol = res.symbol;
        }
        if (res?.image.small !== undefined) {
          coin.icon_image = res.image.small;
        }
        if (res.name !== undefined) {
          coin.name = res.name;
        }
        if (res?.market_data?.current_price.brl !== undefined) {
          coin.current_price = res.market_data.current_price.brl;
        }
        if (res?.market_data?.price_change_percentage_24h !== undefined) {
          coin.percentage24h = res.market_data.price_change_percentage_24h;
        }
        if (res?.market_data?.low_24h.brl !== undefined) {
          coin.low24h = res.market_data.low_24h.brl;
        }

        if (res?.market_data?.high_24h.brl !== undefined) {
          coin.high24h = res.market_data.high_24h.brl;
        }
        setCoinsData(coin);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  const onButtonClick = (event: React.MouseEvent<HTMLElement>) => {
    addSetSelectedCoinsList(event.currentTarget.id);
    setIsClicked(!isClicked);
  };
  const classCard = isClicked
    ? "border-1 border-white-900 grid grid-cols-3 text-gray-200 bg-secondary-dark-bg rounded-2xl p-3"
    : "grid grid-cols-3 text-gray-200 bg-secondary-dark-bg rounded-2xl p-3";
  if (
    coinsData.icon_image != "" &&
    coinsData.name != "" &&
    coinsData.symbol != "" &&
    coinsData.current_price != "" &&
    coinsData.percentage24h != "" &&
    coinsData.low24h != "" &&
    coinsData.high24h != ""
  ) {
    return (
      <div id={coinsData.id} onClick={onButtonClick} className={classCard}>
        <div className="col-span-1 justify-self-center self-center">
          <img
            src={coinsData.icon_image}
            className="hover:drop-shadow-xl rounded-full"
          />
        </div>

        <div className="col-span-2 text-2xl ml-3">
          <p>{coinsData.name}</p>
          {/* <button onClick={onButtonClick}>X</button> */}
          <p>({coinsData.symbol.toUpperCase()})</p>
          <div className="flex items-center md:flex-row md:place-content-start sm:flex-col sm:place-content-around sm:justify-self-center">
            <p className="text-lg font-semibold">
              <NumberFormat
                decimalScale={10}
                value={coinsData.current_price}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"R$ "}
              />
            </p>
            <p
              className={`text-sm text-${
                parseInt(coinsData.percentage24h) > 0 ? "green" : "red"
              }-500 ml-2`}
            >
              <NumberFormat
                value={coinsData.percentage24h}
                displayType={"text"}
                decimalScale={2}
                suffix={" %"}
              />
            </p>
          </div>
          <div className="flex md:flex-row items-center md:place-content-start sm:flex-col sm:place-content-around sm:justify-self-center">
            <p className="text-sm text-gray-400 mt-1">
              <NumberFormat
                decimalScale={10}
                value={coinsData.low24h}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"R$ "}
              />
            </p>
            <div>&nbsp;</div>
            <p className="text-sm text-gray-400 mt-1">
              <NumberFormat
                decimalScale={10}
                value={coinsData.high24h}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"R$ "}
              />
            </p>
          </div>
        </div>
      </div>
    );
  } else if (isLoading) {
    return (
      <div className="h-32 text-gray-200 rounded-2xl flex justify-center items-center">
        <ThreeDots height="80" width="80" color="white" />
      </div>
    );
  } else {
    return null;
  }
}
