import React from 'react';
import { Header } from '@/sections/Header';
import Footer from '@/sections/Footer';

const ShippingDeliveryPolicy = () => {
  return (
    <>
      <Header />
      <div className="py-12">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">Shipping and Delivery Overview</h1>

          <p className="text-gray-600 mb-4">
            Our Shipping and Dispatch Policy entails the processing of all orders within 24 hours of receipt. Global shipping of our products is facilitated through our website, <a href="https://www.academix.net.in" className="text-blue-600">www.academix.net.in</a>. Delivery times vary depending on the customer’s location.
          </p>
          <p className="text-gray-600 mb-4">
            Please note that estimated shipping times displayed on our website are approximate and not guaranteed. For orders with specific deadlines, we recommend placing them in advance to ensure timely delivery. Orders requiring customization may require an additional production period of 24 to 48 hours based on the specifics and quantity.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Domestic Shipping Details</h2>
          <ul className="list-disc pl-6 text-gray-600 mb-4">
            <li>Free shipping is offered only during specified promotional periods on the website.</li>
            <li>Shipping costs are clearly outlined on the site or communicated upon order placement.</li>
            <li>Deliveries are scheduled between 10:00 AM and 4:00 PM (IST) on business days, Monday through Friday.</li>
            <li>Efforts are made to process orders during holidays, but shipping or delivery on public holidays cannot be guaranteed.</li>
            <li>Express shipping incurs additional charges and is not eligible for free shipping.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Shipping Requirements</h2>
          <ul className="list-disc pl-6 text-gray-600 mb-4">
            <li>Customers must provide accurate shipping details, including full name, complete address, postal code, and contact numbers.</li>
            <li>Academix endeavors to expedite your order but is not liable for losses or damages resulting from natural disasters, accidents, or shipping provider errors.</li>
            <li>Incomplete or inaccurate shipping information may result in delays or lost packages. Academix is not responsible for such issues.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Delivery Procedure</h2>
          <ul className="list-disc pl-6 text-gray-600 mb-4">
            <li>If unavailable during delivery, the courier will coordinate for redelivery or package collection from their office.</li>
            <li>For office addresses, packages may be left at the security desk; coordination with security is advised.</li>
            <li>Academix is not responsible for delays caused by unforeseen circumstances, courier issues, or customer unavailability during delivery.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">International Shipping Details</h2>
          <ul className="list-disc pl-6 text-gray-600 mb-4">
            <li>Shipping charges vary by destination country and are calculated at checkout.</li>
            <li>International delivery times range from 7 to 21 business days, depending on destination and customs regulations.</li>
            <li>Customs duties and taxes are the responsibility of the customer and must be settled with the respective customs office upon arrival.</li>
            <li>Express international shipping options are available at an additional cost, displayed at checkout.</li>
            <li>Tracking information is provided once the order is dispatched, allowing customers to monitor their shipment.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Returns and Exchanges</h2>
          <p className="text-gray-600 mb-4">
            We want you to be completely satisfied with your purchase. If for any reason you are not, we offer a straightforward return and exchange policy:
          </p>
          <ul className="list-disc pl-6 text-gray-600 mb-4">
            <li>Items can be returned or exchanged within 30 days of receipt, provided they are unused, in their original packaging, and accompanied by the original receipt.</li>
            <li>Customized or personalized items are not eligible for returns or exchanges unless defective.</li>
            <li>Return shipping costs are the responsibility of the customer unless the return is due to a defective item or our error.</li>
            <li>To initiate a return or exchange, contact our Customer Service team at <a href="mailto:support@academix.net.in" className="text-blue-600">support@academix.net.in</a> with your order details and the reason for the return.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Customer Support</h2>
          <p className="text-gray-600 mb-4">
            Our Customer Service team is available to assist you with any questions or concerns regarding your order. We are available Monday through Friday, from 9:00 AM to 6:00 PM (IST). You can reach us via email at <a href="mailto:support@academix.net" className="text-blue-600">support@academix.net.in</a> or by calling our helpline at <strong>+91 82874 01705</strong>.
          </p>

          <p className="text-gray-600 mb-4">
            Thank you for choosing Academix. We strive to provide you with the best products and services, ensuring a seamless shopping experience every time.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ShippingDeliveryPolicy;
