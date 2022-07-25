import classnames from 'classnames/bind';
import styles from './Menu.module.scss';
import Tippy from '@tippyjs/react/headless';
import { useState } from 'react';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import MenuItem from './MenuItem';
import Header from './Header';
import { IconBack } from '~/icon';
const c = classnames.bind(styles);

function Menu({ children, menuItem = [], onChange }) {
    const [history, setHistory] = useState([{ data: menuItem }]);
    //call 
    const current = history[history.length - 1];
    const handleRenderMenuItem = () => {
        return current.data.map((item, index) => {
            const isChildren = !!item.children;
            return <MenuItem key={index} data={item} onClick={() => {
                if (isChildren) {
                    setHistory(prev => [...prev, item.children])
                } else {
                    onChange(item)
                }
            }} />
        })
    }
    return <Tippy
        delay={[0, 500]}
        placement={'top-end'}
        interactive={true}
        render={attrs => (
            <div className={c('content')} tabIndex={-1} {...attrs}>
                <PopperWrapper className={c('menu-wrapper')}>
                    {history.length > 1 && <Header icon={<IconBack color='currentColor' />} title={'Ngôn ngữ'} onBack={() => {
                        setHistory(prev => prev.slice(0, history.length - 1));
                    }} />}
                    {handleRenderMenuItem()}
                </PopperWrapper>
            </div>
        )}>
        {children}
    </Tippy>
}

export default Menu;