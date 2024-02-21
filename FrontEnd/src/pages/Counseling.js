import React, {useState} from 'react';
import Header from "../Components/header";
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const OnlineAppoinment = () => {
  const [formData, setFormData] = useState({
    regnumber: '',
    date: '',
    email: '',
    description: ''
  });
  const issue = ['Stress', 'anxiety', 'depression', 'other'];

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
        <h1 className="header-text">Make your appointment</h1>
          <p className="para-text">Easily reserve your time without visiting and save your valuable time</p>
          <p className= "sign-text">Already have an account? <a href="\login">Login</a></p>
          </div>
        </div>

        <div className="right-part">
        <div className="right-content">
          <h1 className="header-text">Set Up your Online Appoinment</h1>
          <form onSubmit={handleSubmit}>
      <label>
        Student Registration Number:
        <input
          type="text"
          name="regnumber"
          value={formData.regnumber}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <label>
        Choose Your Doctor:
        <select
         name="DoctorName"
         value={formData.DoctorName}
        onChange={handleChange}
        >
        <option value="">Select Doctor</option>
         {doctors.map((doctor, index) => (
        <option key={index} value={doctor}>{doctor}</option>
          ))}
      </select>
      </label>
      <br />
      <label>
        Choose Your Date:
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <label>
        Description:
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
      </label>
      <br />
      <button type="submit" className='secondary-button'>Submit</button>
    </form>
          </div>
        </div>
      </div>
      <Footer />
      </div>
   </>
  )
}

export default OnlineAppoinment