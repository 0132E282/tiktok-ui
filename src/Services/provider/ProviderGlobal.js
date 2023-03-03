import { createContext, useEffect, useState } from 'react';
import * as auth from '~/Services/Api/auth';
export const ProviderServices = createContext();
function ProviderGlobal({ children }) {
    const [valueVolume, setValueVolume] = useState(100);
    const [scrollValue, setScrollValue] = useState(0);
    const [isMutedVideo, setMutedVideo] = useState(false);
    const [historyPlaying, setHistoryPlaying] = useState((req) => req);
    const [currentUser, setCurrentUser] = useState({});
    const token = localStorage.getItem('success_token');
    useEffect(() => {
        auth.getCurrentUser(token)
            .then((res) => setCurrentUser(res))
            .catch((err) => console.log(err));
    }, [token]);
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
                token,
                currentUser,
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
