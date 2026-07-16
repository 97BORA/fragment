import { useEffect } from 'react';

import type { SplashScreenPhase } from '@/hooks/useSplashScreen';

import '@/styles/SplashScreen.css';

declare global {
    interface Window {
        __initialLoaderTimer?: number;
    }
}

type SplashScreenProps = {
    phase: SplashScreenPhase;
};

function SplashScreen({ phase }: SplashScreenProps) {
    useEffect(() => {
        window.clearTimeout(window.__initialLoaderTimer);

        const initialLoader = document.getElementById('initial-loader');

        if (!initialLoader) return;

        initialLoader.classList.add('initial-loader--hidden');

        const removeTimerId = window.setTimeout(() => {
            initialLoader.remove();
        }, 300);

        return () => {
            window.clearTimeout(removeTimerId);
        };
    }, []);

    return (
        <section
            className={`splash-screen ${phase === 'fadeOut' ? 'fade-out' : ''}`}
        >
            {phase === 'loading' ? (
                <div className="splash-dots">
                    <span />
                    <span />
                    <span />
                </div>
            ) : (
                <div className="splash-content">
                    <h1>SplashScreen section</h1>
                </div>
            )}
        </section>
    );
}

export default SplashScreen;
