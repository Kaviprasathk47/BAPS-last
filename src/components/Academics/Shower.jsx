import React, { useState } from "react";
import { Modal, Button } from "antd";



const App = ({data}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };


  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div className="m-5" >
      <Button type="primary" onClick={showModal} className=" text-white">
        Show More
      </Button>

      <Modal
        title="Basic Modal"
        open={isModalVisible}
        
        onCancel={handleCancel}
        footer={null}
        closable={true}
      >
        {data}
      </Modal>
    </div>
  );
};

export default App;
