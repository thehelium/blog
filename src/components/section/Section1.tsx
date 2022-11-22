import Image from 'next/image';

import Basketball from 'public/images/basketball.jpg';
import Github from 'public/images/github.jpg';
import Design from 'public/images/design.jpg';

function Section1() {
  return (
    <section>
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap w-full mb-20">
          <div className="lg:w-1/2 w-full lg:mb-0">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2">
              Things That I Love
            </h1>
            <p className="h-1 w-20 bg-indigo-500 dark:bg-teal-400 rounded" />
          </div>
          {/* <p className="lg:w-1/2 w-full leading-relaxed"></p> */}
        </div>
        <div className="flex flex-wrap">
          <div className="w-full xl:w-1/3 lg:w-1/2 md:w-full sm:w-full p-2">
            <div className="bg-indigo-100 dark:bg-gray-700 hover:bg-indigo-300 dark:hover:bg-gray-500 p-4 rounded-lg">
              <Image
                className="h-40 rounded w-full object-cover object-center mb-6"
                src={Basketball}
                alt="Basketball"
              />
              <h3 className="tracking-widest text-indigo-500 dark:text-teal-400 text-xs font-medium title-font">
                Sport
              </h3>
              <h2 className="text-lg font-medium title-font mb-4">
                Basketball
              </h2>
            </div>
          </div>
          <div className="w-full xl:w-1/3 lg:w-1/2 md:w-full sm:w-full p-2">
            <div className="bg-indigo-100 dark:bg-gray-700 hover:bg-indigo-300 dark:hover:bg-gray-500 p-4 rounded-lg">
              <Image
                className="h-40 rounded w-full object-cover object-center mb-6"
                src={Github}
                alt="content"
              />
              <h3 className="tracking-widest text-indigo-500 dark:text-teal-400 text-xs font-medium title-font">
                Coding
              </h3>
              <h2 className="text-lg font-medium title-font mb-4">
                Open Source
              </h2>
            </div>
          </div>
          <div className="w-full xl:w-1/3 lg:w-1/2 md:w-full sm:w-full p-2">
            <div className="bg-indigo-100 dark:bg-gray-700 hover:bg-indigo-300 dark:hover:bg-gray-500 p-4 rounded-lg">
              <Image
                className="h-40 rounded w-full object-cover object-center mb-6"
                src={Design}
                alt="content"
              />
              <h3 className="tracking-widest text-indigo-500 dark:text-teal-400 text-xs font-medium title-font">
                Design
              </h3>
              <h2 className="text-lg font-medium title-font mb-4">
                Design someshit
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section1;
