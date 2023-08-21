import React from 'react';

const Banner1 = () => {
    return (
        <div>
            <div className="hero lg:min-h-[60vh] md:min-h-[60vh] mt-1" style={{backgroundImage: 'url(https://www.rei.com/dam/morgan_102919_0155_gears_shifting_hero_lg.jpg?t=ea16by9xs)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Cycle Gor</h1>
      <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn ">Visit our shop</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner1;