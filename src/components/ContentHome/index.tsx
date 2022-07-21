import { Container, ContainerFilters } from "./style";

export const ContentHome = () => {
  return (
    <Container>
      <ContainerFilters>
        <input type="text" placeholder="Search for a country..." />
        <select name="" id="">
          <option value="" disabled>
            Filter by region
          </option>
          <option value="">África</option>
          <option value="">Ásia</option>
          <option value="">América</option>
          <option value="">Europa</option>
          <option value="">Oceania</option>
        </select>
      </ContainerFilters>
      <div></div>
    </Container>
  );
};
