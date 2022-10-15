import React, {useState, createContext } from 'react';
;export const DeleteContext = createContext("")


const ContextProvider = ( { children }) => {

    const[dlttask, setDlttask] = useState(false);
  return (
    <>
        <DeleteContext.Provider value={{dlttask, setDlttask}}>
            {children}
        </DeleteContext.Provider>
    </>
  )
}

export default ContextProvider