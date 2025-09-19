import { useState, useEffect } from "react";

export default function Practical3(){
    const [dateTime, setDateTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(()=> {
            setDateTime(new Date());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const time = dateTime.toLocaleTimeString();
    const date = dateTime.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric', 
        month: 'long',
        day: 'numeric'
    });

    return(
        <div style={styles.container}>
            <div style={styles.card}>
                <div style={styles.header}>
                    <h1 style={styles.title}>Welcome to CHARUSAT</h1>
                    <p style={styles.tagline}>Charotar University of Science & Technology</p>
                </div>
                
                <div style={styles.clockWrapper}>
                    <div style={styles.timeBox}>
                        <div style={styles.currentTime}>{time}</div>
                        <div style={styles.currentDate}>{date}</div>
                    </div>
                </div>

                <div style={styles.info}>
                    <div style={styles.infoItem}>
                        <span>Campus: </span>Changa, Gujarat
                    </div>
                    <div style={styles.infoItem}>
                        <span>Established: </span>2009
                    </div>
                </div>
            </div>
        </div>
    );
}

const styles = {
    container: {
        minHeight: "100vh",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "Arial, sans-serif",
        padding: "20px"
    },
    card: {
        background: "white",
        borderRadius: "12px",
        padding: "40px",
        boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
        textAlign: "center",
        maxWidth: "500px",
        width: "100%"
    },
    header: {
        marginBottom: "30px"
    },
    title: {
        color: "#2c3e50",
        fontSize: "28px",
        fontWeight: "bold",
        margin: "0 0 8px 0"
    },
    tagline: {
        color: "#7f8c8d",
        fontSize: "14px",
        margin: 0
    },
    clockWrapper: {
        marginBottom: "30px"
    },
    timeBox: {
        background: "#f8f9fa",
        borderRadius: "8px",
        padding: "25px",
        border: "1px solid #e9ecef"
    },
    currentTime: {
        fontSize: "36px",
        fontWeight: "bold",
        color: "#2c3e50",
        marginBottom: "8px",
        fontFamily: "monospace"
    },
    currentDate: {
        fontSize: "16px",
        color: "#6c757d"
    },
    info: {
        display: "flex",
        justifyContent: "space-between",
        gap: "20px"
    },
    infoItem: {
        fontSize: "14px",
        color: "#6c757d"
    }
};

// Add responsive styles
if (typeof document !== 'undefined') {
    const style = document.createElement('style');
    style.textContent = `
        @media (max-width: 600px) {
            .info { flex-direction: column; gap: 10px; }
            .current-time { font-size: 28px !important; }
        }
    `;
    document.head.appendChild(style);
}