import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import Ibutton from './Ibutton';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <Container>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="embed-responsive embed-responsive-16by9">
              <div className="ratio ratio-16x9">
                {/* <video className="embed-responsive-item" controls>
                  <source src="path/to/your/video.mp4" type="video/mp4" />
                </video> */}
                <div className="img">
                  <button onClick={toggleSidebar}>i</button>
                  <Ibutton isOpen={isOpen} toggleSidebar={toggleSidebar} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default App;
