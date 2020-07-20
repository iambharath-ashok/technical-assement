import React from 'react';

export default class TwitterHeader extends React.Component {


    render() {
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
}