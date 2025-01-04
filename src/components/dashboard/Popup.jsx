import React, { useState } from "react";
import { Modal, Button } from "antd";
import Charts from "./Charts.jsx";

const App = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div className="pl-72" >
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>

      <Modal
        title="Basic Modal"
        open={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Charts />
      </Modal>
    </div>
  );
};

export default App;
