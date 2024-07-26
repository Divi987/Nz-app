import Link from "next/link";
import style from "./styles.module.css";

export default function LoginContainer() {
  return (
    <>
      <div className={style.lcMain}>
        <div className="lcPage bg-white">
          <div className="lcInner mx-5 md:mx-auto md:w-10/12 pt-[1.8125rem] pb-10 md:pr-14">
            <div className="lcSplit flex">
              <div className="lcMobileSplit w-full md:w-6/12 md:pr-[3.875rem]">
                <h2 className="text-[#ff2c00] font-light text-4xl leading-tight mb-6">
                  Log in with
                  <b className="font-extrabold"> RealMe</b>
                </h2>
                <p className="details font-normal text-[0.938rem] my-6 md:hidden block">
                  To access this service you need a RealMe login.
                </p>
                <p className="details font-normal text-[0.938rem] my-6 hidden md:block">
                  You've been redirected here so you can log in with RealMe
                </p>
                <ul className="radio-list text-[0.938rem] block md:hidden">
                  <li className="mx-2 my-4">
                    <input
                      type="radio"
                      name="select-split-panel"
                      id="select-left"
                    />
                    <label for="select-left" className="pl-6 text=[0.938rem]">
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
                <div classNameName="lcFormMain">
                  <form action="#" className={style.lcForm}>
                    <div className={style.lcEntry}>
                      <div className={style.lcEntryItem}>
                        <input
                          type="text"
                          id="signInName"
                          name="Username"
                          placeholder=" "
                          value=""
                          className={`${style.lcControl} ${style.lcInput}`}
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
                      <div className={`${style.lcEntryItem} mt-4`}>
                        <div className="password-label"></div>

                        <input
                          type="password"
                          id="password"
                          name="Password"
                          placeholder=" "
                          className={`${style.lcControl} ${style.lcInput}`}
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
                          className={`${style.lcBtn} ${style.lcPrimary} ${style.lcBtnIcon}`}
                        >
                          <section>
                            <img
                              src="https://config.realme.govt.nz/b2c-ui/images/icons/RealMe_Face_Symbol_White.png"
                              alt="RealMe"
                              className={style.lcImgIcon}
                            />
                            <span>Log in</span>
                          </section>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="splitPageRight md:w-6/12 hidden md:block md:pl-20 border-l-[1px] border-[#d1d1d1]">
                <div>
                  <div className="wrapper">
                    <h2 className="hideInMobile text-[#ff2c00] font-light text-4xl leading-tight mb-6">
                      Create a <b className="font-extrabold">RealMe </b>
                      login
                    </h2>
                    <p className="details my-6 hideInMobile font-normal text-[0.938rem]">To access this service you need a RealMe login.</p>
                    <p className=" font-normal text-[0.938rem]">You'll be able to access a range of services with a single username and password. RealMe is designed to protect your privacy and security.</p>
                  </div>
                  <div className="createButtonHolder">
                  <Link id="createAccount" href="#" className={`${style.lcBtn} ${style.lcPrimary} ${style.lcBtnIcon}`}>
                  <img src="https://config.realme.govt.nz/b2c-ui/images/icons/Right_Arrow_Icon_RealMe.png" alt="Right Arrow" className={style.lcImgIcon} />
                  <span>Create a RealMe login</span></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
