import React, { useState } from 'react';
import Video from '../../videos/video.mp4';
import { Button } from '../ButtonElements'
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroElements';

const HeroSection = () => {
    const [hover, setHover] = useState(false) // hover 초기값 false

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBg>
            <HeroContent>
                <HeroH1>Virtual Banking Made Easy</HeroH1>
                <HeroP>
                    Sign up for a new accoun today and receive $250 in credit towards your nex payment.
                </HeroP>
                <HeroBtnWrapper>
                    {/* 마우스 포인터가 요소 안으로 들어오고 나갈 때 이벤트 실행*/}
                    <Button 
                    to="signup"
                    onMouseEnter={onHover}
                    onMouseLeave={onHover} 
                    primary='true'
                    dark='true'
                    >
                        Get started {hover ? <ArrowForward /> : <ArrowRight />} {/* 조건이 참이면 앞에 거짓이면 뒤에걸 실행 */}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
