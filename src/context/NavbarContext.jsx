import {createContext} from 'react';

export const NavbarProvider = createContext()

function NavbarContext({children}) {
  return <NavbarProvider.Provider>
    {children}
  </NavbarProvider.Provider>
}

export default NavbarContext