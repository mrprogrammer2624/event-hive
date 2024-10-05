import { Blog } from "./Blog";
import "./HomePage.css";

export const Home = () => {
  return (
    <div className="homepage">
      {/* <section className="hero">
        <div className="hero-content">
          <h1>MADE FOR THOSE WHO DO</h1>
          <div className="search-bar">
            <input type="text" placeholder="Search events" />
            <input type="text" placeholder="Location" />
            <input type="text" placeholder="Date" />
            <button className="btn-search">Search</button>
          </div>
        </div>
      </section> */}

      {/* <section className="upcoming-events">
        <div className="container">
          <h2>Upcoming Events</h2>
          <div className="event-grid">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="event-card">
                <img src="/placeholder.svg?height=200&width=400" alt="Event" />
                <div className="event-info">
                  <h3>Event Title</h3>
                  <p className="event-meta">Location • Date</p>
                  <p className="event-description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
            ))}
          </div>
          <button className="btn-view-more">View More</button>
        </div>
      </section> */}

      {/* <section className="create-event">
        <div className="container">
          <div className="create-event-content">
            <h2>Make your own Event</h2>
            <p>It only takes a few minutes to create your first event</p>
            <button className="btn-create">Create Event</button>
          </div>
          <img src="/placeholder.svg?height=200&width=300" alt="Create event" />
        </div>
      </section> */}

      {/* <section className="brands">
        <div className="container">
          <h2>Join these brands</h2>
          <div className="brand-logos">
            {[
              "Spotify",
              "Google",
              "Stripe",
              "YouTube",
              "Microsoft",
              "Medium",
              "Zoom",
              "Uber",
              "Grab",
            ].map((brand) => (
              <img
                key={brand}
                src={`/placeholder.svg?height=50&width=120&text=${brand}`}
                alt={brand}
              />
            ))}
          </div>
        </div>
      </section> */}

      {/* <section className="trending-colleges">
        <div className="container">
          <h2>Trending colleges</h2>
          <div className="college-grid">
            {[
              "Harvard University",
              "Stanford University",
              "Nanyang University",
            ].map((college) => (
              <div key={college} className="college-card">
                <img
                  src="/placeholder.svg?height=200&width=400"
                  alt={college}
                />
                <div className="college-info">
                  <h3>{college}</h3>
                  <p>Location</p>
                </div>
              </div>
            ))}
          </div>
          <button className="btn-view-more">View More</button>
        </div>
      </section> */}

      <Blog />
    </div>
  );
};
