import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, FastForward, HeartPulse, Radar, ShieldCheck, Stethoscope } from 'lucide-react';
import { useMedicalAudio } from '../hooks/useMedicalAudio';
import './Home.css';

const landingVideoSrc = new URL('../../../landingPage.mp4', import.meta.url).href;

const revealVariants = {
    hidden: { opacity: 0, y: 48 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1]
        }
    }
};

const staggerContainer = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.14
        }
    }
};

const NeuralVisual = ({ color }) => (
    <div className="home-visual-frame">
        <motion.img
            src="/assets/img/brain.png"
            alt="3D Brain Scan"
            className="home-visual-image"
            style={{ filter: `drop-shadow(0 0 18px ${color})` }}
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        />
    </div>
);

const RetinaVisual = ({ color }) => (
    <div className="home-visual-frame">
        <motion.img
            src="/assets/img/eye.png"
            alt="3D Retina Scan"
            className="home-visual-image"
            style={{ filter: `drop-shadow(0 0 18px ${color})` }}
            animate={{ scale: [1, 1.03, 1] }}
            transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
        />
    </div>
);

const BoneVisual = ({ color }) => (
    <div className="home-visual-frame">
        <motion.img
            src="/assets/img/bone.png"
            alt="3D Bone Scan"
            className="home-visual-image"
            style={{ filter: `drop-shadow(0 0 18px ${color})` }}
            animate={{ rotate: [0, 3, 0, -3, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        />
    </div>
);

const LungsVisual = ({ color }) => (
    <div className="home-visual-frame">
        <motion.img
            src="/assets/img/lungs.png"
            alt="3D Lungs Scan"
            className="home-visual-image"
            style={{ filter: `drop-shadow(0 0 18px ${color})` }}
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        />
    </div>
);

const SkinVisual = ({ color }) => (
    <div className="home-visual-frame">
        <motion.img
            src="/assets/img/skin.png"
            alt="3D Skin Scan"
            className="home-visual-image"
            style={{ filter: `drop-shadow(0 0 18px ${color})` }}
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4.4, repeat: Infinity, ease: 'easeInOut' }}
        />
    </div>
);

const ECGVisual = ({ color }) => (
    <div className="home-visual-frame">
        <svg width="220" height="220" viewBox="0 0 220 220" className="home-visual-svg">
            <motion.circle
                cx="110"
                cy="110"
                r="84"
                stroke={color}
                strokeWidth="1.5"
                fill="none"
                opacity="0.25"
                animate={{ scale: [1, 1.08, 1], opacity: [0.18, 0.32, 0.18] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.path
                d="M 18 112 L 58 112 L 72 62 L 86 164 L 102 112 L 134 112 L 148 42 L 162 176 L 176 112 L 202 112"
                fill="none"
                stroke={color}
                strokeWidth="4"
                strokeLinecap="round"
                initial={{ pathLength: 0.1, opacity: 0.35 }}
                animate={{ pathLength: [0.1, 1, 1], opacity: [0.35, 1, 0.35] }}
                transition={{ duration: 2.4, repeat: Infinity, ease: 'linear' }}
            />
        </svg>
    </div>
);

const VideoLandingSection = ({ onComplete, onSkip }) => {
    const videoRef = useRef(null);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return undefined;

        const attemptPlay = async () => {
            try {
                video.currentTime = 0;
                await video.play();
            } catch (error) {
                // Keep the video mounted; user can still start it via interaction/skip.
                console.debug('Landing video autoplay was blocked.', error);
            }
        };

        const handleEnded = () => onComplete();
        const handleCanPlay = () => {
            attemptPlay();
        };

        video.addEventListener('ended', handleEnded);
        video.addEventListener('canplay', handleCanPlay);
        attemptPlay();

        return () => {
            video.removeEventListener('ended', handleEnded);
            video.removeEventListener('canplay', handleCanPlay);
        };
    }, [onComplete]);

    useEffect(() => {
        const handleSkipIntent = (event) => {
            if (event.type === 'wheel' || event.type === 'touchmove') {
                onSkip();
            }
        };

        window.addEventListener('wheel', handleSkipIntent, { passive: true });
        window.addEventListener('touchmove', handleSkipIntent, { passive: true });

        return () => {
            window.removeEventListener('wheel', handleSkipIntent);
            window.removeEventListener('touchmove', handleSkipIntent);
        };
    }, [onSkip]);

    return (
        <section className="video-landing">
            <video
                ref={videoRef}
                className="landing-video"
                autoPlay
                muted
                playsInline
                preload="auto"
            >
                <source src={landingVideoSrc} type="video/mp4" />
            </video>

            <div className="video-overlay" />

            <motion.div
                className="video-copy"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
                <div className="video-kicker">Clinical Intelligence Interface</div>
                <h1>DiagnoScope</h1>
                <p>Precision diagnostics introduced through a cinematic entry sequence.</p>
            </motion.div>

            <button className="video-skip" onClick={onSkip}>
                <FastForward size={16} />
                Skip Intro
            </button>
        </section>
    );
};

const FeatureSection = ({ title, subtitle, description, color, pills, visual, reverse = false, message, onHover }) => (
    <motion.section
        className={`feature-section ${reverse ? 'reverse' : ''}`}
        variants={revealVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
    >
        <div className="container feature-grid">
            <div className="feature-copy">
                <div className="section-meta" style={{ color }}>
                    <Radar size={14} /> {message}
                </div>
                <h2 className="feature-title" style={{ '--accent': color }}>{title}</h2>
                <p className="feature-subtitle">{subtitle}</p>
                <p className="feature-description">{description}</p>
                <motion.div
                    className="feature-pill-row"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.4 }}
                >
                    {pills.map((pill) => (
                        <motion.div key={pill} className="feature-pill" variants={revealVariants}>
                            {pill}
                        </motion.div>
                    ))}
                </motion.div>
                <motion.button
                    className="section-cta"
                    style={{ '--accent': color }}
                    onHoverStart={onHover}
                    whileHover={{ x: 8, backgroundColor: color, color: '#041018' }}
                    whileTap={{ scale: 0.98 }}
                >
                    Explore Module <ArrowRight size={16} />
                </motion.button>
            </div>

            <motion.div
                className="feature-visual"
                initial={{ opacity: 0, scale: 0.92, y: 40 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
                <div className="feature-visual-glow" style={{ '--glow': color }} />
                {visual}
            </motion.div>
        </div>
    </motion.section>
);

const Home = () => {
    const navigate = useNavigate();
    const { playHeartbeat, playBeep } = useMedicalAudio();
    const contentRef = useRef(null);
    const [introDismissed, setIntroDismissed] = useState(false);

    const featureSections = useMemo(() => ([
        {
            title: 'NeuroScan AI',
            subtitle: 'Deep Neural Cortex Mapping',
            description: 'Volumetric MRI analysis that highlights tumor class, tissue focus, and clinical heatmaps in a premium review workflow.',
            color: '#2f7cff',
            pills: ['Tumor Typing', 'Segmentation Maps', 'Volume Context'],
            message: 'SEGMENTING CEREBRAL VOLUMES...',
            visual: <NeuralVisual color="#2f7cff" />
        },
        {
            title: 'RetinaScan AI',
            subtitle: 'Ocular Vessel Architecture',
            description: 'Autonomous fundus interpretation with vessel emphasis, lesion overlays, and severity guidance that stays readable while you scroll.',
            color: '#f13cff',
            pills: ['DR Grades', 'Lesion Focus', 'Vessel Review'],
            message: 'MAPPING RETINAL LANDSCAPE...',
            visual: <RetinaVisual color="#f13cff" />,
            reverse: true
        },
        {
            title: 'Fracture AI',
            subtitle: 'Structural Integrity Scan',
            description: 'From filter-assisted review to smart fracture localization, the platform supports both human-led comparison and automated detection.',
            color: '#37f2ff',
            pills: ['Trauma Localization', 'Filter Review', 'X-Ray Guidance'],
            message: 'SCANNING SKELETAL ALIGNMENT...',
            visual: <BoneVisual color="#37f2ff" />
        },
        {
            title: 'CardiacScan AI',
            subtitle: 'Rhythm Logic Engine',
            description: 'ECG image and signal workflows feed into a unified rhythm analysis path with structured interpretation and waveform presentation.',
            color: '#25f29a',
            pills: ['ECG Signal Parsing', 'PVC / LBBB', 'Clinical Meaning'],
            message: 'DECODING RHYTHM LOGIC...',
            visual: <ECGVisual color="#25f29a" />,
            reverse: true
        },
        {
            title: 'PulmoScan AI',
            subtitle: 'Pulmonary Tissue Analysis',
            description: 'Chest imaging is classified into specific outcomes like COVID-19, pneumonia variants, or normal tissue without losing clarity in motion.',
            color: '#29e7cf',
            pills: ['COVID-19', 'Tuberculosis', 'Opacity Review'],
            message: 'SCANNING PULMONARY TISSUE...',
            visual: <LungsVisual color="#29e7cf" />
        },
        {
            title: 'DermScan AI',
            subtitle: 'Dermatoscopic Classification',
            description: 'Skin lesion analysis combines a polished reveal sequence with consistent on-screen visibility for a confident diagnostic experience.',
            color: '#ff8a2b',
            pills: ['Melanoma Risk', 'Lesion Classes', 'Dermatoscopic Focus'],
            message: 'DERMATOSCOPIC FOCUS...',
            visual: <SkinVisual color="#ff8a2b" />,
            reverse: true
        }
    ]), []);

    useEffect(() => {
        if (!introDismissed) return undefined;
        const timer = setInterval(() => playHeartbeat(), 1800);
        return () => clearInterval(timer);
    }, [introDismissed, playHeartbeat]);

    const revealContent = () => {
        if (introDismissed) return;
        setIntroDismissed(true);
        playBeep(680, 0.08);
        window.requestAnimationFrame(() => {
            contentRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    };

    return (
        <div className="home-page premium-home">
            {!introDismissed && (
                <VideoLandingSection
                    onComplete={revealContent}
                    onSkip={revealContent}
                />
            )}

            <main ref={contentRef} className="home-content">
                <section className="home-intro">
                    <div className="container intro-grid">
                        <motion.div
                            className="intro-copy"
                            initial={{ opacity: 0, y: 28 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.45 }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <div className="intro-badge">
                                <ShieldCheck size={14} />
                                Full-spectrum clinical AI workspace
                            </div>
                            <h2>Scroll through a diagnostic system designed to feel fluid, focused, and premium.</h2>
                            <p>
                                The landing video introduces the system, then every section reveals itself naturally with
                                motion that supports the story instead of hiding it.
                            </p>
                            <div className="intro-actions">
                                <motion.button
                                    className="btn-glow-cyan"
                                    whileHover={{ scale: 1.03, boxShadow: '0 0 28px rgba(0, 242, 255, 0.42)' }}
                                    whileTap={{ scale: 0.97 }}
                                    onHoverStart={() => playBeep(660, 0.05)}
                                    onClick={() => navigate('/login')}
                                >
                                    System Entry <ArrowRight size={18} />
                                </motion.button>
                                <button className="btn-secondary" onClick={() => contentRef.current?.scrollIntoView({ behavior: 'smooth' })}>
                                    <Stethoscope size={16} />
                                    Explore Features
                                </button>
                            </div>
                        </motion.div>

                        <motion.div
                            className="intro-panel"
                            initial={{ opacity: 0, y: 28 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.4 }}
                            transition={{ duration: 0.9, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <div className="intro-panel-header">
                                <HeartPulse size={16} />
                                Live Capability Matrix
                            </div>
                            <div className="intro-metrics">
                                <div><span>Modules</span><strong>6 AI domains</strong></div>
                                <div><span>Entry</span><strong>Video-first landing</strong></div>
                                <div><span>Motion</span><strong>Scroll reveal</strong></div>
                                <div><span>UX Goal</span><strong>Apple-smooth flow</strong></div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {featureSections.map((section) => (
                    <FeatureSection
                        key={section.title}
                        {...section}
                        onHover={() => playBeep(440, 0.04)}
                    />
                ))}

                <section className="system-footer">
                    <div className="container footer-grid">
                        <motion.div
                            className="footer-brand"
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2>DIAGNO-SCOPE</h2>
                            <p>Clinical intelligence, redefined through motion, clarity, and trust.</p>
                        </motion.div>
                        <motion.button
                            className="btn-primary large"
                            onClick={() => navigate('/login')}
                            whileHover={{ scale: 1.05, boxShadow: '0 0 38px rgba(47,124,255,0.4)' }}
                            whileTap={{ scale: 0.97 }}
                        >
                            Initialize System
                        </motion.button>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Home;
