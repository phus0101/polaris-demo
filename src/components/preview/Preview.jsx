import { Card, DataTable, Text } from "@shopify/polaris";
import React from "react";

const Preview = ({ options, generalInfo }) => {
  const rows = options.map((item) => {
    let newAmount = "";
    if (item.discountType === "Discount / each") newAmount = `${item.amount} $`;
    else if (item.discountType === "% discount") newAmount = `${item.amount} %`;
    else newAmount = "";
    return [item.title, item.discountType, item.quantity, newAmount];
  });
  return (
    <Card>
      <Text as="h2" variant="headingLg">
        Preview
      </Text>
      <p
        style={{
          fontSize: "17px",
          fontWeight: "bold",
          textAlign: "center",
          margin: "10px 0",
        }}
      >
        {generalInfo.title}
      </p>
      <Text as="p" fontWeight="bold">
        {generalInfo.description}
      </Text>
      <DataTable
        columnContentTypes={["text", "text", "numeric", "text"]}
        headings={["Title", "Discount Type", "Quantity", "Amount"]}
        rows={rows}
      />
    </Card>
  );
};

export default Preview;
