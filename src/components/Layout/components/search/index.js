import classNames from 'classnames/bind';
import { useEffect, useState, useRef } from 'react';
import Tippy from '@tippyjs/react/headless';

import styles from './Search.module.scss';
import * as SearchServices from '~/APIServices/searchServices'
import { IconSearch, IconLoading, IconClear } from "~/icon";
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import { useDebounce } from '~/hooks';

const c = classNames.bind(styles);
function Search() {
    const isWhiteSpace = /^\s/;
    // sueState
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);
    const debounced = useDebounce(searchValue, 500);
    // sueRef
    const InputRef = useRef();

    // useEffect
    useEffect(() => {
        if (!debounced.trim()) {
            setSearchResult([])
            return;
        }
        const fetchAPI = async () => {
            setLoading(true);
            const results = await SearchServices.search(debounced, 'less');
            setSearchResult(results);
            setLoading(false);
        }
        fetchAPI();
    }, [debounced]);
    // function
    const handleShowSearch = () => {
        setShowResult(false);
    }
    return <Tippy
        onClickOutside={handleShowSearch}
        interactive={true}
        visible={showResult && searchResult.length > 0}
        render={attrs => (
            <div className={c('search-result')} tabIndex={-1} {...attrs}>
                <PopperWrapper>
                    <h3 className={c('heading')}> account </h3>
                    {searchResult.map((result, index) => (
                        <AccountItem
                            key={index}
                            avatar={result.avatar}
                            name={result.full_name}
                            nickname={result.nickname}
                            link={result.nickname}
                        />
                    ))}

                </PopperWrapper>
            </div>
        )}

    >
        <div className={c('wrapper')} >
            <input type="text"
                ref={InputRef}
                className={c('text-input')}
                placeholder={"Tìm kiếm tài khoản và video"}
                value={searchValue}
                onFocus={() => {
                    setShowResult(true);
                }}
                onChange={(e) => {
                    if (!isWhiteSpace.test(e.target.value)) {
                        setSearchValue(e.target.value);
                    }

                }} />
            {!!loading && <div className={c('icon-loading')} >
                <IconLoading width="1.4rem" height='1.4rem' color='rgba(22, 24, 35, 1.0)' />
            </div>}
            {!loading && !!searchValue && <button className={c('btn-clear')} onClick={() => {
                InputRef.current.focus();
                setSearchValue('');
            }} >
                <IconClear width='1.5rem' height='1.5rem' />
            </button>}
            <button className={c('btn-search')} onMouseDown={(e) => {
                e.preventDefault();
            }}>
                <IconSearch className={c('icon-search')} width="2.4rem" height="2.4rem" color='rgba(22, 24, 35, 0.34)' />
            </button>
        </div>
    </Tippy>;
}

export default Search;