import { TypeAnimation } from "react-type-animation";

export const AnimationForType = () => {
    return <TypeAnimation
        preRenderFirstString={true}
        sequence={[
            'Front-end Dev',
            1000, 
            'Front-end Dev - Web',
            1000, 
            'Front-end Dev - Mobile',
            1000,  
        ]}
        // speed={40} 
        repeat={Infinity}
        className="text-white text-2xl"
    />
} 
