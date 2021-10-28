function AboutMe() {
  return (
    <div className="container about-me ">
      <div className="row ">
        <div className="col-12 col-xl-5 about-me-logo"></div>
        <div className="col-12 col-xl-7 about-me-description">
          <h1>
            About <span className="me" >Me</span>
          </h1>
          <h3>Hello! I'm Vadim Šaranov</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum animi
            optio hic dolore nam necessitatibus non, odit nemo perferendis nisi.
          </p>
          <p>
            Lorem ipsum dolorsum dolorsum dolorsum dolorsum dolorsum dolorsum
            dolorsum dolor sit amet consectetur adipisicing elit. Cum animi
            optio hic dolore nam necessitatibus non, odit nemo perferendis nisi.
          </p>
          <div className="about-me-icons wrapper">
        <div className="icon instagram">
          <div className="tooltip">Instagram</div>
          <span><i className="fa fa-instagram fa-lg"></i></span>
        </div>
        <div className="icon github">
          <div className="tooltip">Github</div>
          <span><i className="fa fa-github fa-lg"></i></span>
        </div>
        <div className="icon linkedin">
          <div className="tooltip">LinkedIn</div>
          <span><i className="fa fa-linkedin fa-lg"></i></span>
        </div>
          </div>
          <a href="">
          <button className="contact-me-button color-9">Contact Me</button>
          </a>
        </div>
      </div>
    </div>
  );
}
export default AboutMe;
