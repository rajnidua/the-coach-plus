import React from "react";
import { createTheme, ThemeProvider, Button } from "@material-ui/core";
import homePageImage from "../../images/homePage-bg.jpg";
//import TypeWriterEffect from "react-typewriter-effect";
import "../../styles/enrollment-confirmation.css";

function EnrollmentConfirmation(props) {
  console.log("FINAL PROPS RECIEVED ", props);

  const theme = createTheme({
    palette: {
      type: "light",
      primary: {
        main: "#3f51b5",
      },
      secondary: {
        main: "#f50057",
      },
      background: {
        paper: "#ece8e8",
        default: "#f7f4f4",
      },
    },
  });
  return (
    <section className="hero">
      <div className="left-section">
        <img className="img-class" src={homePageImage} alt="profile pic"></img>
        {/* <img className="img-class" src={profilePic} alt="profile pic"></img> */}
      </div>
      <div className="right-section">
        <div className="name">
          <h1>RAJNI DUA</h1>
        </div>
        <div className="text-under-name" variant="contained" color="primary">
          <span className="diff-font">FRONT</span> END DEVELOPER{" "}
          <span className="diff-font diff-font-color">|</span>
          <span className="diff-font"> BACK</span> END DEVELOPER
        </div>

        {/*   <div className="typing-block">
            <div className="typing">
              <Typing />
            </div>
          </div> */}

        {/* <TypeWriterEffect
          textStyle={{
            fontFamily: "Red Hat Display",
            color: "#3F3D56",
            fontWeight: 500,
            fontSize: "1.8em",
          }}
          startDelay={1000}
          cursorColor="#3F3D56"
          multiText={[
            "HTML",
            "CSS",
            "BOOTSTRAP",
            "JAVASCRIPT",
            "JQUERY",
            "MYSQL2",
            "MONGODB",
            "EXPRESS JS",
            "NODE JS",
            "API INTEGRATION",
            "REACT",
            "",
          ]}
          multiTextDelay={1000}
          typeSpeed={30}
          hideCursorAfterText={true}
        /> */}

        <Button
          href="mailto:rajni.dua14@gmail.com?subject=REGARDING WORK"
          color="primary"
          variant="contained"
        >
          GET IN TOUCH
        </Button>
      </div>
    </section>
  );
}

export default EnrollmentConfirmation;
