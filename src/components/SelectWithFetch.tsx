import axios from "axios";
import { useEffect, useState } from "react";
import Select, { StylesConfig } from "react-select";

type SelectOptionType = { value: string; label: string };

type CoinType = {
  id: string;
  name: string;
  symbol: string;
  market_cap_rank: number;
  thumb: string;
  large: string;
};

type IsMulti = false;

interface SelectWithFetchProps {
  selectedValue: (coin: string) => void;
}

export function SelectWithFetch({ selectedValue }: SelectWithFetchProps) {
  const [options, setOptions] = useState<SelectOptionType[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [coinSelected, setCoinSelect] = useState("");

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      fetchCoins(searchTerm);
    }, 500);

    return () => clearTimeout(delayDebounceFn);
  }, [searchTerm]);

  const fetchCoins = (option: string) => {
    if (option != "") {
      axios
        .get("https://api.coingecko.com/api/v3/search?query=" + option)
        .then((response) => response.data)
        .then((res) => {
          if (res?.coins !== undefined) {
            var coinsFetched: SelectOptionType[] = [];
            res?.coins.map((coin: CoinType, index: number) => {
              coinsFetched.push({ label: coin.name, value: coin.id });
            });
            setOptions(coinsFetched);
          } else {
            setOptions([]);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const handleInputChange = (option: string | null) => {
    if (option) {
      setSearchTerm(option);
    }
  };

  const handleSelectionChange = (option: SelectOptionType | null) => {
    if (option) {
      setCoinSelect(option.value);
    }
  };

  const onButtonClick = () => {
    console.log(coinSelected);
    if (coinSelected) {
      selectedValue(coinSelected);
    }
  };

  const selectStyle: StylesConfig<SelectOptionType, IsMulti> = {
    control: (defaultStyles) => {
      return {
        ...defaultStyles,
        width: "100%",
        border: "1px solid #ccc",
        borderRadius: "50px",
        padding: "10px 100px 10px 20px",
        lineHeight: "1",
        boxSizing: "border-box",
        outline: "none",
        backgroundColor: "#20232a",
        color: "#08699B",
      };
    },
    singleValue: (base) => ({
      ...base,
      color: "white",
    }),
    input: (base) => ({
      ...base,
      color: "white",
    }),
    placeholder: (defaultStyles) => {
      return {
        ...defaultStyles,
        color: "white",
      };
    },
    option: (defaultStyles) => {
      return {
        ...defaultStyles,
        borderRadius: "50px",
        color: "white",
        backgroundColor: "rgb(51 55 62)",
      };
    },
    menuList: (defaultStyles) => {
      return {
        ...defaultStyles,
        backgroundColor: "rgb(51 55 62)",
      };
    },
  };
  // Tentar fazer com asyncSelect
  return (
    <div className="custom-search">
      <Select
        components={{
          DropdownIndicator: () => null,
          IndicatorSeparator: () => null,
        }}
        options={options}
        styles={selectStyle}
        onChange={handleSelectionChange}
        onInputChange={handleInputChange}
      />
      <button
        onClick={onButtonClick}
        className="custom-search-botton bg-main-dark-bg text-white"
        type="submit"
      >
        +
      </button>
    </div>
  );
}
