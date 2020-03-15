import React, { useState } from "react";
import { MDBCarousel, MDBCarouselCaption, MDBBtn, MDBCol, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer } from
  "mdbreact";
import Cry from '../../assets/cry1.png'
import '../../Style/AnalysisPrediction.css'
import { ToastContainer, toast } from 'react-toastify';
import Recorder from "./Recorder";

const CarouselPage = () => {
  const [status, setStatus] = useState(false);

  const mailer = () => {
    (!status) ? toast.success("Real-Time assistance activated") : toast.error("Real-Time assistance deactivated");
    setStatus(!status)
  }


  return (
    <>
      <MDBContainer>
        <MDBCol md="12" className="text-center analysis-para">
          <p>
            Nowadays, modern parents are not aware of why does a child cry.
            To make them aware, we have designed a child cry predictor that helps them in predicting the understanding of the child's cry.
            This benefits in rendering perfect attention to the child at the right time.
            It also reveals the specific cause of the scream. A real-time experience with mail assistance is provided.
              </p>
        </MDBCol>

        <MDBCarousel
          activeItem={1}
          length={2}
          showControls={true}
          showIndicators={true}
          className="z-depth-1"
          style={{ marginTop: '50px' }}
        >
          <MDBCarouselInner >
            <MDBCarouselItem itemId="1">
              <MDBView>
                <img
                  className="d-block w-100"
                  style={{ height: '490px' }}
                  src="https://png.pngtree.com/thumb_back/fw800/back_our/20190620/ourmid/pngtree-mother-and-baby-cartoon-festival-geometric-childlike-blue-background-image_161537.jpg"
                  alt="First slide"
                />
                <MDBMask overlay="black-strong" />
              </MDBView>
              <MDBCarouselCaption>
                {/* <img src={Funbaby} alt="" className="funbaby2" />
                <h3 className="h3-responsive ">A Baby Cry Predictor that serves in foretelling the understanding of your Baby's Cry</h3>
                <MDBBtn gradient="blue" className="btn-predict">Predict</MDBBtn> */}
                <Recorder mail={status} />
              </MDBCarouselCaption>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="2">
              <MDBView>
                <img
                  className="d-block w-100"
                  style={{ height: '490px' }}
                  src="https://image.freepik.com/free-vector/abstract-colorful-flow-shapes-background-design_23-2148237711.jpg"
                  alt="Second slide"
                />
                <MDBMask overlay="black-strong" />
              </MDBView>
              <MDBCarouselCaption>
                <img src={Cry} alt="" className="Cry" />
                <h3 className="h3-responsive">Click below to stimulate Real-Time exposure with mail assistance.</h3>
                <MDBBtn outline color={(!status) ? "success" : "danger"} className="btn-analysis" onClick={() => mailer()}>{(!status) ? "Activate" : "Deactivate"}</MDBBtn>
              </MDBCarouselCaption>
            </MDBCarouselItem>
          </MDBCarouselInner>
        </MDBCarousel>
      </MDBContainer>
      {
        (status) ?
          <ToastContainer /> : null
      }
    </>
  );
}

export default CarouselPage;