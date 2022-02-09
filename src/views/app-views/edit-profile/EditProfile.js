import React, { Component } from "react";
import { Form, Button, Input, Row, Col, message } from "antd";
import { ROW_GUTTER } from "constants/ThemeConstant";

import { connect } from "react-redux";
import { addingUser, loadUser } from "../../../redux/actions/User";
import Loading from "../../../components/shared-components/Loading";
import { APP_PREFIX_PATH } from "configs/AppConfig";

export class EditProfile extends Component {
  state = {
    name: "",
    email: "",
    username: "",
    phone: "",
    website: "",
    address: "",
    city: "",
    postcode: "",
  };
  componentDidMount() {
    this.props.loadUser();
    this.props.addingUser(this.props.match.params.id);
  }
  redirectToList = () => {
    this.props.history.push(`${APP_PREFIX_PATH}/clients/list`);
  };

  render() {
    const onFinish = (values) => {
      const key = "updatable";
      message.loading({ content: "Updating...", key });
      setTimeout(() => {
        this.setState({
          name: values.name,
          email: values.email,
          userName: values.userName,
          dateOfBirth: values.dateOfBirth,
          phoneNumber: values.phoneNumber,
          website: values.website,
          address: values.address,
          city: values.city,
          postcode: values.postcode,
        });
        message.success({ content: "Done!", key, duration: 2 });
        this.redirectToList();
      }, 1000);
    };

    const { loadingSomeUser } = this.props;
    const { name, email, username, phone, website, address } = this.props.user;

    return (
      <>
        {loadingSomeUser ? (
          <Loading />
        ) : (
          <>
            <div className="mt-4">
              <Form
                name="basicInformation"
                layout="vertical"
                initialValues={{
                  name: name,
                  email: email,
                  username: username,
                  phoneNumber: phone,
                  website: website,
                  address: address.street,
                  city: address.city,
                  postcode: address.zipcode,
                }}
                onFinish={onFinish}
              >
                <Row>
                  <Col xs={24} sm={24} md={24} lg={16}>
                    <Row gutter={ROW_GUTTER}>
                      <Col xs={24} sm={24} md={12}>
                        <Form.Item
                          label="Name"
                          name="name"
                          rules={[
                            {
                              required: true,
                              message: "Please input your name!",
                            },
                          ]}
                        >
                          <Input />
                        </Form.Item>
                      </Col>
                      <Col xs={24} sm={24} md={12}>
                        <Form.Item
                          label="Username"
                          name="username"
                          rules={[
                            {
                              required: true,
                              message: "Please input your username!",
                            },
                          ]}
                        >
                          <Input />
                        </Form.Item>
                      </Col>
                      <Col xs={24} sm={24} md={12}>
                        <Form.Item
                          label="Email"
                          name="email"
                          rules={[
                            {
                              required: true,
                              type: "email",
                              message: "Please enter a valid email!",
                            },
                          ]}
                        >
                          <Input />
                        </Form.Item>
                      </Col>

                      <Col xs={24} sm={24} md={12}>
                        <Form.Item label="Phone Number" name="phoneNumber">
                          <Input />
                        </Form.Item>
                      </Col>
                      <Col xs={24} sm={24} md={12}>
                        <Form.Item label="Website" name="website">
                          <Input />
                        </Form.Item>
                      </Col>
                      <Col xs={24} sm={24} md={24}>
                        <Form.Item label="Address" name="address">
                          <Input />
                        </Form.Item>
                      </Col>
                      <Col xs={24} sm={24} md={12}>
                        <Form.Item label="City" name="city">
                          <Input />
                        </Form.Item>
                      </Col>
                      <Col xs={24} sm={24} md={12}>
                        <Form.Item label="Post code" name="postcode">
                          <Input />
                        </Form.Item>
                      </Col>
                    </Row>
                    <Button type="primary" htmlType="submit">
                      Save Change
                    </Button>
                  </Col>
                </Row>
              </Form>
            </div>
          </>
        )}
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    user: state.user.user,
    loadingSomeUser: state.user.loadingSomeUser,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addingUser: (id) => dispatch(addingUser(id)),
    loadUser: () => dispatch(loadUser()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditProfile);
