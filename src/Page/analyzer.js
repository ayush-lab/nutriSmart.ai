import React, { useState } from "react";
import { Card, Col, Row, Divider, Alert, Tag } from "antd";

const onClose = (e) => {
  console.log(e, "I was closed.");
};

const Analyzer = () => {
  return (
    <div
      className="container bgGrey"
      style={{ width: "100wv", height: "auto", color: "black" }}
    >
      <h3> Analysing the food composition content for Parle-G </h3>
      <Tag color="green">Ayush Verma</Tag>
      <Tag color="blue">24</Tag>
      <Tag color="red">Obessity</Tag>
      <Tag color="gold">6'2 ft</Tag>
      <Tag color="orange">68 kg</Tag>
      <Tag color="geekblue">2000 Kcal</Tag>

      <Divider plain></Divider>

      <Row gutter={24}>
        <Col span={8}>
          <Card title="Nutri Score" bordered={true}>
            Card content
          </Card>
          {/* https://in.openfoodfacts.org/nova */}
        </Col>
        <Col span={8}>
          <Card title="Nova Score" bordered={true}>
            Card content
          </Card>
        </Col>
        <Col span={8}>
          <Card
            title="Recommended for you?"
            bordered={false}
            style={{ background: "#FFCCCB" }}
          >
            Not recommended
          </Card>
        </Col>
      </Row>

      <Divider plain></Divider>
      <div>
        <Row gutter={24}>
          <Col span={24}>
            <Card title="Detailed Analysis">
              The high sugar content and processed nature of the food, combined
              with its low fiber, make it unsuitable for a diabetic patient.
              Moreover, the high proportion of calories from sugars and
              saturated fats does not support a balanced diet for maintaining a
              healthy weight and overall health.
            </Card>
          </Col>
        </Row>
      </div>
      <Divider plain></Divider>

      <div>
        <Row gutter={24}>
          <Col span={24}>
            <Card title="Additives added">
              "Thickener (472e)": "Processed ingredients", "Raising agents
              (503(ii), 500(ii))": "Processed ingredients", "Artificial
              Flavouring (Vanilla)": "Processed ingredients",
            </Card>
          </Col>
        </Row>
      </div>
      <Divider plain></Divider>

      <div>
        <Row gutter={24}>
          <Col span={24}>
            <Card title="Summary">
              The high sugar content and processed nature of the food, combined
              with its low fiber, make it unsuitable for a diabetic patient.
              Moreover, the high proportion of calories from sugars and
              saturated fats does not support a balanced diet for maintaining a
              healthy weight and overall health.
            </Card>
          </Col>
        </Row>
      </div>
      <Divider plain></Divider>
      <Alert
        message="The high sugar content and processed nature of the food, combined with its low fiber, make it unsuitable for a diabetic patient. Moreover, the high proportion of calories from sugars and saturated fats does not support a balanced diet for maintaining a healthy weight and overall health."
        type="warning"
        closable
        // onClose={onClose}
      />
    </div>
  );
};

export default Analyzer;
