import React from 'react';
import TwitterHeader from './components/TwitterHeader/TwitterHeader';
import TwitterNavigation from './components/TwitterNavigation/TwitterNavigation';
import Tweets from './components/Tweets/Tweets';
import { Route, Switch } from 'react-router';
import Trendings from './components/Trendings/Trendings';

export default class Main extends React.Component {

  
    render() {
        return (
            <div className="wrapper">
                <TwitterHeader/>
                <main className="main">
                    <TwitterNavigation/>
                    <Switch>
                        <Route exact path="/trendings"
                            render={(props) => (<Trendings {...props} trends={this.props.trends}/>)}
                        />
                        <Route  path="/" 
                            render={(props) => (<Tweets {...props} tweets={this.props.tweets}/>)}
                        />
                    </Switch>
                </main>
            </div>
        );
    }
}