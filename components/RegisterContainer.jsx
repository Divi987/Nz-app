import style from "./styles.module.css";

export default function RegisterContainer() {
  return (
    <div className="style rcMain text-[0.938rem] ">
      <div className="rcPage bg-white">
        <div className="lcInner mx-5 md:mx-auto md:w-10/12 pt-[1.8125rem] pb-10 md:pr-14">
          <div className="singlePage">
            <div className="pageHeading border-b-[2px] border-[#d1d1d1]">
              <h2 className="text-[#ff2c00] font-light text-4xl leading-tight mb-6">
                Set up your account
              </h2>
            </div>
            <div id="api">
              <form action="#">
                <div className={style.attributeList}>
                  <ul>
                    <li className="verificationControl">
                      <p className="small">
                        To set up an account you will need to confirm your email
                        address:
                      </p>
                      <ul
                        className={`${style.listStyleRedDot} small list-inline`}
                      >
                        <li>
                          Enter your email address and click the Send Code
                          button
                        </li>
                        <li>Check your email to retrieve the Code</li>
                        <li>Enter the code in the Confirmation Code field</li>
                        <li>Click the Confirm Code button</li>
                      </ul>
                      <br />
                      <div className={style.attrEntry}>
                        <ul>
                          <li>
                            <div className={style.attrEntry}>
                              <input
                                id="email"
                                className={`${style.rcInput} ${style.lcControl}`}
                                type="text"
                                placeholder=" "
                                aria-label="Email Address"
                                title="Email address that can be used to contact you."
                                aria-required="true"
                                fdprocessedid="4qh6jn"
                              />
                              <label id="email_label" for="email">
                                Email Address
                                <span className="input-required-indicator">
                                  *
                                </span>
                              </label>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="buttons block">
                  <button
                    id="continue"
                    type="submit"
                    form="attributeVerification"
                    disabled=""
                    aria-label="Continue"
                    className={`mr-5 bg-[#008022] text-white ${style.rcBtn} primary btn-green btn-icon`}
                  >
                    <section className="flex">
                      <img
                        src="https://config.realme.govt.nz/b2c-ui/images/icons/Tick_Icon_RealMe.png"
                        alt="Confirm code"
                        className={style.lcImgIcon}
                      />
                      <span>Continue</span>
                    </section>
                  </button>
                  <button
                    id="cancel"
                    aria-label="Cancel"
                    formnovalidate=""
                    className="btn btn-red secondary btn-icon"
                    style={{ display: "none" }}
                  >
                    <section>
                      <img
                        src="https://config.realme.govt.nz/b2c-ui/images/icons/Cross_Icon_RealMe.png"
                        alt="Cancel"
                        className="img-icon"
                      />
                      <span>Cancel</span>
                    </section>
                  </button>
                  <button
                    id="cancelReload"
                    aria-label="Cancel"
                    formnovalidate=""
                    className={`bg-[#fbece6] text-[#c43d08] ${style.rcBtn} btn-red secondary btn-icon`}
                    fdprocessedid="5y9519"
                  >
                    <section className="flex">
                      <img
                        src="https://config.realme.govt.nz/b2c-ui/images/icons/Cross_Icon_RealMe.png"
                        alt="Cancel"
                        className={style.lcImgIcon}
                      />
                      <span>Cancel</span>
                    </section>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
