import React, {useEffect, useRef} from "react";
import styled from "styled-components";
import ThemeSwitcher from "./ThemeSwitcher";
import Typing from "./Typing";

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

const LanguageCode = styled.div`
    font-size: 36px;
    font-weight: bold;
    text-align: center;
    
    @media screen and (max-width: 500px) {
        font-size: 25px;
    }
`

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
    top: 20px;
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

export default function StarterSection({   language,
                                           starterSectionRef,
                                           setLanguage,
                                           theme,
                                           setTheme }) {

    const canvasRef = useRef(null);
    const containerRef = useRef(null);

    useEffect(() => {
        const canvasBody = canvasRef.current;
        const container = containerRef.current;
        const drawArea = canvasBody.getContext("2d");
        let w, h, delay = 200, tid, particles, rgb;

        const getOpts = () => {
            const width = window.innerWidth;

            if (width < 500) {
                return {
                    particleColor: "rgb(174,174,174)",
                    lineColor: "rgb(174,174,174)",
                    particleAmount: 20,
                    defaultSpeed: 0.45,
                    variantSpeed: 0.45,
                    defaultRadius: 2.6,
                    variantRadius: 2.6,
                    linkRadius: 180,
                };
            } else {
                return {
                    particleColor: "rgb(174,174,174)",
                    lineColor: "rgb(174,174,174)",
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
    }, []);

    return (
        <StarterDiv ref={starterSectionRef}>
            <TextContent ref={containerRef}>
                <LanguageCodeContainer onClick={() => setLanguage(language === "en" ? "ru" : "en")}>
                    <LanguageCode> { language === "en" ? "EN" : "RU" }</LanguageCode>
                </LanguageCodeContainer>
                <ThemeSwitcherContainer>
                    <ThemeSwitcher setTheme={setTheme} theme={theme}/>
                </ThemeSwitcherContainer>
                <canvas ref={canvasRef} style={{ position: 'absolute', top: 0, left: 0, zIndex: -1 }}></canvas>
                {language === "en" ? (
                    <>
                        <Text>Hello👋</Text>
                        <Text>my name is <strong>Nikita</strong>,</Text>
                        <TypingContainer>
                            <Typing theme={theme}>
                                <Text>I'm</Text>
                                <Text style={{ color: "#2929ff" }}> FullStack </Text>
                                <Text>developer.</Text>
                            </Typing>
                        </TypingContainer>
                    </>
                ) : (
                    <>
                        <Text>Привет👋</Text>
                        <Text>меня зовут <strong>Никита</strong>,</Text>
                        <TypingContainer>
                            <Typing theme={theme}>
                                <Text>Я</Text>
                                <Text style={{ color: "#2929ff" }}> FullStack </Text>
                                <Text>разработчик.</Text>
                            </Typing>
                        </TypingContainer>
                    </>
                )}
            </TextContent>
        </StarterDiv>
    );
}