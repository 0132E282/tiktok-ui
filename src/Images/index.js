import img from '~/assets/img';
import { forwardRef } from 'react';
const Image = forwardRef(
    ({ className, src = img.userDefault, alt = '', ...prop }, ref) => {
        return <img ref={ref} className={className} src={src} alt={alt}  {...prop} />
    }
)

export default Image;