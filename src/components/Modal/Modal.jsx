import React from "react";
import { useEffect } from "react";
import { Image, ImageContainer, Overlay } from "./Modal_styled";

const Modal = ({ largePhoto, tagname, onClick }) => {
  useEffect(() => {
    window.addEventListener("keydown", closeModal);

    return () => {
      window.removeEventListener("keydown", closeModal);
    };
  });

  const closeModal = (evt) => {
    if (evt.target === evt.currentTarget) {
      onClick();
    }
  };

  return (
    <Overlay onClick={onClick}>
      <ImageContainer>
        <Image src={largePhoto} alt={tagname} on />
      </ImageContainer>
    </Overlay>
  );
};

export default Modal;
