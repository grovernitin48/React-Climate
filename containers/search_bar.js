import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {

	constructor(props){
		super(props);

		this.state = { term: '' };

		this.onInputChange = this.onInputChange.bind(this);
		 this.onFormSubmit = this.onFormSubmit.bind(this);
	}

	onInputChange(event){
		//console.log(event.target.value);
		this.setState({ term: event.target.value });	
	}

	onFormSubmit(event){
		event.preventDefault();

		this.props.fetchWeather(this.state.term);
		this.setState({ term: '' });
	}


	render() {
		return (
			<div>

			<div className="whole">

<section id="breakingbad">
  <span className="chemical-element">
    La&nbsp;<span id="nitin">du</span>
    <div className="desc" role="top-left">79.904</div>
    <div className="desc" role="top-right">
      -1
      +1
    </div>
    <div className="desc big" role="bottom-left-1">57</div>
    <div className="desc" role="bottom-left-2">2-8-18-7</div>
  </span>
    <span className="title-1">
          </span>

    
    <br>
    </br>
    <span className="chemical-element">
        Cl&nbsp;<span id="nitin">imate</span>
        <div className="desc" role="top-left">137.33</div>
        <div className="desc" role="top-right">+2</div>
        <div className="desc medium" role="bottom-left-1">17</div>
        <div className="desc" role="bottom-left-2">2-8-18-7</div>
    </span>

   <div id="smoke">
  <span class="s0"></span>
  <span class="s1"></span>
  <span class="s2"></span>
  <span class="s3"></span>
  <span class="s4"></span>
  <span class="s5"></span>
  <span class="s6"></span>
  <span class="s7"></span>
  <span class="s8"></span>
  <span class="s9"></span>
</div>

</section>


<div className="whole2">


<div className="icon sun-shower">
  <div className="cloud"></div>
  <div className="sun">
    <div className="rays"></div>
  </div>
  <div className="rain"></div>
</div>

<div className="icon thunder-storm">
  <div className="cloud"></div>
  <div className="lightning">
    <div className="bolt"></div>
    <div className="bolt"></div>
  </div>
</div>

<div className="icon cloudy">
  <div className="cloud"></div>
  <div className="cloud"></div>
</div>
<br>
</br>
<div className="icon flurries">
  <div className="cloud"></div>
  <div className="snow">
    <div className="flake"></div>
    <div className="flake"></div>
  </div>
</div>

<div className="icon sunny">
  <div className="sun">
    <div className="rays"></div>
  </div>
</div>

<div className="icon rainy">
  <div className="cloud"></div>
  <div className="rain"></div>
</div>

</div>

</div>
<div className="inu">
	   <form onSubmit={this.onFormSubmit} className="input-group">
		<input placeholder="  Enter city name"
			className="form-control"
			value={this.state.term}
			onChange={this.onInputChange} />
		<span className="input-group-btn">
			<button type="submit" className="btn btn-secondary">Search</button>
		</span>
	   </form>
	   </div>
</div>
	);
  }
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);