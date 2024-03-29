import React, { useEffect, useState } from "react";
import { Button, Modal } from "antd";
import PersonalizedNewsFeedForm from "./PersonalizedNewsFeedForm";

function PersonalizedNewsFeed({ setShowModal, showModal, saveNewsFeedForm }) {
  const handleShowModalNewsFeed = () => {
    setShowModal(true);
  };
  const handleFeedFormChange = (data) => {
    saveNewsFeedForm(data);
  };
  return (
    <div>
      <Button className="my-5" type="primary" onClick={handleShowModalNewsFeed}>
        {"PersonalizedNewsFeed"}
      </Button>
      <Modal
        open={showModal}
        title={"PersonalizedNewsFeed"}
        onCancel={() => setShowModal(false)}
        footer={null}
      >
        <PersonalizedNewsFeedForm onFeedUserFormChange={handleFeedFormChange} />
      </Modal>
    </div>
  );
}

export default PersonalizedNewsFeed;
