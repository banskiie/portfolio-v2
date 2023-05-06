import React from "react";
import mainImage from "../assets/img/pfpimg.jpg";

function Home() {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <section>
        <div className="py-12">
          <img
            className="h-96 w-96 object-cover rounded-full"
            src={mainImage}
            alt="A picture of me, Shand Ivan."
          />
        </div>
      </section>
    </div>
  );
}

export default Home;
