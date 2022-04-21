// THIS INFORMATION SIMULATES GETTING DATA FROM A DATABASE
var homeContent = `<div class="home">
<div class="hero">
  <div class="hero-text">
    <h1>Header goes here</h1>
    <h3>Less important text goes here</h3>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat
      aliquid minus nemo sed est.
    </p>
  </div>
  <div class="hero-button">Read More</div>
</div>
<div class="home-quote">
  <div class="quote-text">
    <h3>
      “Sed ut perspiciatis unde omnis iste natus error sit voluptatem
      accusantium doloremque laudantium totam rem aperiam eaque ipsa
      quae ab illo inventore veritatis et quasi architecto beatae vitae
      dicta sunt explicabo. Iste natus error sit voluptatem accusantium
      doloremque laudantium totam.
    </h3>
    <p>John Smith</p>
    <span>Corporation CEO, books author.</span>
  </div>
</div>
<div class="upcoming-events">
  <h1>Upcoming Events:</h1>
  <div class="events-underline"></div>
  <div class="events-holder">
    <div class="events">
      <div class="left-half">
        <div class="date">
          <span>06</span>
          <p>JUN</p>
        </div>
      </div>
      <div class="right-half">
        <div class="right-header">
          <p>Sed et persipiatis</p>
        </div>
        <div class="right-link">
          <a href="#"
            >Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </a>
        </div>
      </div>
    </div>
    <div class="events">
      <div class="left-half">
        <div class="date">
          <span>30</span>
          <p>JUL</p>
        </div>
      </div>
      <div class="right-half">
        <div class="right-header">
          <p>Sed et persipiatis</p>
        </div>
        <div class="right-link">
          <a href="#"
            >Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </a>
        </div>
      </div>
    </div>
    <div class="events">
      <div class="left-half">
        <div class="date">
          <span>30</span>
          <p>AUG</p>
        </div>
      </div>
      <div class="right-half">
        <div class="right-header">
          <p>Sed et persipiatis</p>
        </div>
        <div class="right-link">
          <a href="#"
            >Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </a>
        </div>
      </div>
    </div>
    <div class="events">
      <div class="left-half">
        <div class="date">
          <span>23</span>
          <p>NOV</p>
        </div>
      </div>
      <div class="right-half">
        <div class="right-header">
          <p>Sed et persipiatis</p>
        </div>
        <div class="right-link">
          <a href="#"
            >Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </a>
        </div>
      </div>
    </div>
    <div class="events">
      <div class="left-half">
        <div class="date">
          <span>23</span>
          <p>DEC</p>
        </div>
      </div>
      <div class="right-half">
        <div class="right-header">
          <p>Sed et persipiatis</p>
        </div>
        <div class="right-link">
          <a href="#"
            >Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </a>
        </div>
      </div>
    </div>
  </div>
</div>
</div>`;
var aboutContent = ``;
var galleryContent = ``;
var blogContent = ``;
var contactContent = ``;

// THIS FUNCTION IS BEING CALLED BY app.js which has the page name
export function modelPageName(pgName) {
  console.log(pgName);
  // $("#app").html(eval(pgName));

  // !make sure to use an operator "==" if checking
  if (pgName == "homeContent") {
    $("nav a").removeClass("black-text").addClass("white-text");
    $("div").removeClass("black-underline");
    $("div").addClass("white-underline");
  } else {
    $("nav a").removeClass("white-text").addClass("black-text");
    $("div").removeClass("white-underline");
    $("div").addClass("black-underline");
  }
  try {
    eval(pgName);
    $("#app").html(eval(pgName));
  } catch (e) {
    console.log("hello", e);
  }
}
