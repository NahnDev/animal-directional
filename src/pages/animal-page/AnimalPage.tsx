import { Carousel, Col, Image, Row } from "antd";
import clsx from "clsx";
import React, { CSSProperties } from "react";
import AnimalCard from "../../components/animal-card/AnimalCard";
import Segment from "../../components/segment/Segment";
import { colors } from "../../constants/colors";
import { borderRadiusStyle } from "../../styles";
import "./animal-page.style.scss";

const animal = {
    name: "Ech biet bay",
    images: [
        "https://cdn.pixabay.com/photo/2022/02/09/17/22/cat-7003849_960_720.jpg",
        "https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_960_720.jpg",
        "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg",
    ],
};
export default function AnimalPage() {
    const styles = useStyles();
    return (
        <div className={clsx(["AnimalPage"])} style={styles.root}>
            <Row gutter={[20, 20]}>
                <Col span={16}>
                    <Carousel autoplay style={styles.imageCarousel}>
                        {animal.images.map((image, index) => (
                            <Image
                                key={index}
                                src={image}
                                alt={animal.name}
                                wrapperStyle={styles.image}
                            />
                        ))}
                    </Carousel>
                </Col>
                <Col span={8}>
                    <Segment>a</Segment>
                </Col>
                <Col span={24}>
                    <Segment>b</Segment>
                </Col>
                <Col span={12}>
                    <Segment>c</Segment>
                </Col>
                <Col span={12}>
                    <Segment>d</Segment>
                </Col>
            </Row>
            <Row className="reference">
                <Row>
                    <Col className="arrow" style={styles.reference.header}>
                        Động vật cùng loại
                    </Col>
                </Row>
                <Row gutter={[20, 20]}>
                    <Col span={6} style={{ height: "30vw" }}>
                        <AnimalCard></AnimalCard>
                    </Col>
                    <Col span={6} style={{ height: "30vw" }}>
                        <AnimalCard></AnimalCard>
                    </Col>
                    <Col span={6} style={{ height: "30vw" }}>
                        <AnimalCard></AnimalCard>
                    </Col>
                    <Col span={6} style={{ height: "30vw" }}>
                        <AnimalCard></AnimalCard>
                    </Col>
                </Row>
            </Row>
        </div>
    );
}

function useStyles(): {
    root: CSSProperties;
    imageCarousel: CSSProperties;
    image: CSSProperties;
    reference: {
        header: CSSProperties;
    };
} {
    return {
        root: {
            padding: 10,
        },
        imageCarousel: {
            height: 300,
            ...borderRadiusStyle,
            overflow: "hidden",
        },
        image: {},
        reference: {
            header: {
                margin: "1em 0",
                borderRadius: "0 50vh 50vh 0",
                padding: ".5em 2em .5em .5em",
                backgroundColor: colors.primary,
                color: colors.text,
            },
        },
    };
}
