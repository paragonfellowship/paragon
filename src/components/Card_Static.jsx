"use client"
import { useRef } from "react"

export default function Card({ className = "", children, ...props }) {
    const ref = useRef(null)

    return (
        <div ref={ref} className={`bg-gradient-to-bl card overflow-hidden relative md:p-11 p-7 ${className}`} {...props}>
            {children}
            <div className="gradient-layer h-full w-full absolute top-0 left-0 -z-10" style={{ transition: "opacity 1s" }}></div>
        </div>
    )
}