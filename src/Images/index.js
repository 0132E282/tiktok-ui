import img from '~/assets/img';
import { forwardRef, useState } from 'react';
const Image = forwardRef(({ className, src, alt = '', ...prop }, ref) => {
    let images = src ? src : img.userDefault;
    const [fallback, setFallback] = useState('');
    const handleImgError = () => {
        setFallback(img.userDefault);
    };
    return (
        <img ref={ref} className={className} src={fallback || images} alt={alt} {...prop} onError={handleImgError} />
    );
});

export default Image;
