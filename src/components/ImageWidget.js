import styled from "styled-components";
import {useEffect, useState} from "react";
import imageWidgetController from "../store/ImageWidgetController"
import {observer} from "mobx-react-lite";
import CloseImage from "../img/close.png"

const Background = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 999999;
    background-color: rgba(0, 0, 0, 0.8);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px;
    opacity: ${props => (props.visible ? 1 : 0)};
    pointer-events: ${props => props.visible ? "auto" : "none"};;
    transition: opacity 0.5s;
    cursor: zoom-out;
`

const ImagesContainer = styled.div`
    max-height: 85vh;
`

const MainImage = styled.img`
    width: auto;
    height: auto;
    max-height: 70vh;
    cursor: default;
    @media (max-width: 650px) {
        width: 100%;
        height: auto;
    }
`

const CloseButton = styled.img`
    position: absolute;
    right: 20px;
    top: 20px;
    width: 30px;
    height: 30px;
    cursor: pointer;
    @media (max-width: 650px) {
        width: 25px;
        height: 25px;
    }
`

const ImageListElement = styled.img`
    width: 50px;
    height: 65px;
    cursor: pointer;
    border-bottom: ${props => props.isSelected ? '2px solid white' : 'none'};
    padding-bottom: 5px;
`;

const ImageList = styled.div`
    display: flex;
    grid-gap: 10px;
    align-items: center;
    overflow-x: auto;
    white-space: nowrap;
`;

export default observer(function ImageWidget() {
    const [currentImage, setCurrentImage] = useState(null)

    function closeWidget(event) {
        event.preventDefault()
        if (event.key === "Escape") {
            imageWidgetController.closeWidget();
        }
    }

    function preventScrolling(e) {
        e.preventDefault();
    }

    function handleBackgroundClick(event) {
        if (event.target === event.currentTarget) {
            imageWidgetController.closeWidget();
        }
    }

    useEffect(() => {
        setCurrentImage(imageWidgetController.images[0]);

        if (imageWidgetController.isVisible) {
            window.addEventListener('wheel', preventScrolling, {passive: false});
            window.addEventListener('touchmove', preventScrolling, {passive: false});
            window.addEventListener('keydown', closeWidget);
        }

        return () => {
            window.removeEventListener('wheel', preventScrolling);
            window.removeEventListener('touchmove', preventScrolling);
            window.removeEventListener('keydown', closeWidget);
        };
    }, [imageWidgetController.isVisible]);

    return (
        <>
            {
                <Background visible={imageWidgetController.isVisible} onClick={handleBackgroundClick}>
                    <CloseButton title={"ESC"} src={CloseImage} onClick={() => imageWidgetController.closeWidget()}/>
                    <ImagesContainer>
                        <MainImage src={currentImage}/>
                        {
                            imageWidgetController.images.length > 1 && (
                                <ImageList>
                                    {
                                        imageWidgetController.images.map((image, index) => (
                                            <ImageListElement key={index}
                                                              src={image}
                                                              onClick={() => setCurrentImage(image)}
                                                              isSelected={currentImage === image}
                                            />
                                        ))
                                    }
                                </ImageList>
                            )
                        }
                    </ImagesContainer>
                </Background>
            }
        </>
    )
})