import Counter from '../untitled/counter';

import SplashScreen from '@/components/SplashScreen';
import useSplashScreen from '@/hooks/useSplashScreen';

import './App.css';

function App() {
    const { showSplashScreen, splashScreenPhase } = useSplashScreen();

    return (
        <>
            {showSplashScreen && <SplashScreen phase={splashScreenPhase} />}

            <div className="Test-box">
                <div>1 section</div>
                <div>2 section</div>
                <div>3 section</div>
            </div>

            <Counter />
        </>
    );
}

export default App;
