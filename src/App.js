import './App.css';
import profile from './suit.jpg';
import book from './book.png';
import video from './video.jpg';
import schedule from './schedule.jpg';
import seattle from './seattle.png';
import ViewPDF from './ViewPDF';


//TODO: get rid of any <br />; create thingies for it...
function App() {
  return (
    <div className="App" style={{ color: "#0F2A54", display: "flex", flexDirection: "column", alignItems: "center" }}>
      <div style={{ width: "100%", margin: "1vh 0vh", display: "flex", justifyContent: "space-around", flexWrap: "wrap" }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <div style={{ fontSize: "2.5vh", textAlign: "center" }}>Illarion Eremenko, Math/Computer Science Tutor</div>
          <div style={{ fontSize: "1.6vh", textAlign: "center" }}>Online tutor and study partner based in WA State</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
          <div style={{ fontSize: "2.2vh", textAlign: "center" }}>iestemtutor@gmail.com</div>
        </div>
      </div>
      <div style={{
        backgroundImage: `url(${seattle})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", color: "white", width: "100%", minHeight: "20vh",
        display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-around", flexWrap: "wrap"
      }}>
        <div style={{ display: "flex", flexDirection: "column", fontSize: "2.4vh" }}>
          <div>✓ Software Engineer</div>
          <div>✓ University of Washington Bothell Graduate</div>
          <div>✓ BS in Computer Science and Software Engineering</div>
          <div>✓ 790/800 on Math SAT</div>
          <div>✓ Tutor for 3+ years</div>
          <div>✓ Dozens of clients</div>
        </div>
        <div style={{ fontSize: "3vh", marginBottom: "2vh" }}>How can I help?</div>
      </div>
      {/* <div style={{ fontSize: "4vh", color: "red", textAlign: "center", width: "50vw" }}>Hi all, I began working full time recently and can dedicate a small amount of hours of tutoring per week. Reach out to me to set something up. The site isn't fully up to date other than the tutoring packages below.</div> */}
      {/* <a href="https://forms.gle/erEmp9pdShM28Low5" target="_blank" style={{ marginTop: "1.5vh", fontSize: "2.5vh" }}>Zoom Meeting Room Form</a> */}
      <div style={{ fontSize: "5vh", textAlign: "center", marginTop: "1.5vh" }}>What is tutoring?</div>
      <div style={{ fontSize: "2vh", textAlign: "center" }}>(plus my unique approach)</div>
      <div style={{ margin: "2vh 10vw 0", boxShadow: "0 0px 1.2vh black", padding: "4vh", width: "70vw", display: "flex", flexDirection: "column", alignItems: "center" }}>
        <div style={{ fontSize: "3vh", textAlign: "center" }}><i>"The purpose of tutoring is to help students help themselves"</i> -  <a href={"http://southcentral.edu/tutor_training/module1/index.html"} rel="noreferrer" target="_blank" style={{ fontSize: "1.5vh" }}>South Central College</a></div>
        <div style={{ fontSize: "3.5vh", marginTop: "3vh", textAlign: "center", marginBottom: "1.5vh" }}>On top of 1:1 tutoring, I offer <u>up to 40 hours of availability per week</u>.</div>
        <div style={{ fontSize: "3.5vh", textAlign: "center", marginBottom: "1.5vh" }}>During this time, I'll be available to answer questions.</div>
        <div style={{ fontSize: "3.5vh", textAlign: "center", }}>To keep track of a student's study time, they can join my Zoom room when they study. A <u style={{ cursor: "pointer", color: "blue" }} onClick={e => {
          var pdf = document.getElementById("pdf");
          pdf.scrollIntoView({ behavior: "smooth" });
        }}>
          weekly report
        </u> summarizing the student's study hours will be provided.</div>
        <div style={{ fontSize: "3.5vh", textAlign: "center" }}></div>
      </div>
      <div style={{ fontSize: "4vh", marginTop: "5vh" }}>The subjects I tutor</div>
      <div style={{ boxShadow: "0 0px 1.2vh black", width: "60vw", padding: "3vh 6vw", display: "flex", margin: "1vh 10vw 0", fontSize: "2.5vh", flexWrap: "wrap" }}>
        <div style={{ display: "flex", flex: "1 1 15vw", flexDirection: "column", margin: "1vw" }}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div><u>Subject</u></div>
            <div><u>Grade</u></div>
          </div>
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
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>SAT Math</div>
            <div>(790/800)</div>
          </div>
        </div>
        <div style={{ display: "flex", flex: "1 1 15vw", flexDirection: "column", margin: "1vw" }}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div><u>Subject</u></div>
            <div><u>Grade</u></div>
          </div>
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
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>Rubik's Cube</div>
            <div>(11.58s)</div>
          </div>
        </div>
      </div>


      <div style={{ display: "flex", margin: "5vh 0", padding: "5vh 5vw", borderStyle: "solid none solid", borderWidth: "0.1vh", flexWrap: "wrap", alignContent: "center" }}>
        <div style={{ display: "flex", flex: "1 0 20vw" }}>
          <img alt={"<Profile Pic>"} src={profile} style={{ height: "30vh", margin: "auto", marginBottom: "2vh" }} />
        </div>
        <div style={{ fontSize: "3vh", flex: "1 0 60vw", alignItems: "center" }}>
          I started tutoring at Edmonds Community College in the Learning Support Center and then at Central Washington University for their Math Bridge program. While attending University of Washington Bothell I started private tutoring the classes listed above to middle/high schoolers and college students.
          <br /><br />
          During the study hours, I tutor students, learn more about Deep Learning in the AI field, or work on my startup.
          <br /><br />
          In my free time, I like to read. Feel free to ask me what I am currently reading at iestemtutor@gmail.com.
        </div>
      </div>

      <div style={{ fontSize: "5vh", textAlign: "center", marginTop: "4vh" }}>Tutoring Packages</div>
      <div style={{ display: "flex", margin: "2vh 0 0", justifyContent: "center", width: "100%", flexWrap: "wrap" }}>
        <div style={{
          boxShadow: "0 0px 1.2vh black", display: "flex", fontSize: "2.5vh", width: "17vw", margin: "1vh 1vw",
          flexDirection: "column", alignItems: "center", padding: "2vh 2vw", minWidth: "300px", opacity: "0.5"
        }}>
          <div style={{ fontSize: "3.5vh", textAlign: "center" }}><u>The Independent</u></div>
          <div style={{ fontSize: "3vh", textAlign: "center", marginBottom: "1.5vh" }}>$30/month</div>
          <div style={{ textAlign: "center", marginBottom: "2.9vh" }}>(Currently unavailable)</div>
          <div style={{ textAlign: "center", marginBottom: "2.9vh" }}>✓ Weekly student study time reports, see example below!</div>
          <div style={{ textAlign: "center", marginBottom: "2.9vh" }}>✓ Optional 15 minute introductions if requested!</div>
          <div style={{ flex: "1 0 auto" }}></div>
          <div style={{ textAlign: "center", borderTopStyle: "solid", paddingTop: "1vh" }}>For those who want to keep track of their study hours, by joining a Zoom room (it tracks when student enters & leaves).</div>
        </div>
        <div style={{
          boxShadow: "0 0px 1.2vh black", display: "flex", fontSize: "2.5vh", width: "17vw", margin: "1vh 1vw",
          flexDirection: "column", alignItems: "center", padding: "2vh 2vw", minWidth: "300px", opacity: "0.5"
        }}>
          <div style={{ fontSize: "3.5vh", textAlign: "center" }}><u>Just the Facts</u></div>
          <div style={{ fontSize: "3vh", textAlign: "center", marginBottom: "1.5vh" }}>$200/month</div>
          <div style={{ textAlign: "center", marginBottom: "2.9vh" }}>(Currently unavailable)</div>
          <div style={{ textAlign: "center", marginBottom: "2.9vh" }}>✓ Weekly student study time reports, see example below!</div>
          <div style={{ textAlign: "center", marginBottom: "2.9vh" }}>✓ Optional 15 minute introductions if requested!</div>
          <div style={{ textAlign: "center", marginBottom: "2.9vh" }}><b>✓ Unlimited support via email or direct messages (tutors don't usually offer this)!</b></div>
          <div style={{ flex: "1 0 auto" }}></div>
          <div style={{ textAlign: "center", borderTopStyle: "solid", paddingTop: "1vh" }}>For those who want their study hours report, AND unlimited support over email/direct messages.</div>
        </div>
        <div style={{
          boxShadow: "0 0px 1.2vh black", display: "flex", fontSize: "2.5vh", width: "17vw", margin: "1vh 1vw",
          flexDirection: "column", alignItems: "center", padding: "2vh 2vw", minWidth: "300px"
        }}>
          <div style={{ fontSize: "3.5vh", textAlign: "center" }}><u>Private Sessions</u></div>
          <div style={{ fontSize: "3vh", textAlign: "center", marginBottom: "1.5vh" }}>$50/hour</div>
          <div style={{ textAlign: "center", marginBottom: "2.9vh" }}>(Currently available)</div>
          <div style={{ textAlign: "center", marginBottom: "2.9vh" }}>✓ Private 1 on 1 tutoring sessions!</div>
          <div style={{ textAlign: "center", marginBottom: "2.9vh" }}>✓ Keep track of what was covered in a Google Doc!</div>
          <div style={{ textAlign: "center", marginBottom: "2.9vh" }}>✓ Get assigned specific questions to strengthen concepts!</div>
          <div style={{ textAlign: "center", marginBottom: "2.9vh" }}>✓ Can be paired along with Package #2 (will do a discount)!</div>
          <div style={{ flex: "1 0 auto" }}></div>
          <div style={{ textAlign: "center", borderTopStyle: "solid", paddingTop: "1vh" }}>For those who want 1:1 private tutoring.</div>
        </div>
      </div>
      <div id="pdf" style={{ fontSize: "4vh", textAlign: "center", margin: "2vh 0" }}>Sample Report</div>
      <ViewPDF />
      <div style={{ textAlign: "center", marginTop: "1vh" }}>There is debate about a positive correlation between study time and grades, <br />
      but it is agreed that those who study get higher grades than those who don't, and this tool encourages study time.<br />
      I can also assign homework in order to get the student ahead.</div>
      <div style={{ fontSize: "5vh", margin: "2vh 0 0", textAlign: "center" }}>Some additional info</div>
      <div style={{ display: "flex", margin: "2vh 0 0", justifyContent: "center", width: "100%", flexWrap: "wrap" }}>
        <div style={{
          boxShadow: "0 0px 1.2vh black", display: "flex", fontSize: "2.5vh", width: "25vw", margin: "3vh 3vw",
          flexDirection: "column", alignItems: "center", padding: "3vh 3vw", minWidth: "300px"
        }}>
          <div style={{ textAlign: "center", marginBottom: "2.9vh" }}><u>Study Sessions</u></div>
          <div style={{ textAlign: "center", marginBottom: "2.9vh" }}>I have a Zoom room where my students can join and track their study time with microphone and camera off.</div>
          <div style={{ textAlign: "center", marginBottom: "2.9vh" }}>This creates an environment where a student can concentrate on their work without any outside distractions.</div>
          <div style={{ textAlign: "center", marginBottom: "2.9vh" }}>Study sessions are for studying/working.</div>
          <div style={{ textAlign: "center", marginBottom: "2.9vh" }}>In other words, don't get distracted with other tasks.</div>
          <div style={{ flex: "1 0 auto" }}></div>
          <img alt={"<Zoom Video>"} src={video} style={{ width: "20vw", minWidth: "250px" }} />
        </div>
        <div style={{
          boxShadow: "0 0px 1.2vh black", display: "flex", fontSize: "2.5vh", width: "25vw", margin: "3vh 3vw",
          flexDirection: "column", alignItems: "center", padding: "3vh 3vw", minWidth: "300px"
        }}>
          <div style={{ textAlign: "center", marginBottom: "2.9vh" }}><u>Book Recommendation</u></div>
          <div style={{ textAlign: "center", marginBottom: "2.9vh" }}>As part of the journey to build independent learners, there is a book I'd like for my students to read.</div>
          <div style={{ textAlign: "center", marginBottom: "2.9vh" }}>There is a version for teenagers as well for a bit of an easier read. I'll reveal this over email.</div>
          <div style={{ textAlign: "center", marginBottom: "2.9vh" }}>We can talk more about it during the optional 15 minute introductions.</div>
          <div style={{ textAlign: "center", marginBottom: "2.9vh" }}>Looking forward to studying with you!</div>
          <div style={{ flex: "1 0 auto" }}></div>
          <img alt={"<Mystery Book>"} src={book} style={{ width: "16vw", minWidth: "250px" }} />
        </div>
      </div>
      <div style={{ fontSize: "5vh", margin: "4vh 0 0" }}>My Availability (PST/PDT)</div>
      <div style={{
        boxShadow: "0 0px 1.2vh black", display: "flex", fontSize: "2.5vh", width: "25vw", margin: "3vh 3vw",
        flexDirection: "column", alignItems: "center", padding: "3vh 3vw", minWidth: "300px"
      }}>
        <div style={{ textAlign: "center", marginBottom: "2.9vh" }}><u>Using Benjamin Franklin's Schedule</u></div>
        <div style={{ textAlign: "center", marginBottom: "2.9vh" }}>I started using Benjamin Franklin's schedule as shown below from his autobiography.</div>
        <img alt={"<Benjamin Franklin's Schedule>"} src={schedule} style={{ width: "16vw", minWidth: "250px" }} />
        <a href={"https://www.pinterest.com/pin/206532332898922924/"} style={{ color: "#707070", fontSize: "1vh" }} target="_blank" rel="noreferrer">https://www.pinterest.com/pin/206532332898922924/</a>
        <div style={{ textAlign: "center", marginTop: "2vh" }}>I find that days are longer and more productive this way.</div>
      </div>
      <div style={{ fontSize: "2vh", width: "100%", borderStyle: "solid none none", borderWidth: "0.1vh", textAlign: "center", padding: "2vh 0" }}>
        Feel free to send me an email at <b>iestemtutor@gmail.com</b> if you have any questions.
      </div>
    </div>
  );
}

export default App;
