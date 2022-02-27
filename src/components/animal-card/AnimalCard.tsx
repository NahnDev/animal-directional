import { Card } from "antd";
import React, { CSSProperties } from "react";
import "./animal-card.style.scss";
import { TProp } from "../../types/TProp";
import { colors } from "../../constants/colors";

type AnimalCardProps = TProp & {
    height?: string | number;
    width?: string | number;
};

export default function AnimalCard(props: AnimalCardProps) {
    const styles = useStyles();
    return (
        <Card
            hoverable
            bordered
            className={["AnimalCard", props.className].join(" ")}
            style={{
                ...props.style,
                ...styles.root,
                height: props.height,
                width: props.width,
            }}
            cover={
                <img
                    alt="example"
                    src="https://cdn.pixabay.com/photo/2015/11/16/16/28/bird-1045954_960_720.jpg"
                />
            }
        >
            <Card.Meta
                style={styles.meta}
                title="Europe Street beat"
                description="Europe Street beat"
            />
        </Card>
    );
}

function useStyles(): { root: CSSProperties; meta: CSSProperties } {
    return {
        root: {
            borderRadius: 12,
            border: "solid 2px black",
        },
        meta: {
            borderTopLeftRadius: 12,
            borderTopRightRadius: 12,
            padding: 10,
            color: colors.text,
            background: `linear-gradient(0, ${colors.dark}55, ${colors.dark}ff)`,
        },
    };
}
