import React from "react";

const TermsAndCon = () => {
  return (
    <div className="min-h-screen px-6 py-10 md:px-40 bg-green-50 mt-5 text-gray-800">
      <h1 className="text-3xl md:text-4xl font-bold text-green-700 mb-4">
        Terms and Conditions
      </h1>

      <p className="mb-8 text-lg">
        Welcome to <span className="font-semibold">PlantCare</span>. By using our platform to explore, buy, or share plants, you agree to comply with the following terms and conditions. Please read them carefully before using our services.
      </p>

      <div className="space-y-6 text-base leading-relaxed">
        <section>
          <h2 className="text-lg font-semibold text-green-600">1. Account Responsibility</h2>
          <p>
            You are responsible for maintaining the confidentiality of your account credentials. Any activity that occurs under your account will be considered your responsibility.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-green-600">2. Acceptable Use</h2>
          <p>
            Users must not post misleading, inappropriate, or offensive content. Our platform encourages positive and respectful interactions between plant lovers and community members.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-green-600">3. Plant Listing Ownership</h2>
          <p>
            All content you upload (like images, descriptions) remains yours. However, you give PlantCare the right to display, share, or promote your content on our platform and social channels.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-green-600">4. Termination</h2>
          <p>
            We may suspend or terminate any account that violates our terms, harms user experience, or engages in suspicious activity.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-green-600">5. Privacy Policy</h2>
          <p>
            Your privacy is important to us. Read our{" "}
            <span className="text-green-700 underline cursor-pointer">
              Privacy Policy
            </span>{" "}
            to understand how we collect and protect your data.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-green-600">6. Changes to Terms</h2>
          <p>
            PlantCare may update these terms at any time. Continuing to use the site after updates means you agree to the latest version of our terms.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-green-600">7. Contact Us</h2>
          <p>
            Questions or feedback? Reach us at{" "}
            <a href="mailto:support@plantcare.com" className="text-green-700 underline">
              support@plantcare.com
            </a>{" "}
            or via our Contact page.
          </p>
        </section>
      </div>
    </div>
  );
};

export default TermsAndCon;
