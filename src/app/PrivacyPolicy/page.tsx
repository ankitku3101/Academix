import React from 'react';
import { Header } from '@/sections/Header';
import Footer from '@/sections/Footer';

const TermsAndConditions = () => {
  return (
    <>
      <Header />
      <div className="container py-12">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">Privacy Policy</h1>

          <p className="text-gray-600 mb-4">
            Welcome to Academix, accessible from academix.com. We are committed to maintaining the privacy and protection of our users. This Privacy Policy outlines how we collect, use, and protect your information.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Introduction</h2>
          <p className="text-gray-600 mb-4">
            At Academix, available at academix.net.in, we hold the privacy of our visitors in high regard. This Privacy Policy delineates the types of information gathered by Academix and how we apply this information.
          </p>
          <p className="text-gray-600 mb-4">
            Should you require further clarification or additional details concerning our Privacy Policy, please do not hesitate to contact us.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Consent</h2>
          <p className="text-gray-600 mb-4">
            By utilizing our website, you implicitly consent to our Privacy Policy and agree to its stipulations.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Information Collection</h2>
          <p className="text-gray-600 mb-4">
            The personal information requested and the rationale behind its solicitation will be elucidated when it is sought. We may gather additional details, such as your name, email address, phone number, and any other information you provide.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Usage of Your Information</h2>
          <ul className="list-disc pl-6 text-gray-600 mb-4">
            <li>Operating, managing, and enhancing our website</li>
            <li>Tailoring and enriching our website features</li>
            <li>Analyzing and comprehending your website usage</li>
            <li>Innovating new products, services, features, and functionalities</li>
            <li>Engaging with you for customer service, marketing, and promotional endeavors</li>
            <li>Transmitting emails</li>
            <li>Detecting and averting fraudulent activities</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Log Files</h2>
          <p className="text-gray-600 mb-4">
            Academix adheres to standard log file procedures. This data is used to analyze trends, administer the site, and gather demographic information.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Cookies and Web Beacons</h2>
          <p className="text-gray-600 mb-4">
            Like many websites, we use 'cookies' to store information such as visitor preferences and visited pages. This information is used to enhance the user experience by tailoring web content based on browser types and other pertinent details.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Third-Party Privacy Policies</h2>
          <p className="text-gray-600 mb-4">
            Academix's Privacy Policy does not apply to other advertisers or websites. We recommend reviewing the privacy policies of third-party ad servers for comprehensive information.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">CCPA Privacy Rights</h2>
          <p className="text-gray-600 mb-4">
            California consumers possess the right to request disclosure or deletion of personal data collected about them. Please contact us to exercise these rights.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">GDPR Data Protection Rights</h2>
          <ul className="list-disc pl-6 text-gray-600 mb-4">
            <li>The right to access your personal data</li>
            <li>The right to request correction or deletion of data</li>
            <li>The right to restrict or object to data processing</li>
            <li>The right to data portability</li>
          </ul>
          <p className="text-gray-600 mb-4">
            Please contact us to exercise your GDPR rights.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Children’s Information</h2>
          <p className="text-gray-600 mb-4">
            We do not knowingly collect personal information from children under 13. If you believe your child has provided such information, please contact us, and we will make every effort to remove it from our records.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Changes to This Privacy Policy</h2>
          <p className="text-gray-600 mb-4">
            Academix may revise this Privacy Policy periodically. Any modifications will be communicated by posting the updated Privacy Policy on this page. Please review this Privacy Policy periodically.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TermsAndConditions;
