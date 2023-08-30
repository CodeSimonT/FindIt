import React from "react";
import { ButtonStyle, FileUpload } from "src/components/Model";
import { PersonalInfoData } from "src/data/constant";
import { flexStyle } from "src/style/style";

const index = () => {
  return (
    <>
      <div>
        {/* heading */}
        <h2 className="mb-4">Personal Info</h2>
        <p className="mb-2">Your personal info is 50% completed</p>
        <div className="progress" style={{ height: "10px" }}>
          <div
            className="progress-bar progress-bar-striped progress-bar-animated bg-warning"
            role="progressbar"
            aria-label="Warning striped example"
            style={{ width: "50%" }}
            aria-valuenow="50"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>

        {/* content */}
        <div className="row mt-4">
          <div className="col-12 col-lg-9 mb-4 mb-lg-0">
            {/* person info */}
            <div className="border-gray rounded-3">
              {PersonalInfoData.map((item, index) => (
                <div
                  key={item.id}
                  className={`mx-3 py-3 ${
                    index !== PersonalInfoData.length - 1
                      ? "border-bottom-gray"
                      : ""
                  }`}
                >
                  <div className={`${flexStyle.flexBetween} mb-1`}>
                    {/* title */}
                    <h6 className="gray-text fw-bold">{item.title}</h6>
                    {/* collapse button */}
                    <div
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#${item.collapseId}`}
                      aria-expanded="false"
                      aria-controls={item.collapseId}
                    >
                      <i
                        className="fa-solid fa-pen-to-square"
                        style={{ color: "#b1afb6" }}
                      ></i>
                    </div>
                  </div>
                  {/* user info */}
                  <p className="gray-text">{item.content}</p>
                  {/* collapse content */}
                  <div className="collapse mt-3" id={item.collapseId}>
                    <input
                      type="text"
                      name=""
                      id=""
                      placeholder={item.content}
                      className="w-100 border-gray gray-background py-2 px-3 rounded-3 text-white"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="col-12 col-lg-3">
            <FileUpload title={"Change photo"}>
              <div>
                <h5 className="mb-2">Who can see my profile?</h5>
                <p className="gray-text">
                  Your profile is private. No one else will see it untill a
                  reservation is confirmed.
                </p>
              </div>
            </FileUpload>
          </div>
        </div>
        {/* button */}
        <div className={`${flexStyle.flexBetween} mt-3`}>
          <ButtonStyle text={"Save Changes"} style={"orange-background py-2"} />
          <div className={flexStyle.flexCenterRow}>
            <i
              className="fa-solid fa-trash me-2"
              style={{ color: "#b1afb6" }}
            ></i>
            <p className="fw-bold gray-text pointer">Delete Account</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
