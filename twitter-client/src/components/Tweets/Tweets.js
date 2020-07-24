import React from 'react';

export default class Tweets extends React.Component {
    render() {
        let tweetsMarkup = [];
        if(this.props.tweets) {
            tweetsMarkup = this.props.tweets.map((tweet, index) => {
                return (
                    <section key = {index} className="main-section__article">
                        <a href={tweet.userProfile}><img className="twitter-user-image" src={tweet.userImage}  /></a>
                        <div className="twitter-handle">
                            <div className="twitter-user-name">{tweet.name}</div>   
                            <div className="twitter-user-screenname">{tweet.userScreenName}</div>
                            <div className="tweet-text">{tweet.tweetText}</div>
                            <div className="tweet-created"><span className="tweet-created__text">Created at:</span>&nbsp;{tweet.createdAt}</div>
                        </div>   
                </section>  
                );
            });
        }
        return (
            <div className="main-section">
                {tweetsMarkup}
            </div>
        );
    }
}
