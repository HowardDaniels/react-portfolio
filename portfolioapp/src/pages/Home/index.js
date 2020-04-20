import React from "react";
import "./style.css";
// import "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css";

function Home(){
    return(
<div class="row" id="main-background">
            <div id="bio-para-box">
                <div class="para-head">
                    <strong>About Me</strong>
                </div>
                <hr />
                <div class="text-wrap bd-highlight">
                    <p class="text-center">
                            <img src="linkedinprofile.png" id="profile" />
                                <p class="body-text">I am currently attending the George Washington University coding boot camp in Arlington, VA. I am relatively new to coding, and I am taking the course to enter into the IT field.</p>
                                <p class="body-text">I graduated from Roanoke College with a Bachelor of Arts in International Relations in 2018. I have lived in Roanoke, Virginia; Wilmington, Delaware; and Alexandria, Virginia.</p>
                                <p class="body-text">In addition to learning to be a full-stack developer, I speak fluent German, and my goal is to work as a developer in a German-speaking country.</p>
                                <p class="body-text">When I'm not coding, I enjoy running and traveling. I ran cross country and track and field in high school and college, and I recently traveled to Austria to visit relatives.</p>
                    </p>
                </div>
            </div>

</div>

    );
}

export default Home;