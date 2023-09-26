const ContactForm = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-2 w-1/2">
      <p className="header-texts">Contact</p>

      <form
        className="flex flex-col justify-center items-center gap-2 w-full border-2 border-gray-700 p-4 rounded-lg"
        action="https://formsubmit.co/mariosergdc.webdev@gmail.com"
        method="POST"
      >
        <input
          className="text-black w-full p-2 m-2 rounded-lg outline-none"
          type="text"
          name="name"
          required
          placeholder="Name"
        />
        <input
          className="text-black w-full p-2 m-2 rounded-lg outline-none"
          type="email"
          name="email"
          required
          placeholder="Email"
        />
        <textarea
          className="text-black w-full h-28 p-2 m-2 rounded-lg resize-none outline-none"
          name="message"
          required
          placeholder="Message"
        />
        <button
          className="text-black w-full p-2 m-2 rounded-lg bg-green-400 cursor-pointer outline-none"
          type="submit"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
