import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default class Expense extends Component {
	constructor(props) {
		super(props)
		this.state = {
			done: false,
			expense: []
		}

		this.loadExpense()
	}

	loadExpense() {
		axios.post('http://bestoon.ir/q/expenses', 'token=' + localStorage.getItem('token')).then((res) => {
			console.log(res.data)
			this.setState({				
				expense: JSON.parse(res.data),
				done: true
			});
		})
	}

	render() {
		return(
			<div className="row">
				<div className="col-md-12">
					<ul className="nav nav-tabs nav-justified">
					  <li role="presentation"><Link to="/income">درآمد</Link></li>
					  <li role="presentation" className="active"><Link to="/expense">خرج</Link></li>
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
						{this.state.expense.map((expense) => (
							<tr>
								<td>{expense.fields.text}</td>
								<td>{expense.fields.date}</td>
								<td>{expense.fields.amount}</td>
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