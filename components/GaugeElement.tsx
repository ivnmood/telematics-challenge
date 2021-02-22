import React from "react";
import {AnimatedCircularProgress} from "react-native-circular-progress";

import {Text} from "./Themed";

type Props = {
    size: number
    value: number
    thickness: number
    fontSize?: number
}
export default function GaugeElement({size, value, thickness, fontSize = 15}: Props) {
    return <AnimatedCircularProgress
        size={size}
        width={thickness}
        backgroundWidth={thickness}
        fill={value}
        tintColorSecondary="#00ff00"
        tintColor="#ff0000"
        backgroundColor="gray"
        arcSweepAngle={240}
        rotation={240}
        lineCap="round"
        duration={1000}
    >
        {
            (fill) => (
                <Text style={{fontSize}}>
                    {fill.toFixed(0)}
                </Text>
            )
        }
    </AnimatedCircularProgress>
}
