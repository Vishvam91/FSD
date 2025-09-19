import { useState, useEffect } from "react";

export default function Practical3(){
    const [dateTime, setDateTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(()=> {
            setDateTime(new Date());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return(
        <div style={styles.container}>
            <h1>Welcome to CHARUSAT!!!</h1>
            <h2>Current Date and Time:</h2>
            <p>{dateTime.toLocaleString()}</p>
        </div>
    );
}

const styles = {
  container: {
    textAlign: "center",
    marginTop: "0",
    fontFamily: "Arial, sans-serif",
    background: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
    minHeight: "100vh",
    padding: "50px 20px",
    color: "#2c3e50",
  },
};