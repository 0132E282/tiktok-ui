import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import Tippy from '@tippyjs/react/headless';

import styles from './Search.module.scss';
import { IconSearch, IconLoading, IconClear } from "~/icon";
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';

const c = classNames.bind(styles);
function Search() {
    const [searchResult, setSearchResult] = useState([]);
    return <Tippy
        interactive={true}
        visible={searchResult.length > 0}
        render={attrs => (
            <div className={c('search-result')} tabIndex={-1} {...attrs}>
                <PopperWrapper>
                    <h3 className={c('heading')}> account </h3>
                    <AccountItem
                        avatar="https://haycafe.vn/wp-content/uploads/2022/02/Gai-xinh-cute-anh-dai-dien-dep-cho-nu.jpg"
                        name={'china_kuri001'}
                        nickname={'china_kuri'}
                    />
                    <AccountItem
                        avatar="https://haycafe.vn/wp-content/uploads/2022/02/Gai-xinh-cute-anh-dai-dien-dep-cho-nu.jpg"
                        name={'china_kuri001'}
                        nickname={'china_kuri'}
                    />
                    <AccountItem
                        avatar="https://haycafe.vn/wp-content/uploads/2022/02/Gai-xinh-cute-anh-dai-dien-dep-cho-nu.jpg"
                        name={'china_kuri001'}
                        nickname={'china_kuri'}
                    />
                    <AccountItem
                        avatar="https://haycafe.vn/wp-content/uploads/2022/02/Gai-xinh-cute-anh-dai-dien-dep-cho-nu.jpg"
                        name={'china_kuri001'}
                        nickname={'china_kuri'}
                    />
                    <AccountItem
                        avatar="https://haycafe.vn/wp-content/uploads/2022/02/Gai-xinh-cute-anh-dai-dien-dep-cho-nu.jpg"
                        name={'china_kuri001'}
                        nickname={'china_kuri'}
                    />
                    <AccountItem
                        avatar="https://haycafe.vn/wp-content/uploads/2022/02/Gai-xinh-cute-anh-dai-dien-dep-cho-nu.jpg"
                        name={'china_kuri001'}
                        nickname={'china_kuri'}
                    />
                    <AccountItem
                        avatar="https://haycafe.vn/wp-content/uploads/2022/02/Gai-xinh-cute-anh-dai-dien-dep-cho-nu.jpg"
                        name={'china_kuri001'}
                        nickname={'china_kuri'}
                    />
                </PopperWrapper>
            </div>
        )}
    >
        <div className={c('wrapper')}>
            <input type="text" className={c('text-input')} placeholder="Search..." />
            <div className={c('icon-loading')} >
                <IconLoading width="1.4rem" height='1.4rem' color='rgba(22, 24, 35, 1.0)' />
            </div>
            <button className={c('btn-clear')} >
                <IconClear width='1.5rem' height='1.5rem' />
            </button>
            <button className={c('btn-search')}>
                <IconSearch className={c('icon-search')} width="2.4rem" height="2.4rem" color='rgba(22, 24, 35, 0.34)' />
            </button>
        </div>
    </Tippy>;
}

export default Search;