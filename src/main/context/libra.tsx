import {
  createContext,
  FC,
  PropsWithChildren,
  RefObject,
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState
} from 'react';
import { Framecast } from 'framecast';
import { useSearchParams } from 'react-router-dom';
import { useColorScheme } from '@sweatpants/react';
import type { GroupedEntry } from '../../../api/types';

type Context = {
  iframeRef?: RefObject<HTMLIFrameElement>;
  entries?: GroupedEntry[];
  loadEntry?: (id?: string) => void;
  activeId?: string;
  reloadEntry?: () => void;
  ready?: boolean;
  scheme?: 'light' | 'dark';
};

export const LibraContext = createContext<Context>({});

export const LibraProvider: FC<PropsWithChildren> = (props) => {
  const [searchParams] = useSearchParams();
  const initialEntry = searchParams.get('entry');
  const [scheme] = useColorScheme();

  const [entries, setEntries] = useState<GroupedEntry[]>([]);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [framecast, setFramecast] = useState<Framecast | null>(null);
  const [activeId, setActiveId] = useState<string>(initialEntry ?? '');
  const [reload, setForceReload] = useState<boolean>(false);
  const [ready, setReady] = useState<boolean>(false);

  useLayoutEffect(() => {
    if (iframeRef.current) {
      const target = iframeRef.current.contentWindow;

      if (target) {
        const newFramecast = new Framecast(target);
        newFramecast.on('broadcast', ({ event, data }: Record<string, any>) => {
          if (event === 'libra-load') {
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

  const reloadEntry = useCallback(() => {
    setForceReload(!reload);
  }, [reload]);

  useEffect(() => {
    if (ready) {
      framecast?.broadcast({
        event: 'libra-entry',
        data: { id: activeId, scheme }
      });
    }
  }, [ready, activeId, scheme, reload]);

  // Initial Load & browser navigation
  useEffect(() => {
    if (ready && initialEntry) {
      loadEntry(initialEntry);
    }
  }, [ready, initialEntry]);

  return (
    <LibraContext.Provider
      value={{
        loadEntry,
        entries,
        iframeRef,
        activeId,
        reloadEntry,
        ready,
        scheme
      }}
    >
      {props.children}
    </LibraContext.Provider>
  );
};
