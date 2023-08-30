import React, { useState, useEffect } from "react";
import { DropdownAddress, Caption, InputNumber, InputText } from "..";

const index = () => {
  const [regionsData, setRegionsData] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState({});
  //
  const [provinceData, setProvinceData] = useState([]);
  const [selectedProvince, setSelectedProvince] = useState({});
  //
  const [cityData, setCityData] = useState([]);
  const [selectedCityData, setSelectedCityData] = useState({});
  //
  const [barangayData, setBarangayData] = useState([]);
  const [selectedBarangayData, setSelectedBarangayData] = useState({});
  //
  const [zipcode, setZipCode] = useState(Number);
  //
  const [address, setAddress] = useState("");

  // region call
  useEffect(() => {
    fetch("https://psgc.gitlab.io/api/regions/")
      .then((response) => response.json())
      .then((data) => setRegionsData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  // province call
  useEffect(() => {
    if (selectedRegion && selectedRegion.code) {
      fetch(
        `https://psgc.gitlab.io/api/regions/${selectedRegion.code}/provinces/`
      )
        .then((response) => response.json())
        .then((data) => setProvinceData(data))
        .catch((error) => console.error("Error fetching data:", error));
      console.log(selectedProvince);
    }
  }, [selectedRegion]);
  // city call
  useEffect(() => {
    if (selectedProvince && selectedProvince.code) {
      fetch(
        `https://psgc.gitlab.io/api/provinces/${selectedProvince.code}/cities/`
      )
        .then((response) => response.json())
        .then((data) => setCityData(data))
        .catch((error) => console.error("Error fetching data:", error));
      // console.log(cityData);
    }
  }, [selectedProvince]);
  // barangay https://psgc.gitlab.io/api/cities/012805000/barangays/
  useEffect(() => {
    if (selectedCityData && selectedCityData.code) {
      fetch(
        `https://psgc.gitlab.io/api/cities/${selectedCityData.code}/barangays/`
      )
        .then((response) => response.json())
        .then((data) => setBarangayData(data))
        .catch((error) => console.error("Error fetching data:", error));
      // console.log(cityData);
    }
  }, [selectedCityData]);

  useEffect(() => {
    console.log(typeof zipcode);
  }, [zipcode]);

  return (
    <>
      <div className="row">
        <div className="col-7">
          <Caption title={"Region"} />
          <DropdownAddress
            title={"Region"}
            data={regionsData}
            selectedItem={selectedRegion}
            onItemClick={setSelectedRegion}
          />
        </div>
        <div className="col-5">
          <Caption title={"Province"} />
          <DropdownAddress
            title={"Province"}
            data={provinceData}
            selectedItem={selectedProvince}
            onItemClick={setSelectedProvince}
            active={selectedRegion && selectedRegion.code ? "" : "disabled"}
            valid={selectedRegion && selectedRegion.code ? "" : "gray-text"}
          />
        </div>
        <div className="col-8">
          <Caption title={"City"} />
          <DropdownAddress
            title={"City"}
            data={cityData}
            selectedItem={selectedCityData}
            onItemClick={setSelectedCityData}
            active={selectedProvince && selectedProvince.code ? "" : "disabled"}
            valid={selectedProvince && selectedProvince.code ? "" : "gray-text"}
          />
        </div>
        <div className="col-4">
          <Caption title={"Zip code"} />
          <InputNumber
            placeholder={"Enter VIN"}
            value={zipcode === 0 ? "" : zipcode}
            onChange={(value) => setZipCode(value)}
          />
        </div>
        <div className="col-5">
          <Caption title={"Barangay"} />
          <DropdownAddress
            title={"Barangay"}
            data={barangayData}
            selectedItem={selectedBarangayData}
            onItemClick={setSelectedBarangayData}
            active={selectedCityData && selectedCityData.code ? "" : "disabled"}
            valid={selectedCityData && selectedCityData.code ? "" : "gray-text"}
          />
        </div>
        <div className="col-7">
          <Caption title={"Address"} />
          <InputText
            placeholder={"Enter Address"}
            value={address}
            onChange={(input) => setAddress(input)}
          />
        </div>
      </div>
    </>
  );
};

export default index;
