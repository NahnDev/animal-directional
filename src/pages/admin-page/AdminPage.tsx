import { Col, Row } from "antd";
import React, { CSSProperties } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Segment from "../../components/segment/Segment";
import { adminRoute } from "./admin.router";
import AdminNavigator from "./AdminNavigator";
import "./admin-page.styles.scss";
import { colors } from "../../constants/colors";

export default function AdminPage() {
    console.log("***************");
    const styles = useStyles();
    return (
        <div className="AdminPage" style={styles.root}>
            <Row gutter={[20, 20]}>
                <Col span={8}>
                    <Segment>
                        <AdminNavigator></AdminNavigator>
                    </Segment>
                </Col>
                <Col span={16}>
                    <Segment>
                        <Routes>
                            {adminRoute.map((routeProp, index) => {
                                console.log("work");
                                return (
                                    <Route key={index} {...routeProp}></Route>
                                );
                            })}
                        </Routes>
                    </Segment>
                </Col>
            </Row>
        </div>
    );
}

function useStyles(): { root: CSSProperties } {
    return {
        root: {
            margin: "2em",
        },
    };
}
