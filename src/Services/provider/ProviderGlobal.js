import { createContext,  useState } from "react";
export const ProviderServices = createContext();
function ProviderGlobal({children}) {
    const [playingVideo , setPlayingVideo] = useState();
    const [isLogin , setIsLogin] = useState(false);
    return ( <ProviderServices.Provider value={{
        playingVideo , setPlayingVideo,
        isLogin , setIsLogin
    }}>
        {children}
    </ProviderServices.Provider> );
}

export default ProviderGlobal;