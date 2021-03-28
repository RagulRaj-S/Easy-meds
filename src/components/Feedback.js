import React from 'react'
import 'materialize-css/dist/css/materialize.min.css'


class Feedback extends React.Component{
    

    render(){
        return(
                <div class="funds">
                   <h3 class="flow-text center-align">Feedback from Consumers</h3>
                   <section id="journals" class="section section-icons grey lighten-4 center">
            <div class="container">
              <div class="row">
                <div class="col s12 m4">
                <div class="card hoverable" >
                <span class="card-title">Gautham</span>
                    <div class="card-content">
                        <p>It was quiet similar to the branded medicines with affordable rate with good results</p>
                    </div>
                </div>
                </div>
                <div class="col s12 m4">
                <div class="card hoverable" >
                <span class="card-title">Varun</span>
                    <div class="card-content">
                        <p>Actually, I spent nearly 25% of my salaray to the medicines of my family members. But after using generic medicinesfrom JAS Store, I spent only 10% of my salary for medications.</p>
                    </div>
                </div>
                </div>
                <div class="col s12 m4">
                <div class="card hoverable" >
                <span class="card-title">Priya</span>
                    <div class="card-content">
                        <p>Really appreciatable scheme by the Government of India.</p>
                    </div>
                </div>
                </div>
                </div>
                </div>
                </section>
                </div>
        );
    }
}

export default Feedback