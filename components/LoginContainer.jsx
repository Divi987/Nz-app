export default function LoginContainer() {
  return (
    <>
      <div className="lcMain">
        <div className="lcPage bg-white">
          <div className="lcInner mx-5 md:mx-auto md:w-10/12 pt-[1.8125rem] pb-10">
            <div className="lcSplit">
              <div className="lcMobileSplit">
                <h2 className="text-[#ff2c00] font-light text-4xl leading-tight mb-6">
                  Log in with
                  <b className="font-extrabold"> RealMe</b>
                </h2>
                <p className="details font-normal text-[0.938rem] my-6">
                  To access this service you need a RealMe login.
                </p>
                <ul className="radio-list text-[0.938rem] block md:hidden">
                  <li className="mx-2 my-4">
                    <input
                      type="radio"
                      name="select-split-panel"
                      id="select-left"
                    />
                    <label
                      for="select-left"
                      className="pl-6 text=[0.938rem]"
                    >
                      I have an existing RealMe login
                    </label>
                  </li>
                  <li className="mx-2 my-4">
                    <input
                      type="radio"
                      name="select-split-panel"
                      id="select-right"
                    />
                    <label for="select-right" className="pl-6">
                      I need to create a login
                    </label>
                  </li>
                </ul>
                <div classNameName="lcForm">
                  <form action="#">
                    <div className="entry">
                      <div className="entry-item">
                        <input
                          type="text"
                          id="signInName"
                          name="Username"
                          placeholder=" "
                          value=""
                          className="control input"
                        />
                        <label for="signInName">Username</label>
                        <div
                          className="error itemLevel"
                          aria-hidden="true"
                          role="alert"
                          style={{ display: "none" }}
                        >
                          <p></p>
                        </div>
                      </div>
                      <div className="entry-item">
                        <div className="password-label"></div>

                        <input
                          type="password"
                          id="password"
                          name="Password"
                          placeholder=" "
                        />
                        <label for="password">Password</label>
                        <div
                          className="error itemLevel"
                          aria-hidden="true"
                          style={{ display: "none" }}
                        >
                          <p role="alert"></p>
                        </div>
                        <div
                          id="capsLockMessage"
                          className="error"
                          style={{ display: "none" }}
                        >
                          Your caps lock key is on
                        </div>
                      </div>
                      <div
                        className="working"
                        style={{ display: "none" }}
                      ></div>

                      <div className="buttons">
                        <button
                          id="next"
                          type="submit"
                          form="localAccountForm"
                          className="btn primary btn-icon"
                        >
                          <section>
                            <img
                              src="https://config.realme.govt.nz/b2c-ui/images/icons/RealMe_Face_Symbol_White.png"
                              alt="RealMe"
                              className="img-icon"
                            />
                            <span>Log in</span>
                          </section>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
