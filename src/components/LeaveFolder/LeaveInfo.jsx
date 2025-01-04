import React, { useState } from "react";
import { Modal, Button, Table } from "antd";
import "./LeaveInfo.css";


const LeaveInfo = () => {
  // const location = useLocation();
  // const { reasonValue} = location.state || {};
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalData, setModalData] = useState(null);
  const [LeaveData, SetleaveData] = useState();
  const dataSource = [
    {
      key: "1",
      name: "John Doe",
      datefrm: "23-12-2005",
      dateTo: "23-12-2010",
      reason: "good",
      status: "Peding..",
    },
  ];

  // Table column configuration
  const columns = [
    {
      title: "Name", // Column header
      dataIndex: "name", // Key from dataSource
      key: "name", // Unique key for the column
    },
    {
      title: "From",
      dataIndex: "datefrm",
      key: "datefrm",
    },
    {
      title: "To",
      dataIndex: "dateTo",
      key: "dateTo",
    },
    {
      title: "Reason",
      key: "reason",
      render: (_, records) => (
        <Button
          type="primary"
          onClick={() => {
            setModalData(records);
            setIsModalVisible(true);
          }}
        >
          <span className="font-semibold">View Details</span>
        </Button>
      ),
    },
    {
      title: "Accept",
      key: "acc",
      render: (_, records) => (
        <Button
          type=""
          onClick={() => {
            SetleaveData(true);
            style = {
              backgroundColor: "green",
              color: "white",
              borderColor: "green",
            };
          }}
        >
          <span className="font-semibold">Accept</span>
        </Button>
      ),
    },
    {
      title: "Reject",
      key: "",
      render: (_, records) => (
        <Button
          type="primary"
          danger
          onClick={() => {
            SetleaveData(false);
          }}
        >
          <span className="font-semibold">Reject</span>
        </Button>
      ),
    },
    {
      title: "Status",
      dataIndex: "status",
    },
  ];

  return (
    <div className="flex h-screen max-w-screen justify-center items-center bg-gray-200 lg:pl-44">
      <div className="max-w-4xl bg-white  rounded shadow-lg">
        <form className="grid grid-cols-1 p-2">
          <div className="flex flex-row space-x-5 max-w-full ">
            <Table
              dataSource={dataSource}
              columns={columns}
              className="custom-table flex"
              pagination={{ pageSize: 5 ,position:['bottomRight']}}
            
            />
            <Modal
              title="Leave Details"
              open={isModalVisible}
              footer={null}
              closable={true}
              onCancel={() => setIsModalVisible(false)}
              
            >
              {modalData ? (
                <div className="p-4 w-full justify-center text-center ">
                  <h2 className="text-xl tracking-wider capitalize">
                    {modalData.name}
                  </h2>
                  <h2 className="tracking-widest capitalize">
                    {modalData.reason || "Reason not provided"}
                  </h2>
                </div>
              ) : (
                <div>
                  <strong>NO data available</strong>
                </div>
              )}
            </Modal>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LeaveInfo;
