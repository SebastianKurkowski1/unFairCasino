import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Sidebar from '../Components/Sidebar';
import Footer from '../Components/Footer';
import Background from '../Assets/Images/91657kopia.jpg';
import NeonText from '../Assets/Animations/NeonLight/NeonText';
import FaultyNeonText from '../Assets/Animations/NeonLight/FaultyNeonText';
import FadeIn from '../Assets/Animations/FadeIn/fadeIn';

export default function Root() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="h-1 bg-gradient-to-r from-yellow-300 to-yellow-500" />
      <div className="flex bg-slate-800 min-h-screen">

        <Sidebar />
        <div
          id="main"
          className="bg-slate-900 w-full flex justify-center items-center text-amber-50 overflow-hidden"
          style={{
            backgroundImage: `url(${Background as string})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundBlendMode: 'luminosity',
          }}
        >
          <Outlet />
          <div className="flex-col py-28" hidden={window.location.pathname !== '/'}>
            <div
              className="d-flex flex-row text-4xl sm:text-6xl mb-10 right-96 text-center sm:text-left"
              style={{ letterSpacing: 5 }}
            >
              <div className="inline-block">
                <FadeIn duration={1500} animationDelay={750}>
                  <div>Welcome to</div>
                </FadeIn>
              </div>
            </div>
            <div className="text-9xl flex" style={{ fontFamily: 'Sacramento, sans-serif' }}>
              <div className="text-7xl flex items-center">
                <FaultyNeonText animationText="un" animationDelay={3000} animationDuration={1000} />
              </div>
              <NeonText animationText="FairCasino" animationDelay={3000} animationDuration={1000} />
            </div>

          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
