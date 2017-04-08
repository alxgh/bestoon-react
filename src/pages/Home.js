import React, { Component } from 'react';

import axios from 'axios'

export default class Home extends Component {
	constructor(props) {
		super(props)
		this.state = {
			news: []
		}
		this.loadNews();
	}

	loadNews() {
		axios.get('http://bestoon.ir/news').then((res) => {
			
			this.setState({
				news: JSON.parse(res.data)
			});
		})
	}

  render() {
    return (
    	<div className="row">
      	<div className="col-md-12">
      		<h2>خوش آمدید.</h2>

      		<h3>آخرین اخبار:</h3>
      		{
      			this.state.news.length > 0 ? this.state.news.map((news) => (
      				<div className="panel panel-default">
      					<div className="panel-heading">
      						{news.fields.title}
      					</div>
      					<div className="panel-body">
      						{news.fields.text}
      					</div>
      				</div>
      			)) : <div className="loader">Loading...</div>
      		}
      	</div>
      </div>
    );
  }
}