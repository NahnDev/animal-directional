import { Button, Col, Row, Table } from "antd";
import React, { CSSProperties } from "react";
import { colors } from "../../constants/colors";
import { TUser } from "../../types/TUser";

export default function AdminUserScreen() {
    const styles = useStyles();
    return (
        <div className="AdminUserScreen">
            <Row>
                <Col flex={1}></Col>
                <Col>
                    <Button type="text" style={styles.addBtn}>
                        + Add user
                    </Button>
                </Col>
            </Row>
            <Row>
                <Col span={24}>
                    <Table
                        pagination={false}
                        style={styles.table}
                        dataSource={data}
                        columns={columns}
                    ></Table>
                </Col>
            </Row>
        </div>
    );
}

function useStyles(): {
    root: CSSProperties;
    addBtn: CSSProperties;
    table: CSSProperties;
} {
    return {
        root: {},
        addBtn: {
            borderBottom: `solid 0.1em ${colors.text}`,
            color: colors.text,
        },
        table: {
            backgroundColor: colors.primary,
        },
    };
}

const columns = [
    {
        title: "ID",
        dataIndex: "_id",
        width: "20%",
    },
    {
        title: "Username",
        dataIndex: "username",
        width: "40%",
    },
    {
        title: "Name",
        dataIndex: "name",
        width: "40$",
    },
];

const data: TUser[] = [
    {
        _id: "1",
        username: "admin",
        name: "admin sdfasf ",
    },
    {
        _id: "13",
        username: "admin",
        name: "admin sdfasf ",
    },
    {
        _id: "12",
        username: "admin",
        name: "admin sdfasf ",
    },
];
