import React, { Component } from "react";
import { Card, Table } from "antd";
import { connect } from "react-redux";
import { fetchUsers, loadingUsers } from "../../../redux/actions/User";
import Loading from "../../../components/shared-components/Loading";
import { APP_PREFIX_PATH } from "configs/AppConfig";

export class UserList extends Component {
  componentDidMount() {
    this.props.loadingUsers();
    this.props.fetchUsers();
  }

  render() {
    const { users, loading, history } = this.props;
    const tableColumns = [
      {
        title: "User",
        dataIndex: "name",
        render: (_, record) => (
          <span style={{ cursor: "pointer" }}>{record.name}</span>
        ),
      },
      {
        title: "id",
        dataIndex: "id",
      },
      {
        title: "User Name",
        dataIndex: "username",
      },
      {
        title: "Email",
        dataIndex: "email",
      },
      {
        title: "City",
        render: (_, record) => <span>{record.address.city}</span>,
      },
      {
        title: "Street",
        render: (_, record) => <span>{record.address.street}</span>,
      },
    ];

    return (
      <>
        {loading ? (
          <Loading />
        ) : (
          <Card bodyStyle={{ padding: "0px" }}>
            <Table
              columns={tableColumns}
              dataSource={users}
              rowKey="id"
              onRow={(record) => {
                return {
                  onClick: () => {
                    history.push(`${APP_PREFIX_PATH}/clients/${record.id}`);
                  },
                };
              }}
            />
          </Card>
        )}
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    users: state.user.users,
    loading: state.user.loading,
  };
};
const mapDispatchToProps = {
  fetchUsers,
  loadingUsers,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
