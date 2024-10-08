import React, {useEffect, useRef, useState} from "react";
import styled from "styled-components";
import ThemeSwitcher from "./components/ThemeSwitcher";
import Typing from "./components/Typing";
import themeController from "../../../store/ThemeController";
import languageController from "../../../store/LanguageController";
import {observer} from "mobx-react-lite";
import LanguageSwitcher from "./components/LanguageSwitcher";

const TextContent = styled.div`
    min-height: 95vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
`;

const TypingContainer = styled.div`
    display: flex;
    justify-content: center;
`;

const StarterDiv = styled.div`
    margin-bottom: 50px;
`;

const Text = styled.span`
    font-family: sans-serif;
    font-size: 40px;
    font-weight: bold;
    padding-bottom: 10px;
    @media screen and (max-width: 600px) {
        font-size: 35px;
    }

    @media screen and (max-width: 500px) {
        font-size: 25px;
    }
`;

const LanguageCodeContainer = styled.div`
    position: absolute;
    top: 19px;
    right: 20px;
    cursor: pointer;
    z-index: 100;
`

const ThemeSwitcherContainer = styled.div`
    position: absolute;
    top: 20px;
    left: 20px;
    cursor: pointer;
    z-index: 100;
`

export default observer(function StarterSection({starterSectionRef}) {
    const canvasRef = useRef(null);
    const containerRef = useRef(null);
    const [languagePageData, setLanguagePageData] = useState({});

    useEffect(() => {
        setLanguagePageData(languageController.getTranslation("starter"));
    }, [languageController.currentLanguage])

    useEffect(() => {
        const canvasBody = canvasRef.current;
        const container = containerRef.current;
        const drawArea = canvasBody.getContext("2d");
        let w, h, delay = 200, tid, particles, rgb;

        const getOpts = () => {
            const width = window.innerWidth;

            if (width < 500) {
                return {
                    particleColor: themeController.themeIsDark() ? "rgb(174,174,174)" : "rgb(53,53,53)",
                    lineColor: themeController.themeIsDark() ? "rgb(174,174,174)" : "rgb(53,53,53)",
                    particleAmount: 20,
                    defaultSpeed: 0.45,
                    variantSpeed: 0.45,
                    defaultRadius: 2.3,
                    variantRadius: 2.3,
                    linkRadius: 180,
                };
            } else {
                return {
                    particleColor: themeController.themeIsDark() ? "rgb(174,174,174)" : "rgb(53,53,53)",
                    lineColor: themeController.themeIsDark() ? "rgb(174,174,174)" : "rgb(53,53,53)",
                    particleAmount: 45,
                    defaultSpeed: 0.50,
                    variantSpeed: 0.50,
                    defaultRadius: 2.6,
                    variantRadius: 2.6,
                    linkRadius: 250,
                };
            }
        };

        let opts = getOpts();

        const resizeReset = () => {
            w = canvasBody.width = container.clientWidth;
            h = canvasBody.height = container.clientHeight;
            opts = getOpts();
        };

        const deBouncer = () => {
            clearTimeout(tid);
            tid = setTimeout(() => {
                resizeReset();
            }, delay);
        };

        window.addEventListener("resize", deBouncer);

        const checkDistance = (x1, y1, x2, y2) => {
            return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
        };

        const linkPoints = (point1, hubs) => {
            for (let i = 0; i < hubs.length; i++) {
                let distance = checkDistance(point1.x, point1.y, hubs[i].x, hubs[i].y);
                let opacity = 1 - distance / opts.linkRadius;
                if (opacity > 0) {
                    drawArea.lineWidth = 0.5;
                    drawArea.strokeStyle = `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, ${opacity})`;
                    drawArea.beginPath();
                    drawArea.moveTo(point1.x, point1.y);
                    drawArea.lineTo(hubs[i].x, hubs[i].y);
                    drawArea.closePath();
                    drawArea.stroke();
                }
            }
        };

        function Particle() {
            this.x = Math.random() * w;
            this.y = Math.random() * h;
            this.speed = opts.defaultSpeed + Math.random() * opts.variantSpeed;
            this.directionAngle = Math.floor(Math.random() * 360);
            this.color = opts.particleColor;
            this.radius = opts.defaultRadius + Math.random() * opts.variantRadius;
            this.vector = {
                x: Math.cos(this.directionAngle) * this.speed,
                y: Math.sin(this.directionAngle) * this.speed,
            };
            this.update = () => {
                this.border();
                this.x += this.vector.x;
                this.y += this.vector.y;
            };
            this.border = () => {
                if (this.x >= w || this.x <= 0) {
                    this.vector.x *= -1;
                }
                if (this.y >= h || this.y <= 0) {
                    this.vector.y *= -1;
                }
                if (this.x > w) this.x = w;
                if (this.y > h) this.y = h;
                if (this.x < 0) this.x = 0;
                if (this.y < 0) this.y = 0;
            };
            this.draw = () => {
                drawArea.beginPath();
                drawArea.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
                drawArea.closePath();
                drawArea.fillStyle = this.color;
                drawArea.fill();
            };
        }

        const setup = () => {
            particles = [];
            resizeReset();
            for (let i = 0; i < opts.particleAmount; i++) {
                particles.push(new Particle());
            }
            window.requestAnimationFrame(loop);
        };

        const loop = () => {
            window.requestAnimationFrame(loop);
            drawArea.clearRect(0, 0, w, h);
            for (let i = 0; i < particles.length; i++) {
                particles[i].update();
                particles[i].draw();
            }
            for (let i = 0; i < particles.length; i++) {
                linkPoints(particles[i], particles);
            }
        };

        rgb = opts.lineColor.match(/\d+/g);
        resizeReset();
        setup();

        return () => {
            window.removeEventListener("resize", deBouncer);
        };
    }, [themeController.currentTheme]);

    return (
        <StarterDiv ref={starterSectionRef}>
            <TextContent ref={containerRef}>
                <LanguageCodeContainer>
                    <LanguageSwitcher/>
                </LanguageCodeContainer>
                <ThemeSwitcherContainer>
                    <ThemeSwitcher/>
                </ThemeSwitcherContainer>
                <canvas ref={canvasRef} style={{position: 'absolute', top: 0, left: 0, zIndex: -1}}></canvas>
                <Text>{languagePageData.greeting}</Text>
                <Text>{languagePageData.introduction} {languagePageData.name},</Text>
                <TypingContainer>
                    <Typing themeIsDark={themeController.themeIsDark()}>
                        <Text>{languagePageData.profession}</Text>
                        <Text style={{color: "#2424ff"}}> {languagePageData.role} </Text>
                        <Text>{languagePageData.preRole}</Text>
                    </Typing>
                </TypingContainer>
            </TextContent>
        </StarterDiv>
    );
})