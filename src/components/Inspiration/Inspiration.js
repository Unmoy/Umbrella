import React from "react";
import inspiration from "../../images/img-ins.jpg";
import "./Inspiration.css";
const Inspiration = () => {
  return (
    <section className="inspiration-container">
      <div className="col-md-6 ins-img">
        <img className="inspire-img" src={inspiration} alt="" />
      </div>
      <div className="col-md-6 ins-text">
        <h2 className="head1">Inspiration</h2>
        <h1 className="head2">THINK DIFFERENT</h1>
        <p className="overflow-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni atque
          explicabo sit odio ex odit reprehenderit aspernatur illum perferendis!
          Doloremque!
        </p>
        <button className='subscribe-btn'>Read More</button>
      </div>
    </section>
  );
};

export default Inspiration;
