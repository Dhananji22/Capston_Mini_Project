import React, {useState} from "react";
import Header from "../Components/header";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const OTP = () => {
  const [formData, setFormData] = useState({
    otp: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle form submission here, for now just log the data
    console.log(formData);
  };
  return (
    <>
    <Header/>
    <div className="outer-container">
    <Navbar/>
    <div className="appoinment-box">
        <div className="left-part">
          <div className="left-content">
        <h1 className="header-text">Login Verification</h1>
          <p className="para-text">Verify your Account</p>
          </div>
        </div>

        <div className="right-part">
        <div className="right-content">
          <h1 className="header-text">OTP Confirmation</h1>
         

          <form onSubmit={handleSubmit}>
      <label>
        Enter your OTP code that received to your email:
        <input
          type="text"
          name="otp"
          value={formData.otp}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <p>Didn't get the OTP?<a href="/">Resent OTP</a></p>
      <button type="submit" className='secondary-button'>Confirm</button>
    </form>
          </div>
        </div>
      </div>
      <Footer />
      </div>
   </>
  )
}

export default OTP;


