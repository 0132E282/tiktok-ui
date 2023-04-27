import { createContext, useEffect, useState } from 'react';
import * as auth from '~/Services/Api/auth';
import Modal from '~/components/modal/Modal';
import MethodLoginModal from '~/components/modal/ListMenuItem/methodLogin/MethodLogin';
export const ProviderServices = createContext();
function ProviderGlobal({ children }) {
    const [valueVolume, setValueVolume] = useState(100);
    const [scrollValue, setScrollValue] = useState(0);
    const [isMutedVideo, setMutedVideo] = useState(false);
    const [historyPlaying, setHistoryPlaying] = useState((req) => req);
    const [currentUser, setCurrentUser] = useState({});
    const [isModalLogin, setIsModalLogin] = useState(false);
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
                isModalLogin,
                setIsModalLogin,
            }}
        >
            {children}
            <Modal isOpen={isModalLogin}>
                <MethodLoginModal
                    onClickClose={() => {
                        setIsModalLogin(false);
                    }}
                />
            </Modal>
        </ProviderServices.Provider>
    );
}

export default ProviderGlobal;
