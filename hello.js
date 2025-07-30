class GreetingApp {
    constructor() {
        this.button = document.getElementById('greetingButton');
        this.greetingText = document.getElementById('updateContent');
        this.subtitleText = document.getElementById('subtitleText');
        this.resetContainer = document.getElementById('resetContainer');
        this.resetButton = document.getElementById('resetButton');
        
        this.originalGreeting = 'Namaste, Beautiful Soul! 🙏';
        this.originalSubtitle = 'Click below to get your personalized greeting based on Indian time';
        this.isPersonalized = false;
        
        // Expanded greeting messages for different times of day
        this.greetingMessages = {
            morning: [
                "Good morning, {name}! Rise and shine like the golden sun breaking through the horizon. Today is a fresh canvas waiting for your beautiful colors to paint upon it! ☀️",
                "Suprabhat, {name}! May your day be as bright and magnificent as the morning rays dancing through the clouds. Embrace every moment with joy and enthusiasm! 🌅",
                "Good morning, dear {name}! Time to conquer the world with your incredible spirit and determination. You have the power to make today absolutely extraordinary! 💪",
                "Hello beautiful {name}! The morning breeze carries whispers of new opportunities and endless possibilities. Step forward with confidence and grace! 🌸",
                "Good morning, wonderful {name}! Let's make today amazing together. Your positive energy has the power to transform not just your day, but everyone around you! ✨",
                "Shubh prabhat, {name}! May this glorious morning fill you with boundless positive energy and inner peace. You are destined for greatness today! 🌺",
                "Good morning, {name}! The early bird catches the worm, and you're soaring high above the clouds. Your dedication and passion will lead you to incredible heights! 🐦",
                "Hello sunshine {name}! Ready to sparkle and illuminate the world with your radiant personality? Today is your stage to shine brilliantly! 🌟"
            ],
            afternoon: [
                "Good afternoon, {name}! Hope your day is flowing like a beautiful river, carrying you towards amazing adventures and wonderful discoveries! 🌞",
                "Hello brilliant {name}! The afternoon sun is casting its golden glow just for you, highlighting all the incredible achievements you've made today! ☀️",
                "Good afternoon, amazing {name}! Keep that magnificent energy flowing like a powerful waterfall. Your enthusiasm is contagious and inspiring! 💫",
                "Hello {name}! The day is still young and bursting with infinite possibilities. Every moment ahead is a chance to create something beautiful! 🌈",
                "Good afternoon, dear {name}! Time for some midday motivation to fuel your incredible journey. You're capable of achieving anything you set your mind to! 🚀",
                "Hello wonderful {name}! May this peaceful afternoon bring you abundant joy, success, and all the happiness your heart desires! 🎯",
                "Good afternoon, {name}! You're doing absolutely fantastic, and your progress is truly remarkable. Keep pushing forward with that amazing spirit! 👏",
                "Hello magnificent {name}! The afternoon vibes are absolutely perfect, just like the positive energy you bring to everything you touch! 🌻"
            ],
            evening: [
                "Good evening, {name}! Time to unwind and reflect on all the wonderful moments that made today special. You've earned this peaceful time! 🌅",
                "Shubh sandhya, {name}! The evening brings gentle peace and tranquility to your soul. Let the soft twilight embrace you with warmth and comfort! 🕯️",
                "Good evening, dear {name}! Hope you had a beautifully productive day filled with accomplishments and joyful moments that made you smile! 🌙",
                "Hello radiant {name}! The golden hour is painting the sky in magnificent colors, just like the beautiful impact you make on the world! ✨",
                "Good evening, {name}! Time to relax, breathe deeply, and enjoy the simple pleasures that life offers. You deserve all this serenity! 🍃",
                "Hello {name}! The evening sky is painting masterpieces with clouds and colors, just as beautiful as your kind and generous spirit! 🌆",
                "Good evening, wonderful {name}! Let's celebrate today's achievements and all the positive energy you've shared with the world! 🎉",
                "Hello peaceful {name}! May this serene evening bring you deep inner peace and prepare you for tomorrow's beautiful adventures! 🧘‍♀️"
            ],
            night: [
                "Good night, {name}! Sweet dreams filled with magical adventures and peaceful sleep that rejuvenates your beautiful soul for tomorrow's journey! 🌙",
                "Shubh ratri, {name}! May the twinkling stars above guide your dreams to wonderful places and fill your night with celestial peace! ⭐",
                "Good night, dear {name}! Rest well and let your body and mind recharge completely for all the amazing opportunities tomorrow will bring! 😴",
                "Hello sleepy {name}! Time to let go of today's worries and embrace the gentle night that wraps you in comfort and tranquility! 🌌",
                "Good night, {name}! May your sleep be as serene and beautiful as moonlight dancing on calm waters, bringing you complete restoration! 🌕",
                "Hello dreamy {name}! The peaceful night is calling you to surrender to sweet dreams and let your spirit soar through starlit skies! 💤",
                "Good night, wonderful {name}! Close your eyes knowing that tomorrow is another beautiful day filled with endless possibilities and joy! 🌠",
                "Shubh ratri, {name}! Let the gentle night heal your heart, rejuvenate your spirit, and prepare you for tomorrow's beautiful adventures! 🌸"
            ]
        };
        
        // Follow-up messages for repeated interactions
        this.followUpMessages = [
            "You're absolutely radiant today, glowing with an inner light that brightens everything around you! Keep shining your magnificent spirit! ✨",
            "Your positive energy is incredibly contagious and uplifting! Continue spreading this beautiful joy wherever you go, the world needs more of you! 😊",
            "You're a true blessing to this world, and your existence makes everything more beautiful! Never forget how special and important you are! 🙏",
            "Your genuine smile has the magical power to light up even the darkest rooms and warm the coldest hearts! Keep sharing that radiant joy! 😄",
            "You're so much stronger than you think and braver than you feel! Your courage and resilience inspire everyone who knows you! 💪",
            "The entire universe conspires to help beautiful souls like you achieve their dreams! Trust in your journey and keep moving forward! 🌟",
            "You're exactly where you need to be right now in your incredible journey! Trust the process and embrace every moment with gratitude! 🦋",
            "Your natural kindness and compassion make the world a significantly better place! Thank you for being such a wonderful human being! ❤️",
            "You're a living masterpiece in progress, constantly creating beauty and meaning! Keep painting your life with vibrant colors! 🎨",
            "Your unique journey is absolutely beautiful and inspiring! Embrace every twist and turn as part of your amazing story! 🌈",
            "You have the incredible power to make today extraordinary and magical! Use that amazing energy to create wonderful moments! ⚡",
            "Your presence is a precious gift to everyone around you, bringing light and happiness wherever you go! You matter so much! 🎁"
        ];
        
        this.init();
    }
    
    init() {
        this.button.addEventListener('click', () => this.handleGreeting());
        this.resetButton.addEventListener('click', () => this.resetGreeting());
        
        // Add keyboard support
        this.button.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.handleGreeting();
            }
        });
        
        this.resetButton.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.resetGreeting();
            }
        });
        
        // Add entrance animation
        this.animateEntrance();
    }
    
    animateEntrance() {
        const card = document.querySelector('.greeting-card');
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px) scale(0.95)';
        
        setTimeout(() => {
            card.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0) scale(1)';
        }, 100);
    }
    
    async handleGreeting() {
        if (this.isPersonalized) {
            this.showPersonalizedMessage();
            return;
        }
        
        const name = await this.getNameInput();
        
        if (name && name.trim()) {
            this.updateGreeting(name.trim());
        }
    }
    
    getNameInput() {
        return new Promise((resolve) => {
            // Create a more elegant input modal
            const modal = this.createInputModal();
            document.body.appendChild(modal);
            
            const input = modal.querySelector('.modal-input');
            const submitBtn = modal.querySelector('.modal-submit');
            const cancelBtn = modal.querySelector('.modal-cancel');
            
            // Focus the input
            setTimeout(() => input.focus(), 100);
            
            const cleanup = () => {
                modal.remove();
            };
            
            const submit = () => {
                const value = input.value.trim();
                cleanup();
                resolve(value);
            };
            
            const cancel = () => {
                cleanup();
                resolve(null);
            };
            
            submitBtn.addEventListener('click', submit);
            cancelBtn.addEventListener('click', cancel);
            
            input.addEventListener('keydown', (e) => {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    submit();
                } else if (e.key === 'Escape') {
                    e.preventDefault();
                    cancel();
                }
            });
            
            // Close on backdrop click
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    cancel();
                }
            });
        });
    }
    
    createInputModal() {
        const modal = document.createElement('div');
        modal.className = 'modal-overlay';
        modal.innerHTML = `
            <div class="modal-content">
                <div class="modal-header">
                    <h3>What's your name?</h3>
                    <p>Let me create a personalized greeting for you</p>
                </div>
                <div class="modal-body">
                    <input type="text" class="modal-input" placeholder="Enter your beautiful name..." maxlength="50">
                </div>
                <div class="modal-actions">
                    <button class="modal-cancel">Maybe Later</button>
                    <button class="modal-submit">Create Greeting</button>
                </div>
            </div>
        `;
        
        // Add modal styles
        const style = document.createElement('style');
        style.textContent = `
            .modal-overlay {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.6);
                backdrop-filter: blur(8px);
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 1000;
                opacity: 0;
                animation: modalFadeIn 0.3s ease forwards;
                padding: 1rem;
            }
            
            @keyframes modalFadeIn {
                to { opacity: 1; }
            }
            
            .modal-content {
                background: white;
                border-radius: 20px;
                padding: 2rem;
                max-width: 400px;
                width: 100%;
                box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
                transform: translateY(20px) scale(0.95);
                animation: modalSlideIn 0.3s ease 0.1s forwards;
            }
            
            @keyframes modalSlideIn {
                to {
                    transform: translateY(0) scale(1);
                }
            }
            
            .modal-header h3 {
                margin: 0 0 0.5rem 0;
                color: #2d3748;
                font-size: 1.5rem;
                font-weight: 600;
            }
            
            .modal-header p {
                margin: 0 0 1.5rem 0;
                color: #4a5568;
                font-size: 0.95rem;
            }
            
            .modal-input {
                width: 100%;
                padding: 1rem;
                border: 2px solid #e2e8f0;
                border-radius: 12px;
                font-size: 1rem;
                font-family: inherit;
                transition: all 0.3s ease;
                margin-bottom: 1.5rem;
            }
            
            .modal-input:focus {
                outline: none;
                border-color: #667eea;
                box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
            }
            
            .modal-actions {
                display: flex;
                gap: 1rem;
                justify-content: flex-end;
            }
            
            .modal-cancel, .modal-submit {
                padding: 0.75rem 1.5rem;
                border-radius: 10px;
                font-family: inherit;
                font-weight: 500;
                cursor: pointer;
                transition: all 0.3s ease;
                border: none;
            }
            
            .modal-cancel {
                background: #f7fafc;
                color: #4a5568;
                border: 1px solid #e2e8f0;
            }
            
            .modal-cancel:hover {
                background: #edf2f7;
            }
            
            .modal-submit {
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                color: white;
            }
            
            .modal-submit:hover {
                transform: translateY(-2px);
                box-shadow: 0 8px 25px rgba(102, 126, 234, 0.3);
            }
            
            @media (max-width: 480px) {
                .modal-content {
                    padding: 1.5rem;
                    margin: 1rem;
                }
                
                .modal-actions {
                    flex-direction: column;
                }
                
                .modal-cancel, .modal-submit {
                    width: 100%;
                }
            }
        `;
        
        modal.appendChild(style);
        return modal;
    }
    
    updateGreeting(name) {
        // Add updating animation
        this.greetingText.classList.add('updating');
        
        setTimeout(() => {
            const { period, timeInfo } = this.getISTTimeInfo();
            const greetings = this.greetingMessages[period];
            const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];
            const personalizedGreeting = randomGreeting.replace('{name}', name);
            
            this.greetingText.textContent = personalizedGreeting;
            this.subtitleText.innerHTML = `
                <div class="time-info">
                    <span class="current-time">🕐 ${timeInfo.time} IST</span>
                    <span class="current-date">📅 ${timeInfo.date}</span>
                </div>
                <div class="personal-message">Wishing you an absolutely wonderful and blessed ${period} filled with joy, success, and beautiful moments, dear ${name}!</div>
            `;
            this.button.querySelector('.button-text').textContent = 'Say Hello Again';
            
            this.greetingText.classList.remove('updating');
            this.isPersonalized = true;
            
            // Show reset button with animation
            this.resetContainer.style.display = 'block';
            setTimeout(() => {
                this.resetContainer.classList.add('show');
            }, 100);
            
            // Add celebration effect
            this.addCelebrationEffect();
            
        }, 400);
    }
    
    showPersonalizedMessage() {
        const legacyMessages = [
            "You're absolutely amazing! 🌟",
            "Thanks for brightening my day! ☀️",
            "You have such positive energy! ✨",
            "Keep being your wonderful self! 💖",
            "Your smile lights up the world! 😊"
        ];
        
        const allMessages = [...this.followUpMessages, ...legacyMessages];
        const randomMessage = allMessages[Math.floor(Math.random() * allMessages.length)];
        
        // Temporarily show the message
        const originalText = this.subtitleText.textContent;
        this.subtitleText.textContent = randomMessage;
        this.subtitleText.style.color = '#667eea';
        this.subtitleText.style.fontWeight = '600';
        
        setTimeout(() => {
            this.subtitleText.textContent = originalText;
            this.subtitleText.style.color = '';
            this.subtitleText.style.fontWeight = '';
        }, 2000);
        
        this.addCelebrationEffect();
    }
    
    resetGreeting() {
        this.greetingText.classList.add('updating');
        
        setTimeout(() => {
            this.greetingText.textContent = this.originalGreeting;
            this.subtitleText.textContent = this.originalSubtitle;
            this.button.querySelector('.button-text').textContent = 'Say Hello';
            
            this.greetingText.classList.remove('updating');
            this.isPersonalized = false;
            
            // Hide reset button
            this.resetContainer.classList.remove('show');
            setTimeout(() => {
                this.resetContainer.style.display = 'none';
            }, 400);
            
        }, 400);
    }
    
    getISTTimeInfo() {
        // Get current time in Indian Standard Time (UTC+5:30)
        const now = new Date();
        const istOffset = 5.5 * 60 * 60 * 1000; // IST is UTC+5:30
        const istTime = new Date(now.getTime() + istOffset);
        
        const hour = istTime.getUTCHours();
        const minutes = istTime.getUTCMinutes();
        const day = istTime.getUTCDate();
        const month = istTime.getUTCMonth() + 1;
        const year = istTime.getUTCFullYear();
        
        // Format time in 12-hour format
        const hour12 = hour === 0 ? 12 : hour > 12 ? hour - 12 : hour;
        const ampm = hour >= 12 ? 'PM' : 'AM';
        const formattedTime = `${hour12}:${minutes.toString().padStart(2, '0')} ${ampm}`;
        const formattedDate = `${day}/${month}/${year}`;
        
        // Determine time period
        let period;
        if (hour >= 5 && hour < 12) period = 'morning';
        else if (hour >= 12 && hour < 17) period = 'afternoon';
        else if (hour >= 17 && hour < 21) period = 'evening';
        else period = 'night';
        
        return {
            period,
            timeInfo: { time: formattedTime, date: formattedDate }
        };
    }
    
    addCelebrationEffect() {
        // Create temporary celebration particles
        for (let i = 0; i < 12; i++) {
            setTimeout(() => {
                this.createCelebrationParticle();
            }, i * 100);
        }
    }
    
    createCelebrationParticle() {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: fixed;
            width: 8px;
            height: 8px;
            background: linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4, #feca57);
            border-radius: 50%;
            pointer-events: none;
            z-index: 1000;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
        `;
        
        document.body.appendChild(particle);
        
        const angle = Math.random() * Math.PI * 2;
        const velocity = 100 + Math.random() * 100;
        const gravity = 300;
        const life = 1000 + Math.random() * 1000;
        
        let vx = Math.cos(angle) * velocity;
        let vy = Math.sin(angle) * velocity;
        let x = window.innerWidth / 2;
        let y = window.innerHeight / 2;
        
        const startTime = Date.now();
        
        const animate = () => {
            const elapsed = Date.now() - startTime;
            const progress = elapsed / life;
            
            if (progress >= 1) {
                particle.remove();
                return;
            }
            
            const dt = 16 / 1000; // 60fps
            vy += gravity * dt;
            x += vx * dt;
            y += vy * dt;
            
            particle.style.left = x + 'px';
            particle.style.top = y + 'px';
            particle.style.opacity = 1 - progress;
            particle.style.transform = `scale(${1 - progress * 0.5})`;
            
            requestAnimationFrame(animate);
        };
        
        requestAnimationFrame(animate);
    }
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new GreetingApp();
});

// Add some extra interactivity
document.addEventListener('mousemove', (e) => {
    const card = document.querySelector('.greeting-card');
    if (!card) return;
    
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 20;
    const rotateY = (centerX - x) / 20;
    
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(0px)`;
});

document.addEventListener('mouseleave', () => {
    const card = document.querySelector('.greeting-card');
    if (card) {
        card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
    }
});
