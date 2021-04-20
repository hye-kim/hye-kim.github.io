import * as emailjs from "emailjs-com";

function Contact() {

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, "contact_form", "#contact-form", process.env.REACT_APP_USER_ID)
    // alert('Message sent!')
    // e.target.reset()
  };

  return (
    <div id="contact">
      <div className="flex flex-col items-center pb-20">
        <div className="pt-20 pb-10">
          <h2 className="text-4xl font-bold">CONTACT ME</h2>
        </div>
        <div className="w-full sm:w-6/12 xl:w-5/12 px-12">
          <form id="contact-form" onSubmit={handleSubmit}>
            <div className="flex flex-col xl:flex-row">
              <div className="flex flex-col pb-4 xl:pr-4 flex-grow">
                <label htmlFor="">First name</label>
                <input
                  name="firstName"
                  type="text"
                  placeholder="Jane"
                  required
                  className="border-2 border-gray-100 px-4 py-2 font-extralight"
                />
              </div>
              <div className="flex flex-col flex-grow pb-4">
                <label htmlFor="">Last name</label>
                <input
                  name="lastName"
                  type="text"
                  placeholder="Doe"
                  required
                  className="border-2 border-gray-100 px-4 py-2 font-extralight"
                />
              </div>
            </div>
            <div className="flex flex-col pb-4">
              <label htmlFor="">Email</label>
              <input
                name="email"
                type="email"
                placeholder="email@example.com"
                required
                className="border-2 border-gray-100 px-4 py-2 font-extralight"
              />
            </div>
            <div className="flex flex-col pb-4">
              <label htmlFor="">Subject</label>
              <input
                name="subject"
                type="text"
                placeholder="Hello"
                required
                className="border-2 border-gray-100 px-4 py-2 font-extralight"
              />
            </div>
            <div className="flex flex-col pb-4">
              <label htmlFor="">Message</label>
              <textarea
                name="message"
                cols="30"
                rows="6"
                required
                placeholder="Just say hi! If you'd like to connect with me, don't hesitate to send me a message."
                className="border-2 border-gray-100 px-4 py-2 font-extralight"
              ></textarea>
            </div>
            <div className="flex justify-center pt-4">
              <button type="submit" className="bg-blue-700 text-white font-semibold py-2 px-8 rounded-sm">
                Send message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
