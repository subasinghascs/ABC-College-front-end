import React from 'react';
import { Link } from 'react-router-dom';
import { CCard, CCardImage, CCardBody, CCardTitle, CCardText, CButton } from '@coreui/react'; // import the required components from CoreUI
import ReactImg from '../images/images.jpeg'; // Adjust the path to your actual image file


const Content = () => {
  return (
    <div>
         <CCard style={{ width: '18rem' }}>
          <CCardImage orientation="top" src={ReactImg} />
          <CCardBody>
            <CCardTitle>Card title</CCardTitle>
            <CCardText>
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </CCardText>
            <CButton color="primary" href="#">Go somewhere</CButton>
          </CCardBody>
        </CCard>
        {/* Add the other three CCard components here */}
    </div>
  );
};

export default Content;
