import {
  createContext,
  FC,
  PropsWithChildren,
  RefObject,
  useCallback,
  useLayoutEffect,
  useRef,
  useState
} from 'react';
import { Framecast } from 'framecast';
import { useSearchParams } from 'react-router-dom';

import type { GroupedEntry } from '../../../api/utils';

type Context = {
  iframeRef?: RefObject<HTMLIFrameElement>;
  entries?: GroupedEntry[];
  loadEntry?: (id: string) => void;
  activeId?: string;
};

export const LibraContext = createContext<Context>({});

export const LibraProvider: FC<PropsWithChildren> = (props) => {
  const [entries, setEntries] = useState<GroupedEntry[]>([]);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [framecast, setFramecast] = useState<Framecast | null>(null);
  const [activeId, setActiveId] = useState<string>();
  const [searchParams] = useSearchParams();
  const theme = searchParams.get('theme');

  useLayoutEffect(() => {
    if (iframeRef.current) {
      const target = iframeRef.current.contentWindow;

      if (target) {
        const newFramecast = new Framecast(target);
        newFramecast.on('broadcast', ({ event, data }: any) => {
          if (event === 'libra-load') {
            setEntries(data);
          }
        });

        if (!framecast) {
          setFramecast(newFramecast);
        }
      }
    }
  }, [iframeRef.current]);

  const loadEntry = (id: string): void => {
    setActiveId(id);
  };

  useLayoutEffect(() => {
    framecast?.broadcast({
      event: 'libra-entry',
      data: { id: activeId, theme }
    });
  }, [theme, activeId]);

  return (
    <LibraContext.Provider
      value={{
        loadEntry,
        entries,
        iframeRef,
        activeId
      }}
    >
      {props.children}
    </LibraContext.Provider>
  );
};
