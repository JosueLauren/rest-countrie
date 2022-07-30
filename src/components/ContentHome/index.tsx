import { useEffect, useState } from "react";
import { Container, ContainerFilters } from "./style";

import { Link } from "react-router-dom";

import { Spinner } from "./../spinner";

interface IinfoCountries {
  flags: {
    png: string;
    svg: string;
  };
  name: {
    common: string;
  };
  population: number;
  region: string;
  capital: string[];
}

export const ContentHome = () => {
  const [selectFilter, setSelelctFilter] = useState("");
  const [inputFilter, setInputFilter] = useState("");
  const [countries, setCountries] = useState<IinfoCountries[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchCoutries() {
      try {
        setIsLoading(true);
        const response = await fetch("https://restcountries.com/v3.1/all");
        const data = await response.json();
        setCountries(data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchCoutries();
  }, []);

  function filterCoutries() {
    if (selectFilter.trim() === "" && inputFilter.trim() === "") {
      return countries;
    }

    const coutriesFilterSelect = countries?.filter(
      (country) => country.region === selectFilter
    );

    let countriesFiltered = null;

    if (coutriesFilterSelect?.length !== 0) {
      countriesFiltered = coutriesFilterSelect?.filter((country) =>
        country.name.common.toLowerCase().includes(inputFilter)
      );
    } else {
      countriesFiltered = countries?.filter((country) =>
        country.name.common.toLowerCase().includes(inputFilter)
      );
    }

    return countriesFiltered;
  }

  return (
    <Container>
      <ContainerFilters>
        <input
          type="text"
          value={inputFilter}
          placeholder="Search for a country..."
          onChange={(e) => setInputFilter(e.target.value)}
        />
        <select onChange={(e) => setSelelctFilter(e.target.value)}>
          <option value="">Filter by region</option>
          <option value="Africa">África</option>
          <option value="Asia">Ásia</option>
          <option value="Americas">América</option>
          <option value="Europe">Europa</option>
          <option value="Oceania">Oceania</option>
        </select>
      </ContainerFilters>
      <div className="container-coutries">
        {isLoading && <Spinner />}
        {filterCoutries()?.map((country) => {
          return (
            <Link
              key={country.name.common}
              to={`/details/${country.name.common}`}
            >
              <div>
                <div>
                  <img src={country.flags.svg} alt="bandeira de um país" />
                </div>
                <h3>{country.name.common}</h3>
                <div>
                  <p>
                    Population: <span>{country.population}</span>
                  </p>
                  <p>
                    Region: <span>{country.region}</span>
                  </p>
                  <p>
                    Capital: <span>{country.capital}</span>
                  </p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </Container>
  );
};
