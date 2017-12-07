import React from 'react';
import './navbar.css';
import LoungeBox from './lounge-box';

import {API_BASE_URL} from '../config';

export default class Lounges extends React.Component {

  constructor(props){
    super(props)
    this.state = {lounges:[]}
  }

  componentDidMount(){
    var self = this;

    fetch(`${API_BASE_URL}/lounges`).then(function(response) {
      return response.json();
    })
    .then(function(data) {
      self.setState({
        lounges:data.lounges
      })
    });
  }

  render(){
    let loungesArray = this.state.lounges.map((lounge, i) => {
      return(
        <LoungeBox
          picture= {lounge.picture}
          key={i}
          loungeName={lounge.name}
          loungeDescription={lounge.briefDescription}
          loungeId={lounge.id}
          history={this.props.history}
          />
      );

    });

    return (
      <section className="lounges">
        <h2 className="lounges-header">{this.props.header}</h2>
        {loungesArray}
      </section>
    );
  }
}
