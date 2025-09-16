import Link from 'next/link';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className='min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center px-4 sm:px-6 lg:px-8'>
      {/* Background decoration */}
      <div className='absolute inset-0 overflow-hidden'>
        <div className='absolute top-1/4 left-1/4 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse'></div>
        <div className='absolute top-1/3 right-1/4 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-2000'></div>
      </div>

      <div className='relative text-center max-w-2xl mx-auto'>
        {/* 404 Number */}
        <div className='mb-8'>
          <h1 className='text-8xl sm:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-4'>
            404
          </h1>
          <div className='w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full'></div>
        </div>

        {/* Error Message */}
        <h2 className='text-2xl sm:text-3xl font-bold text-gray-900 mb-4'>
          Oops! Page Not Found
        </h2>
        <p className='text-lg text-gray-600 mb-8 max-w-lg mx-auto leading-relaxed'>
          The page you're looking for doesn't exist or has been moved. Let's get
          you back to discovering amazing AI-powered insights.
        </p>

        {/* Action Buttons */}
        <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
          <Link
            href='/'
            className='inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl'
          >
            <Home className='mr-2 h-5 w-5' />
            Go home
          </Link>
        </div>

        {/* Additional Help */}
        <div className='mt-12 p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-gray-200'>
          <h3 className='text-lg font-semibold text-gray-900 mb-3'>
            Looking for something specific?
          </h3>
          <div className='flex flex-wrap justify-center gap-4 text-sm'>
            <Link
              href='/#features'
              className='text-blue-600 hover:text-blue-700 transition-colors'
            >
              Features
            </Link>
            <Link
              href='/#about'
              className='text-blue-600 hover:text-blue-700 transition-colors'
            >
              About
            </Link>
            <Link
              href='/#pricing'
              className='text-blue-600 hover:text-blue-700 transition-colors'
            >
              Pricing
            </Link>
            <Link
              href='/#contact'
              className='text-blue-600 hover:text-blue-700 transition-colors'
            >
              Contact
            </Link>
          </div>
        </div>

        {/* Logo */}
        <div className='mt-8 flex items-center justify-center opacity-60'>
          <div className='w-6 h-6 bg-blue-600 rounded-md flex items-center justify-center mr-2'>
            <span className='text-white font-bold text-sm'>C</span>
          </div>
          <span className='text-lg font-bold text-gray-700'>Clarity AI</span>
        </div>
      </div>
    </div>
  );
}
