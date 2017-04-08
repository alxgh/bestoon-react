import React, { Component } from 'react';

import { Link } from 'react-router-dom'

import axios from 'axios'

export default class Stats extends Component {
	constructor(props) {
		super(props)
		this.handleSubmit = this.handleSubmit.bind(this)
		this.state = {
			done: false,
			error: null,
			success: null,
		}
		this.loadData();
	}

	loadData() {
		axios.post('http://bestoon.ir/q/generalstat', 'token=' + localStorage.getItem('token')).then((res) => {
			this.setState({
				data: res.data,
				done: true
			});
		})
	}

  render() {
    return (
    	<div className="row">
				<div className="col-md-12">
					<ul className="nav nav-tabs nav-justified">
					  <li role="presentation"><Link to="/income">درآمد</Link></li>
					  <li role="presentation"><Link to="/expense">خرج</Link></li>
					  <li role="presentation" className="active"><Link to="/stats">وضعیت کلی</Link></li>
					</ul>
				</div>
				{ this.state.done === false ? <div className="loader">Loading...</div> : 
				<div className="col-md-12">
					<table className="table table-stripped">
						<tbody>
							<tr>
								<td>-</td>
								<td>تعداد</td>
								<td>مبلغ</td>
							</tr>
							<tr>
								<td>درآمد</td>
								<td>{this.state.data.income.amount__count}</td>
								<td>{this.state.data.income.amount__sum}</td>
							</tr>
							<tr>
								<td>خرج</td>
								<td>{this.state.data.expense.amount__count}</td>
								<td>{this.state.data.expense.amount__sum}</td>
							</tr>
						</tbody>
					</table>
				</div>}
				<div className="col-md-12">
					<div className="panel panel-default">
						<div className="panel-heading">
							ثبت درآمد\خرج جدید.
						</div>
						<div className="panel-body">
							<form className="form-horizontal" onSubmit={this.handleSubmit}>
								<div className="form-group">
									<label className="col-sm-2">مبلغ</label>
									<div className="col-sm-10">
										<input ref={(input) => { this.amount = input; }} type="number" className="form-control" placeholder="" required />
									</div>
								</div>
								<div className="form-group">
									<label className="col-sm-2">توضیحات</label>
									<div className="col-sm-10">
										<textarea ref={(input) => { this.text = input; }} className="form-control" required></textarea>
									</div>
								</div>
								<div className="form-group">
									<label className="col-sm-2">نوع</label>
									<div className="col-sm-10">
										<select ref={(input) => { this.type = input; }} className="form-control">
											<option value='0'>درآمد</option>
											<option value='1'>خرج</option>
										</select>
									</div>
								</div>
								<button type="submit" className="btn btn-success">ثبت</button>
							</form>
							{this.state.error !== null ?  <div className='alert alert-danger'>{this.state.error}</div> : <div></div>}
							{this.state.success !== null ?  <div className='alert alert-success'>{this.state.success}</div> : <div></div>}
						</div>
					</div>
				</div>
			</div>
    );
  }

  handleSubmit(e) {
  	e.preventDefault();

  	var amount 	= this.amount.value
  	var text 		= this.text.value
  	var type 		= this.type.value === '1' ? 'expense' : 'income'
  	var token 	= localStorage.getItem('token')
  	axios.post('http://bestoon.ir/submit/' + type, 'amount=' + amount + '&text=' + text + '&token=' + token)
  		.then((res) => {
        if(res.data['status'] === 'ok') {
        	this.setState({
        		error: null,
        		success: 'با موفقیت ثبت شد!'
        	})
        	this.loadData()
        } else {
        	this.setState({
        		error: 'مشکلی در ثبت وجود دارد!',
        		success: null
        	})
        }
      }).catch((e) => {
      	this.setState({
      		error: 'مشکلی در ثبت وجود دارد!',
      		success: null
      	})
      });
  }
}