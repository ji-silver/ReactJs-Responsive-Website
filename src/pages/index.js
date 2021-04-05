import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';

const Home = () => {

    const [isOpen, setIsOpen] = useState(false)
    // isOpen은 상태값 저장변수, setIsOpen은 갱신 함수, useState의 괄호값은 초기값
    // -> isOpen의 초기값은 false

    const toggle = () => {
        setIsOpen(!isOpen) //setIsOpen이 isOpen이 아니면 toggle 함수 실행
    }

    return (
        <>  
            {/* props를 통해 값 전달 */}
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <HeroSection />
        </>
    )
}

export default Home;
