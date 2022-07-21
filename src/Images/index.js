import img from '~/assets/img'
function Image({ className, src = img.userDefault, alt = '', ...prop }) {
    return <img className={className} src={src} alt={alt}  {...prop} />;
}

export default Image;