"use client";
import { useState, useEffect } from "react";

export default function Footer() {
    const [year, setYear] = useState<number>()

    useEffect(() => {
        const newDate = new Date()
        setYear(newDate.getFullYear())
    }, [])

    return <footer>© {year} Vadeross</footer>
}
