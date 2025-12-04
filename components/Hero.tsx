import React, { useEffect, useRef } from 'react';
import { ArrowDownRight } from 'lucide-react';
import { HERO_CONTENT } from '../constants';

const DiamondAnimation: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let animationFrameId: number;
    let angle = 0;

    const resize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.offsetWidth;
      height = canvas.height = canvas.parentElement.offsetHeight;
    };

    window.addEventListener('resize', resize);
    resize();

    // Complex Nested Diamond (Hyper-Octahedron Structure)
    const baseVertices = [
      // Outer Hull (Nodes 0-5)
      { x: 0, y: -1.3, z: 0 },    // 0: Top
      { x: 0, y: 1.3, z: 0 },     // 1: Bottom
      { x: 1.1, y: 0, z: 0 },     // 2: Outer Right
      { x: 0, y: 0, z: 1.1 },     // 3: Outer Back
      { x: -1.1, y: 0, z: 0 },    // 4: Outer Left
      { x: 0, y: 0, z: -1.1 },    // 5: Outer Front
      
      // Inner Core (Nodes 6-11) - Scaled 50%
      { x: 0, y: -0.65, z: 0 },   // 6: Inner Top
      { x: 0, y: 0.65, z: 0 },    // 7: Inner Bottom
      { x: 0.55, y: 0, z: 0 },    // 8: Inner Right
      { x: 0, y: 0, z: 0.55 },    // 9: Inner Back
      { x: -0.55, y: 0, z: 0 },   // 10: Inner Left
      { x: 0, y: 0, z: -0.55 },   // 11: Inner Front

      // Nucleus (Node 12)
      { x: 0, y: 0, z: 0 },       // 12: Center
    ];

    const edges = [
      // Outer Octahedron Frame
      [0, 2], [0, 3], [0, 4], [0, 5], // Top Pyramid
      [1, 2], [1, 3], [1, 4], [1, 5], // Bottom Pyramid
      [2, 3], [3, 4], [4, 5], [5, 2], // Equator Ring

      // Inner Octahedron Frame
      [6, 8], [6, 9], [6, 10], [6, 11], // Inner Top
      [7, 8], [7, 9], [7, 10], [7, 11], // Inner Bottom
      [8, 9], [9, 10], [10, 11], [11, 8], // Inner Ring

      // Structural Trusses (Connecting Outer to Inner)
      [0, 6], [1, 7], // Vertical Axis Spine
      [2, 8], [3, 9], [4, 10], [5, 11], // Equatorial Spokes

      // Cross Bracing (Complexity)
      [0, 8], [0, 9], [0, 10], [0, 11], // Outer Top to Inner Ring
      [1, 8], [1, 9], [1, 10], [1, 11], // Outer Bottom to Inner Ring

      // Core Connections
      [12, 8], [12, 9], [12, 10], [12, 11], [12, 6], [12, 7]
    ];

    // Data flow particles
    interface Particle {
      edgeIndex: number;
      progress: number;
      speed: number;
      direction: number; // 1 or -1
    }

    const particles: Particle[] = [];
    const PARTICLE_COUNT = 15;

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push({
        edgeIndex: Math.floor(Math.random() * edges.length),
        progress: Math.random(),
        speed: 0.005 + Math.random() * 0.01,
        direction: Math.random() > 0.5 ? 1 : -1
      });
    }

    const loop = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);
      
      const cx = width / 2;
      const cy = height / 2;
      const scale = Math.min(width, height) * 0.22;
      const time = Date.now() * 0.001;

      // Rotation settings
      const rotX = 0.2; 
      const cosY = Math.cos(angle);
      const sinY = Math.sin(angle);
      const cosX = Math.cos(rotX);
      const sinX = Math.sin(rotX);

      // Project vertices with organic movement
      const projectedPoints = baseVertices.map((v, i) => {
        // Organic "breathing" movement
        // Nodes oscillate along their vector from center based on time and index
        // This makes the structure feel alive/flexible
        const oscillationFreq = 2; 
        const oscillationAmp = 0.08; // 8% expansion/contraction
        const phaseShift = i * 0.5; // Offset phase so they don't move in unison
        
        const breathe = 1 + Math.sin(time * oscillationFreq + phaseShift) * oscillationAmp;

        let x = v.x * breathe;
        let y = v.y * breathe;
        let z = v.z * breathe;

        // Rotate around Y axis
        let rx = x * cosY - z * sinY;
        let rz = z * cosY + x * sinY;
        let ry = y;

        // Rotate around X axis (tilt)
        let ry2 = ry * cosX - rz * sinX;
        let rz2 = ry * sinX + rz * cosX;

        // Perspective projection
        const perspective = 4;
        const scaleFactor = perspective / (perspective + rz2);

        return {
          x: cx + rx * scale * scaleFactor,
          y: cy + ry2 * scale * scaleFactor,
          z: rz2,
          scale: scaleFactor,
          originalIndex: i
        };
      });

      // Draw Edges
      ctx.lineWidth = 1;
      
      edges.forEach(([i, j], edgeIndex) => {
        const p1 = projectedPoints[i];
        const p2 = projectedPoints[j];
        
        // Calculate distance/depth for opacity
        const depth = (p1.z + p2.z) / 2;
        // Brighter lines for front, dimmer for back
        // Add a subtle pulse to the line opacity itself
        const pulse = Math.sin(time * 3 + edgeIndex) * 0.2; 
        const opacity = Math.max(0.05, 0.7 - (depth + 1) / 2.5 + pulse); 
        
        ctx.strokeStyle = `rgba(0, 255, 157, ${opacity})`;
        
        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.stroke();
      });

      // Draw Particles (Data Flow)
      particles.forEach(p => {
        p.progress += p.speed * p.direction;
        
        // Reset if out of bounds
        if (p.progress > 1 || p.progress < 0) {
          p.edgeIndex = Math.floor(Math.random() * edges.length);
          p.progress = p.direction > 0 ? 0 : 1;
          p.speed = 0.005 + Math.random() * 0.01;
        }

        const edge = edges[p.edgeIndex];
        const p1 = projectedPoints[edge[0]];
        const p2 = projectedPoints[edge[1]];

        // Interpolate position
        const x = p1.x + (p2.x - p1.x) * p.progress;
        const y = p1.y + (p2.y - p1.y) * p.progress;
        
        // Scale particle size based on depth (average scale of endpoints)
        const pointScale = (p1.scale + p2.scale) / 2;
        
        ctx.beginPath();
        ctx.arc(x, y, 2 * pointScale, 0, Math.PI * 2);
        ctx.fillStyle = '#fff'; // Bright white data packet
        ctx.fill();
        
        // Trail effect
        ctx.beginPath();
        ctx.arc(x, y, 4 * pointScale, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(0, 255, 157, 0.4)';
        ctx.fill();
      });

      // Draw Nodes
      projectedPoints.forEach((p, index) => {
        const isCenter = index === 12;
        const radius = (isCenter ? 3 : 2) * p.scale;
        
        // Draw Core Node
        ctx.beginPath();
        ctx.arc(p.x, p.y, radius, 0, Math.PI * 2);
        ctx.fillStyle = isCenter ? '#fff' : '#00ff9d';
        ctx.fill();
        
        // Glow effect
        const glowOpacity = Math.max(0.1, 1 - (p.z + 1) / 2) * 0.3;
        ctx.beginPath();
        ctx.arc(p.x, p.y, radius * (isCenter ? 6 : 4), 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 255, 157, ${glowOpacity})`;
        ctx.fill();
      });

      angle += 0.002; // Slow rotation
      animationFrameId = requestAnimationFrame(loop);
    };

    loop();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none z-0" />;
};

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col pt-20 bg-void grid-bg overflow-hidden border-b border-white/10">
      
      {/* Background Animation */}
      <DiamondAnimation />

      {/* Central Content */}
      <div className="flex-1 flex flex-col justify-center container mx-auto px-4 md:px-0 relative z-10">
        
        <div className="md:border-x border-white/10 h-full flex flex-col justify-center md:px-12 py-12 relative backdrop-blur-[2px]">
          
          {/* Tech Spec Decor */}
          <div className="absolute top-0 right-0 p-4 font-mono text-[10px] text-gray-500 hidden md:block text-right">
            SYSTEM STATUS: ONLINE<br/>
            VER: 4.2.0<br/>
            LOC: TIJUANA / REMOTE
          </div>

          <div className="mb-8">
            <span className="inline-block px-2 py-1 bg-neon/10 border border-neon text-neon text-xs font-mono mb-6">
              /// ARCHITECTURE_REDEFINED
            </span>
            <h1 className="text-5xl md:text-8xl lg:text-9xl font-sans font-bold text-white uppercase leading-[0.85] tracking-tighter mix-blend-difference">
              ECO<br/>
              LOGIC<br/>
              <span className="text-transparent stroke-text" style={{ WebkitTextStroke: '1px white' }}>SYSTEMS</span>
            </h1>
          </div>

          <div className="flex flex-col md:flex-row gap-8 md:items-end justify-between border-t border-white/10 pt-8">
            <p className="font-mono text-sm md:text-base text-gray-400 max-w-xl leading-relaxed">
              <span className="text-neon font-bold mr-2">::</span>
              {HERO_CONTENT.subtitle}
            </p>

            <a href="#projects" className="group flex items-center gap-4 text-white hover:text-neon transition-colors cursor-pointer">
              <div className="w-12 h-12 border border-white/20 flex items-center justify-center group-hover:bg-neon group-hover:text-black group-hover:border-neon transition-all">
                <ArrowDownRight className="w-5 h-5" />
              </div>
              <span className="font-mono text-sm tracking-widest uppercase">Explore Data</span>
            </a>
          </div>

        </div>
      </div>

      {/* Marquee Footer */}
      <div className="border-t border-b border-white/10 bg-white text-black py-3 overflow-hidden relative z-20">
        <div className="animate-marquee whitespace-nowrap flex gap-8 items-center font-sans font-bold text-lg md:text-xl tracking-widest uppercase">
          <span>BIM COORDINATION</span>
          <span className="text-neon font-black">+</span>
          <span>GENERATIVE AI</span>
          <span className="text-neon font-black">+</span>
          <span>SUSTAINABILITY</span>
          <span className="text-neon font-black">+</span>
          <span>ASSET MANAGEMENT</span>
          <span className="text-neon font-black">+</span>
          <span>CLASH DETECTION</span>
          <span className="text-neon font-black">+</span>
          <span>PARAMETRIC DESIGN</span>
          <span className="text-neon font-black">+</span>
          <span>BIM COORDINATION</span>
          <span className="text-neon font-black">+</span>
          <span>GENERATIVE AI</span>
          <span className="text-neon font-black">+</span>
          <span>SUSTAINABILITY</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;