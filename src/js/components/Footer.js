import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const FooterPage = () => {
  return (
    <MDBFooter className="font-small pt-4 mt-4 bg-info">
      <MDBContainer fluid className="text-center text-md-center">
        <MDBRow>
          <MDBCol md="12">
            <h5 className="title">T1 Content</h5>
            <p>
              T1 is a Korean team owned by SK telecom CS T1.
            </p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://server-restful-api-0610.herokuapp.com/"> ddq.com </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPage;