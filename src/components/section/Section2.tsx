import Image from 'next/image';

import Github from 'public/images/github.jpg';

function Section2() {
  return (
    <section>
      <div className="container px-5 py-24 mx-auto overflow-hidden relative">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2">
          What I DO
        </h1>
        <p className="h-1 w-20 bg-indigo-500 dark:bg-teal-400 rounded" />

        <div className="flex-wrap flex w-full">
          <div className="text-start w-1/2 py-12 lg:py-16">
            <h2 className="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
              <span className="block">Someshit</span>
              <span className="block text-indigo-500">Someshit</span>
            </h2>
            <p className="text-xl mt-4 text-gray-400">
              {/* TODO: add main text */}
            </p>
            <div className="lg:mt-0 lg:flex-shrink-0">
              <div className="mt-12 inline-flex rounded-md shadow">
                <button
                  type="button"
                  className="py-4 px-6 bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                >
                  View shit
                </button>
              </div>
            </div>
          </div>
          <Image
            className="rounded-lg object-cover w-1/2 lg:w-1/2 py-12"
            src={Github}
            alt=""
          />
        </div>
      </div>
    </section>
  );
}

export default Section2;
