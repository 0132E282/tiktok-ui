import { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
function Portal({ children, containerId }) {
    const [wrapper, setWrapper] = useState(null);

    useEffect(() => {
        let container = document.getElementById(containerId);
        if (!container) {
            container = document.createElement('div');
            container.id = containerId || 'modal';
            document.body.appendChild(container);
        }
        setWrapper(container);
        return () => {
            if (!containerId) {
                document.body.removeChild(container);
            }
        };
    }, [containerId]);
    if (!wrapper) return null;
    return ReactDOM.createPortal(children, wrapper);
}

export default Portal;
