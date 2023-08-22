import { createContext, useState, ReactNode } from "react";
import { Address } from "../types";
interface IAddressContext {
  address: Address;
}
export const AddressContext = createContext<IAddressContext>(
  {} as IAddressContext
);
interface ILinkProvider {
  children: ReactNode;
  address: Address;
}
const AddressProvider = ({ children, address: _address }: ILinkProvider) => {
  const [address, setLinks] = useState<Address>(_address);
  return (
    <AddressContext.Provider value={{ address }}>
      {children}
    </AddressContext.Provider>
  );
};
export default AddressProvider;
