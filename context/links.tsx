import { createContext, useState, ReactNode } from "react";
import { Link } from "../types";
interface ILinkContext {
  links: Link[];
  setLinks: (data: Link[]) => void;
}
export const LinkContext = createContext<ILinkContext>({} as ILinkContext);
interface ILinkProvider {
  children: ReactNode;
  links?: Link[];
}
const LinkProvider = ({ children, links: _links }: ILinkProvider) => {
  const [links, setLinks] = useState<Array<Link>>(_links || []);
  return (
    <LinkContext.Provider value={{ links, setLinks }}>
      {children}
    </LinkContext.Provider>
  );
};
export default LinkProvider;
