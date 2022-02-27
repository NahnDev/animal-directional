import { Button, Input, PageHeader } from "antd";
import clsx from "clsx";
import "./nav-header.scss";
import { SearchOutlined } from "@ant-design/icons";
import React, { CSSProperties } from "react";
import { colors } from "../../constants/colors";
import { TProp } from "../../types/TProp";

type NavHeaderStyle = TProp & {};
export default function NavHeader(props: NavHeaderStyle) {
    const styles = useStyles();
    return (
        <PageHeader
            className={clsx(["NavHeader", props.className])}
            style={{ ...styles.root, ...props.style }}
            extra={[
                <SearchInput key="search-input"></SearchInput>,
                <SignInButton key="signIn-button"></SignInButton>,
            ]}
            title={<h1 style={{ color: "white", margin: 0 }}>LOGO</h1>}
        >
            {/* <div>Logo</div>
            <div>navigator</div> */}
        </PageHeader>
    );
}

function useStyles(): { root: CSSProperties } {
    return {
        root: {
            backgroundColor: colors.primary,
            padding: "1em",
            top: 0,
            position: "sticky",
            zIndex: 9999,
            // display: "flex",
            // justifyContent: "space-between",
        },
    };
}

function SignInButton() {
    return (
        <Button
            type="link"
            style={{ color: colors.text, fontWeight: "bold" }}
            href="http://google.com"
            target="_blank"
        >
            Sign In
        </Button>
    );
}

function SearchInput(props: any) {
    return (
        <Input
            {...props}
            suffix={<SearchOutlined />}
            placeholder="Search"
            style={{
                border: `solid ${colors.text} 0.1em`,
                borderRadius: "50vh",
                backgroundColor: "transparent",
                color: colors.text,
            }}
        ></Input>
    );
}
