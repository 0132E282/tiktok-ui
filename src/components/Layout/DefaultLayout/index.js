import { Header } from '~/components/Layout/components';
import Sidebar from './Sidebar';
import styles from './DefaultLayout.module.scss';
import classNames from 'classnames/bind';
import Modal from '~/components/modal';
const c = classNames.bind(styles);
function DefaultLayout({ children }) {
    return (
        <div className={c('wrapper')}>
            <Header />
            <div className={c('container')}>
                <Sidebar />
                <div className="content">{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;
