import React ,{useState} from "react";

import union from "../images/union.png";
import { Link } from "react-router-dom";

import atg from "../images/atg.png";
import fb from '../images/fb.png'
import search from "../images/search.png"
import { GoogleLogin } from "react-google-login";


export default function Navbar() {
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const responseGoogle = (response) => {
  setName(response.profileObj.name);
    setUrl(response.profileObj.imageUrl)
    console.log(response)
  };
  
  console.log(name)
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
            <div class="modal-header d-none d-sm-none d-md-block ">
              <h5 class="modal-title fs-6" id="exampleModalLabel">
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
                      clientId="665297845906-ctnubc7ismn2ka0r6vj2hfadpbdsdlum.apps.googleusercontent.com"
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
            <div class="modal-header">
              <h5 class="modal-title fs-6" id="exampleModalLabel">
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
                      clientId="665297845906-ctnubc7ismn2ka0r6vj2hfadpbdsdlum.apps.googleusercontent.com"
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
                  <div className="mod-2 col-md-6 mt-5">
                    <img className="w-100" src={atg} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

     
    </div>
  );
}
 {
   /* 

           <nav >
               <div className="logo">
                   <h5><span className="first-part">ATG.</span>
                   <span>W</span>
                   <span>
                       <img src={union} alt="" />
                   </span>
                   <span>RLD</span> </h5>
               </div>
               <div className="search">
                   <div className="content">
                      <img className="img-one "src={Vector} alt="" /> search for your favorite groups in ATG
                   </div>
               </div>
               <div className="register">
                   <a >Create account .</a>
                   <Link data-bs-toggle="modal" data-bs-target="#exampleModal" style={{textDecoration:"none"}}>It's free!</Link>
                <img src={dropdown} alt="" />


<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>

               </div>
           </nav> */
 }