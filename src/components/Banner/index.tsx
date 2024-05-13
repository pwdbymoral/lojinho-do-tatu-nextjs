import React from 'react';

/** Displays a hero image with text overlay. */
const Banner: React.FC = () => {
  const bannerurl =
    'https://i.pinimg.com/564x/a7/bc/da/a7bcda822f7d1ca55f1ec88a1bcf90ee.jpg';

  return (
    <div
      className="flex h-[300px] items-end bg-cover bg-local bg-center bg-no-repeat bg-origin-border"
      style={{ backgroundImage: `url(${bannerurl})` }}
    >
      <div className="flex h-3/4 w-full items-end bg-gradient-to-b from-transparent to-gray-800">
        <div className="container mx-auto px-4 py-4">
          <p className="font-title text-3xl tracking-tighter text-white opacity-80 md:text-5xl">
            Os produtos mais únicos de Shurima
          </p>
          <p className="text-lg text-white">
            Por um precinho <i>okay</i>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
