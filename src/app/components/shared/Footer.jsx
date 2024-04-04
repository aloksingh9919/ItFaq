import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const footer = () => {
  return (
    <footer className="bg-sky-100 mt-10" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-8 sm:pt-12 lg:px-8 lg:pt-16">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <div className='h-[80px] w-[160px] relative'>
              <Image
                className="rounded-md"
                src={"/assets/logo.png"}
                alt="Image"
                fill
              />
            </div>
            <p className="text-sm leading-6 text-gray-600">Making football look better to the world and a more respecful game.</p>
            <div className="flex space-x-6">
              <Link href="#" className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">Facebook</span>

              </Link>
              <Link href="#" className="text-yellow-500 hover:text-gray-500">
                <span className="sr-only">the team is on fire</span>



              </Link>
              <Link href="#" className="text-gray-400 hover:text-blue-4      00">
                <span className="sr-only">X</span>

              </Link>
              <Link href="#" className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">GitHub</span>

              </Link>
              <Link href="#" className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">YouTube</span>


              </Link>
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-gray-900">Solutions</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <Link href="#" className="text-sm leading-6 text-gray-600 hover:text-gray-900">Marketing</Link>
                  </li>
                  <li>
                    <Link href="#" className="text-sm leading-6 text-gray-600 hover:text-gray-900">Analytics</Link>
                  </li>
                  <li>
                    <Link href="#" className="text-sm leading-6 text-gray-600 hover:text-gray-900">Commerce</Link>
                  </li>
                  <li>
                    <Link href="#" className="text-sm leading-6 text-gray-600 hover:text-gray-900">Insights</Link>
                  </li>
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-gray-900">Support</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <Link href="#" className="text-sm leading-6 text-gray-600 hover:text-gray-900">Pricing</Link>
                  </li>
                  <li>
                    <Link href="#" className="text-sm leading-6 text-gray-600 hover:text-gray-900">Documentation</Link>
                  </li>
                  <li>
                    <Link href="#" className="text-sm leading-6 text-gray-600 hover:text-gray-900">Guides</Link>
                  </li>
                  <li>
                    <Link href="#" className="text-sm leading-6 text-gray-600 hover:text-gray-900">API Status</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-gray-900">Company</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <Link href="#" className="text-sm leading-6 text-gray-600 hover:text-gray-900">About</Link>
                  </li>
                  <li>
                    <Link href="#" className="text-sm leading-6 text-gray-600 hover:text-gray-900">Blog</Link>
                  </li>
                  <li>
                    <Link href="#" className="text-sm leading-6 text-gray-600 hover:text-gray-900">Jobs</Link>
                  </li>
                  <li>
                    <Link href="#" className="text-sm leading-6 text-gray-600 hover:text-gray-900">Press</Link>
                  </li>
                  <li>
                    <Link href="#" className="text-sm leading-6 text-gray-600 hover:text-gray-900">Partners</Link>
                  </li>
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-gray-900">Legal</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <Link href="#" className="text-sm leading-6 text-gray-600 hover:text-gray-900">Claim</Link>
                  </li>
                  <li>
                    <Link href="#" className="text-sm leading-6 text-gray-600 hover:text-gray-900">Privacy</Link>
                  </li>
                  <li>
                    <Link href="#" className="text-sm leading-6 text-gray-600 hover:text-gray-900">Terms</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-gray-900/10 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-xs leading-5 text-gray-500">&copy; 2020 Your Company, Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default footer