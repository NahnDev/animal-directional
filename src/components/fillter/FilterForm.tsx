import clsx from "clsx";
import React, { CSSProperties, useState } from "react";
import { Select, Form, PageHeader, Button } from "antd";
import { colors } from "../../constants/colors";
import { CloseOutlined, CloseSquareFilled } from "@ant-design/icons";
import { TProp } from "../../types/TProp";

const initialValue = {
    class: "jack",
    ordo: "jack",
    familia: "jack",
};
type FilterFormProp = TProp & {
    onValueChange?: ((changedValues: any, values: any) => void) | undefined;
    onClose?: () => any;
};
export default function FilterForm(props: FilterFormProp) {
    const styles = useStyles();
    return (
        <div className={clsx(["FilterForm"])} style={styles.root}>
            <PageHeader
                title={<span style={styles.headerTitle}>Filter</span>}
                extra={
                    <Button
                        type="text"
                        style={styles.closeButton}
                        onClick={props.onClose}
                    >
                        <CloseOutlined></CloseOutlined>
                    </Button>
                }
            ></PageHeader>
            <Form
                layout="vertical"
                style={styles.form}
                initialValues={initialValue}
                onValuesChange={props.onValueChange}
            >
                <Form.Item label="Lớp:" name="class" style={styles.item}>
                    <Select style={styles.select}>
                        <Select.Option value="jack">Jack</Select.Option>
                        <Select.Option value="lucy">Lucy</Select.Option>
                        <Select.Option value="disabled"> ??</Select.Option>
                    </Select>
                </Form.Item>
                <Form.Item label="Bộ:" name="order" style={styles.item}>
                    <Select style={styles.select}>
                        <Select.Option value="jack">Jack</Select.Option>
                        <Select.Option value="lucy">Lucy</Select.Option>
                        <Select.Option value="disabled"> ??</Select.Option>
                    </Select>
                </Form.Item>
                <Form.Item label="Họ:" name="familia" style={styles.item}>
                    <Select style={styles.select}>
                        <Select.Option value="jack">Jack</Select.Option>
                        <Select.Option value="lucy">Lucy</Select.Option>
                        <Select.Option value="disabled"> ??</Select.Option>
                    </Select>
                </Form.Item>
            </Form>
        </div>
    );
}

function useStyles(): {
    root: CSSProperties;
    item: CSSProperties;
    select: CSSProperties;
    form: CSSProperties;
    headerTitle: CSSProperties;
    closeButton: CSSProperties;
} {
    return {
        root: {
            width: "20em",
            marginLeft: "0.5em",
            borderRadius: "1em",
            overflow: "hidden",
            backgroundColor: colors.primary,
            color: colors.text,
        },
        form: { color: colors.text, padding: "1em" },
        select: {
            backgroundColor: colors.primary,
            color: colors.dark,
            borderRadius: "50vh",
            overflow: "hidden",
        },
        item: {
            padding: "0.2em 0",
            color: colors.text,
        },
        headerTitle: {
            color: colors.text,
        },
        closeButton: {
            color: colors.text,
        },
    };
}
