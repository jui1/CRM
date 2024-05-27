import React, { useState } from 'react';

function EnquiryForm() {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    query: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8000/api/enquiries', { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        console.log('Form submitted successfully');
       
        setFormData({
          name: '',
          mobile: '',
          email: '',
          query: ''
        });
      } else {
        console.error('Failed to submit form:', response.statusText);
      }
    } catch (error) {
      console.error('Failed to submit form:', error.message);
    }
  };

  return (
    <div>
      <h2>Enquiry Form</h2>
      <form onSubmit={handleSubmit}>
        <input 
        type="text"
         name="name" 
         value={formData.name}
          onChange={handleChange}
           placeholder="Name"
            />

        <input
         type="text" 
         name="mobile"
          value={formData.mobile} 
          onChange={handleChange}
           placeholder="Mobile Number"
            />
        <input type="email"
         name="email"
          value={formData.email} 
          onChange={handleChange}
           placeholder="Email ID" 
           />
        <textarea
         name="query"
          value={formData.query} 
          onChange={handleChange} 
          placeholder="Query">

          </textarea>
       <div><button type="submit">Submit</button></div> 
      </form>
    </div>
  );
}

export default EnquiryForm;
