import React from 'react'
import 'materialize-css/dist/css/materialize.min.css'

class Contact extends React.Component{
    render(){
        return(
            <section id="contact" class="section section-contact scrollspy">
            <div class="container">
              <div class="row center-align">
                <div class="col s12 m6">
                  <div class="card-panel grey lighten-3 center center-align">
                    <i class="material-icons medium">email</i>
                    <h5>Contact Us</h5>
                    <div class="center-align">
                    <h6>For all enquiries, please email us using the form below</h6>    
                    </div>
                    </div>
                </div>
                <div class="col s12 m6">
                  <div class="">
                    <h5>Your Review about generic medicines</h5>
                    <div class="input-field">
                      <input type="text" id="name" name="name" />
                      <label for="name">Name</label>
                    </div>
                    <div class="input-field">
                      <input type="email" id="email" name="mail"/>
                      <label for="mail">Email</label>
                    </div>
                    <div class="input-field">
                      <textarea class="materialize-textarea" id="message" name="message" ></textarea>
                      <label for="message">Review</label>
                    </div>
                    <div class="valign-wrapper">
                    <input type="submit" value="Submit" class="red btn hoverable" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
    }
}

export default Contact