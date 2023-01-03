import { createContext, useEffect, useState } from 'react';
export const ProviderServices = createContext();
function ProviderGlobal({ children }) {
    const [valueVolume, setValueVolume] = useState(100);
    const [scrollValue, setScrollValue] = useState(0);
    const [isMutedVideo, setMutedVideo] = useState(false);
    const [historyPlaying, setHistoryPlaying] = useState((req) => req);
    useEffect(() => {
        window.addEventListener('scroll', (e) => {
            setScrollValue(window.scrollY);
        });
        return () => {
            window.removeEventListener('scroll', (e) => setScrollValue(window.scrollY));
        };
    }, []);
    return (
        <ProviderServices.Provider
            value={{
                valueVolume,
                setValueVolume,
                isMutedVideo,
                setMutedVideo,
                scrollValue,
                setScrollValue,
                historyPlaying,
                setHistoryPlaying,
            }}
        >
            {children}
        </ProviderServices.Provider>
    );
}

export default ProviderGlobal;
