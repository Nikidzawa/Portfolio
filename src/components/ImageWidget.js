import styled from "styled-components";
import {useEffect} from "react";
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
    background-color: rgba(0, 0, 0, 0.7);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px;
`

const Image = styled.img`
    width: auto;
    height: auto;
    max-height: 90vh;
    
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

export default observer(function ImageWidget() {

    function closeWidget (event) {
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
        if (imageWidgetController.isVisible) {
            window.addEventListener('wheel', preventScrolling, { passive: false });
            window.addEventListener('touchmove', preventScrolling, { passive: false });
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
                imageWidgetController.isVisible && (
                    <Background onClick={handleBackgroundClick}>
                        <CloseButton src={CloseImage} onClick={() => imageWidgetController.closeWidget()}/>
                        <Image src={imageWidgetController.image}/>
                    </Background>
                )
            }
        </>
    )
})