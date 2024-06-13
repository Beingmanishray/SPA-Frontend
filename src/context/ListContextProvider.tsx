import React, { FC, useState } from 'react';
import { ListContext } from './ListContext';

interface ListContextProviderProps {
    children: React.ReactNode
}

const ListContextProvider: FC<ListContextProviderProps> = ({children}) => {
    const [list, setList] = useState<any>();

    const updateList = (newData: any) => {
        setList(newData);
      };

  return (
    <ListContext.Provider value={{list, updateList}}>
      {children}
    </ListContext.Provider>
  )
}

export default ListContextProvider
