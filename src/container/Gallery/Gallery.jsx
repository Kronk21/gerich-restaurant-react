import React, { useRef } from "react";

import {
    BsInstagram,
    BsArrowLeftShort,
    BsArrowRightShort,
} from "react-icons/bs";

import { SubHeading } from "../../components";
import { images } from "../../constants";
import "./Gallery.css";

const Gallery = () => {
    const scrollRef = useRef(null);

    const scroll = function (direction) {
        const { current } = scrollRef;

        if (direction === "left") {
            current.scrollLeft -= 333;
        } else {
            current.scrollLeft += 333;
        }
    };

    const galleryImages = [
        images.gallery01,
        images.gallery02,
        images.gallery03,
        images.gallery04,
    ];

    return (
        <div className="app__gallery flex__center">
            <div className="app__gallery-content">
                <SubHeading title="Instagram" />
                <h1 className="headtext__cormorant">Photo Gallery</h1>
                <p
                    className="p__opensans"
                    style={{ color: "#AAA", marginTop: "2rem" }}
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Volutpat mattis ipsum turpis elit elit scelerisque egestas
                    mu.
                </p>
                <button type="button" className="custom__button">
                    View More
                </button>
            </div>

            <div className="app__gallery-images">
                <div className="app__gallery-images_container" ref={scrollRef}>
                    {galleryImages.map((image, index) => (
                        <div
                            key={`galler-img/${index}`}
                            className="app__gallery-images_card flex__center"
                        >
                            <img src={image} alt="gallery image" />
                            <BsInstagram className="gallery__image-icon" />
                        </div>
                    ))}
                </div>
                <div className="app__gallery-images_arrows">
                    <BsArrowLeftShort
                        className="gallery__arrow-icon"
                        onClick={() => scroll("left")}
                    />
                    <BsArrowRightShort
                        className="gallery__arrow-icon"
                        onClick={() => scroll("right")}
                    />
                </div>
            </div>
        </div>
    );
};

export default Gallery;
