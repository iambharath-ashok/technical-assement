import React from 'react';
import { NavLink} from 'react-router-dom'

export default class TwitterNavigation extends React.Component {
    render() {
        return (
            <nav className="main-nav">
                        <ul className="main-nav__items">
                           <NavLink to="/tweets"> <li>Tweets</li></NavLink>
                           <NavLink to="/trendings"><li>Trending Topics</li></NavLink>
                        </ul>
                    </nav>
        );
    }
}
