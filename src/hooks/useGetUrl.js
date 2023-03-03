import { useEffect, useState } from 'react';
function useGetUrl(selectedFile, defaultUrl = '') {
    const [url, setUrl] = useState(defaultUrl);
    useEffect(() => {
        if (!selectedFile) {
            return;
        }
        const objectUrl = URL.createObjectURL(selectedFile);
        setUrl(objectUrl);
        return () => URL.revokeObjectURL(objectUrl);
    }, [selectedFile]);
    return url;
}

export default useGetUrl;
