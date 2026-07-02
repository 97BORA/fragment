import type { SplashScreenPhase } from '@/hooks/useSplashScreen';

import '@/styles/SplashScreen.css';

type SplashScreenProps = {
    phase: SplashScreenPhase;
};

function SplashScreen({ phase }: SplashScreenProps) {
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
