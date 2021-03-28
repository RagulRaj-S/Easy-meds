import React from 'react'
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css'
import {options} from 'materialize-css'
import data from "./medicines.json"


class Meds extends React.Component{
    constructor(props)
  {
  super(props);
  this.handleChange=this.handleChange.bind(this);
  this.searchMeds=this.searchMeds.bind(this);
  this.state={
    value:"",
    name:"",
    lowest:"",
    Jas:"",
  }
}
    componentDidMount() {
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('select');
            var instances = M.FormSelect.init(elems, options);
          });
    }

    handleChange = event => {
        this.setState({
            value: event.target.value
        })
      }
    
    searchMeds(){
        console.log("Hello")
        console.log(this.state.value)
        data.map((medicines, i) => {
            if(this.state.value==medicines.name)
            {
                // this.setState({
                //     name: medicines.name,
                    // lowest: medicines.lowest,
                    // Jas: medicines.JASprice,
                // })
            }   
        })
    }

    render(){
        return(
                <div class="meds container">
                    <h6>Choose a Medicine and Click Search</h6>
                   <div class="input-field col s6" > 
                    <select onChange={this.handleChange} value={this.state.value}>
                    <option value="Astorvastatin(10mg)" >Astorvastatin(10mg)</option>
                    <option value="Astorvastatin(20mg)">Astorvastatin(20mg)</option>
                    <option value="Cefuroxime axetil(250mg)">Cefuroxime axetil(250mg)</option>
                    <option value="Cefuroxime axetil(500mg)">Cefuroxime axetil(500mg)</option>
                    <option value="Alprazolam(0.25mg)">Alprazolam(0.25mg)</option>
                    <option value="Alprazolam(0.50mg)">Alprazolam(0.50mg)</option>
                    </select>
                    <div class="align-center">
                    <button class="btn red" type="submit" name="action"  onclick={this.searchMeds()}>Search
                        <i class="material-icons right" >search</i>
                    </button>
                    </div>
                    </div>
                    <div>
                    <div class="row">
          {
					data.map((medicines, i) => {
						return (
							<div key={medicines.id}>
								<div>
    
    <div class="col s12 m4">
      <div class="card blue-grey darken-1">
        <div class="card-content white-text">
          <span class="card-title">{medicines.name}</span>
          <p>{ this.state.lowest }</p>
          <p>{ this.state.Jas }</p>
        </div>
      </div>
    </div>
  </div>
								</div>
						
						);
					})
				}
        	</div>
      </div>

                    </div>
        );
    }
}
export default Meds;