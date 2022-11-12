import { createContext, useState } from "react";
export const ProviderServices = createContext();
function ProviderGlobal({children}) {
    const [playingVideo , setPlayingVideo] = useState({});
    return ( <ProviderServices.Provider value={{playingVideo , setPlayingVideo }}>
        {children}
    </ProviderServices.Provider> );
}

export default ProviderGlobal;