import {createContext, Dispatch, PropsWithChildren, SetStateAction, useContext, useMemo, useState} from "react";


interface IListerContext  {
    query: string;
    setQuery: Dispatch<SetStateAction<string>>;
    viewType: string,
    setViewType: Dispatch<SetStateAction<string>>

}

const listerContext = {
    query: '', // page=1&limit=10
    setQuery() {},
    viewType: "",
    setViewType(){}
}

const ListerContext = createContext<IListerContext>(listerContext);


export const ListerProvider = ({children}: PropsWithChildren) => {
    const [query, setQuery] = useState<string>('_page=1&_per_page=10');
    const [viewType, setViewType] = useState<string>('grid');

    const value = useMemo(() => ({query, setQuery, viewType, setViewType}), [query, setQuery, viewType, setViewType])


    return <ListerContext.Provider value={value} >
        {children}
    </ListerContext.Provider>
}



export const useListerContext = (): IListerContext  => {
    return useContext(ListerContext);
}

