import React, { useEffect, useState, useRef } from 'react';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import { Play, Sparkles, Zap, Shield, ChevronDown, Rocket } from 'lucide-react';
import videoSrc from './assets/video.mp4';
import './index.css';

const App = () => {
  const [scrolled, setScrolled] = useState(false);
  const videoRef = useRef(null);
  const targetTime = useRef(0);
  const currentTime = useRef(0);
  const animationRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
        setScrolled(window.scrollY > 50);
        
        if (videoRef.current && Number.isFinite(videoRef.current.duration)) {
            const duration = videoRef.current.duration;
            const maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
            const scrollFraction = window.scrollY / maxScroll;
            
            // Increase multiplier if you want it to loop faster. 1.5 means it plays forward, then halfway back.
            // 2 means it plays forward to the end, then reverses all the way back to start.
            const scrollSpeedMultiplier = 2.0; 
            
            const rawTime = scrollFraction * duration * scrollSpeedMultiplier;
            const cycleDuration = duration * 2;
            const currentCycleTime = rawTime % cycleDuration;
            
            let calculatedTarget;
            if (currentCycleTime > duration) {
                // Video is "over", reverse it
                calculatedTarget = cycleDuration - currentCycleTime;
            } else {
                // Forward motion
                calculatedTarget = currentCycleTime;
            }
            
            // Add a 100ms safe padding block on ends to prevent catching dead black frames at true 0 or end
            const safePadding = 0.1;
            targetTime.current = Math.max(safePadding, Math.min(duration - safePadding, calculatedTarget));
        }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Continuous animation loop for butter-smooth interpolation (lerp)
    const updateVideo = () => {
        if (videoRef.current && Number.isFinite(videoRef.current.duration)) {
            const diff = targetTime.current - currentTime.current;
            
            // Incredibly smooth lerp factor (eases momentum beautifully)
            currentTime.current += diff * 0.08; 
            
            // CRITICAL FIX FOR STUTTER:
            // Standard videos stutter heavily if you update `currentTime` 60 times a second 
            // with microscopic increments because it constantly halts the hardware decoder.
            // We only ask the browser to paint a new frame if we have actually moved 
            // by at least 1 typical video frame (~0.04 seconds for 24/30fps).
            if (Math.abs(videoRef.current.currentTime - currentTime.current) > 0.04) {
                videoRef.current.currentTime = currentTime.current;
            }
        }
        animationRef.current = requestAnimationFrame(updateVideo);
    };
    
    updateVideo();
    
    return () => {
        window.removeEventListener('scroll', handleScroll);
        if (animationRef.current) {
            cancelAnimationFrame(animationRef.current);
        }
    };
  }, []);

  return (
    <ParallaxProvider>
      <div className="scroll-wrapper">
        {/* Navigation */}
        <nav style={{ background: scrolled ? 'rgba(5, 5, 5, 0.9)' : 'rgba(5, 5, 5, 0.2)' }}>
          <div className="logo">
            Nexus<span>Vision</span>
          </div>
          <div className="nav-links">
            <a href="#features">Features</a>
            <a href="#explore">Explore</a>
            <a href="#join">Join Beta</a>
          </div>
        </nav>

        {/* Fixed Video Background tied to scroll */}
        <div className="video-container" style={{ position: 'fixed', inset: 0, overflow: 'hidden', height: '100vh', width: '100vw', zIndex: -3 }}>
           <video 
             ref={videoRef}
             muted 
             playsInline 
             preload="auto"
             className="video-background"
             style={{ width: '100%', height: '100%', objectFit: 'cover' }}
           >
             <source src={videoSrc} type="video/mp4" />
           </video>
           <div className="video-overlay" style={{ zIndex: -2, position: 'absolute', inset: 0 }} />
        </div>

        {/* Hero Section */}
        <section className="hero">
          <div className="hero-content">
            <Parallax translateY={[50, -50]} opacity={[0, 2]}>
              <div className="glass-container" style={{ padding: '4rem 2rem', border: '1px solid rgba(255,255,255,0.1)' }}>
                  <h1 className="text-gradient">Experience The Next Evolution</h1>
                  <p>Immerse yourself in state-of-the-art parallax scrolling with breathtaking visuals and buttery smooth performance.</p>
                  <button className="btn btn-primary">
                    <Play size={20} fill="#000" /> Watch Demo
                  </button>
                  <button className="btn btn-secondary">Learn More</button>
              </div>
            </Parallax>
          </div>

          <div className="scroll-indicator">
              <ChevronDown size={32} />
          </div>
        </section>

        {/* Features Section */}
        <section className="features" id="features">
          <div className="section-title">
            <Parallax scale={[0.8, 1]} opacity={[0, 1]}>
                <h2>Built for the <span className="text-accent-gradient">Future</span></h2>
                <p>We leverage advanced design patterns, glassmorphism, and hardware-accelerated animations to deliver a premium user experience.</p>
            </Parallax>
          </div>

          <div className="features-grid">
            <Parallax translateY={[100, -20]} opacity={[0, 1]}>
                <div className="feature-card glass-container">
                <div className="feature-icon">
                    <Sparkles size={32} />
                </div>
                <h3>Stunning Aesthetics</h3>
                <p>Carefully crafted color palettes and typography create an unforgettable visual impression that captivates your audience instantly.</p>
                </div>
            </Parallax>

            <Parallax translateY={[130, -30]} opacity={[0, 1]}>
                <div className="feature-card glass-container">
                <div className="feature-icon">
                    <Zap size={32} />
                </div>
                <h3>Dynamic Animations</h3>
                <p>Fluid micro-interactions and scroll-based parallax effects breathe life into the interface, making navigation naturally engaging.</p>
                </div>
            </Parallax>

            <Parallax translateY={[160, -40]} opacity={[0, 1]}>
                <div className="feature-card glass-container">
                <div className="feature-icon">
                    <Shield size={32} />
                </div>
                <h3>Unmatched Stability</h3>
                <p>Engineered with performance as a primary focus, ensuring consistently smooth 60fps scrolling across all devices and platforms.</p>
                </div>
            </Parallax>
          </div>
        </section>

        {/* Explore Section */}
        <section className="explore" id="explore">
          <div className="explore-bg-orb" />
          
          <div className="explore-content">
            <Parallax translateX={[-30, 10]} opacity={[0, 1]}>
                <div className="explore-text">
                    <h2>Immersive <br />Digital <span className="text-accent-gradient">Worlds</span></h2>
                    <p>Stop building ordinary web pages. Start orchestrating cinematic interactive experiences that tell your brand's story with profound impact and clarity.</p>
                    
                    <div className="stats-grid">
                        <div className="stat-item glass-container" style={{ padding: '1.5rem', borderRadius: '20px' }}>
                            <h4>98%</h4>
                            <p>User Engagement</p>
                        </div>
                        <div className="stat-item glass-container" style={{ padding: '1.5rem', borderRadius: '20px' }}>
                            <h4>10x</h4>
                            <p>Higher Conversions</p>
                        </div>
                    </div>
                </div>
            </Parallax>

            <Parallax translateX={[30, -10]} opacity={[0, 1]}>
                <div className="explore-image-container">
                    <img 
                        src="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=1000&auto=format&fit=crop" 
                        alt="Abstract Digital Art" 
                        className="explore-image"
                    />
                    
                    <Parallax translateY={[-40, 40]} className="floating-element bottom-left glass-container">
                        <div className="floating-icon"><Rocket size={24} /></div>
                        <div className="floating-text">
                            <h5>Hyper-Fast</h5>
                            <p>Optimized delivery</p>
                        </div>
                    </Parallax>
                </div>
            </Parallax>
          </div>
        </section>

        {/* Call To Action */}
        <section className="cta-section" id="join">
          <Parallax scale={[0.9, 1.1]} opacity={[0.5, 1]}>
             <div className="cta-box glass-container">
                 <h2>Ready to Transform Your Vision?</h2>
                 <p>Join thousands of visionary creators building the next generation of digital experiences.</p>
                 <button className="btn btn-primary" style={{ padding: '1.2rem 3rem', fontSize: '1.2rem' }}>
                    Start Building Now
                 </button>
             </div>
          </Parallax>
        </section>

        {/* Footer */}
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-brand">
                    <h3>Nexus<span>Vision</span></h3>
                    <p>Redefining digital excellence.</p>
                </div>
                <div className="footer-links">
                    <a href="#">Platform</a>
                    <a href="#">Resources</a>
                    <a href="#">Company</a>
                    <a href="#">Legal</a>
                </div>
            </div>
            <div className="copyright">
                &copy; {new Date().getFullYear()} NexusVision. All rights reserved.
            </div>
        </footer>
      </div>
    </ParallaxProvider>
  );
};

export default App;
