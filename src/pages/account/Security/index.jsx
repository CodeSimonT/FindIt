import React, { useState } from "react";
import { ButtonStyle } from "src/components/Model";
import { PasswordInput, Device } from "src/components/SecurityCom";
import { flexStyle } from "src/style/style";

const index = () => {
  const [toggleCurrent, setToggleCurrent] = useState(true);
  const [toggleNew, setToggleNew] = useState(true);
  const [toggleConfirm, setToggleConfirm] = useState(true);

  const toggle1 = () => {
    setToggleCurrent((item) => !item);
  };
  const toggle2 = () => {
    setToggleNew((item) => !item);
  };
  const toggle3 = () => {
    setToggleConfirm((item) => !item);
  };

  return (
    <>
      <div>
        {/* heading */}
        <h2 className="">Password & Security</h2>
        <p className="my-3">
          Manage your password settings and secure your account.
        </p>

        {/* change password */}
        <div className="border-bottom-gray pb-5">
          <h4 className="mb-3 fw-bold">Password</h4>
          <div className="row">
            {/* current */}
            <div className="col-6">
              <div className="mb-3">
                <p className="mb-2">Current password</p>
                <PasswordInput toggle={toggleCurrent} toggler={toggle1} />
              </div>
            </div>
            {/* new */}
            <div className="col-6">
              <div className="mb-3">
                <p className="mb-2">New password</p>
                <PasswordInput toggle={toggleNew} toggler={toggle2} />
              </div>
            </div>
            {/* confirm */}
            <div className="col-6">
              <div>
                <p className="mb-2">Confirm password</p>
                <PasswordInput toggle={toggleConfirm} toggler={toggle3} />
              </div>
            </div>
            {/* forget password */}
            <div className="col-6">
              <p className="underline mt-1">Forget password?</p>
            </div>
          </div>
          <div className={`mt-4 ${flexStyle.flexStart}`}>
            <ButtonStyle
              text={"Update password"}
              style={"border-orange py-2 px-4"}
              textcolor={"orange-text"}
            />
          </div>
        </div>

        {/* signed in device */}
        <div className={`my-5`}>
          <h4 className="fw-bold mb-3">Where you're signed in on</h4>
          <Device
            icon={"fa-display"}
            device={"Mac – New York, USA"}
            app={"Chrome"}
            time={"Active now"}
            active={"green-text"}
          />
          <Device
            icon={"fa-mobile-screen"}
            device={"iPhone 12 – New York, USA"}
            app={"Find-it App"}
            time={"20 hours ago"}
            active={"gray-text"}
          />
          <Device
            icon={"fa-display"}
            device={"Windows 10.1 – New York, USA"}
            app={"Chrome"}
            time={"November 15 at 8:42 AM"}
            active={"gray-text"}
          />
          {/* log out button */}
          <div className="mt-3">
            <p className="gray-text fw-bold">Sign out all sessions</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
