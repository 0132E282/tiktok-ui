import { authAction } from '~/reduxSage/authSage/authSilce';
import { IconLanguages, IconSetting, IconShortcuts, IconHelp, IconUser, IconCoin, IconLogout } from '~/icon';
export const MENU_ITEM = [
    {
        title: 'Tiếng Việt',
        icon: <IconLanguages color={'#161823'} />,
        children: {
            title: 'ngôn ngữ',
            data: [
                {
                    code: 'en',
                    title: 'english',
                },
                {
                    code: 'vi',
                    title: 'tiếng việt',
                },
            ],
        },
    },
    {
        title: 'trợ giúp',
        icon: <IconHelp color={'#161823'} />,
        to: './setting',
    },
    {
        title: 'Các Phím Tắc',
        icon: <IconShortcuts color={'#161823'} />,
        isModal: true,
    },
];
export const userMenu = [
    {
        title: 'trang cá nhân',
        icon: <IconUser color={'#161823'} width={'2rem'} height={'2rem'} />,
        to: '/@hoangphuc01975',
    },
    {
        title: 'nhận xu',
        icon: <IconCoin width={'2rem'} height={'2rem'} />,
    },
    {
        title: 'cài đặt',
        icon: <IconSetting color={'#161823'} />,
    },
    ...MENU_ITEM,
    {
        separate: true,
        title: 'đăng xuất',
        icon: <IconLogout />,
        action: authAction.logout,
    },
];
