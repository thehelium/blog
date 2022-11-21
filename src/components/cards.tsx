import Image from 'next/image';

import CardImg1 from 'public/images/CardImg1.jpg';

function Cards() {
  return (
    <section>
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap w-full mb-20">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2">
              Thing that I love
            </h1>
            <p className="h-1 w-20 bg-indigo-500 dark:bg-teal-400 rounded" />
          </div>
          {/* <p className="lg:w-1/2 w-full leading-relaxed"></p> */}
        </div>
        <div className="flex flex-wrap -m-4">
          <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className="bg-indigo-100 dark:bg-gray-600 p-6 rounded-lg">
              <Image
                className="h-40 rounded w-full object-cover object-center mb-6"
                src={CardImg1}
                alt="content"
              />
              <h3 className="tracking-widest text-indigo-500 dark:text-teal-400 text-xs font-medium title-font">
                Twitter
              </h3>
              <h2 className="text-lg font-medium title-font mb-4">Elon Musk</h2>
              <p className="leading-relaxed text-base">
                Elon Musk: Just leaving Twitter HQ code review
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cards;
