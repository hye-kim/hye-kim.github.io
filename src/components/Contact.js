function Contact() {
  return (
    <div id="contact">
      <div className="flex flex-col items-center">
        <div className="pt-20 pb-10">
          <h2 className="text-4xl font-bold">CONTACT ME</h2>
        </div>
        <div className="w-full sm:w-5/12 px-12">
          <form action="">
            <div className="flex flex-col xl:flex-row">
              <div className="flex flex-col pb-4 xl:pr-4 flex-grow">
                <label htmlFor="">First name</label>
                <input
                  type="text"
                  placeholder="Jane"
                  className="border-2 border-gray-100 px-4 py-2 font-extralight"
                />
              </div>
              <div className="flex flex-col flex-grow pb-4">
                <label htmlFor="">Last name</label>
                <input
                  type="text"
                  placeholder="Doe"
                  className="border-2 border-gray-100 px-4 py-2 font-extralight"
                />
              </div>
            </div>
            <div className="flex flex-col pb-4">
              <label htmlFor="">Email</label>
              <input
                type="email"
                placeholder="email@example.com"
                className="border-2 border-gray-100 px-4 py-2 font-extralight"
              />
            </div>
            <div className="flex flex-col pb-4">
              <label htmlFor="">Subject</label>
              <input
                type="email"
                placeholder="Hello"
                className="border-2 border-gray-100 px-4 py-2 font-extralight"
              />
            </div>
            <div className="flex flex-col pb-4">
              <label htmlFor="">Message</label>
              <textarea
                cols="30"
                rows="6"
                placeholder="Just say hi! If you'd like to connect with me, don't hesitate to send me a message."
                className="border-2 border-gray-100 px-4 py-2 font-extralight"
              ></textarea>
            </div>
            <div className="flex justify-center pt-4">
              <button className="bg-blue-700 text-white font-semibold py-2 px-8 rounded-sm">
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
