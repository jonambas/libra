import {
  createContext,
  FC,
  PropsWithChildren,
  RefObject,
  useEffect,
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
  loadEntry?: (id?: string) => void;
  activeId?: string;
  reloadEntry?: () => void;
  ready?: boolean;
};

export const LibraContext = createContext<Context>({});

export const LibraProvider: FC<PropsWithChildren> = (props) => {
  const [searchParams] = useSearchParams();
  const initialEntry = searchParams.get('entry');
  const theme = searchParams.get('theme');
  const themePreference = searchParams.get('themePreference');

  const [entries, setEntries] = useState<GroupedEntry[]>([]);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [framecast, setFramecast] = useState<Framecast | null>(null);
  const [activeId, setActiveId] = useState<string>();
  const [reload, setForceReload] = useState<boolean>(false);
  const [ready, setReady] = useState<boolean>(false);

  useLayoutEffect(() => {
    if (iframeRef.current) {
      const target = iframeRef.current.contentWindow;

      if (target) {
        const newFramecast = new Framecast(target);
        newFramecast.on('broadcast', ({ event, data }: any) => {
          if (event === 'libra-load') {
            // console.log(data);
            setEntries(data);
            setReady(true);
          }
        });

        if (!framecast) {
          setFramecast(newFramecast);
        }
      }
    }
  }, [iframeRef.current]);

  const loadEntry = (id?: string): void => {
    if (id) {
      setActiveId(id);
    }
  };

  const reloadEntry = (): void => {
    setForceReload(!reload);
  };

  useEffect(() => {
    framecast?.broadcast({
      event: 'libra-entry',
      data: { id: activeId, theme, themePreference }
    });
  }, [iframeRef.current, framecast, activeId, reload]);

  // Initial Load
  useEffect(() => {
    if (ready && initialEntry) {
      loadEntry(initialEntry);
    }
  }, [ready]);

  return (
    <LibraContext.Provider
      value={{
        loadEntry,
        entries,
        iframeRef,
        activeId,
        reloadEntry,
        ready
      }}
    >
      {props.children}
    </LibraContext.Provider>
  );
};
