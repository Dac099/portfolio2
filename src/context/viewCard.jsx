import { createContext, useState } from "react";

export const ViewCardContext = createContext();

export function ViewCardContextProvider(props){
  const [ currentCard, setCurrentCard ] = useState(null);

  return(
    <ViewCardContext.Provider
      value={{
        currentCard,
        setCurrentCard
      }}
    >
      {props.children}
    </ViewCardContext.Provider>
  );
}