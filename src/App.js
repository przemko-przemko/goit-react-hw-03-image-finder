import { apiFetch } from "./utils/apiFetch";
import Searchbar from "./components/Searchbar/Searchbar";
import { useState, useEffect } from "react";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Button from "./components/Button/Button";
import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";
import Modal from "./components/Modal/Modal";
import ImageGalleryItems from "./components/ImageGallery/ImageGalleryItems";
import "./index.css";

function App() {
  const [query, setQuery] = useState([]);
  const [fetchedImages, setFetchedImages] = useState([]);
  const [totalFetchedImages, setTotalFetchedImages] = useState(0);
  const [perPage, setPerPage] = useState(12);
  const [isLoading, setIsLoading] = useState(false);
  const [modalPhotoUrl, setModalPhotoUrl] = useState("");
  const [tagname, setTagname] = useState("");
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    apiFetch(
      `https://pixabay.com/api/?q=${query}&page=1&key=23900932-f3bc4ef69f70c3dfef8404d8c&image_type=photo&orientation=horizontal&per_page=${perPage}`
    )
      .then((data) => {
        setFetchedImages(data.hits);
        setTotalFetchedImages(data.total);
      })
      .catch((err) => console.log(err.name))
      .finally(() => {
        setIsLoading(false);
      });
  }, [query, perPage, totalFetchedImages]);

  const getQuery = (dataFromSearchbar) => {
    setQuery(dataFromSearchbar);
  };
  const toogleModal = () => {
    setShowModal((showModal) => !showModal);
  };

  const openModal = (evt) => {
    setModalPhotoUrl(evt.target.src);
    setTagname(evt.target.alt);
    toogleModal();
  };

  return (
    <>
      <Searchbar getQuery={getQuery} />
      <ImageGallery>
        <ImageGalleryItems gallery={fetchedImages} onClick={openModal} />
      </ImageGallery>
      {showModal && (
        <Modal
          largePhoto={modalPhotoUrl}
          tagname={tagname}
          onClick={toogleModal}
        />
      )}
      {isLoading && (
        <Stack
          sx={{ color: "grey.500" }}
          direction="row-reverse"
          justifyContent="center"
          alignItems="flex-start"
          spacing={4}
        >
          <CircularProgress color="secondary" />
          <CircularProgress color="success" />
          <CircularProgress color="inherit" />
        </Stack>
      )}
      <p style={{ display: "flex", justifyContent: "center" }}>
        Find {fetchedImages.length} z {totalFetchedImages} photos
      </p>
      {!isLoading && totalFetchedImages > fetchedImages.length && (
        <Button
          onClick={() => {
            setPerPage((perPage) => perPage + 12);
            console.log(perPage, query);
          }}
        />
      )}
    </>
  );
}

export default App;
