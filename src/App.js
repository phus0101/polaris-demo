import { Page } from "@shopify/polaris";
import React, { useState } from "react";
import "./App.css";
import General from "./components/general/General";
import Preview from "./components/preview/Preview";
import VolumnDiscountRule from "./components/volumn-discount-rule/VolumnDiscountRule";

const defaultOption = {
  title: "",
  subtitle: "",
  label: "",
  quantity: "",
  discountType: "None",
  amount: "",
};

function LayoutExample() {
  const [options, setOptions] = useState([
    {
      ...defaultOption,
      title: "Single",
      subtitle: "Standard price",
      quantity: 1,
      discountType: "None",
    },
    {
      ...defaultOption,
      title: "Duo",
      subtitle: "Save 10%",
      label: "Popular",
      quantity: 2,
      discountType: "% discount",
      amount: 10,
    },
  ]);
  const [generalInfo, setGeneralInfo] = useState({
    campaignName: "Volumn discount #2",
    title: "Buy more and save",
    description: "Apply for all products in store",
  });

  const handleAddOption = () => {
    const newOption = {
      ...defaultOption,
      quantity: parseInt(options[options.length - 1].quantity) + 1,
    };
    setOptions([...options, newOption]);
  };

  const handleRemoveOption = (index) => {
    setOptions(options.filter((_, i) => i !== index));
  };

  const handleOptionChange = (index, field, value) => {
    const newOptions = [...options];
    newOptions[index][field] = value;
    setOptions(newOptions);
  };

  const handleInfoChange = (value, field) => {
    const newInfo = { ...generalInfo, [field]: value };
    setGeneralInfo(newInfo);
  };

  return (
    <Page
      className="create-discount"
      fullWidth={false}
      backAction={{
        content: "Orders",
        url: "#",
        onAction: () => {
          console.log("Back button clicked");
        },
      }}
      title="Create volumn discount"
    >
      <div className="container">
        <div className="general">
          <General info={generalInfo} handleInfoChange={handleInfoChange} />
          <VolumnDiscountRule
            options={options}
            handleRemoveOption={handleRemoveOption}
            handleOptionChange={handleOptionChange}
            handleAddOption={handleAddOption}
          />
        </div>
        <div className="preview">
          <Preview options={options} generalInfo={generalInfo} />
        </div>
      </div>
    </Page>
  );
}

export default LayoutExample;
