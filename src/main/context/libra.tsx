import {
  createContext,
  FC,
  PropsWithChildren,
  RefObject,
  useLayoutEffect,
  useRef,
  useState
} from 'react';
import { Framecast } from 'framecast';

import type { GroupedEntry } from '../../../api/utils';

const { debug } = __LIBRA__;

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

  useLayoutEffect(() => {
    if (iframeRef.current) {
      const target = iframeRef.current.contentWindow;
      if (target) {
        const newFramecast = new Framecast(target);
        newFramecast.on('broadcast', ({ event, data }: any) => {
          if (event === 'libra-load') {
            if (debug) {
              console.log(`[libra] on ${event}`);
            }
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
    if (debug) {
      console.log(`[libra] broadcast libra-entry`);
    }
    framecast?.broadcast({ event: 'libra-entry', data: id });
    setActiveId(id);
  };

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
