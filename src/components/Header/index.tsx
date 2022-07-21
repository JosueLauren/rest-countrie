import { Container } from "./style";

import iconMoon from "./../../assets/icon-moon.svg";
import iconSun from "./../../assets/icon-sun.svg";

interface HeaderProps {
  setIsDarkTheme: (isDarkTheme: boolean) => void;
  isDarkTheme: boolean;
}

export const Header = ({ setIsDarkTheme, isDarkTheme }: HeaderProps) => {
  return (
    <Container>
      <p>Where in the world?</p>
      <button onClick={() => setIsDarkTheme(!isDarkTheme)}>
        <img
          src={isDarkTheme ? iconSun : iconMoon}
          alt="icone do sol e a lua"
        />
        {isDarkTheme ? "Light Mode" : "Dark Mode"}
      </button>
    </Container>
  );
};
