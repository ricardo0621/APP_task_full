import React from "react";
import { useNavigate } from "react-router-dom";
import "./NotFound.css";

export default function NotFound() {
    const navigate = useNavigate();

    return (
        <div className="not-found-container">
            {/* Animated background particles */}
            <div className="particles">
                {[...Array(20)].map((_, i) => (
                    <div key={i} className="particle" style={{
                        left: `${Math.random() * 100}%`,
                        animationDelay: `${Math.random() * 5}s`,
                        animationDuration: `${5 + Math.random() * 10}s`
                    }}></div>
                ))}
            </div>

            {/* Main content */}
            <div className="not-found-content">
                <div className="glitch-wrapper">
                    <h1 className="glitch" data-text="404">404</h1>
                </div>

                <div className="error-message">
                    <h2>¡Oops! Página No Encontrada</h2>
                    <p>Parece que te has perdido en el espacio digital. La página que buscas no existe o ha sido movida.</p>
                </div>

                <div className="astronaut">
                    <div className="astronaut-body">
                        <div className="helmet"></div>
                        <div className="body"></div>
                        <div className="arm left"></div>
                        <div className="arm right"></div>
                        <div className="leg left"></div>
                        <div className="leg right"></div>
                    </div>
                </div>

                <button className="home-button" onClick={() => navigate('/login')}>
                    <span className="button-icon"></span>
                    <span className="button-text">Volver al Inicio</span>
                    <div className="button-glow"></div>
                </button>
            </div>

            {/* Floating shapes */}
            <div className="floating-shapes">
                <div className="shape shape-1"></div>
                <div className="shape shape-2"></div>
                <div className="shape shape-3"></div>
            </div>
        </div>
    );
}
