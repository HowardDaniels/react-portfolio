import React from "react";
import "./style.css";
import corkBoard from "./images/cork-board.png";
import passwordGeneratorImage from "./images/password-generator-snip.png";
import codeQuizImage from "./images/code-quiz-snip.png";
import dayPlannerImage from "./images/day-planner-snip.png";
import weatherDashboardImage from "./images/weather-dashboard-snip.png";
import dailyMeshImage from "./images/dailymesh.jpg";
import developerProfileGeneratorImage from "./images/developer-profile.png";
import employeeSummaryImage from "./images/employee-summary-snip.png";
import noteTakerImage from "./images/note-taker-snip.png";
import employeeTrackerImage from "./images/employee-tracker-snip.png";
import burgerLoggerImage from "./images/burger-logger-snip.png";
import reverseEngineeringCodeImage from "./images/reverse-engineering-code-snip.png";
import movieMagicImage from "./images/movie-magic-snip.png";
import fitnessTrackerImage from "./images/fitness-tracker-snip.png";
import progressiveBudgetImage from "./images/progressive-budget-snip.png";
import userDirectoryImage from "./images/user-directory-snip.png";

//Comment
function Portfolio(){
    return(
<div class="row" id="main-background">

    <div id="bio-para-box" style={{backgroundImage:corkBoard}}>
      <div class="para-head"><strong>Portfolio</strong></div>
      <hr />
      <div class="text-wrap bd-highlight">
      <p class="text-center">

        <div class="row" id="picture-row-1">

          <div class="col-md-2" id="project-box-1" style={{backgroundImage: `url(${passwordGeneratorImage})`}}>
            <div class="name-banner">
              <a href="https://howarddaniels.github.io/password-generator/index.html">Project 1: Password Generator</a>
            </div>
          </div>

          <div class="col-md-2" id="project-box-2" style={{backgroundImage: `url(${codeQuizImage})`}}>
            <div class="name-banner">
              <a href="https://howarddaniels.github.io/code-quiz/index.html">Project 2: Code Quiz</a>
            </div>
          </div>

          <div class="col-md-2" id="project-box-3" style={{backgroundImage: `url(${dayPlannerImage})`}}>
            <div class="name-banner">
              <a href="https://howarddaniels.github.io/day-planner/index.html">Project 3: Day Planner</a>
            </div>
          </div>

          <div class="col-md-2" id="project-box-4" style={{backgroundImage: `url(${weatherDashboardImage})`}}>
            <div class="name-banner">
              <a href="https://howarddaniels.github.io/weather-dashboard/index.html">Project 4: Weather Dashboard</a>
            </div>
          </div>

          <div class="col-md-2" id="project-box-5" style={{backgroundImage: `url(${dailyMeshImage})`}}>
            <div class="name-banner">
              <a href="https://howarddaniels.github.io/the-daily-mesh/index.html">Project 5: The Daily Mesh</a>
            </div>
          </div>
        </div>
        <div class="row" id="picture-row-2">

          <div class="col-md-2" id="project-box-6" style={{backgroundImage: `url(${developerProfileGeneratorImage})`}}>
            <div class="name-banner">
              <a href="https://github.com/HowardDaniels/developer-profile-generator">Project 6: Developer Profile Generator</a>
            </div>
          </div>

          <div class="col-md-2" id="project-box-7" style={{backgroundImage: `url(${employeeSummaryImage})`}}>
            <div class="name-banner">
              <a href="https://github.com/HowardDaniels/employee-summary">Project 7: Employee Summary</a>
            </div>
          </div>

          <div class="col-md-2" id="project-box-8" style={{backgroundImage: `url(${noteTakerImage})`}}>
            <div class="name-banner">
              <a href="https://github.com/HowardDaniels/note-taker">Project 8: Note Taker</a>
            </div>
          </div>

          <div class="col-md-2" id="project-box-9" style={{backgroundImage: `url(${employeeTrackerImage})`}}>
            <div class="name-banner">
              <a href="https://github.com/HowardDaniels/employee-tracker">Project 9: Employee Tracker</a>
            </div>
          </div>

          <div class="col-md-2" id="project-box-10" style={{backgroundImage: `url(${burgerLoggerImage})`}}>
            <div class="name-banner">
              <a href=" https://dashboard.heroku.com/apps/tranquil-dusk-35562">Project 10: Burger Logger</a>
            </div>
          </div>

        </div>

        <div class="row" id="picture-row-3">

          <div class="col-md-2" id="project-box-11" style={{backgroundImage: `url(${reverseEngineeringCodeImage})`}}>
            <div class="name-banner">
              <a href="https://github.com/HowardDaniels/reverse-engineering-code">Project 11: Reverse Engineering Code</a>
            </div>
          </div>

          <div class="col-md-2" id="project-box-12" style={{backgroundImage: `url(${movieMagicImage})`}}>
            <div class="name-banner">
              <a href="https://infinite-inlet-20359.herokuapp.com/">Project 12: Movie Magic</a>
            </div>
          </div>

          <div class="col-md-2" id="project-box-13"> style={{backgroundImage: `url(${fitnessTrackerImage})`}}
            <div class="name-banner">
              <a href="https://github.com/HowardDaniels/fitness-tracker">Project 13: Fitness Tracker</a>
            </div>
          </div>

          <div class="col-md-2" id="project-box-14" style={{backgroundImage: `url(${progressiveBudgetImage})`}}>
            <div class="name-banner">
              <a href="https://github.com/HowardDaniels/progressive-budget">Project 14: Progressive Budget</a>
            </div>
          </div>

          <div class="col-md-2" id="project-box-15" style={{backgroundImage: `url(${userDirectoryImage})`}}>
            <div class="name-banner">
              <a href="https://github.com/HowardDaniels/user-directory">Project 15: User Directory</a>
            </div>
          </div>
          
        </div>

          <br />

          <div id="portfolio-text">
          <p>This portfolio also is available in <a href="https://howarddaniels.github.io/basic-portfolio">basic</a> and <a href="https://howarddaniels.github.io/responsive-portfolio">responsive</a> versions.</p>
          <br />
          <p>Links to the projects and their repositories:</p>
          <ul>
          <li>Password Generator: creates a strong, randomized password <a href="https://howarddaniels.github.io/password-generator">Link</a> <a href="https://github.com/HowardDaniels/password-generator">Repository</a></li>
          <li>Code Quiz: tests your knowledge of JavaScript <a href="https://howarddaniels.github.io/code-quiz">Link</a> <a href="https://github.com/HowardDaniels/code-quiz">Repository</a></li>
          <li>Day Planner: organizes your daily work schedule <a href="https://howarddaniels.github.io/day-planner">Link</a> <a href="https://github.com/HowardDaniels/day-planner">Repository</a></li>
          <li>Weather Dashboard: gives you the current weather and 5-day forecast for any city in the world <a href="https://howarddaniels.github.io/weather-dashboard">Link</a> <a href="https://github.com/HowardDaniels/weather-dashboard">Repository</a></li>
          <li>The Daily Mesh: provides news, weather, and stocks all on one website <a href="https://howarddaniels.github.io/the-daily-mesh">Link</a> <a href="https://github.com/HowardDaniels/the-daily-mesh">Repository</a></li>
          <li>Developer Profile Generator: creates a resume profile for developers linking to their GitHub account <a href="https://github.com/HowardDaniels/developer-profile-generator">Repository</a></li>
          <li>Employee Summary: provides a summary of managers, engineers, and interns on a developer team <a href="https://github.com/HowardDaniels/employee-summary">Repository</a></li>
          <li>Note Taker: writes and saves notes <a href="https://github.com/HowardDaniels/note-taker">Repository</a></li>
          <li>Employee Tracker: uses NPM Express and MySQL to allow users to add, update, and view employee information with a command line application <a href="https://github.com/HowardDaniels/employee-tracker">Repository</a></li>
          <li>Burger Logger: keeps track of burgers that have and haven't been eaten yet <a href="https://github.com/HowardDaniels/burger-logger">Repository</a></li>
          <li>Reverse Engineering Code: describes the purpose of different pages of a model view controller (MVC) <a href="https://github.com/HowardDaniels/reverse-engineering-code">Repository</a></li>
          <li>Movie Magic: searches for movies and fellow movie buffs through an API <a href="https://infinite-inlet-20359.herokuapp.com/">Link</a> <a href="https://github.com/HowardDaniels/movie-magic">Repository</a></li>
          </ul>
          </div>
          <br />
        </p>
      </div>
      
    </div>
  </div>
    );
}

export default Portfolio;