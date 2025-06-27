import React from "react";
import teamwork from "../assets/teamwork.png"
const AboutUs = () => {
  return (
    <div className="motion-translate-y-in-100">
      <div className="p-8 text-center rounded-t-lg">
        <h1 className="text-3xl font-bold text-gray-700">About Plant Care</h1>
        <p className="text-lg opacity-90">Read more about us</p>
      </div>
      <div className="flex flex-col-reverse lg:flex-row mt-10 gap-5">
        <div className="flex-1">
          <div className="space-y-4 p-4 *:text-justify">
            <p className="">
              At Plant Care, we believe that every plant deserves to thrive,
              and every plant parent deserves peace of mind. We understand the
              joy and satisfaction that comes from nurturing green life, but we
              also know the challenges of remembering watering schedules,
              fertilizing needs, and recognizing those subtle signs of distress.
              That's why we created Plant Care – your dedicated digital
              assistant for all things plant care.
            </p>
            <p>
              Plant Care is a full-stack, mobile-responsive web application
              designed to simplify plant management for enthusiasts of all
              levels. Whether you're a seasoned gardener with an overflowing
              indoor jungle or just starting your journey with a single
              succulent, our platform provides the tools you need to ensure your
              leafy friends flourish.
            </p>
            <p>
              Our application, thoughtfully themed around the vibrant and
              diverse world of tropical plants, offers a visually appealing and
              intuitive experience across all your devices. From your desktop to
              your tablet and smartphone, Plant Care ensures seamless
              interaction, allowing you to manage your plants anytime, anywhere.
            </p>
            <p>
              With Plant Care, you can effortlessly add new plant records, log
              essential care tasks like watering and fertilizing, track health
              status, and even set personalized reminders. Our secure user
              authentication system ensures your plant data is private and
              accessible only to you, empowering you with a personalized
              dashboard to oversee your botanical family. We're here to help you
              cultivate not just plants, but also confidence and a deeper
              connection with your green companions. Welcome to Plant Care –
              where your plants' well-being is our priority.
            </p>
          </div>
        </div>
        <div className="lg:w-1/2">
            <img className="w-9/12" src={teamwork} alt="" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;