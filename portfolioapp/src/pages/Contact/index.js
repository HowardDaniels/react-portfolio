import React from "react";
import "./style.css";

function Contact(){
    return(
<div class="row" id="main-background">
    <div id="bio-para-box">
      <div class="para-head">
          <strong>Contact</strong>
        </div>
        <hr />
        <br />
        <form class="col-md-3">

            <div class="form-group">
                <label for="formGroupExampleInput" class="body-text">Name</label>
                <input type="text" class="form-control" id="formGroupExampleInput" />
            </div>

            <br />

          <div class="form-group">
            <label for="exampleFormControlInput1" class="body-text">Email</label>
            <input id="email" type="email" class="form-control" id="exampleFormControlInput1" />
          </div>

          <br />

          <div class="form-group">
            <label for="exampleFormControlTextarea1" class="body-text">Message</label>
            <textarea class="form-control" id="exampleFormControlTextarea1"></textarea>
          </div>

         <br />

          <button id="submit" type="submit" class="btn btn-primary" action="mailto:hdaniels13tat@gmail.com">Submit</button>

        </form>
                    
        <br />

    </div>

</div>
    );
}

export default Contact;