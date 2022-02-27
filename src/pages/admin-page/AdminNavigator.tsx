import { Menu } from "antd";
import React, { CSSProperties } from "react";
import { Link, useLocation } from "react-router-dom";
import { colors } from "../../constants/colors";

export default function AdminNavigator() {
    const styles = useStyles();
    const pathname = useLocation().pathname;
    const path = (/(?<=admin\/).*$/.exec(pathname) || [""])[0].split("/")[0];
    return (
        <Menu
            className="AdminNavigator"
            style={styles.root}
            mode="inline"
            selectedKeys={[path]}
        >
            <Menu.Item key="users">
                <Link to="./users">User</Link>
            </Menu.Item>
            <Menu.Item key="animals">
                <Link to="./animals">Admin</Link>
            </Menu.Item>
        </Menu>
    );
}

function useStyles(): { root: CSSProperties } {
    return {
        root: {
            backgroundColor: "inherit",
            color: "inherit",
            padding: "1em",
        },
    };
}
