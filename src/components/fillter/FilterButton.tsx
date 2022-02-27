import { FilterOutlined } from "@ant-design/icons";
import { Button } from "antd";
import clsx from "clsx";
import React, { CSSProperties } from "react";
import { colors } from "../../constants/colors";
import { TProp } from "../../types/TProp";

type FilterButtonProps = TProp & {
    onClick?: React.MouseEventHandler<HTMLElement>;
};
export default function FilterButton(props: FilterButtonProps) {
    const styles = useStyles();
    return (
        <Button
            onClick={props.onClick}
            type="text"
            className={clsx(["FilterButton"])}
            style={styles.root}
        >
            <FilterOutlined style={styles.icon}></FilterOutlined>
        </Button>
    );
}

function useStyles(): { root: CSSProperties; icon: CSSProperties } {
    return {
        root: {
            backgroundColor: colors.primary,
            color: colors.text,
            zIndex: 999,
            padding: "0.5em 1em",
            borderTopRightRadius: "50vh",
            borderBottomRightRadius: "50vh",
        },
        icon: {
            color: colors.text,
        },
    };
}
