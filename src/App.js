import './App.css';
import profile from './suit.jpg';
import book from './book.png';
import video from './video.jpg';
import schedule from './schedule.jpg';
import seattle from './seattle.png';

function App() {
  return (
    <div className="App" style={{ color: "#0F2A54", display: "flex", flexDirection: "column", alignItems: "center" }}>
      <div style={{ width: "100%", margin: "1vh 0vh", display: "flex", justifyContent: "space-around", flexWrap: "wrap" }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <div style={{ fontSize: "2.5vh", textAlign: "center" }}>Illarion Eremenko, Math/Computer Science Tutor</div>
          <div style={{ fontSize: "1.6vh", textAlign: "center" }}>Online tutor and study partner based in Everett, WA</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
          <div style={{ fontSize: "2.2vh", textAlign: "center" }}>iestemtutor@gmail.com</div>
        </div>
      </div>
      <div style={{ backgroundImage: `url(${seattle})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", color: "white", width: "100%", minHeight: "20vh",
        display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-around", flexWrap: "wrap" }}>
        <div style={{ display: "flex", flexDirection: "column", fontSize: "2.4vh" }}>
          <div>✓ University of Washington Bothell Graduate</div>
          <div>✓ BS in Computer Science and Software Engineering</div>
          <div>✓ 790/800 on Math SAT</div>
          <div>✓ Tutor for 3+ years</div>
          <div>✓ Dozens of clients</div>
        </div>    
        <div style={{ fontSize: "3vh", marginBottom: "2vh" }}>How can I help?</div>
      </div>
      <div style={{ fontSize: "5vh", textAlign: "center", marginTop: "3vh" }}>What is tutoring?</div>
      <div style={{ fontSize: "2vh", textAlign: "center" }}>(plus my unique approach)</div>
      <div style={{ margin: "2vh 10vw 0", boxShadow: "0 0px 1.2vh black", padding: "4vh", width: "70vw", display: "flex", flexDirection: "column", alignItems: "center"}}>
        <div style={{ fontSize: "3vh", textAlign: "center" }}><i>"The purpose of tutoring is to help students help themselves, <u>or to assist or guide them to the point
        at which they become an independent learner</u>, and thus no longer need a tutor."</i> -  <a href={"http://southcentral.edu/tutor_training/module1/index.html"} target="_blank" style={{ fontSize: "1.5vh" }}>South Central College</a></div>
        <div style={{ fontSize: "3.5vh", marginTop: "3vh", textAlign: "center" }}>This is why I offer <u>60-80 free study hours per week</u>.</div>
      </div>
      <div style={{ fontSize: "4vh", marginTop: "5vh" }}>The topics I tutor</div>
      <div style={{ boxShadow: "0 0px 1.2vh black", width: "60vw", padding: "3vh 6vw", display: "flex", margin: "1vh 10vw 0", fontSize: "2.5vh", flexWrap: "wrap" }}>
        <div style={{ display: "flex", flex: "1 1 15vw", flexDirection: "column", margin: "1vw" }}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>Algebra I, II</div>
            <div>(4.0)</div>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>Trigonometry</div>
            <div>(4.0)</div>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>Geometry</div>
            <div>(4.0)</div>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>Calculus I, II, III</div>
            <div>(4.0)</div>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>Linear Algebra</div>
            <div>(3.9)</div>
          </div>
          <tr>
            <tc>SAT Math</tc>
            <tc style={{ float: "right" }}>(790/800)</tc>
          </tr>
        </div>
        <div style={{ display: "flex", flex: "1 1 15vw", flexDirection: "column", margin: "1vw" }}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>Java I, II, III</div>
            <div>(4.0)</div>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "nowrap" }}>
            <div>C++ I, II, III</div>
            <div>(4.0)</div>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>Data Structures</div>
            <div>(4.0)</div>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>Web Development</div>
            <div>(N/A)</div>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>Javascript</div>
            <div>(N/A)</div>
          </div>
          <tr>
            <tc>Rubik's Cube</tc>
            <tc style={{ float: "right" }}>(11.58s)</tc>
          </tr>
        </div>
      </div>
      <div style={{ fontSize: "5vh", textAlign: "center", marginTop: "4vh" }}>The Ultimate Tutoring Package</div>
      <div style={{ boxShadow: "0 0px 1.2vh black", display: "flex", margin: "3vh 10vw 0", fontSize: "2.5vh", width: "50vw", margin: "1vh 10vw 3vh",
      flexDirection: "column", alignItems: "center", padding: "3vh" }}>
        <div style={{ textAlign: "center"  }}><u>What I am offering</u></div><br />
        <div style={{ textAlign: "center"  }}>✓ 1 hour session/week for $60</div><br />
        <div style={{ textAlign: "center"  }}><u>This includes:</u></div><br />
        <div style={{ textAlign: "center"  }}>✓ 60 - 80 study session hours/week!</div><br />
        <div style={{ textAlign: "center"  }}>✓ Unlimited email support!</div><br />
        <div style={{ textAlign: "center"  }}>✓ Unlimited text support!</div><br />
        <div style={{ textAlign: "center"  }}>✓ Weekly student study time reports, example <u>here</u>!</div><br />
        <div style={{ textAlign: "center"  }}>✓ A free hour during the initial 2 hour session!</div>
      </div>
      <div style={{ display: "flex", margin: "5vh 0", padding: "5vh 5vw", borderStyle: "solid none solid", borderWidth: "0.1vh", flexWrap: "wrap", alignContent: "center" }}>
        <div style={{ flex: "1 0 20vw" }}>
          <img src={profile} style={{ height: "30vh", margin: "auto" }} />
        </div>
        <div style={{ fontSize: "3vh", flex: "1 0 60vw", alignItems: "center" }}>
          I started tutoring at Edmonds Community College in the Learning Support Center and then at Central Washington University for their Math Bridge program. While attending University of Washington Bothell I started private tutoring the classes listed above to middle/high schoolers and college students.
          <br/><br/>
          During the study hours, I either tutor other students, learn more about Deep Learning in the AI field, solve Leetcode.com questions, or work on my startup.
          <br/><br/>
          In my free time, I like to read. Feel free to ask me what I am currently reading.
        </div>
      </div>
      <div style={{ fontSize: "5vh", margin: "2vh 0 0", textAlign: "center" }}>Some additional info</div>
      <div style={{ display: "flex", margin: "2vh 0 0", justifyContent: "center", width: "100%", flexWrap: "wrap" }}>
        <div style={{ boxShadow: "0 0px 1.2vh black", display: "flex", fontSize: "2.5vh", width: "25vw", margin: "3vh 3vw",
          flexDirection: "column", alignItems: "center", padding: "3vh 3vw", minWidth: "300px" }}>
            <div style={{ textAlign: "center" }}><u>Study Sessions</u></div><br />
            <div style={{ textAlign: "center" }}>Study sessions are Zoom calls where students join and study, generally on mute in order to concentrate.</div><br />
            <div style={{ textAlign: "center" }}>This creates an environment where a student can concentrate on their work without any outside distractions.</div><br />
            <div style={{ textAlign: "center" }}>The only rule:</div>
            <div style={{ textAlign: "center" }}><u>Study sessions are for studying/working.</u></div><br />
            <div style={{ textAlign: "center" }}>In other words, don't get distracted with other tasks. The Zoom call is open 24/7, so join later if needed!</div><br />
            <img src={video} style={{ width: "20vw", minWidth: "250px" }} />
        </div>
        <div style={{ boxShadow: "0 0px 1.2vh black", display: "flex", fontSize: "2.5vh", width: "25vw", margin: "3vh 3vw",
          flexDirection: "column", alignItems: "center", padding: "3vh 3vw", minWidth: "300px"  }}>
            <div style={{ textAlign: "center" }}><u>For long term clients</u></div><br />
            <div style={{ textAlign: "center" }}>As part of the journey to build independent learners, there is a book I'd like for my students to read.</div><br />
            <div style={{ textAlign: "center" }}>There is a version for teenagers as well. I'll reveal this during the initial meeting.</div><br />
            <div style={{ textAlign: "center" }}>The initial meeting is 2 hours long, with the first hour for free to break the ice and get into the proper mindset.</div><br />
            <div style={{ textAlign: "center" }}>Looking forward to studying with you!</div><br />
            <img src={book} style={{ width: "16vw", minWidth: "250px" }} />
        </div>
      </div>
      <div style={{ fontSize: "5vh", margin: "4vh 0 0" }}>My Schedule</div>
      <div style={{ boxShadow: "0 0px 1.2vh black", display: "flex", fontSize: "2.5vh", width: "25vw", margin: "3vh 3vw",
          flexDirection: "column", alignItems: "center", padding: "3vh 3vw", minWidth: "300px"  }}>
            <div style={{ textAlign: "center" }}><u>Using Benjamin Franklin's Schedule</u></div><br />
            <div style={{ textAlign: "center" }}>I have adopted Benjamin Franklin's schedule as shown below from his autobiography.</div><br />
            <div style={{ textAlign: "center" }}>I find that days are longer and more productive this way.</div><br />
            <img src={schedule} style={{ width: "16vw", minWidth: "250px" }} />
      </div>
      <div style={{ fontSize: "2vh", width: "100%", borderStyle: "solid none none", borderWidth: "0.1vh", textAlign: "center", padding: "2vh 0" }}>
        Feel free to send me an email at <b>iestemtutor@gmail.com</b> if you have any questions.
      </div>
    </div>
  );
}

export default App;
