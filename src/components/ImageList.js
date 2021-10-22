import React from "react";
import './image_list.css';
import ImageCard from "./ImageCard";

const ImageList = (props) => {

    // console.log(props.images);

    const images = props.images.map((image) => {
        return <ImageCard key={image.id} image = {image} />
    })

    return (
        <div>
            <div className="image-list">
                {images}
            </div>

        </div>
    );
}

export default ImageList;