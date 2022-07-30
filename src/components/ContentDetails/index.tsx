import { Container } from "./style";

import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

interface IinfoCountry {
  flags: {
    png: string;
    svg: string;
  };
  name: {
    common: string;
    nativeName: {};
  };

  population: number;
  region: string;
  subregion: string;
  capital: string[];
  tld: string[];
  languages: {};
  currencies: {};
  borders: string[];
}

interface InameNative {
  common: string;
  official: string;
}

interface Icurrance {
  name: string;
  symbol: string;
}

export const ContentDetails = () => {
  const { nameCountry } = useParams();
  const [country, setCountry] = useState<IinfoCountry[]>();
  const [namesBorders, setNameBorders] = useState<string[]>();

  useEffect(() => {
    async function fecthCountry() {
      try {
        const response = await fetch(
          `https://restcountries.com/v3.1/name/${nameCountry}?fullText=true`
        );
        const data = await response.json();
        setCountry(data);
        await getCountriesBorders(data[0].borders);
      } catch (error) {
        console.log(error);
      }
    }

    fecthCountry();
  }, [nameCountry]);

  async function getCountriesBorders(arr: string[] = []) {
    let ulrBase = "https://restcountries.com/v3.1/alpha?codes=";

    if (arr.length > 0) {
      let urlFinal = arr.reduce((acc, ele) => {
        acc += `${ele},`;
        return acc;
      }, ulrBase);

      const response = await fetch(urlFinal);
      const data: IinfoCountry[] = await response.json();

      const namesBorders = data.map((country) => {
        return country.name.common;
      });

      setNameBorders(namesBorders);
    } else {
      setNameBorders([]);
    }
  }

  function getCurrance(obj: any) {
    const curranceAtual: Icurrance[] = Object.values(obj);
    return curranceAtual[0].name;
  }

  function getLanguages(obj: any) {
    const arrLanguages: string[] = Object.values(obj);

    return arrLanguages.join(", ");
  }

  function getNativeName(obj: any) {
    const arrValuesNameNative: InameNative[] = Object.values(obj);

    const nameNative: InameNative =
      arrValuesNameNative[arrValuesNameNative.length - 1];

    return nameNative?.common;
  }

  return (
    <Container>
      <Link to="/">&larr; Back</Link>
      {country?.map((infoCountry) => {
        return (
          <div key={infoCountry.name.common}>
            <img src={infoCountry.flags.svg} alt="bandeira de um país" />
            <div>
              <h3>{infoCountry.name.common}</h3>
              <div>
                <div>
                  <p>
                    Native Name:
                    <span>{getNativeName(infoCountry.name.nativeName)}</span>
                  </p>
                  <p>
                    Population:
                    <span>{infoCountry.population}</span>
                  </p>
                  <p>
                    Region:
                    <span>{infoCountry.region}</span>
                  </p>
                  <p>
                    Subi Region:
                    <span>{infoCountry.subregion}</span>
                  </p>
                  <p>
                    Capital:
                    <span>{infoCountry.capital}</span>
                  </p>
                </div>
                <div>
                  <p>
                    Top Level Domain:
                    <span>{infoCountry.tld[0]}</span>
                  </p>
                  <p>
                    Currance:
                    <span>{getCurrance(infoCountry.currencies)}</span>
                  </p>
                  <p>
                    Languagens:
                    <span>{getLanguages(infoCountry.languages)}</span>
                  </p>
                </div>
              </div>
              <p>
                Border Countries:
                {namesBorders &&
                  namesBorders?.map((namBborder, index) => {
                    return (
                      <Link to={`/details/${namBborder}`} key={index}>
                        {namBborder}
                      </Link>
                    );
                  })}
              </p>
            </div>
          </div>
        );
      })}
    </Container>
  );
};
