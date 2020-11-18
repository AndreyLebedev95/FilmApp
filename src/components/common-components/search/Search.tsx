import React, {FC, useState} from 'react';
import {SearchProps} from './types';
import {Input} from '../input';
import {SearchButton} from '../search-button';

export const Search: FC<SearchProps> = ({handleSearch}) => {
    const [searchString, setSearchString] = useState('');

    return (
        <div>
            <SearchButton
                disabled={!searchString}
                handleClick={() => handleSearch(searchString)}
            />
            <Input
                value={searchString}
                placeholder="Поиск"
                handleChange={setSearchString}
            />
        </div>
    );
};