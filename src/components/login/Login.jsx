import React from "react";
import LogoYellow from '../../Assets/LogoYellow (1).svg'

import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBInput
  }
  from 'mdb-react-ui-kit';

const Login = () => {
    return (
        <div className="MainLogin">
       
         <MDBContainer className="my-5 gradient-form">

<MDBRow>

  <MDBCol col='6' className="mb-5">
    <div className="d-flex flex-column ms-5">

      <div className="text-center">
        <img src={LogoYellow} alt="Logo" className='logo'
          style={{width: '230px'}}  />
        <h6 className="mt-1 mb-5 pb-1">We are the Code Help Team</h6>
      </div>

      <h5>Please login to your account</h5>


      <MDBInput wrapperClass='mb-4' label='Email address' id='form1' type='email'/>
      <MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password'/>


      <div className="text-center pt-1 mb-5 pb-1">
      <a href="/list"><MDBBtn className="mb-4 w-100 gradient-custom-2"> Sign in</MDBBtn></a>
        <a className="text-muted" href="#!">Forgot password?</a>
      </div>

      <div className="d-flex flex-row align-items-center justify-content-center pb-4 mb-4">
        <p className="mb-0">Don't have an account?</p>
        <MDBBtn outline className='mx-2' color='danger'>
          Danger
        </MDBBtn>
      </div>

    </div>

  </MDBCol>

  <MDBCol col='6' className="mb-5">
    <div className="d-flex flex-column  justify-content-center gradient-custom-2 h-100 mb-4">

      <div className="text-dark px-3 py-4 p-md-5 mx-md-4">
        <h2 class="mb-4"> Consult hours and days of service of our Coders, 
and schedule services with total autonomy, flexibility, agility and efficiency.   </h2>
        <p class="small mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>

    </div>

  </MDBCol>

</MDBRow>
<MDBRow>
   

</MDBRow>
</MDBContainer>
 
        </div>
    )
};

export default Login;