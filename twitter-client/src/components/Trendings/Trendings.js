import React from 'react';
import Tweets from '../Tweets/Tweets';
import {API_ENDPOINT} from '../../utils/contants';

export default class Trendings extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        trends: []
      }

    }

    componentDidMount() {
        fetch(API_ENDPOINT)
          .then(res => res.json())
          .then(
            (result) => {
              console.log('result', result);
              this.setState({
                isLoaded: true,
                trends: result
              });
            },

            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
          )
      }

      getTrendsMarkup(trends) {
          let trendsMarkup = trends.map((trend, index) => {
              return (
                  <section key={index} className="main-section__trendings">
                      <div className="trend-location">Trending in India</div>
                      <div className="trend"><a href={trend.url}>{trend.name}</a></div>
                      <div className="trend-count">{trend.tweet_volume} Tweets</div>
                  </section>  
              );  
          });
          return trendsMarkup;
      }
     
    render() {
        let trendsMarkup = [];
        const { isLoaded, trends } = this.state;

        if(this.props.trends && this.props.trends.length > 0) {
          trendsMarkup = this.getTrendsMarkup(this.props.trends);
        }

        if(isLoaded && trends && trends.length > 0) {
          trendsMarkup = this.getTrendsMarkup(trends);
        }
        
        return (
            <div className="main-section">
              {trendsMarkup}
        </div>
        );
    }
}
