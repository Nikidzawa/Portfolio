import React, { useEffect, useRef } from "react";
import styled from "styled-components";

const TextContent = styled.div`
    min-height: 100vh;
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

const Typing = styled.div`
    color: #fff;
    overflow: hidden;
    border-right: .20em solid white;
    white-space: nowrap;
    margin: 0 auto;
    letter-spacing: .15em;
    animation: typing 2.5s steps(35, end), blink-caret .5s step-end infinite;

    @keyframes typing {
        from { width: 0 }
        to { width: 100% }
    }

    @keyframes blink-caret {
        from, to { border-color: transparent }
        50% { border-color: white }
    }
`;

const StarterDiv = styled.div`
    margin-bottom: 50px;
`;

const Text = styled.span`
    font-family: sans-serif;
    font-size: 40px;
    padding-bottom: 10px;
    @media screen and (max-width: 600px) {
        font-size: 35px;
    }

    @media screen and (max-width: 500px) {
        font-size: 25px;
    }
`;

export default function StarterSection({ language }) {
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
                    particleColor: "rgb(200,200,200)",
                    lineColor: "rgb(200,200,200)",
                    particleAmount: 25,
                    defaultSpeed: 1,
                    variantSpeed: 1,
                    defaultRadius: 2,
                    variantRadius: 2,
                    linkRadius: 180,
                };
            } else {
                return {
                    particleColor: "rgb(200,200,200)",
                    lineColor: "rgb(200,200,200)",
                    particleAmount: 45,
                    defaultSpeed: 1,
                    variantSpeed: 1,
                    defaultRadius: 2,
                    variantRadius: 2,
                    linkRadius: 300,
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

        function Particle(xPos, yPos) {
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
        <StarterDiv>
            <TextContent ref={containerRef}>
                <canvas ref={canvasRef} style={{ position: 'absolute', top: 0, left: 0, zIndex: -1 }}></canvas>
                {language === "en" ? (
                    <>
                        <Text>Hello👋</Text>
                        <Text>my name is <strong>Nikita</strong>,</Text>
                        <TypingContainer>
                            <Typing>
                                <Text>I'm</Text>
                                <Text style={{ color: "blue" }}> FullStack </Text>
                                <Text>developer.</Text>
                            </Typing>
                        </TypingContainer>
                    </>
                ) : (
                    <>
                        <Text>Привет👋</Text>
                        <Text>меня зовут <strong>Никита</strong>,</Text>
                        <TypingContainer>
                            <Typing>
                                <Text>Я</Text>
                                <Text style={{ color: "blue" }}> FullStack </Text>
                                <Text>разработчик.</Text>
                            </Typing>
                        </TypingContainer>
                    </>
                )}
            </TextContent>
        </StarterDiv>
    );
}