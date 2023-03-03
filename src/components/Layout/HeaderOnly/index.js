import classnames from 'classnames/bind';
import { Header } from '~/components/Layout/components';
import Footer from '../components/Footer';
import style from './HeaderOnly.module.scss';
const cx = classnames.bind(style);
function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <header>
                <Header />
            </header>
            <div className={cx('container')}>{children}</div>
            <footer>
                <Footer />
            </footer>
        </div>
    );
}

export default DefaultLayout;
