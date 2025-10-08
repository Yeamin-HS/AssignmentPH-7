import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-12 sm:mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-white font-bold text-lg mb-4">CS — Ticket System</h3>
            <p className="text-sm leading-relaxed text-gray-400">
              Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's dummy text ever since the 1500s.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">Company</h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="#" className="hover:text-white transition">About Us</a></li>
              <li><a href="#" className="hover:text-white transition">Careers</a></li>
              <li><a href="#" className="hover:text-white transition">Contact Sales</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">Services</h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="#" className="hover:text-white transition">Products & Services</a></li>
              <li><a href="#" className="hover:text-white transition">Customer Support</a></li>
              <li><a href="#" className="hover:text-white transition">Download Apps</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">Information</h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-white transition">Join Us</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">© 2025 CS — Ticket System. All rights reserved.</p>
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
              <h4 className="text-white font-semibold text-sm">Social Links</h4>
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 text-sm">
                <a href="#" className="hover:text-white transition">🔗 @CS — Ticket System</a>
                <a href="#" className="hover:text-white transition">📧 info@support.com</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}