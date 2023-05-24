import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "react-slideshow-image/dist/styles.css";
import { Fade } from "react-slideshow-image";
import Button from "@mui/material/Button";
const linksAndDATA = [
  { url: "https://source.unsplash.com/OHOU-5UVIYQ", caption: "first" },
  { url: "https://source.unsplash.com/Ptd-iTdrCJM", caption: "2nd" },
  { url: "https://source.unsplash.com/uj3hvdfQujI", caption: "3rd" },
];

const Banner = () => {
  return (
    <div className="container">
      <Fade>
        {linksAndDATA.map((item, indx) => {
          return (
            <div key={indx}>
              <div
                style={{
                  height: "700px",
                  backgroundImage: `url(${item.url})`,
                  backgroundSize: "cover",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {/* <h1>hirak data</h1> */}
                <p
                  style={{
                    width: "400px",
                    textAlign: "justify",
                    // text,
                  }}
                >
                  <b>
                    First privately developed liquid-fueled rocket to put a
                    commercial satellite in orbit. First private company to
                    successfully launch, orbit, and recover a spacecraft. First
                    private company to send a spacecraft to the International
                    Space Station (ISS). First landing of an orbital-class
                    rocket's first stage on land.
                  </b>
                </p>
                <div
                  className="navContainer"
                  style={{
                    bottom: "300px",
                    right: "200px",
                    position: "relative",
                  }}
                >
                  <nav
                    style={{
                      display: "flex",
                    }}
                  >
                    <div
                      style={
                        {
                          // position: "relative",
                          // bottom: "300px",
                          // right: "350px",
                        }
                      }
                      className="imageContainer"
                    >
                      <img
                        style={{
                          height: "50px",
                        }}
                        src="./SpaceX_logo_black.svg.png"
                        alt="spaceX-Logo"
                      />
                    </div>
                    <div
                      className="buttonContainer"
                      style={{ display: "flex", padding: "15px 0 0 200px" }}
                    >
                      {["Rockts", "option2", "option3", "optun4"].map(
                        (i, ind) => {
                          return (
                            <div
                              key={ind}
                              style={{
                                padding: "5px",
                              }}
                            >
                              <Button
                                onClick={() => {
                                  alert("this button has no function");
                                }}
                                variant="contained"
                              >
                                {i}
                              </Button>
                            </div>
                          );
                        }
                      )}
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          );
        })}
      </Fade>
    </div>
  );
};

export default Banner;
