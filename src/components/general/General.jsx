import { Box, Card, FormLayout, Text, TextField } from "@shopify/polaris";
import React from "react";
import "./styles.css";

const General = ({ info, handleInfoChange }) => {
  return (
    <div className="general-wrapper">
      <Card title="General" sectioned>
        <Text as="h2" variant="headingLg">
          General
        </Text>
        <Box paddingBlockStart="200">
          <FormLayout>
            <TextField
              label="Campaign"
              onChange={(value) => handleInfoChange(value, "campaignName")}
              autoComplete="off"
              value={info.campaignName}
              error={!info.campaignName && "Campaign name is required"}
            />
            <TextField
              label="Title"
              onChange={(value) => handleInfoChange(value, "title")}
              autoComplete="off"
              value={info.title}
            />
            <TextField
              label="Description"
              onChange={(value) => handleInfoChange(value, "description")}
              autoComplete="off"
              value={info.description}
            />
          </FormLayout>
        </Box>
      </Card>
    </div>
  );
};

export default General;
