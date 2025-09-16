// Constants
const GOAL = 100_000_000;
const COINGECKO_API_URL = 'https://api.coingecko.com/api/v3/coins/live-on-treadmill-till-100mill';
const FALLBACK_MARKETCAP = 250000; // Fallback value if API fails

// DOM elements
let progressFill, progressLabel, modal, modalClose, modalOverlay, youtubeIframe, watchStoryBtn, confettiCanvas, ctx, refreshBtn;

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get DOM elements
    progressFill = document.getElementById('progress-fill');
    progressLabel = document.getElementById('progress-label');
    modal = document.getElementById('modal');
    modalClose = document.querySelector('.modal-close');
    modalOverlay = document.querySelector('.modal-overlay');
    youtubeIframe = document.getElementById('youtube-iframe');
    watchStoryBtn = document.getElementById('watch-story-btn');
    confettiCanvas = document.getElementById('confetti-canvas');
    refreshBtn = document.getElementById('refresh-btn');
    
    // Set up canvas context
    if (confettiCanvas) {
        ctx = confettiCanvas.getContext('2d');
        resizeCanvas();
    }
    
    // Initialize all functionality
    initProgressBar();
    initModal();
    initScrollReveal();
    initConfetti();
    initTicker();
    initCTAConfetti();
    initRefreshButton();
    initAutoRefresh();
    
    // Handle window resize for canvas
    window.addEventListener('resize', resizeCanvas);
});

// Progress Bar Functionality
async function initProgressBar() {
    if (!progressFill || !progressLabel) return;
    
    // Show loading state
    progressLabel.textContent = 'Loading market cap data...';
    progressFill.style.width = '0%';
    
    try {
        const marketCap = await fetchMarketCap();
        updateProgressBar(marketCap);
    } catch (error) {
        console.error('Failed to fetch market cap:', error);
        // Use fallback data
        updateProgressBar(FALLBACK_MARKETCAP);
        progressLabel.textContent += ' (using cached data)';
    }
}

async function fetchMarketCap() {
    try {
        const response = await fetch(COINGECKO_API_URL);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        
        if (data.market_data && data.market_data.market_cap && data.market_data.market_cap.usd) {
            return data.market_data.market_cap.usd;
        } else {
            throw new Error('Market cap data not found in API response');
        }
    } catch (error) {
        console.error('Error fetching market cap:', error);
        throw error;
    }
}

function updateProgressBar(currentMarketCap) {
    const percentage = Math.min((currentMarketCap / GOAL) * 100, 100);
    const formattedCurrent = formatNumber(Math.round(currentMarketCap));
    const formattedGoal = formatNumber(GOAL);
    
    // Update label
    progressLabel.textContent = `Current MC: $${formattedCurrent} | Goal: $${formattedGoal} | Progress: ${percentage.toFixed(2)}%`;
    
    // Animate progress bar
    setTimeout(() => {
        progressFill.style.width = `${percentage}%`;
        
        // Check if goal is reached
        if (percentage >= 100) {
            progressLabel.textContent = 'Goal Reached! 🎉';
            setTimeout(() => {
                fireConfetti();
            }, 1000);
        }
    }, 500);
}

// Format numbers with commas
function formatNumber(num) {
    return num.toLocaleString();
}

// Modal Functionality
function initModal() {
    if (!modal || !watchStoryBtn) return;
    
    // Open modal
    watchStoryBtn.addEventListener('click', openModal);
    
    // Close modal
    modalClose.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', closeModal);
    
    // Close on Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
}

function openModal() {
    if (!modal || !youtubeIframe) return;
    
    // Set YouTube embed URL with autoplay muted
    youtubeIframe.src = 'https://www.youtube.com/embed/HhKQvMCnuO8?autoplay=1&mute=1&rel=0';
    
    // Show modal
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    modal.setAttribute('aria-modal', 'true');
    
    // Focus trap
    modalClose.focus();
    
    // Prevent body scroll
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    if (!modal || !youtubeIframe) return;
    
    // Hide modal
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    modal.setAttribute('aria-modal', 'false');
    
    // Clear iframe src to stop audio
    youtubeIframe.src = '';
    
    // Restore body scroll
    document.body.style.overflow = '';
}

// Scroll Reveal Animation
function initScrollReveal() {
    const sections = document.querySelectorAll('.section');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    sections.forEach(section => {
        observer.observe(section);
    });
}

// Confetti System
function initConfetti() {
    // Listen for 'R' key press
    document.addEventListener('keydown', function(e) {
        if (e.key.toLowerCase() === 'r' && !modal.classList.contains('active')) {
            fireConfetti();
        }
    });
}

function initCTAConfetti() {
    const ctaButtons = document.querySelectorAll('.btn-primary');
    ctaButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Small confetti burst for CTA clicks
            fireConfetti(50, 1000);
        });
    });
}

function fireConfetti(particleCount = 120, duration = 2000) {
    if (!confettiCanvas || !ctx) return;
    
    const particles = [];
    const colors = ['#00ff88', '#7cffd4', '#ffffff', '#bdbdbd'];
    
    // Create particles
    for (let i = 0; i < particleCount; i++) {
        particles.push({
            x: Math.random() * confettiCanvas.width,
            y: -10,
            vx: (Math.random() - 0.5) * 4,
            vy: Math.random() * 3 + 2,
            color: colors[Math.floor(Math.random() * colors.length)],
            size: Math.random() * 4 + 2,
            life: 1,
            decay: Math.random() * 0.02 + 0.01
        });
    }
    
    // Animation loop
    const animate = () => {
        ctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
        
        particles.forEach((particle, index) => {
            // Update particle
            particle.x += particle.vx;
            particle.y += particle.vy;
            particle.vy += 0.1; // gravity
            particle.life -= particle.decay;
            
            // Draw particle
            ctx.save();
            ctx.globalAlpha = particle.life;
            ctx.fillStyle = particle.color;
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            ctx.fill();
            ctx.restore();
            
            // Remove dead particles
            if (particle.life <= 0 || particle.y > confettiCanvas.height) {
                particles.splice(index, 1);
            }
        });
        
        // Continue animation if particles remain
        if (particles.length > 0) {
            requestAnimationFrame(animate);
        } else {
            // Clear canvas after animation
            setTimeout(() => {
                ctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
            }, 100);
        }
    };
    
    animate();
}

// Canvas resize handler
function resizeCanvas() {
    if (!confettiCanvas) return;
    
    confettiCanvas.width = window.innerWidth;
    confettiCanvas.height = window.innerHeight;
}

// Ticker functionality
function initTicker() {
    const ticker = document.getElementById('ticker');
    if (!ticker) return;
    
    // Pause on hover/focus
    ticker.addEventListener('mouseenter', function() {
        const tickerContent = ticker.querySelector('.ticker-content');
        if (tickerContent) {
            tickerContent.style.animationPlayState = 'paused';
        }
    });
    
    ticker.addEventListener('mouseleave', function() {
        const tickerContent = ticker.querySelector('.ticker-content');
        if (tickerContent) {
            tickerContent.style.animationPlayState = 'running';
        }
    });
    
    // Pause on focus for accessibility
    ticker.addEventListener('focusin', function() {
        const tickerContent = ticker.querySelector('.ticker-content');
        if (tickerContent) {
            tickerContent.style.animationPlayState = 'paused';
        }
    });
    
    ticker.addEventListener('focusout', function() {
        const tickerContent = ticker.querySelector('.ticker-content');
        if (tickerContent) {
            tickerContent.style.animationPlayState = 'running';
        }
    });
}

// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerHeight = document.querySelector('header').offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Refresh Icon Functionality
function initRefreshButton() {
    if (!refreshBtn) return;
    
    refreshBtn.addEventListener('click', async function() {
        this.disabled = true;
        
        // Add spinning animation
        const svg = this.querySelector('svg');
        if (svg) {
            svg.style.animation = 'spin 1s linear infinite';
        }
        
        try {
            await initProgressBar();
        } finally {
            this.disabled = false;
            if (svg) {
                svg.style.animation = '';
            }
        }
    });
}

// Auto-refresh functionality
function initAutoRefresh() {
    // Refresh every 30 seconds
    setInterval(async () => {
        try {
            await initProgressBar();
        } catch (error) {
            console.error('Auto-refresh failed:', error);
        }
    }, 30000); // 30 seconds
}

// Check for reduced motion preference
function prefersReducedMotion() {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

// Disable animations if user prefers reduced motion
if (prefersReducedMotion()) {
    document.documentElement.style.setProperty('--animation-duration', '0.01ms');
    document.documentElement.style.setProperty('--transition-duration', '0.01ms');
}
