import React from 'react';
import TwitterHeader from './components/TwitterHeader/TwitterHeader';
import TwitterNavigation from './components/TwitterNavigation/TwitterNavigation';
import Tweets from './components/Tweets/Tweets';
import { Route, Switch } from 'react-router';
import Trendings from './components/Trendings/Trendings';

export default class Main extends React.Component {

  
    render() {
        console.log(this.props)
        return (
            <div className="wrapper">
                <TwitterHeader/>
                <main className="main">
                    <TwitterNavigation/>
                    <Switch>
                        <Route exact path="/trendings" component={Trendings}/>
                        <Route path="/" component={Tweets}/>
                    </Switch>
                </main>
            </div>
        );
    }
}