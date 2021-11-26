import React from "react";

const AboutUs = () => {
  return (
    <div className="container">
      <h1 className="my-3 mb-5">About Us</h1>
      <div className="row d-flex align-items-center justify-content-center ">
        <img
          className="col-12 col-lg-6 img-fluid"
          src="https://images.unsplash.com/photo-1560831269-3faa2fc0b932?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1171&q=80"
          alt=""
        />
        <div className="col-12 col-lg-6">
          <p>
            An amusement park is a park that features various attractions, such
            as rides and games, as well as other events for entertainment
            purposes. A theme park is a type of amusement park that bases its
            structures and attractions around a central theme, often featuring
            multiple areas with different themes. Unlike temporary and mobile
            funfairs and carnivals, amusement parks are stationary and built for
            long-lasting operation. They are more elaborate than city parks and
            playgrounds, usually providing attractions that cater to a variety
            of age groups. While amusement parks often contain themed areas,
            theme parks place a heavier focus with more intricately-designed
            themes that revolve around a particular subject or group of
            subjects.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
