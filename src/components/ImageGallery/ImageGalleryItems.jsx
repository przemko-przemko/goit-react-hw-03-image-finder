import React from "react";
import { ListItemImg, ListItem } from "./ImageGalleryItems_styled";

function ImageGalleryItems({ gallery, onClick }) {
  return gallery.map(({ id, webformatURL, tags }) => (
    <ListItem key={id}>
      <ListItemImg src={webformatURL} alt={tags} onClick={onClick} />
    </ListItem>
  ));
}

export default ImageGalleryItems;
