import React, { useState, useEffect } from "react";
import { Select } from "antd";

const { Option } = Select;

const MultiSelectType = ({ name, onChange, initialValue }) => {
  const [selectedItems, setSelectedItems] = useState(initialValue || []);

  const handleChange = (selectedValues) => {
    setSelectedItems(selectedValues);
    onChange(name, selectedValues);
  };

  useEffect(() => {
    onChange(selectedItems);
  }, [selectedItems]);

  return (
    <Select
      mode="tags"
      style={{ width: "100%" }}
      placeholder="Type or select items"
      onChange={handleChange}
      tokenSeparators={[","]}
      value={selectedItems}
    >
      {selectedItems.map((item) => (
        <Option key={item} value={item}>
          {item}
        </Option>
      ))}
    </Select>
  );
};

export default MultiSelectType;
