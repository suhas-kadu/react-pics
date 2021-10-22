import React from "react";

class ImageCard extends React.Component {
  constructor() {
    super();
    this.imageRef = React.createRef();
    this.state = { span: 0 };
  }

  setSpans = () => {
    const height = this.imageRef.current.clientHeight;
    const span = Math.ceil(height / 12 + 1);
    this.setState({ span: span });
  };

  componentDidMount() {
    this.imageRef.current.addEventListener("load", this.setSpans);
  }

  render() {
    return (
      <div className="image-card ui" style={{ gridRowEnd: `span ${this.state.span}` }}>
        <img
          ref={this.imageRef}
          src={this.props.image.urls.regular}
          alt={this.props.image.description}
        />
        {/* <i class="fa fa-thumbs-up">{this.props.image.likes}</i> */}
      </div>
    );
  }
}

export default ImageCard;
