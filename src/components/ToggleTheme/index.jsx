import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import { Btn } from './styles';
import { useState } from 'react';

export default function ToggleTheme({handleClick}) {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleClick = () => {
    setIsDarkMode(!isDarkMode);
  };
  return (
    <Btn onClick={() => {
      toggleClick();
      handleClick();
    }}>
      {isDarkMode ? (
        <MdLightMode />
      ) : (
        <MdDarkMode />
      )}
    </Btn>
  );

}