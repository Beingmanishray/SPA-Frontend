import React from "react";

// Define the type for your context data
interface ListContextType {
  list: any[];
  updateList: (newData: any[]) => void;
}
// Create a context with initial data
export const ListContext = React.createContext<ListContextType>({
  list: [],
  updateList: () => {},
});
