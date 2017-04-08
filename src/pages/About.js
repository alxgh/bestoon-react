import React, { Component } from 'react';

export default class About extends Component {
  render() {
    return (
    	<div>
      <div className="row">
			  <div className="col-md-12">
			    <div className="alert alert-info" role="alert">
			      <button type="button" className="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
			      <a href="http://jadi.net/tag/بستون">
			این برنامه شدیدا در حال توسعه است. اینجا را ببینید
			      </a>
			    </div>
			  </div>
			</div>
			<div className="row">

			    <div className="col-md-6">
			      <div className="panel panel-default">
			        <div className="panel-heading">
			          <h3 className="panel-title">بستون</h3>
			        </div>
			        <div className="panel-body">

			<p>


			بستون یک پروژه در حال حرکته، پروژه ای باری استفاده جدی و پروژه ای برای یادگیری ساختن بخش فنی یک استارتاپ. توی بستون می تونین خرج ها و درآمدهاتون رو بنویسین و حساب زندگی تون رو داشته باشین. کافیه اینجا یک اکانت بسازین و یکی از کلاینت ها رو نصب کنین.
			</p>
			<p>
			این یک پروژه روحیه بخش هم هست. با <a href="http://jadi.net/tag/بستون">دیدن قدم به قدم مراحل ساخت پروژه</a> مطمئن می‌شین که با ترکیب راحتی از تلاش و سواد می شه یک سرویس واقعی راه انداخت و نیازی نیست برای تحقق ایده مون دست به دامن این و اون باشیم یا سال ها صبر کنیم.

			</p>
			<p>
			برای باز کردن اکانت
			<a href="{% url 'register' %}">به صفحه رجیستر شدن برین</a>
			و برای اطلاعات بیشتر مراجعه بکنین به
			<a href="http://github.com/jadijadi/bestoon/">
			  گیت هاب پروژه.
			</a>
			</p>
			        </div>
			        <p>

			        </p>
			      </div>


			<br /><br />



			</div>

			<div className="col-md-6">
			  <div className="panel panel-default">
			    <div className="panel-body">

			      <div className="panel-heading">
			        <h3 className="panel-title">
			            ماجرا چیه؟
			        </h3>
			      </div>
					  <p>
					      این در واقع یک سیستم نگهداری خرج و دخل شخصی است. پول هایی که در آوردین رو توش می زنین و پول‌هایی که خرج کردین رو یادداشت می کنین.
					      اما این سیستم شدیدا در ابتدای راهه، دلیلش؟ این سیستم داره به عنوان یک پروسه آموزش کار می کنه و
					      <a href="http://jadi.net/tag/بستون">
					        من قدم به قدم کارهایی که برای راه انداختن اینجا دارم می کنم رو منتشر کرده ام
					      </a>
					      .
					  </p>
					  <p>
					      در حال حاضر برای استفاده از این سیستم باید قدم های زیر رو پیش برین:
					  </p>
			  		<ul>
			      <li> از صفحه رجیستریشن که این بغل و اون بالاست، ثبت نام کنین و توکن دریافت کنین</li>
			      <li> از یکی از کلاینت ها برای اتصال استفاده کنین. فعلا تنها کلاینت ما <a href="https://github.com/jadijadi/bestoon/tree/master/clients/commandline">کلاینت های کامند لاینی هستن که با کرل کار می کنن و لازمه کدی که دریافت کردین رو توی فایل کانفیگشون وارد کنین</a>. منطقا در آینده کلاینت تحت وب و اپ و غیره هم خواهیم داشت.</li>
			      <li> خرج و دخل ها رو وارد سیستم کنین و منتظر باشین که هی سیستم کامل‌تر بشه</li>
			      </ul>
			    </div>
			  </div>
			</div>

			</div>
			</div>
    );
  }
}