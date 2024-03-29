import React, { useEffect, useMemo } from "react";
import { Select, Form, Button } from "antd";
import MultiSelectType from "../../common/MultiSelectType/MultiSelectType";
import { sourceOptions } from "../../../constants/SelectOptions";

function PersonalizedNewsFeedForm({ onFeedUserFormChange }) {
  const [form] = Form.useForm();

  const storedNewsFeed = useMemo(() => {
    return JSON.parse(localStorage.getItem("newsfeedform"));
  }, []);

  const handleInputChange = (name, value) => {
    form.setFieldsValue({ [name]: value });
  };
  return (
    <Form form={form} onFinish={onFeedUserFormChange}>
      <Form.Item
        rules={[
          {
            required: true,
            message: "Source is required",
          },
        ]}
        label="Sources"
        name="sources"
        initialValue={
          storedNewsFeed?.feedSources
            ? storedNewsFeed?.feedSources
            : sourceOptions[0].value
        }
      >
        <Select
          style={{ width: "100%" }}
          placeholder="Please select Sources"
          options={sourceOptions}
        />
      </Form.Item>
      <Form.Item
        initialValue={storedNewsFeed?.feedCategories}
        label="Categories"
        name="categories"
      >
        <MultiSelectType
          initialValue={storedNewsFeed?.feedCategories}
          name="categories"
          onChange={handleInputChange}
        />
      </Form.Item>
      <Form.Item label="Authors" name="authors">
        <MultiSelectType
          initialValue={storedNewsFeed?.feedAuthors}
          name="authors"
          onChange={handleInputChange}
        />
      </Form.Item>
      <div className="flex justify-end mt-3">
        <Button type="primary" htmlType="submit">
          {"Save"}
        </Button>
      </div>
    </Form>
  );
}

export default PersonalizedNewsFeedForm;
