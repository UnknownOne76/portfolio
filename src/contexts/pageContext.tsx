import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

interface PageProps {
  children: React.ReactNode;
}

interface PageContext {
  id: string;
  setId: Dispatch<SetStateAction<string>>;
}

export const PageContext = createContext<PageContext>({} as PageContext);

export const PageContextProvider = ({ children }: PageProps) => {
  const [id, setId] = useState('');

  return (
    <PageContext.Provider value={{ id, setId}}>
      {children}
    </PageContext.Provider>
  );
};

export const usePageContext = () => useContext(PageContext);

export default PageContextProvider;
