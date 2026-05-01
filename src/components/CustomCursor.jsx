import gsap from "gsap";
import { useRef, useEffect } from "react";


const CustomCursor = () => {

    // Refs for cursor element 
    const cursorRef = useRef(null);
    const cursorBorderRef = useRef(null);

    // hide cursor on mobile device 
    const isMobile = typeof window !== "undefined" && window.matchMedia("(max-width: 768px)").matches

    if (isMobile) {
        return null
    }

    useEffect(() => {
        // get cursor element 
        const cursor = cursorRef.current
        const cursorBorder = cursorBorderRef.current

        // initial position off-screen
        gsap.set([cursor, cursorBorder], {
            xPercent: -50,
            yPercent: -50,
        })

        // variables for cursor position with different speeds
        const xTo = gsap.quickTo(cursor, "x", {
            duration: 0.2, ease: "power3.out"
        })

        const yTo = gsap.quickTo(cursor, "y", {
            duration: 0.2, ease: "power3.out"
        })

        const xToBorder = gsap.quickTo(cursorBorder, "x", {
            duration: 0.5, ease: "power.out"
        })

        const yToBorder = gsap.quickTo(cursorBorder, "y", {
            duration: 0.5, ease: "power3.out"
        })

        // mouse move handler 
        const handleMouseMove = (e) => {
            xTo(e.clientX)
            yTo(e.clientY)
            xToBorder(e.clientX)
            yToBorder(e.clientY)
        }

        // add mouse move listener 
        window.addEventListener("mousemove", handleMouseMove)

        // add click animation 
        document.addEventListener("mousedown",()=> {
            gsap.to([cursor, cursorBorder], {
                scale: 0.6,
                duration: 0.2,
            })
        })

        document.addEventListener("mouseup",()=> {
            gsap.to([cursor, cursorBorder], {
                scale: 1,
                duration: 0.2,
            })
        })


    }, [])
    return (
        <>
            {/* main cursor point/dot  */}
            <div
                ref={cursorRef}
                className="fixed top-0 left-0 w-5 h-5 bg-white rounded-full pointer-events-none z-999 mix-blend-difference"
            />
            <div
                ref={cursorBorderRef}
                className="fixed top-0 left-0 w-10 h-10 border border-white opacity-50  rounded-full pointer-events-none z-999 mix-blend-difference"
            />

        </>
    )
}

export default CustomCursor