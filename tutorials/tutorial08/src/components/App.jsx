import React from "react";
import NavBar from "./NavBar";
import {Image, TimePicker, Card} from 'antd';
import {Carousel} from 'antd';
import "./App.css";

// custom components:
export default function App() {
    // const onChange = currentSlide => {
    //     console.log(currentSlide);
    // }

    return (
        <>
            <NavBar />

            <main className="min-h-screen max-w-[1000px] mt-24 mx-auto">
                <h2 className="font-Comfortaa my-4 font-bold text-xl">
                    Photo Gallery
                </h2>
                <TimePicker />
 {/* <div className="flex flex-wrap content-start"> */}
                <div className="container">
                <Carousel autoplay autoplaySpeed={5000}>
                    <Card title="Picture One"  style={{ width: 50, borderWidth: "1", borderStyle: "solid" }}>
                        <Image
                            src="https://picsum.photos/600/600?id=1"
                            width={200}
                        />
                    </Card>

                    <Card title="Picture Two" variant="borderless" style={{ width: 50 }}>
                        <Image
                            src="https://picsum.photos/600/600?id=2"
                            width={200}
                        />
                    </Card>

                    <Card title="Picture Three" variant="borderless" style={{ width: 50 }}>
                        <Image
                            src="https://picsum.photos/600/600?id=3"
                            width={200}
                        />
                    </Card>

                    <Card title="Picture Four" variant="borderless" style={{ width: 50 }}>
                        <Image
                            src="https://picsum.photos/600/600?id=4"
                            width={200}
                        />
                    </Card>

                    <Card title="Picture Five" variant="borderless" style={{ width: 50 }}>
                        <Image
                            src="https://picsum.photos/600/600?id=5"
                            width={200}
                        />
                    </Card>

                    <Card title="Picture Six" variant="borderless" style={{ width: 50 }}>
                        <Image
                            src="https://picsum.photos/600/600?id=6"
                            width={200}
                        />
                    </Card>

                    <Card title="Picture Seven" variant="borderless" style={{ width: 50 }}>
                        <Image
                            src="https://picsum.photos/600/600?id=7"
                            width={200}
                        />
                    </Card>

                    <Card title="Picture Eight" variant="borderless" style={{ width: 50 }}>
                        <Image
                            src="https://picsum.photos/600/600?id=8"
                            width={200}
                        />
                    </Card>

                    <Card title="Picture Nine" variant="borderless" style={{ width: 50 }}>
                        <Image
                            src="https://picsum.photos/600/600?id=9"
                            width={200}
                        />
                    </Card>

                    <Card title="Picture Ten" variant="borderless" style={{ width: 50 }}>
                        <Image
                            src="https://picsum.photos/600/600?id=10"
                            width={200}
                        />
                    </Card>
                </Carousel>
                </div>

 {/* </div> */}
            </main>

            <footer className="p-5 bg-white">footer goes here</footer>
        </>
    );
}
