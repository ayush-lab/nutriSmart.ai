import React, { useState } from "react";
import { Select, Space } from "antd";
import data from "../healthRecord";
import { Table } from "antd";

const columns = [
  {
    title: "Name",
    dataIndex: "label",
    key: "name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Gender",
    dataIndex: "gender",
    key: "gender",
  },
  {
    title: "Weight",
    dataIndex: "weight",
    key: "weight",
  },
  {
    title: "Height",
    dataIndex: "height_cm",
    key: "Height",
  },
  {
    title: "Health Record",
    dataIndex: "health_issue",
    key: "health_issue",
  },
  {
    title: "Calories Requirements",
    dataIndex: "calories_requirement",
    key: "Calories_requirements",
  },
];

const HealthRecordData = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"],
  },
];

const Records = () => {
  const handleChange = (value, obj) => {
    console.log(`selected ${value} name: ${obj.label}`);
    // console.log("obj ===", oj)
    const newData = [];
    newData.push(obj);
    setselectedData(newData);
  };

  const [selectedData, setselectedData] = useState([]);

  console.log(selectedData);
  return (
    <div className="container">
      <h3>Record page</h3>
      <Space wrap>
        <Select
          defaultValue="John Smith"
          style={{
            width: 120,
          }}
          onChange={handleChange}
          options={data}
        />
      </Space>
      {selectedData && Object.keys(selectedData).length !== 0 && (
        <div style={{ marginTop: "80px" }}>
          <Table columns={columns} dataSource={selectedData} />
        </div>
      )}
    </div>
  );
};

export default Records;
