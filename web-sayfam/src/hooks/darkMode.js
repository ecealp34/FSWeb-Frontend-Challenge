import { useEffect, useState } from "react";


const useDarkMode = () => {
    const [darkMode, setDarkMode] = useState(localStorage.getItem('theme') === 'dark' ? true : false);

    useEffect(() => {
        if(darkMode) {
            document.body.classList.toggle('dark-theme');
            localStorage.setItem('theme', 'dark')
            setDarkMode(true)
        } else {
            document.body.classList.remove('dark-theme');
            localStorage.setItem('theme', 'light')
            setDarkMode(false)
        }
    }, [darkMode]);

     const sliderDarkMode = () => {
        setDarkMode(!darkMode)
     }

     return[darkMode, sliderDarkMode]
}

export default useDarkMode;

