import React from 'react';
import { Header } from '@/sections/Header';
import Footer from '@/sections/Footer';

const RefundCancellationPolicy = () => {
  return (
    <>
      <Header />
      <div className="container py-12">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">Refund & Cancellation Policy</h1>

          <p className="text-gray-600 mb-4">
            By enrolling in our programs, you agree to the following terms and conditions. These policies ensure a smooth and professional learning experience for all participants.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">1. Fees and Charges for Program</h2>
          <ul className="list-disc pl-6 text-gray-600 mb-4">
            <li>
              <strong>Non-Refundable Policy:</strong> Once payment for the training is completed, the fees are non-refundable, non-transferable, and non-extensible.
            </li>
            <li>
              <strong>Training Cancellation:</strong> If the training is canceled by the Organizing Company, a refund will be processed minus a bank fee of 250 INR. Refunds may take over 15 days to process.
            </li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-4">Rules and Regulations</h3>
          <ul className="list-disc pl-6 text-gray-600 mb-4">
            <li>All training and internship programs are managed by Academix.</li>
            <li>Programs are conducted by professional corporate trainers.</li>
            <li>Certificates will be issued by Academix.</li>
            <li>For any assistance or inquiries, please contact the Academix team.</li>
            <li>Do not share training-related material on social media without accurate information.</li>
            <li>Academix reserves the right to verify certificates and letters of recommendation.</li>
            <li>For contact, email us at @academix or send a WhatsApp message to the provided number.</li>
            <li>Post-registration, Academix will handle all your information securely.</li>
            <li>Academix may transition the training to online or offline formats depending on the current conditions (e.g., Covid-19).</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">2. International Certifications (Technical Courses Only)</h2>
          <ul className="list-disc pl-6 text-gray-600 mb-4">
            <li>Academix provides exam vouchers for certifications (HPE, MTA, Autodesk, EC Council) at a discounted rate.</li>
            <li>Students must pass the scheduled online exam to receive certification.</li>
            <li>If a student fails the exam, they may apply for a re-exam. Additional re-exam fees will apply.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">3. Program Schedule and Attendance</h2>
          <ul className="list-disc pl-6 text-gray-600 mb-4">
            <li>Students are expected to attend all scheduled sessions on time. Attendance will be monitored.</li>
            <li>In case of prolonged absence due to unavoidable circumstances, students must inform the Academix team to discuss rescheduling or joining a future cohort.</li>
            <li>Punctuality and active participation are essential for certification and program completion.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">4. Code of Conduct</h2>
          <ul className="list-disc pl-6 text-gray-600 mb-4">
            <li>Students are expected to maintain professionalism during all sessions (online or offline).</li>
            <li>Disruptive behavior, harassment, or misconduct will result in removal from the program without refund.</li>
            <li>Respect for trainers, peers, and the learning environment is mandatory.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">5. Intellectual Property</h2>
          <ul className="list-disc pl-6 text-gray-600 mb-4">
            <li>All training materials (presentations, handouts, digital resources) remain the intellectual property of Academix.</li>
            <li>Unauthorized distribution, reproduction, or commercial use of materials is prohibited.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">6. Health and Safety</h2>
          <ul className="list-disc pl-6 text-gray-600 mb-4">
            <li>In-person sessions will adhere to health and safety guidelines, including Covid-19 protocols.</li>
            <li>Students are required to follow these guidelines to ensure everyone's safety.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">7. Feedback and Improvement</h2>
          <ul className="list-disc pl-6 text-gray-600 mb-4">
            <li>Academix encourages students to provide feedback and suggestions for program improvement.</li>
            <li>Feedback forms will be provided at the end of the program.</li>
          </ul>

          <p className="text-gray-600 mb-4">
            We are committed to providing a comprehensive and enriching learning experience. If you have any questions or require further clarification, please contact the Academix team.
          </p>
          <p className="text-gray-600 mb-4">
            Thank you for choosing Academix as your trusted partner in professional development. Let's embark on this learning adventure together!
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default RefundCancellationPolicy;
