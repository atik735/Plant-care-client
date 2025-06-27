import { Link } from "react-router";
import { FaFacebookF, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";

const ContactUs = () => {
  return (
    <div className="bg-white py-10 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-green-600 text-center mb-2">Contact Us</h2>
      <p className="text-center text-gray-700 mb-8 max-w-xl mx-auto">
        Have a question, suggestion, or need help? We’d love to hear from you!
        Fill out the form below and our team will get back to you as soon as possible.
      </p>

      <div className="max-w-2xl mx-auto bg-gray-100 p-6 rounded-lg">
        <form>
          <div className="mb-4">
            <label className="block font-semibold mb-1">Name</label>
            <input type="text" placeholder="Your Name" className="w-full border rounded px-3 py-2" />
          </div>
          <div className="mb-4">
            <label className="block font-semibold mb-1">Email</label>
            <input type="email" placeholder="you@email.com" className="w-full border rounded px-3 py-2" />
          </div>
          <div className="mb-6">
            <label className="block font-semibold mb-1">Message</label>
            <textarea placeholder="How can we help you?" className="w-full border rounded px-3 py-2 h-28 resize-none" />
          </div>
          <button type="submit" className="bg-green-600 hover:bg-green-700 text-white font-semibold w-full py-2 rounded">
            Send Message
          </button>
        </form>
      </div>

      <p className="text-center text-sm text-gray-700 mt-6">
        Or email us directly at <a href="mailto:info@plantcare.com" className="text-green-600 font-medium hover:underline">info@gardennest.com</a>
      </p>

      <div className="flex justify-center gap-4 mt-4 text-gray-700 text-2xl">
        <Link to="#"><FaFacebookF /></Link>
        <Link to="#"><FaTwitter /></Link>
        <Link to="#"><FaInstagram /></Link>
        <Link to="#"><FaGithub /></Link>
      </div>
    </div>
  );
};

export default ContactUs;
