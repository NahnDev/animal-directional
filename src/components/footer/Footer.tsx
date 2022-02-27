import {
    FacebookFilled,
    FacebookOutlined,
    GithubOutlined,
    GoogleOutlined,
    TwitterCircleFilled,
    TwitterSquareFilled,
} from "@ant-design/icons";
import { Col, List, Row } from "antd";
import clsx from "clsx";
import React, { CSSProperties } from "react";
import { colors } from "../../constants/colors";
import { contacts, links, others, services } from "../../constants/footer";
import { TProp } from "../../types/TProp";
import "./footer.scss";

type FooterProps = TProp & {};
export default function Footer(props: FooterProps) {
    const styles = useStyles();
    return (
        <div
            className={clsx(["Footer"])}
            style={{ ...styles.root, ...props.style }}
        >
            <Row gutter={[20, 20]}>
                <Col span={4}>LOGO</Col>
                <Col span={5}>
                    <List
                        style={styles.list}
                        dataSource={links}
                        header="Links"
                        renderItem={(item, index) => (
                            <List.Item style={styles.item} key={index}>
                                {item.text}
                            </List.Item>
                        )}
                    ></List>
                </Col>

                <Col span={5}>
                    <List
                        style={styles.list}
                        dataSource={services}
                        header="Services"
                        renderItem={(item) => (
                            <List.Item style={styles.item}>
                                {item.text}
                            </List.Item>
                        )}
                    ></List>
                </Col>
                <Col span={5}>
                    <List
                        style={styles.list}
                        dataSource={contacts}
                        header="Contacts"
                        renderItem={(item) => (
                            <List.Item style={styles.item}>
                                {item.text}
                            </List.Item>
                        )}
                    ></List>
                </Col>
                <Col span={5}>
                    <List
                        style={styles.list}
                        dataSource={others}
                        header="Others"
                        renderItem={(item) => (
                            <List.Item style={styles.item}>
                                {item.text}
                            </List.Item>
                        )}
                    ></List>
                </Col>
            </Row>
            <Row>
                <Col flex={1}></Col>
                <Col>
                    <FacebookOutlined style={styles.icon}></FacebookOutlined>
                    <GoogleOutlined style={styles.icon}></GoogleOutlined>
                    <GithubOutlined style={styles.icon}></GithubOutlined>
                </Col>
            </Row>
        </div>
    );
}

function useStyles(): {
    root: CSSProperties;
    item: CSSProperties;
    list: CSSProperties;
    icon: CSSProperties;
} {
    return {
        root: {
            backgroundColor: colors.primary,
            color: colors.text,
            margin: 0,
            padding: "1em",
        },
        list: {
            color: colors.text,
        },
        item: {
            border: "none",
            color: colors.text,
            paddingLeft: "1em",
            paddingTop: "0.1em",
            paddingBottom: "0.1em",
        },
        icon: {
            fontSize: "1.2em",
            paddingRight: "0.6em",
        },
    };
}
