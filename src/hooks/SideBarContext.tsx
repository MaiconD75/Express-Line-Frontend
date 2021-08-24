import React, { createContext, useCallback, useState, useContext } from 'react';

interface SideBarContextData {
  isExtended: boolean;
  toggleSideBarState(): void;
}

export const SideBarContext = createContext<SideBarContextData>(
  {} as SideBarContextData,
);

export const SideBarProvider: React.FC = ({ children }) => {
  const [sideBarState, setSideBarState] = useState(false);

  const toggleSideBarState = useCallback(() => {
    setSideBarState(!sideBarState);
  }, [sideBarState]);

  return (
    <SideBarContext.Provider
      value={{
        isExtended: sideBarState,
        toggleSideBarState,
      }}
    >
      {children}
    </SideBarContext.Provider>
  );
};

export function useSideBar(): SideBarContextData {
  const context = useContext(SideBarContext);

  if (!context) {
    throw new Error('UseSideBar must be used within and= SideBarProvider');
  }

  return context;
}
