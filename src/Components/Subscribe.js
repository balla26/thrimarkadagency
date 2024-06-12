import React, { useState, useEffect, useRef } from "react";
import emailjs from 'emailjs-com'; 
import "./Modal.css"; 

export default function Modal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false); 
  const handleShow = () => setShow(true);

  const [formData, setFormData] = useState({
    from_name: "",
    from_number: "",
    from_email: "",
    choose_service: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    from_name: "",
    from_number: "",
    from_email: "",
    message: "",
  });

  function validateForm() {
    let valid = true;
    const newErrors = { ...errors };

    // Validation code...

    if (!formData.from_email) {
      newErrors.from_email = "Email is required";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.from_email)) {
      newErrors.from_email = "Invalid email address";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  }



  function sendEmailForm(e) {
    e.preventDefault();

    if (validateForm()) {
      emailjs.sendForm('service_q7rqkx5', 'template_hbxvji4', e.target, '_DbPWj0GtCMVUqFTI')
        .then((result) => {
          console.log(result.text);
          alert('You registered a mark in Thrimark!');
          handleClose(); // Close the modal
          resetForm(); // Reset the form data
        })
        .catch((error) => {
          console.log(error.text);
          alert('Oops! There might be a server issue.');
        });
    } else {
      alert('Please correct the form errors.');
    }
  }

  function resetForm() {
    setFormData({
      from_name: "",
      from_number: "",
      from_email: "",
      choose_service: "",
      message: "",
    });

    setErrors({
      from_name: "",
      from_number: "",
      from_email: "",
      message: "",
    });
  }

  const [modal, setModal] = useState(false);
  const modalRef = useRef(null);

  const toggleModal = () => {
    setModal(!modal);
    if (!modal) {
      resetForm(); // Reset the form when opening the modal
    }
  };

  useEffect(() => {
    if (modal) {
      document.body.classList.add('active-modal');
    } else {
      document.body.classList.remove('active-modal');
    }

    return () => {
      document.body.classList.remove('active-modal');
    };
  }, [modal]);

  const handleOverlayClick = (e) => {
    if (e.target === modalRef.current) {
      toggleModal();
    }
  };

  return (
    <>
      <div onClick={toggleModal} className="rounded-2xl block relative  img-bg" id="react-js">
        <img src={service2} alt="" className="rounded-2xl  w-auto img-bg"/>
        <div className="absolute bg-black left-0 top-0 opacity-50 h-full w-full rounded-2xl"></div>
        <div className="absolute top-1/3 left-4 right-0 flex items-center">
          <span className="w-3 h-3 block rounded-full bg-orange mb-2"></span>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-xl xl:text-xl font-bold text-white ml-3">React JS Projects</h2>
        </div>
      </div>

      {modal && (
        <div ref={modalRef} className="modal modal-top" onClick={handleOverlayClick}>
          <div className="overlay"></div>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="flex flex-col text-center w-full mb-12">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Contact Us</h1>
              <p className="mx-auto">Our dedicated THRIMARK team is here to assist you in achieving your business goals through creative and effective strategies.</p>
            </div>
            <form className="w-full max-w-lg" onSubmit={sendEmailForm}>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                    Name
                  </label>
                  <input
                    className={`appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 ${
                      errors.from_name ? 'border-red-500' : ''
                    }`}
                    id="grid-last-name"
                    type="text"
                    placeholder="Your Name"
                    name="from_name"
                    value={formData.from_name}
                    onChange={(e) => {
                      const inputName = e.target.value.replace(/[^a-zA-Z]/g, ''); // Remove characters that are not letters
                      setFormData({ ...formData, from_name: inputName });
                    }}
                  />

                  {errors.from_name && <p className="text-red-500 text-xs italic">{errors.from_name}</p>}
                </div>
                <div className="w-full md:w-1/2 px-3">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                    Number
                  </label>
                  <input
                    className={`appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 ${
                      errors.from_number ? 'border-red-500' : ''
                    }`}
                    id="grid-last-name"
                    type="text"
                    placeholder="Your Number"
                    name="from_number"
                    value={formData.from_number}
                    onChange={(e) => {
                      const inputNumber = e.target.value.replace(/\D/g, ''); // Remove non-digit characters
                      if (inputNumber.length <= 10) {
                        setFormData({ ...formData, from_number: inputNumber });
                      }
                    }}
                    maxLength="10" // Add max length of 10 digits
                  />

                  {errors.from_number && <p className="text-red-500 text-xs italic">{errors.from_number}</p>}
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                    Mail
                  </label>
                  <input
                    className={`appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 ${
                      errors.from_email ? 'border-red-500' : ''
                    }`}
                    id="grid-password"
                    type="email"
                    placeholder="Your E-mail"
                    name="from_email"
                    value={formData.from_email}
                    onChange={handleInputChange}
                  />
                  {errors.from_email && <p className="text-red-500 text-xs italic">{errors.from_email}</p>}
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-state">
                    Choose a service
                  </label>
                  <div className="relative">
                    <select
                      as="select"
                      name="choose_service"
                      required
                      className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-state"
                    >
                      <option value="" selected disabled>Select a service</option>
                      <option value="web_designing">Web Designing</option>
                      <option value="social_media_marketing">Social Media Marketing</option>
                      <option value="landing_page">Landing Page</option>
                      <option value="google_ads">Google Ads</option>
                      <option value="email_marketing">Email Marketing</option>
                      <option value="Sales_video">Sales Video</option>
                      <option value="facebook_ads">Facebook Ads</option>
                      <option value="seo">SEO</option>
                      <option value="digital_marketing">Digital Marketing</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-message">
                    Message
                  </label>
                  <textarea
                    className={`appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 ${
                      errors.message ? 'border-red-500' : ''
                    }`}
                    id="grid-message"
                    placeholder="Your message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                  />
                  {errors.message && <p className="text-red-500 text-xs italic">{errors.message}</p>}
                </div>
              </div>
              <div className="text-center flex justify-center items-center">
                <button className="btn-grad" type="submit">
                  SUBMIT
                </button>
              </div>
            </form>
            <button className="close-modal uppercase tracking-wide text-gray-600 text-xl font-bold" onClick={toggleModal}>
              <h1>&times;</h1>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
