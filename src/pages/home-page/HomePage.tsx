import { Row, Col } from "antd";
import React, { CSSProperties } from "react";
import AnimalCard from "../../components/animal-card/AnimalCard";
import Filter from "../../components/fillter/Filter";

export default function HomePage() {
    const styles = useStyles();
    return (
        <div className="HomePage" style={styles.root}>
            <Filter></Filter>
            <Row gutter={[12, 12]}>
                <Col span={16} style={{ height: "40vw" }}>
                    <AnimalCard></AnimalCard>
                </Col>
                <Col span={8}>
                    <div
                        style={{
                            height: "40vw",
                            width: "100%",
                            display: "grid",
                            rowGap: 12,
                        }}
                    >
                        <AnimalCard></AnimalCard>
                        <AnimalCard></AnimalCard>
                    </div>
                </Col>
                <Col span={6} style={{ height: "30vw" }}>
                    <AnimalCard />
                </Col>
                <Col span={6} style={{ height: "30vw" }}>
                    <AnimalCard />
                </Col>
                <Col span={6} style={{ height: "30vw" }}>
                    <AnimalCard />
                </Col>
                <Col span={6} style={{ height: "30vw" }}>
                    <AnimalCard />
                </Col>
                <Col span={6} style={{ height: "30vw" }}>
                    <AnimalCard />
                </Col>
                <Col span={6} style={{ height: "30vw" }}>
                    <AnimalCard />
                </Col>
                <Col span={6} style={{ height: "30vw" }}>
                    <AnimalCard />
                </Col>
                <Col span={6} style={{ height: "30vw" }}>
                    <AnimalCard />
                </Col>
            </Row>
        </div>
    );
}

function useStyles(): { root: CSSProperties } {
    return {
        root: {
            padding: "10px 5px",
        },
    };
}
