import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import style from './Footer.module.module.scss';
const cx = classNames.bind(style);
const MENU_LIST = [
    {
        Title: 'Công ty',
        action: [
            {
                title: 'Giới thiệu',
                to: '',
            },
            {
                title: 'Giới thiệu',
                to: '',
            },
            {
                title: 'Bảng tin',
                to: '',
            },
            {
                title: 'Liên hệ',
                to: '',
            },
            {
                title: 'Sự nghiệp',
                to: '',
            },
        ],
    },
    {
        Title: 'Chương trình',
        action: [
            {
                title: 'TikTok for Good',
                to: '',
            },
            {
                title: 'Quảng cáo',
                to: '',
            },
            {
                title: 'Developers',
                to: '',
            },
            {
                title: 'TikTok Rewards',
                to: '',
            },
            {
                title: 'TikTok Embeds',
                to: '',
            },
        ],
    },
    {
        Title: 'Hỗ trợ',
        action: [
            {
                title: 'Trung tâm Trợ giúp',
                to: '',
            },
            {
                title: 'Trung tâm An toàn',
                to: '',
            },
            {
                title: 'Creator Portal',
                to: '',
            },
            {
                title: 'Hướng dẫn Cộng đồng',
                to: '',
            },
            {
                title: 'Minh bạch',
                to: '',
            },
            {
                title: 'Accessibility',
                to: '',
            },
        ],
    },
    {
        Title: 'Pháp lý',
        action: [
            {
                title: 'Terms of Use',
                to: '',
            },
            {
                title: 'Privacy Policy',
                to: '',
            },
            {
                title: 'NGUYÊN TẮC THỰC THI PHÁP LUẬT CỦA TIKTOK',
                to: '',
            },
        ],
    },
];
function Footer() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('container-top')}>
                    <div className={cx('logo')}>1</div>
                    <div className={cx('content')}>
                        {MENU_LIST.map((item, index) => {
                            return (
                                <ul className={cx('menu')} key={index}>
                                    <li className={cx('menu_item')}>{item.Title}</li>
                                    {item.action.map((actionItem, index) => {
                                        return (
                                            <li className={cx('menu_item')} key={index}>
                                                <Link to={actionItem.to}>{actionItem.title}</Link>
                                            </li>
                                        );
                                    })}
                                </ul>
                            );
                        })}
                    </div>
                </div>
                <div className={cx('container-bottom')}>
                    <select className={cx('language')}>
                        <option>Tiếng việt (việt nam)</option>
                    </select>
                    <span className={cx('copyright')}>© 2023 Phúc Nguyễn IT</span>
                </div>
            </div>
        </div>
    );
}

export default Footer;
