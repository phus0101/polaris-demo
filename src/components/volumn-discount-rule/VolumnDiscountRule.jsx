import {
  Box,
  Button,
  Form,
  Icon,
  Select,
  Text,
  TextField,
} from "@shopify/polaris";
import { CirclePlusMinor, DeleteMajor } from "@shopify/polaris-icons";
import React from "react";
import "./styles.css";

const VolumnDiscountRule = ({
  options,
  handleRemoveOption,
  handleOptionChange,
  handleAddOption,
}) => {
  return (
    <div className="volumn-discount-rule">
      <Box
        background="bg-fill"
        borderStartStartRadius="200"
        borderStartEndRadius="200"
        padding={"300"}
        shadow="200"
      >
        <Text as="h2" variant="headingLg">
          Volumn discount rule
        </Text>
      </Box>
      <Form>
        {options.map((option, index) => (
          <div className="discount-option" key={index}>
            <div className="badge">
              <span>OPTION {index + 1}</span>
            </div>
            <div className="actions">
              <span onClick={() => handleRemoveOption(index)}>
                <Icon source={DeleteMajor} tone="base" />
              </span>
            </div>
            <Box
              background="bg-fill"
              paddingInlineStart={"1000"}
              paddingInlineEnd={"1000"}
            >
              <div className="form-group">
                <TextField
                  label="Title"
                  value={option.title}
                  onChange={(value) =>
                    handleOptionChange(index, "title", value)
                  }
                  error={!option.title && "Title is required"}
                />
                <TextField
                  label="Subtitle"
                  value={option.subtitle}
                  onChange={(value) =>
                    handleOptionChange(index, "subtitle", value)
                  }
                />
                <TextField
                  label="Label (Optional)"
                  value={option.label}
                  onChange={(value) =>
                    handleOptionChange(index, "label", value)
                  }
                />
                <TextField
                  label="Quantity"
                  type="number"
                  value={option.quantity}
                  onChange={(value) =>
                    handleOptionChange(index, "quantity", value)
                  }
                  error={!option.quantity && "Quantity is required"}
                />
                <Select
                  label="Discount Type"
                  options={["None", "% discount", "Discount / each"]}
                  value={option.discountType}
                  onChange={(value) =>
                    handleOptionChange(index, "discountType", value)
                  }
                />
                {option.discountType !== "None" && (
                  <TextField
                    label="Amount"
                    type="number"
                    value={option.amount}
                    onChange={(value) =>
                      handleOptionChange(index, "amount", value)
                    }
                    suffix={option.discountType === "% discount" ? "%" : "$"}
                    error={!option.amount && "Amount is required"}
                  />
                )}
              </div>
            </Box>
          </div>
        ))}
        <div style={{ marginTop: "2px" }}>
          <Box
            background="bg-fill"
            borderEndStartRadius="200"
            borderEndEndRadius="200"
            padding={"300"}
            shadow="200"
          >
            <Button
              icon={CirclePlusMinor}
              className="add-option"
              size="large"
              fullWidth
              onClick={handleAddOption}
              variant="plain"
            >
              Add Option
            </Button>
          </Box>
        </div>
      </Form>
    </div>
  );
};

export default VolumnDiscountRule;
