import clsx from "clsx";
import FilterButton from "./FilterButton";
import React, { CSSProperties, useState } from "react";
import { TProp } from "../../types/TProp";
import FilterForm from "./FilterForm";
import "./filter.scss";

type FilterProps = TProp & {
    onFilter?: (value: any) => any;
};
export default function Filter(props: FilterProps) {
    const [open, setOpen] = useState(false);
    const styles = useStyles();

    const handleOpenFrom: React.MouseEventHandler<HTMLElement> = function (
        e: React.MouseEvent<HTMLElement>
    ) {
        setOpen(true);
    };
    return (
        <div className={clsx(["Filter"])} style={styles.root}>
            {open ? (
                <FilterForm
                    onValueChange={(changed, values) => {
                        if (props.onFilter) props.onFilter(values);
                    }}
                    onClose={() => setOpen(false)}
                ></FilterForm>
            ) : (
                <FilterButton onClick={handleOpenFrom}></FilterButton>
            )}
        </div>
    );
}

function useStyles(): { root: CSSProperties } {
    return {
        root: {
            position: "fixed",
            top: "15%",
            left: 0,
            zIndex: 999,
        },
    };
}
