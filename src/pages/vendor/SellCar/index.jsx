import React, { useState } from "react";
import { flexStyle } from "src/style/style";
import { ContentProgress, SellCarData } from "src/data/constant";
import {
  PagePath,
  DropdownToggle,
  FileUpload,
  Title,
} from "src/components/Model";
import {
  SellCarCard,
  InputText,
  Caption,
  InputNumber,
  Features,
  Address,
  ContactInfo,
} from "src/components/SellCarCom";

const index = () => {
  const [formData, setFormData] = useState({
    title: "Mercedes-Benz E 400 Cabriolet",
    listingType: "private",
    price: 75648,
    mileage: 8045,
    vin: "NHFM4N57VDJR8",
    color: "Aspen White",
  });

  const handleInputChange = (name, value) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleListingTypeChange = (type) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      listingType: type,
    }));
  };

  return (
    <>
      <div className="container-fluid pt-130">
        <PagePath link={"Sell car"} />

        {/* grid */}
        <h2 className="fw-bold mb-3">Sell car</h2>
        <div className="row">
          {/* left content */}
          <div className="col-9">
            {/* Basic info */}
            <SellCarCard
              title={"Basic info"}
              icon={"fa-circle-info fa-lg me-3"}
            >
              <Caption title={"Title"} />
              <InputText
                placeholder={"Enter title"}
                value={formData.title}
                onChange={(value) => handleInputChange("title", value)}
              />

              <Caption title={"Vehicle condition"} />
              <DropdownToggle
                value={SellCarData.condition}
                width={"w-50"}
                color={"white-text"}
              />
              <p className="fw-bold mt-4 mb-2">
                Are you listing on Finder as part of a company?
              </p>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                  checked={formData.listingType === "private"}
                  onChange={() => handleListingTypeChange("private")}
                />
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                  I am a registered dealer
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault2"
                  checked={formData.listingType === "dealer"}
                  onChange={() => handleListingTypeChange("dealer")}
                />
                <label className="form-check-label" htmlFor="flexRadioDefault2">
                  I am a private seller
                </label>
              </div>
            </SellCarCard>
            {/* Price */}
            <SellCarCard title={"Price"} icon={"fa-money-bill fa-lg me-3"}>
              <Caption title={"Price"} />
              <div className="row">
                <div className="col-3">
                  <DropdownToggle
                    value={SellCarData.currency}
                    width={"w-100"}
                    color={"white-text"}
                  />
                </div>
                <div className="col-9 ps-0">
                  <InputNumber
                    placeholder={"Enter Price"}
                    value={formData.price}
                    onChange={(value) => handleInputChange("price", value)}
                  />
                </div>
              </div>
              <div className="form-check form-switch mt-3">
                <input
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault"
                />
                <label
                  className="form-check-label"
                  htmlFor="flexSwitchCheckDefault"
                >
                  Negotiated price
                </label>
              </div>
            </SellCarCard>
            {/* Vehicle information */}
            <SellCarCard
              title={"Vehicle information"}
              icon={"fa-car fa-lg me-3"}
            >
              <div className="row">
                <div className="col-6">
                  <Caption title={"Make"} />
                  <DropdownToggle
                    value={SellCarData.makedata}
                    width={"w-100"}
                    color={"white-text"}
                  />
                </div>
                <div className="col-6">
                  <Caption title={"Model"} />
                  <DropdownToggle
                    value={SellCarData.modeldata}
                    width={"w-100"}
                    color={"white-text"}
                  />
                </div>
                <div className="col-6">
                  <div className="row">
                    <div className="col-6">
                      <Caption title={"value"} />
                      <DropdownToggle
                        value={SellCarData.yearsdata}
                        width={"w-100"}
                        color={"white-text"}
                      />
                    </div>
                    <div className="col-6">
                      <Caption title={"col-6"} />
                      <InputNumber
                        title={"Title"}
                        icon={"fa-asterisk"}
                        placeholder={"Enter Price"}
                        value={formData.mileage}
                        onChange={(value) =>
                          handleInputChange("mileage", value)
                        }
                      />
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <Caption title={"VIN"} />
                  <InputText
                    placeholder={"Enter VIN"}
                    value={formData.vin}
                    onChange={(value) => handleInputChange("vin", value)}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-6">
                  <Caption title={"Body type"} />
                  <DropdownToggle
                    value={SellCarData.bodytype}
                    width={"w-100"}
                    color={"white-text"}
                  />
                  <Caption title={"Fuel type"} />
                  <DropdownToggle
                    value={SellCarData.fueltype}
                    width={"w-100"}
                    color={"white-text"}
                  />
                  <Caption title={"Engine"} />
                  <DropdownToggle
                    value={SellCarData.Engine}
                    width={"w-100"}
                    color={"white-text"}
                  />
                </div>
                <div className="col-6">
                  <Caption title={"Transmission"} />
                  <DropdownToggle
                    value={SellCarData.transmission}
                    width={"w-100"}
                    color={"white-text"}
                  />
                  <Caption title={"Drivetrain"} />
                  <DropdownToggle
                    value={SellCarData.drivetrain}
                    width={"w-100"}
                    color={"white-text"}
                  />
                  <Caption title={"Color"} />
                  <InputText
                    placeholder={"Enter Color"}
                    value={formData.color}
                    onChange={(value) => handleInputChange("color", value)}
                  />
                </div>
              </div>
            </SellCarCard>
            {/* Features */}
            <Features />
            {/* photos / videos */}
            <SellCarCard title={"Photos / video"} icon={"fa-image fa-lg me-3"}>
              <div className="mt-3">
                <FileUpload title={"Upload photo / video"} />
              </div>
            </SellCarCard>
            {/* location */}
            <SellCarCard title={"Location"} icon={"fa-image fa-lg me-3"}>
              <Address />
            </SellCarCard>
            {/* Contact Info */}
            <SellCarCard title={"Contact"} icon={"fa-phone-volume fa-lg me-3"}>
              <ContactInfo />
            </SellCarCard>
          </div>
          {/* right content */}
          <div className="col-3">
            <h5 className="mb-3">80% content filled</h5>
            <div className="progress mb-4" style={{ height: "5px" }}>
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
            {ContentProgress.map((item) => (
              <div className={`${flexStyle.flexStart} mb-2`} key={item.id}>
                <i
                  className="fa-solid fa-check fa-lg me-2"
                  style={{ color: `${item.color}` }}
                ></i>
                <p className="gray-text">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
