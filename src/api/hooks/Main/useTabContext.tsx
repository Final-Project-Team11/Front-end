import React, { createContext, useState } from 'react';

type State = boolean;
type Dispatch = React.Dispatch<React.SetStateAction<State>>;

export const ChangeTabContext = createContext<[State, Dispatch]>([
  false,
  () => {
    //
  },
]);

interface ContextProps {
  children: React.ReactNode;
}
export function TabContext({ children }: ContextProps) {
  const [tab, setTab] = useState(false);

  return (
    <ChangeTabContext.Provider value={[tab, setTab]}>
      {children}
    </ChangeTabContext.Provider>
  );
}
