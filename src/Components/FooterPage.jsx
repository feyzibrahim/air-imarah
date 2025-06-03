import React from 'react';

function FooterPage() {
  return (
    <div className="py-10 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          {/* Logo & Description */}
          <div className="flex-1">
            <p className="text-xl font-bold mb-2">TRAVELSY</p>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex-1">
            <p className="text-lg font-semibold mb-2">Quick Links</p>
            <ul className="text-gray-700 space-y-1">
              <li>Home</li>
              <li>About</li>
              <li>Services</li>
              <li>Blog</li>
              <li>Contact</li>
            </ul>
          </div>

          {/* Get in Touch */}
          <div className="flex-1">
            <p className="text-lg font-semibold mb-2">Get in Touch</p>
            <ul className="text-gray-700 space-y-1">
              <li>Email: support@travelsy.com</li>
              <li>Phone: +123 456 7890</li>
              <li>Location: 123 Travel St.</li>
              <li>Hours: Mon–Fri, 9AM–6PM</li>
            </ul>
          </div>

          {/* Instagram */}
          <div className="flex-1">
            <p className="text-lg font-semibold mb-2">Follow us on Instagram</p>
            {/* Replace with actual image or embed later */}
            {/* <div className="w-full h-24 bg-gray-200 rounded-md flex items-center justify-center text-gray-500">
              Instagram Feed
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterPage;
