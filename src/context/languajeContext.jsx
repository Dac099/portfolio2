import { createContext, useState } from "react";

export const LanguageContext  = createContext();

export const LanguageContextProvider = (props) => {
  const [ lang, setLang ] = useState('en');

  return (
    <LanguageContext.Provider
      value={{
        lang,
        setLang
      }}
    >
      {props.children}
    </LanguageContext.Provider>
  );
}