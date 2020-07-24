import React from 'react';

export default function TwitterHeader() {

    return (
        <header className="main-header">
            <ul>
                <li><a className="main-header__logo" href="home"></a></li>
            </ul>
            <form className="main-header__search" method="post" target="/search">
                <input type="search" name="search" placeholder="Search Twitter"/>
            </form>
            </header>
    );
    
}