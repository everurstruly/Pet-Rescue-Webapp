import { createContext, useContext, useReducer } from "react";

export type OffcanvasPlacement = "start" | "end" | "top" | "bottom";

export const OffcanvasDispatchActions = {
  createDisplayMenu: () => {
    return {
      type: "DISPLAY_MENU" as const,
      payload: {},
    };
  },
  createShowMenu: () => {
    return {
      type: "SHOW_MENU" as const,
      payload: {},
    };
  },
  createHideMenu: () => {
    return {
      type: "HIDE_MENU" as const,
      payload: {},
    };
  },
};

type OffcanvasDispatchCreatorsNames = keyof typeof OffcanvasDispatchActions;
type OffcanvasDispatchActions = ReturnType<
  (typeof OffcanvasDispatchActions)[OffcanvasDispatchCreatorsNames]
>;

type OffcanvasState = {
  placement: OffcanvasPlacement;
};

const initOffcanvasState: OffcanvasState = {
  placement: "end",
};

const defaultOffcanvasContextValue: {
  state: OffcanvasState;
  dispatch: (action: any) => void;
} = {
  state: { ...initOffcanvasState },
  dispatch: (action) => void undefined,
};

const offcanvasReducer = (
  state: OffcanvasState,
  action: OffcanvasDispatchActions
) => {
  switch (action.type) {
    default:
      return state;
  }
};

const offcanvasContext = createContext(defaultOffcanvasContextValue);

export type OffcanvasProviderProps = {
  children: React.ReactNode | React.JSX.Element;
};

export const OffcanvasProvider = ({ children }: OffcanvasProviderProps) => {
  const [state, dispatch] = useReducer(offcanvasReducer, initOffcanvasState);
  return (
    <offcanvasContext.Provider value={{ state, dispatch }}>
      {children}
    </offcanvasContext.Provider>
  );
};

export type UseOffcanvasProps = {};

export const useOffcanvas = (props: UseOffcanvasProps) => {
  return useContext(offcanvasContext);
};
