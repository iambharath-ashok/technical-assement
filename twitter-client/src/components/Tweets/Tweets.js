import React from 'react';

export default class Tweets extends React.Component {
    render() {
        return (
            <div class="main-section">
                <section className="main-section__article">
                    <div className="twitter-handle-name">Twitter Dev<span className="twitter-handle">@TwitterDev</span></div>
                    <div className="tweet-message">We planned to launch the new #TwitterAPI today, but given the security incident yesterday we're pressing pause. There's no evidence the incident involved our API, but we decided to move the launch date to a more appropriate time.</div>
                    <div className="tweet-created">created at:</div>
                </section>
            </div>
        );
    }
}
