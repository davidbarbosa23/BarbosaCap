import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

type Path = {
  id: string;
  path: {
    en: string;
    es: string;
  };
  lang: string;
};

const CurrentPath = createContext({});

export const CurrentPathProvider = ({ path, children }: { path: Path; children: ReactNode }) => {
  const [currentPath, setCurrentPath] = useState<Path>(path);

  useEffect(() => setCurrentPath(path), [path]);

  return <CurrentPath.Provider value={currentPath}>{children}</CurrentPath.Provider>;
};

export const useCurrentPath = () => useContext(CurrentPath);
