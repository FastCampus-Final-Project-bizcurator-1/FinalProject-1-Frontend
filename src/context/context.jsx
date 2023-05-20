import { createContext, useContext, useState } from 'react';
import Service from '../service/Service';

const ApiContext = createContext();

export default function Apiprovider({ children }) {
  const service = new Service();
  return (
    <ApiContext.Provider value={{ service }}>{children}</ApiContext.Provider>
  );
}

export function useService() {
  return useContext(ApiContext);
}
