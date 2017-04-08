import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default class income extends Component {
	constructor(props) {
		super(props)
		this.state = {
			done: false,
			income: []
		}

		this.loadIncome()
	}

	loadIncome() {
		axios.post('http://bestoon.ir/q/incomes', 'token=' + localStorage.getItem('token')).then((res) => {
			console.log(res.data)
			this.setState({				
				income: JSON.parse(res.data),
				done: true
			});
		})
	}

	render() {
		return(
			<div className="row">
				<div className="col-md-12">
					<ul className="nav nav-tabs nav-justified">
					  <li role="presentation" className="active"><Link to="/income">درآمد</Link></li>
					  <li role="presentation"><Link to="/expense">خرج</Link></li>
					  <li role="presentation"><Link to="/stats">وضعیت کلی</Link></li>
					</ul>
					{ this.state.done === false ? <div className="loader">Loading...</div> : 
						<table className="table table-striped">
						<tbody>
							<tr>
								<td>متن</td>
								<td>تاریخ</td>
								<td>مبلغ</td>
							</tr>
						{this.state.income.map((income) => (
							<tr>
								<td>{income.fields.text}</td>
								<td>{income.fields.date}</td>
								<td>{income.fields.amount}</td>
							</tr>
						))}
						</tbody>
						</table>
					}
				</div>
			</div>
		)
	}
}