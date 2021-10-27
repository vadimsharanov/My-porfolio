function AboutMe() {
  return (
    <div className="container about-me ">
      <div className="row ">
        <div className="col-12 col-xl-5 about-me-logo"></div>
        <div className="col-12 col-xl-7 about-me-description">
          <h1>
            About <span>Me</span>
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
        <div class="icon instagram">
          <div class="tooltip">Instagram</div>
          <span><i class="fa fa-instagram fa-lg"></i></span>
        </div>
        <div class="icon github">
          <div class="tooltip">Github</div>
          <span><i class="fa fa-github fa-lg"></i></span>
        </div>
        <div class="icon linkedin">
          <div class="tooltip">LinkedIn</div>
          <span><i class="fa fa-linkedin fa-lg"></i></span>
        </div>
          </div>
            {/* <a class="footer-button" href="#">
              <i class="fa fa-github fa-lg"></i>
            </a>
            <a class="footer-button" href="#">
              <i class="fa fa-instagram fa-lg"></i>
            </a>
            <a class="footer-button" href="#">
              <i class="fa fa-linkedin fa-lg"></i>
            </a> */}

          <a href="">
            <button>Contact me</button>
          </a>
        </div>
      </div>
    </div>
  );
}
export default AboutMe;
