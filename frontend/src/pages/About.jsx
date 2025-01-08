import React from "react";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div className="flex flex-col gap-y-6">
      <div className="border rounded-md grid md:grid-cols-2 md:items-center gap-6 md:h-[400px] font-[sans-serif] max-w-full mx-auto relative px-4 md:mt-4 md:before:absolute md:before:right-0 md:before:w-[300px] md:before:rounded-md md:before:h-full ">
        <div className="flex items-center bg-primary-light rounded-md">
          <img
            src={assets.about_image}
            className="object-contain h-[300px] max-sm:h-32 rounded-md hover:rotate-12 duration-500 transition-transform transform-gpu"
          />
          <div className="ml-6">
            <div>
              <h4 className="text-xl font-semibold text-white">
                About <span className="text-white">US</span>
              </h4>
              <p className="text-xs text-white mt-0.5">
                Your Trusted Healthcare Companion
              </p>
            </div>

            <div className="space-x-3 mt-6">
              <a
                href="javascript:void(0)"
                className="w-7 h-7 inline-flex items-center justify-center rounded-full border-none outline-none bg-blue-600 hover:bg-blue-700 active:bg-blue-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14px"
                  fill="#fff"
                  viewBox="0 0 155.139 155.139">
                  <path
                    d="M89.584 155.139V84.378h23.742l3.562-27.585H89.584V39.184c0-7.984 2.208-13.425 13.67-13.425l14.595-.006V1.08C115.325.752 106.661 0 96.577 0 75.52 0 61.104 12.853 61.104 36.452v20.341H37.29v27.585h23.814v70.761h28.48z"
                    data-original="#010002"
                  />
                </svg>
              </a>
              <a
                href="javascript:void(0)"
                className="w-7 h-7 inline-flex items-center justify-center rounded-full border-none outline-none bg-[#03a9f4] hover:bg-[#03a1f4] active:bg-[#03a9f4]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14px"
                  fill="#fff"
                  viewBox="0 0 512 512">
                  <path
                    d="M512 97.248c-19.04 8.352-39.328 13.888-60.48 16.576 21.76-12.992 38.368-33.408 46.176-58.016-20.288 12.096-42.688 20.64-66.56 25.408C411.872 60.704 384.416 48 354.464 48c-58.112 0-104.896 47.168-104.896 104.992 0 8.32.704 16.32 2.432 23.936-87.264-4.256-164.48-46.08-216.352-109.792-9.056 15.712-14.368 33.696-14.368 53.056 0 36.352 18.72 68.576 46.624 87.232-16.864-.32-33.408-5.216-47.424-12.928v1.152c0 51.008 36.384 93.376 84.096 103.136-8.544 2.336-17.856 3.456-27.52 3.456-6.72 0-13.504-.384-19.872-1.792 13.6 41.568 52.192 72.128 98.08 73.12-35.712 27.936-81.056 44.768-130.144 44.768-8.608 0-16.864-.384-25.12-1.44C46.496 446.88 101.6 464 161.024 464c193.152 0 298.752-160 298.752-298.688 0-4.64-.16-9.12-.384-13.568 20.832-14.784 38.336-33.248 52.608-54.496z"
                    data-original="#03a9f4"
                  />
                </svg>
              </a>
              <a
                href="javascript:void(0)"
                className="w-7 h-7 inline-flex items-center justify-center rounded-full border-none outline-none bg-[#0077b5] hover:bg-[#0055b5] active:bg-[#0077b5]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14px"
                  fill="#fff"
                  viewBox="0 0 24 24">
                  <path
                    d="M23.994 24v-.001H24v-8.802c0-4.306-.927-7.623-5.961-7.623-2.42 0-4.044 1.328-4.707 2.587h-.07V7.976H8.489v16.023h4.97v-7.934c0-2.089.396-4.109 2.983-4.109 2.549 0 2.587 2.384 2.587 4.243V24zM.396 7.977h4.976V24H.396zM2.882 0C1.291 0 0 1.291 0 2.882s1.291 2.909 2.882 2.909 2.882-1.318 2.882-2.909A2.884 2.884 0 0 0 2.882 0z"
                    data-original="#0077b5"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="relative">
          <h2 className="text-gray-800 text-2xl font-semibold">
            HealthSync bridges the gap between patients and healthcare providers
            by providing:
          </h2>
          <p className="mt-6 text-sm text-gray-700">
            Welcome to HealthSync, where technology meets compassion to simplify
            the process of managing your healthcare appointments. Our mission is
            to empower patients and healthcare providers by offering a seamless,
            efficient, and user-friendly platform for booking medical
            appointments.
          </p>
          <h3 className=" mt-6 text-xl">Our Vision</h3>
          <p className="text-sm text-gray-700">
            we envision a future where healthcare is not only accessible but
            also effortless to navigate. By streamlining the appointment booking
            process, we aim to contribute to a healthier and happier community.
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-y-6 mt-6">
  <h1 className="text-2xl font-semibold text-gray-800 text-center">
    WHY <span className="font-bold text-primary-dark">CHOOSE US?</span>
  </h1>
  <div className="w-full border border-gray-200 rounded-lg p-4 flex flex-col md:flex-row items-center justify-evenly bg-gray-50 gap-6 md:gap-0">
    {/* Feature 1 */}
    <div className="border border-gray-300 px-10 py-6 flex flex-col gap-y-4 items-center text-center group hover:bg-primary-light hover:shadow-xl hover:text-white transition-all duration-300 ease-in-out rounded-lg">
      <p className="font-bold text-lg transition-all duration-300 group-hover:text-white">
        EFFICIENCY
      </p>
      <p className="text-gray-500 transition-all duration-300 group-hover:text-white">
        Streamlined appointment scheduling tailored to fit your busy lifestyle.
      </p>
    </div>

    {/* Feature 2 */}
    <div className="border border-gray-300 px-10 py-6 flex flex-col gap-y-4 items-center text-center group hover:bg-primary-light hover:shadow-xl hover:text-white transition-all duration-300 ease-in-out rounded-lg">
      <p className="font-bold text-lg transition-all duration-300 group-hover:text-white">
        RELIABILITY
      </p>
      <p className="text-gray-500 transition-all duration-300 group-hover:text-white">
        Dependable service you can trust for all your healthcare needs.
      </p>
    </div>

    {/* Feature 3 */}
    <div className="border border-gray-300 px-10 py-6 flex flex-col gap-y-4 items-center text-center group hover:bg-primary-light hover:shadow-xl hover:text-white transition-all duration-300 ease-in-out rounded-lg">
      <p className="font-bold text-lg transition-all duration-300 group-hover:text-white">
        ACCESSIBILITY
      </p>
      <p className="text-gray-500 transition-all duration-300 group-hover:text-white">
        Healthcare at your fingertips—anytime, anywhere, on any device.
      </p>
    </div>
  </div>
</div>

    </div>
  );
};
export default About;
