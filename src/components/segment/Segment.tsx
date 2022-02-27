import React, { CSSProperties } from "react";
import { colors } from "../../constants/colors";
import { borderStyle, borderRadiusStyle } from "../../styles";
import { TProp } from "../../types/TProp";

type SegmentProp = TProp & { children?: React.ReactNode };
export default function Segment(props: SegmentProp) {
    const styles = useStyles();
    return <div style={styles.root}>{props.children}</div>;
}

function useStyles(): { root: CSSProperties } {
    return {
        root: {
            height: "100%",
            width: "100%",
            color: colors.text,
            backgroundColor: colors.primary,
            ...borderStyle,
            ...borderRadiusStyle,
        },
    };
}
