"use client";

const Contact = () => {
  return (
    <div id="contact">
      <div className="bg-[#f8f9fa] flex">
        <iframe
          className="w-[1268px] h-[519px] hidden lg:flex"
          width="100%"
          height="600"
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=ankara+(My%20Business%20Name)&amp;t=&amp;z=6&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        ></iframe>
        <div className="p-20 space-y-8 h-[519px]">
          <div>
            <h3 className="font-roboto text-[26px]">Our Headquarters</h3>
          </div>
          <div>
            <strong>North America:</strong>
            <br />
            <span>795 Folsom Ave, Suite 600</span>
            <br />
            <span>San Francisco, CA 94107</span>
          </div>
          <div>
            <strong>Europe:</strong>
            <br />
            <span>795 Folsom Ave, Suite 600</span>
            <br />
            <span>San Francisco, CA 94107</span>
          </div>
          <div>
            <strong>Phone:</strong>
            <span> (1) 8547 632521</span>
            <br />
            <strong>Fax:</strong>
            <span> (1) 11 4752 1433</span>
            <br />
            <strong>Email:</strong>
            <span> info@canvas.com</span>
          </div>
        </div>
      </div>
      <div className="lg:flex justify-center items-center mt-20 mx-4">
        <form>
          <div className="flex flex-col lg:flex-row">
            <input
              type="text"
              placeholder="Name"
              className="lg:w-[413px] w-full h-[48px] placeholder:text-xl placeholder:font-light outline-none border-b focus:border-blue-600 lg:mr-10 mb-5"
            />
            <input
              type="text"
              placeholder="Email Address"
              className="lg:w-[413px] w-full h-[48px] placeholder:text-xl placeholder:font-light outline-none border-b focus:border-blue-600 mb-5"
            />
          </div>
          <div className="flex flex-col lg:flex-row">
            <input
              type="text"
              placeholder="Phone"
              className="lg:w-[267px] w-full h-[48px] placeholder:text-xl placeholder:font-light outline-none border-b focus:border-blue-600 lg:mr-10 mb-5"
            />
            <input
              type="text"
              placeholder="Subject"
              className="lg:w-[558px] w-full h-[48px] placeholder:text-xl placeholder:font-light outline-none border-b focus:border-blue-600 mb-8"
            />
          </div>
          <div>
            <textarea
              name="message"
              id="message"
              rows={10}
              placeholder="Your Message"
              className="outline-none placeholder:text-xl placeholder:font-light border-b focus:border-blue-600 w-full resize-none mb-10"
            />
          </div>
        </form>
      </div>
      <div className="flex flex-col items-center justify-center">
        <button className="capitalize font-roboto text-sm font-medium tracking-widest rounded-full py-2 px-[22px] border border-black hover:bg-[#1abc9c] hover:text-white hover:border-[#1abc9c] transition-all duration-300">
          send message
        </button>
        <span className="font-roboto font-normal text-sm mt-5 mb-32">
          We&apos;ll do our best to get back to you within 6-8 working hours.
        </span>
      </div>
    </div>
  );
};

export default Contact;
