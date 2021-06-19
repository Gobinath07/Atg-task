import React ,{useState} from "react";

import first from "../images/first.png";
import dots from "../images/dots.png";
import profile1 from "../images/profile1.png";
import hand from "../images/hand.png";
import suitcase from "../images/suitcase.png";
import july from "../images/july.png";
import join from "../images/join.png";
import microscope from "../images/microscope.png";
import thumb from "../images/thumb.png";
import second_image from "../images/second_image.png";
import third_image from "../images/third_image.png";
import second from "../images/second.png";
import third from "../images/third.png";
import fourth from "../images/fourth.png";
import Group from "../images/Group.png";
import Navbar from './Navbar'
import arrow from "../images/arrow.png";
import s1 from "../images/s1.png";
import s2 from "../images/s2.png";
import s3 from "../images/s3.png";
import s4 from "../images/s4.png";
import Vector from "../images/Vector.png";
import union from "../images/union.png";
import { Link } from "react-router-dom";
import dropdown from "../images/dropdown.png";
import atg from "../images/atg.png";
import fb from "../images/fb.png";
import out from "../images/out.png";
import search from "../images/search.png";
import { GoogleLogin } from "react-google-login";
export default function NewOne() {
    const [name, setName] = useState("");
    const [url, setUrl] = useState("");
    const responseGoogle = (response) => {
      setName(response.profileObj.name);
      setUrl(response.profileObj.imageUrl);
      console.log(response);
    };
  return (
    <div>
      <nav class="navbar navbar-light  fixed-top bg-white d-none d-sm-block  d-flex flex-row">
        <div className="logo d-flex justify-content-start">
          <h5>
            <span className="first-part">ATG.</span>
            <span>W</span>
            <span>
              <img src={union} alt="" />
            </span>
            <span>RLD</span>{" "}
          </h5>
        </div>

        <div className="d-flex  align-items-center justify-content-center">
          <form class="d-flex">
            <input
              className=" form-control search"
              type="search"
              placeholder="            Search for your favorite groups in ATG"
              aria-label="Search"
            />

            <i class="bi bi-search ms-3 m"></i>
          </form>
        </div>
        <div className="d-flex align-items-center justify-content-end  align-items-center">
          <div className="register">
            {url ? (
              <img
                src={url}
                style={{ borderRadius: 21 + "px", width: 40 + "px" }}
                alt=""
              />
            ) : (
              ""
            )}
            <a>{name ? name : "Create account ."}</a>
            <Link
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              style={{ textDecoration: "none" }}
            >
              {name ? "" : "It's free!"}
              <span>
                {name ? (
                  <i
                    class="bi bi-caret-down-fill"
                    style={{ top: 10 + "px", color: "black" }}
                  ></i>
                ) : (
                  <i class="bi bi-caret-down-fill"></i>
                )}
              </span>
            </Link>
          </div>
        </div>
      </nav>

      <div
        class="modal  fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered modal-lg">
          <div class="modal-content">
            <div class="modal-header ">
              <h5
                class="modal-title fs-6 d-none d-sm-none d-md-block "
                id="exampleModalLabel"
              >
                Let's learn, share & inspire each other with our passion for
                computer engineering. Sign up now 🤘🏼
              </h5>
              <button
                type="button"
                class="btn-close close-one"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="main-body modal-body">
              <div className="container">
                <div className="row">
                  <div className=" header-1 col-md-7">
                    <h5 className="fw-bolder fs-4">Create Account</h5>
                  </div>
                  <div className="header-1 sign-up col-md-5">
                    Already have an account?
                    <span>
                      <Link
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal1"
                        data-bs-dismiss="modal"
                        style={{ textDecoration: "none" }}
                      >
                        Sign Up
                      </Link>
                    </span>
                  </div>
                  <div className="mod-1 col-md-6  mt-5  ">
                    <form>
                      <div class="row">
                        <div class=" col-6 col-md-6 p-0 mod-form ">
                          <input
                            type="text"
                            class="form-control"
                            placeholder="First name"
                          />
                        </div>
                        <div class=" col-6 col-md-6 p-0 mod-form ">
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Last name"
                          />
                        </div>
                        <div class="form-group p-0 mod-form">
                          <input
                            type="text"
                            class="form-control"
                            id="inputAddress"
                            placeholder="Email"
                          />
                        </div>
                        <div class="form-group p-0 mod-form">
                          <input
                            type="text"
                            class="form-control"
                            id="inputAddress"
                            placeholder="password"
                          />
                        </div>
                        <div class="form-group p-0 mod-form">
                          <input
                            type="text"
                            class="form-control"
                            id="inputAddress"
                            placeholder="Confrim password"
                          />
                        </div>
                      </div>
                    </form>
                    <button class="btn btn-primary rounded-pill mt-3 btn-block w-100">
                      Create Account
                    </button>
                    <button class="btn border border-dark  mt-4 btn-block w-100">
                      <img src={fb} alt="" /> Sign up with Facebook
                    </button>

                    <GoogleLogin
                      clientId="665297845906-hppll8qdgqpeibcgie6r24tordl5ig6i.apps.googleusercontent.com"
                      render={(renderProps) => (
                        <button
                          class="btn border border-dark  mt-2 btn-block w-100"
                          onClick={renderProps.onClick}
                          disabled={renderProps.disabled}
                        >
                          {" "}
                          <img src={search} alt="" />
                          Sign up with Google
                        </button>
                      )}
                      buttonText="Login"
                      onSuccess={responseGoogle}
                      onFailure={responseGoogle}
                      cookiePolicy={"single_host_origin"}
                    />
                  </div>
                  <div className="mod-2 col-md-6 mt-5">
                    <img
                      className="w-100 d-none d-md-block d-sm-none "
                      src={atg}
                      alt=""
                    />
                    <small className="mt-2 font-last  ">
                      By signing up, you agree to our Terms & conditions,
                      Privacy policy
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="modal  fade"
        id="exampleModal1"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered modal-lg">
          <div class="modal-content">
            <div class="modal-header ">
              <h5
                class="modal-title fs-6 d-none d-sm-none d-md-block "
                id="exampleModalLabel"
              >
                Let's learn, share & inspire each other with our passion for
                computer engineering. Sign up now 🤘🏼
              </h5>
              <button
                type="button"
                class="btn-close close-one"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="main-body modal-body">
              <div className="container">
                <div className="row">
                  <div className=" header-1 col-md-6">
                    <h5 className="fw-bolder fs-4">Sign In</h5>
                  </div>
                  <div className="header-1 sign-up col-md-6 ">
                    Don’t have an account yet?
                    <span>
                      <Link
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal1"
                        style={{ textDecoration: "none" }}
                      >
                        Create new for free!
                      </Link>
                    </span>
                  </div>
                  <div className="mod-1 col-md-6 mt-5  ">
                    <form>
                      <div class="row">
                        <div class="form-group mod-form">
                          <input
                            type="text"
                            class="form-control"
                            id="inputAddress"
                            placeholder="Email"
                          />
                        </div>
                        <div class="form-group mod-form">
                          <input
                            type="text"
                            class="form-control"
                            id="inputAddress"
                            placeholder="password"
                          />
                        </div>
                      </div>
                    </form>
                    <button class="btn btn-primary rounded-pill mt-3 btn-block w-100">
                      Sign In
                    </button>
                    <button class="btn border border-dark  mt-4 btn-block w-100">
                      <img src={fb} alt="" /> Sign up with Facebook
                    </button>
                    <GoogleLogin
                      clientId="665297845906-hppll8qdgqpeibcgie6r24tordl5ig6i.apps.googleusercontent.com"
                      render={(renderProps) => (
                        <button
                          class="btn border border-dark  mt-2 btn-block w-100"
                          onClick={renderProps.onClick}
                          disabled={renderProps.disabled}
                        >
                          {" "}
                          <img src={search} alt="" />
                          Sign up with Google
                        </button>
                      )}
                      buttonText="Login"
                      onSuccess={responseGoogle}
                      onFailure={responseGoogle}
                      cookiePolicy={"single_host_origin"}
                    />
                    <div className="mt-5 ml-4 text-center">
                      <Link
                        style={{
                          textDecoration: "none",
                          color: "black",
                          textAlign: "center",
                          justifyContent: "center",
                        }}
                        to="#"
                      >
                        Forgot Password?
                      </Link>
                    </div>
                  </div>
                  <div className="mod-2 col-md-6 mt-5 d-none d-md-block d-sm-none ">
                    <img className="w-100" src={atg} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <main>
        <div className="sec-one ">
          <div class="w-100 d-md-none upper py-4">
            <div class="ml-3 mx-3 d-inline">
              <i class="fas fa-arrow-left text-light"></i>
            </div>
            <div class="leave mr-4 mx-4">
              <button class="btn border-light text-light ">Leave Group</button>
            </div>
          </div>
          {/* <div class="d-flex d-md-none justify-content-end">
            <button className="btn  mt-4 mx-3 btn-outline-light">
              Join Group
            </button>
          </div> */}

          <div className="head-1 w-100">
            <h5 className="text-1   justify-content-center">
              Computer Engineering
            </h5>
            <p className="paragraph">142,726 Computer Engineers follow this</p>
          </div>
        </div>
      </main>
      <div className="d-md-none pencil">
        <i>
          <a href="#exampleModal" data-bs-toggle="modal">
            <img src={Group} alt="" />{" "}
          </a>
        </i>
      </div>
      <section className=" middle w-100 ">
        <div class="container  d-none d-md-block ">
          <div class="head d-flex">
            <ul class="nav">
              <li class="nav-item">
                <a class="nav-link text-secondary " href="#">
                  All Posts(32)
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-secondary" href="#">
                  Article
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-secondary" href="#">
                  Event
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-secondary" href="#">
                  Education
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-secondary" href="#">
                  Job
                </a>
              </li>
            </ul>
            <div class=" bt-7 ml-auto pb-2">
              <button class=" btn post dropdown-toggle" type="button">
                Write a Post
              </button>
              {name ? (
                <button class="btn btn-outline-dark ">
                  <i>
                    <img src={out} alt="" />
                  </i>
                  Leave Group
                </button>
              ) : (
                <button class="btn btn-primary ">
                  <i>
                    <img src={join} alt="" />
                  </i>
                  Join Group
                </button>
              )}
            </div>
          </div>
          <hr class="m-0" />
        </div>
        <div className="row w-100 ">
          <div class=" d-sm-block d-md-none d-flex  align-items-center filter">
            <h5 class="col-8 hid-post ">Posts(368)</h5>
            <button
              class=" col-3 btn  post dropdown-toggle ml-auto"
              type="button"
            >
              Filter:All
            </button>
          </div>
        </div>
      </section>

      <section>
        <div>
          <div className="row w-100 m-0 ">
            <div className="col-12 offset-md-1 col-md-6 p-0 sec-start">
              <div class="card first-card ">
                <img src={first} className="img-responsive w-100" alt="..." />
                <div class="card-body ">
                  <div class="card-title">
                    <img src={hand} alt="" />
                    <span className="image-title fw-bolder">Article</span>
                  </div>
                  <div className="row">
                    <p class="card-text fs-bolder col-9 col-md-9 ">
                      What if famous brand had regular fonts? Meet RegulaBrands!
                    </p>

                    <div className="dot text-end offset-1 col-md-2 col-2 ">
                      <img
                        src={dots}
                        alt=""
                        href="#"
                        role="button"
                        id="dropdownMenuLink"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      />

                      <div
                        class="dropdown-menu pull-right"
                        aria-labelledby="dropdownMenuButton"
                      >
                        <a class="dropdown-item" href="#">
                          Edit
                        </a>
                        <a class="dropdown-item" href="#">
                          Report
                        </a>
                        <a class="dropdown-item" href="#">
                          Option 3
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class=" fw-normal  col-md-12 w-100  descript">
                    <p>
                      I’ve worked in UX for the better part of a decade. From
                      now on, I plan to rei…{" "}
                    </p>
                  </div>
                  <div className="row">
                    <div className="col-12 col-md-8 mt-4 mb-1">
                      <img src={profile1} alt="" />
                      <span className="name ">Sarthak Kamra</span>
                    </div>

                    <div className="col-md-4 col-12  mt-4 foot-1">
                      <div className="lat-one ">
                        <i className="bi bi-eye  d-none d-md-inline  d-sm-block"></i>
                        <span className="side-name">1.4K views</span>
                        <button class="btn mx-3 btn-light share">
                          <i class="fas fa-share-alt"></i>
                          <small class="d-md-none mx-2">Share</small>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card first-card ">
                <img src={second_image} class="card-img-top w-100" alt="..." />
                <div class="card-body">
                  <div class="card-title">
                    <img src={microscope} alt="" />
                    <span className="image-title fw-bolder">Education</span>
                  </div>
                  <div className="row">
                    <p class="card-text fs-bolder col-10 col-md-11 ">
                      Tax Benefits for Investment under National Pension Scheme
                      launched by Government
                    </p>

                    <div className="dot text-end col-1">
                      <img src={dots} alt="" />
                    </div>
                  </div>
                  <div class=" fw-normal col-md-12 w-100">
                    <p>
                      I’ve worked in UX for the better part of a decade. From
                      now on, I plan to rei…{" "}
                    </p>
                  </div>
                  <div className="row w-100">
                    <div className=" col-12 col-md-8 mt-4">
                      <img src={second} alt="" />
                      <span className="name ">Sarah West</span>
                    </div>
                    <div className="col-md-4 col-12  mt-4 foot-1">
                      <div className="lat-one ">
                        <i className="bi bi-eye  d-none d-md-inline  d-sm-block"></i>
                        <span className="side-name">1.4K views</span>
                        <button class="btn mx-3 btn-light share">
                          <i class="fas fa-share-alt"></i>
                          <small class="d-md-none mx-2">Share</small>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card first-card ">
                <img src={third_image} class="card-img-top w-100" alt="..." />
                <div class="card-body">
                  <div class="card-title">
                    <img src={july} alt="" />
                    <span className="image-title fw-bolder">Meetup</span>
                  </div>
                  <div className="row">
                    <p class="card-text fs-bolder col-10 col-md-10 ">
                      Finance & Investment Elite Social Mixer @Lujiazui
                    </p>

                    <div className="dot text-end col-2">
                      <img src={dots} alt="" />
                    </div>
                  </div>
                  <div className="row">
                    <div class=" fw-bolder col-md-12 w-100">
                      <i class="bi bi-calendar-event icons-color"></i>{" "}
                      <span>Fri, 12 Oct, 2018</span>
                      <i class="bi bi-geo-alt ms-4 icons-color"></i>{" "}
                      <span> Ahmedabad, India</span>
                    </div>
                    <button type="button" class="btn  btn-1 fs-5 ">
                      Primary
                    </button>
                  </div>
                  <div className="row w-100">
                    <div className=" col-12 col-md-8 mt-4">
                      <img src={third} alt="" />
                      <span className="name ">Ronal Jones</span>
                    </div>
                    <div className="col-md-4 col-12  mt-4 foot-1">
                      <div className="lat-one ">
                        <i className="bi bi-eye  d-none d-md-inline  d-sm-block"></i>
                        <span className="side-name">1.4K views</span>
                        <button class="btn mx-3 btn-light share">
                          <i class="fas fa-share-alt"></i>
                          <small class="d-md-none mx-2">Share</small>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card last-card ">
                <div class="card-body">
                  <div class="card-title">
                    <img src={suitcase} alt="" />
                    <span className="image-title fw-bolder">Job</span>
                  </div>
                  <div className="row">
                    <p class="card-text fs-bolder col-10 col-md-10 ">
                      Software Developer
                    </p>

                    <div className="dot text-end col-2">
                      <img src={dots} alt="" />
                    </div>

                    <div class=" fw-bolder col-md-12  w-100">
                      <i class="bi bi-bag icons-color  "></i>
                      <span>Innovaccer Analytics Private Ltd.</span>
                      <i class="bi bi-geo-alt ms-4 icons-color"></i>{" "}
                      <span> Noida, India</span>
                    </div>
                    <button type="button" className="btn  btn-2 fs-5">
                      Apply on Timesjobs
                    </button>
                    <div className="row w-100">
                      <div className=" col-12 col-md-8 mt-4">
                        <img src={fourth} alt="" />
                        <span className="name ">Josesh Gray</span>
                      </div>
                      <div className="col-md-4 col-12  mt-4 foot-1">
                        <div className="lat-one ">
                          <i className="bi bi-eye  d-none d-md-inline  d-sm-block"></i>
                          <span className="side-name">1.4K views</span>
                          <button class="btn mx-3 btn-light share">
                            <i class="fas fa-share-alt"></i>
                            <small class="d-md-none mx-2">Share</small>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {name ? (
              <div class="offset-md-1 col-md-4 d-none d-md-block last-2">
                <div class="card border-0">
                  <div class="card-header border-0 d-flex bg-white">
                    <div>
                      <i class="bi bi-geo-alt "></i>
                      <small className="mx-3">Noida, India</small>
                      <hr className="ht" />
                    </div>
                    <div class="ml-auto">
                      <i class="fas fa-pen"></i>
                    </div>
                  </div>
                  <div class="card-body border-0 d-flex exclamation">
                    <i class="bi bi-exclamation-circle"></i>
                    <p class="text-muted ml-1 ">
                      Your location will help us serve better and extend a
                      personalised experience.
                    </p>
                  </div>
                  <div className="last3">
                    <div class="d-flex align-items-center">
                      <i class="mb-2 ml-3">
                        <img src={thumb} alt="" />
                      </i>
                      <h6 class="text-uppercase mx-1">Rcommended Groups</h6>
                    </div>
                    <div class="row align-items-center ">
                      <div class="col-5 d-flex align-items-center ml-4">
                        <i>
                          <img src={s1} alt="" />
                        </i>
                        <h6 class="mx-4 ml-1">Leisure</h6>
                      </div>
                      <div class="offset-3 col-4">
                        <button class="btn border rounded-pill  bg-light follow">
                          Follow
                        </button>
                      </div>
                    </div>
                    <div class="row align-items-center my-3">
                      <div class="col-5 d-flex align-items-center ml-4">
                        <i>
                          <img src={s2} alt="" />
                        </i>
                        <h6 class="mx-4 ml-1">Activism</h6>
                      </div>
                      <div class="offset-3 col-4">
                        <button class="btn border rounded-pill bg-light follow">
                          Follow
                        </button>
                      </div>
                    </div>
                    <div class="row align-items-center my-3">
                      <div class="col-5 d-flex align-items-center ml-4">
                        <i>
                          <img src={s3} alt="" />
                        </i>
                        <h6 class="mx-4 ml-1">MBA</h6>
                      </div>
                      <div class="offset-3 col-4">
                        <button class="btn border rounded-pill bg-light follow">
                          Follow
                        </button>
                      </div>
                    </div>
                    <div class="row align-items-center my-3">
                      <div class="col-5 d-flex align-items-center ml-4">
                        <i>
                          <img src={s4} alt="" />
                        </i>
                        <h6 class="mx-4 ml-1">Philosoph</h6>
                      </div>
                      <div class="offset-3 col-4">
                        <button class="btn border rounded-pill bg-light follow">
                          Follow
                        </button>
                      </div>
                    </div>
                    <div class="text-end mx-3">
                      <a class="text-decoration-none" href="#">
                        See More...
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div class="offset-md-1 col-md-4 d-none d-md-block last-2">
                <div class="card border-0">
                  <div class="card-header border-0 d-flex bg-white">
                    <div>
                      <i class="bi bi-geo-alt "></i>
                      <small className="mx-3">Noida, India</small>
                      <hr className="ht" />
                    </div>
                    <div class="ml-auto">
                      <i class="fas fa-pen"></i>
                    </div>
                  </div>
                  <div class="card-body border-0 d-flex exclamation">
                    <i class="bi bi-exclamation-circle"></i>
                    <p class="text-muted ml-1 ">
                      Your location will help us serve better and extend a
                      personalised experience.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
