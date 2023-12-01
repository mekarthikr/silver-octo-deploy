import "./App.css";

function App() {
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <div className="resume-section">
              <h2 className="mb-4">Karthik R</h2>
              <p>
                <i className="fas fa-map-marker-alt"></i> Ernakulam, Kerala
              </p>
              <p>
                <i className="fas fa-envelope"></i> iamjustkarthik@gmail.com
              </p>
              <p>
                <i className="fas fa-phone"></i> (+91) 8248439284
              </p>
            </div>
            <div className="resume-section">
              <h2 className="mb-4">Education</h2>
              <h4>Sri Krishna College of Technolory</h4>
              <p>
                Bachelor of Engineering in Computer Science
                <br />
                Graduation Date: May 2022
              </p>
            </div>
            <div className="resume-section">
              <h2 className="mb-4">Work Experience</h2>
              <h4>Job Title</h4>
              <p>Company Name - Location | Dates of Employment</p>
              <ul>
                <li>Responsibility or Achievement 1</li>
                <li>Responsibility or Achievement 2</li>
              </ul>
            </div>
            <div className="resume-section">
              <h2 className="mb-4">Skills</h2>
              <p>Programming Languages: Java, Python</p>
              <p>Web Technologies: HTML, CSS, JavaScript</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
