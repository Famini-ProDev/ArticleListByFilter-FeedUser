import React, { useMemo } from "react";
import { Select, Form, Input, Button, DatePicker } from "antd";
import MultiSelectType from "../../common/MultiSelectType/MultiSelectType";
import { sourceOptions } from "../../../constants/SelectOptions";

const FilterPanel = ({ onFilterChange, filters }) => {
  const [form] = Form.useForm();

  const handleInputChange = (name, value) => {
    form.setFieldsValue({ [name]: value });
  };
  const filterItems = useMemo(() => {
    return filters;
  }, [filters]);
  return (
    <Form form={form} onFinish={onFilterChange}>
      <Form.Item label="Keyword" name="Keyword">
        <Input name="Keyword" onChange={handleInputChange} />
      </Form.Item>
      <Form.Item
        rules={[
          {
            required: true,
            message: "Source is required",
          },
        ]}
        label="Sources"
        name="sources"
        initialValue={filterItems.sources}
      >
        <Select
          style={{ width: "100%" }}
          placeholder="Please select Sources"
          options={sourceOptions}
        />
      </Form.Item>
      <Form.Item
        label="Categories"
        name="categories"
        initialValue={filterItems.categories}
      >
        <MultiSelectType
          initialValue={filters?.categories}
          name="categories"
          onChange={handleInputChange}
        />
      </Form.Item>
      <Form.Item label="Date" name="date">
        <DatePicker size="small" name="date" onChange={handleInputChange} />
      </Form.Item>

      <div className="flex justify-end mt-3">
        <Button type="primary" htmlType="submit">
          {"Search"}
        </Button>
      </div>
    </Form>
  );
};

export default FilterPanel;
