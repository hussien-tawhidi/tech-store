import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className='text-slate-600 mt-10 md:p-10 p-3 text-muted-foreground'>
      <div className='container mx-auto px-6 py-12'>
        {/* Top Section */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
          <div>
            <h3 className='text-lg font-semibold mb-4'>Shop and Learn</h3>
            <ul className='space-y-2'>
              <li>
                <a href='#' className='hover:underline'>
                  Mac
                </a>
              </li>
              <li>
                <a href='#' className='hover:underline'>
                  iPad
                </a>
              </li>
              <li>
                <a href='#' className='hover:underline'>
                  iPhone
                </a>
              </li>
              <li>
                <a href='#' className='hover:underline'>
                  Watch
                </a>
              </li>
              <li>
                <a href='#' className='hover:underline'>
                  Accessories
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className='text-lg font-semibold mb-4'>Services</h3>
            <ul className='space-y-2'>
              <li>
                <a href='#' className='hover:underline'>
                  Apple Music
                </a>
              </li>
              <li>
                <a href='#' className='hover:underline'>
                  iCloud
                </a>
              </li>
              <li>
                <a href='#' className='hover:underline'>
                  Apple Care+
                </a>
              </li>
              <li>
                <a href='#' className='hover:underline'>
                  Gift Cards
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className='text-lg font-semibold mb-4'>About Us</h3>
            <ul className='space-y-2'>
              <li>
                <a href='#' className='hover:underline'>
                  Newsroom
                </a>
              </li>
              <li>
                <a href='#' className='hover:underline'>
                  Careers
                </a>
              </li>
              <li>
                <a href='#' className='hover:underline'>
                  Investors
                </a>
              </li>
              <li>
                <a href='#' className='hover:underline'>
                  Events
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className='text-lg font-semibold mb-4'>Contact Us</h3>
            <ul className='space-y-2'>
              <li>
                <a href='mailto:support@apple.com' className='hover:underline'>
                  support@tech.com
                </a>
              </li>
              <li>
                <a href='tel:+18001234567' className='hover:underline'>
                  +1 (800) 123-4567
                </a>
              </li>
              <li>
                <a href='#' className='hover:underline'>
                  Find a Store
                </a>
              </li>
              <li>
                <a href='#' className='hover:underline'>
                  FAQs
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className='border-t border-gray-700 my-8'></div>

        {/* Social Media Section */}
        <div className='flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0'>
          <div className='flex space-x-6'>
            <a
              href='https://www.facebook.com'
              target='_blank'
              rel='noopener noreferrer'
              className='hover:text-gray-400'
              aria-label='Facebook'>
              <svg
                className='w-6 h-6'
                fill='currentColor'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'>
                <path d='M9 8H7v4H4v4h3v8h4v-8h3.293l.707-4H11V9c0-.553.447-1 1-1h2V4h-3c-2.206 0-4 1.794-4 4v3z' />
              </svg>
            </a>
            <a
              href='https://www.twitter.com'
              target='_blank'
              rel='noopener noreferrer'
              className='hover:text-gray-400'
              aria-label='Twitter'>
              <svg
                className='w-6 h-6'
                fill='currentColor'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'>
                <path d='M24 4.557a9.829 9.829 0 01-2.828.775 4.93 4.93 0 002.165-2.724 9.868 9.868 0 01-3.127 1.195 4.924 4.924 0 00-8.388 4.482A13.978 13.978 0 011.671 3.149 4.93 4.93 0 003.18 9.556 4.902 4.902 0 01.96 8.768v.062a4.923 4.923 0 003.95 4.827 4.905 4.905 0 01-2.224.084 4.926 4.926 0 004.6 3.417A9.875 9.875 0 010 19.54a13.94 13.94 0 007.548 2.212c9.057 0 14.01-7.496 14.01-13.986 0-.213-.005-.425-.014-.637A10.025 10.025 0 0024 4.557z' />
              </svg>
            </a>
            <a
              href='https://www.instagram.com'
              target='_blank'
              rel='noopener noreferrer'
              className='hover:text-gray-400'
              aria-label='Instagram'>
              <svg
                className='w-6 h-6'
                fill='currentColor'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'>
                <path d='M7.5 0h9a7.5 7.5 0 017.5 7.5v9a7.5 7.5 0 01-7.5 7.5h-9A7.5 7.5 0 010 16.5v-9A7.5 7.5 0 017.5 0zm9 1.5h-9A6 6 0 001.5 7.5v9a6 6 0 006 6h9a6 6 0 006-6v-9a6 6 0 00-6-6zm-4.5 3a4.5 4.5 0 11.001 9.001A4.5 4.5 0 0112 4.5zm0 1.5a3 3 0 100 6 3 3 0 000-6zm4.5-1.5h.75a.75.75 0 110 1.5h-.75a.75.75 0 110-1.5z' />
              </svg>
            </a>
          </div>
          <p className='text-gray-400 text-sm text-center'>
            Follow us on social media for the latest updates and offers.
          </p>
        </div>

        {/* Bottom Section */}
        <div className='border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400'>
          <p>© {new Date().getFullYear()} Tech Inc. All rights reserved.</p>
          <div className='flex space-x-4 mt-4 md:mt-0'>
            <a href='#' className='hover:underline'>
              Privacy Policy
            </a>
            <a href='#' className='hover:underline'>
              Terms of Use
            </a>
            <a href='#' className='hover:underline'>
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
