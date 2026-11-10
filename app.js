import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDXt1EsFGCodU12vGThwuWWTY08dWyJQlk",
  authDomain: "satoshi-ebce7.firebaseapp.com",
  projectId: "satoshi-ebce7",
  storageBucket: "satoshi-ebce7.firebasestorage.app",
  messagingSenderId: "344398063931",
  appId: "1:344398063931:web:560d82266a0213e88aef1e"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Cursor
const outline = document.getElementById('cursor-outline');
document.addEventListener('mousemove', (e) => {
    if(outline) {
        outline.style.left = e.clientX + 'px';
        outline.style.top = e.clientY + 'px';
    }
});

// Loader
window.addEventListener("load", () => {
    setTimeout(() => {
        document.getElementById('loader').classList.add('fade-out');
    }, 1000);
});

// SPA View Switching
window.showView = function(viewName) {
    document.querySelectorAll('.view-section').forEach(v => v.classList.remove('active'));
    document.getElementById('view-' + viewName).classList.add('active');
    
    // Snap scroll only works on the home page
    if(viewName === 'home') {
        document.documentElement.style.scrollSnapType = 'y mandatory';
    } else {
        document.documentElement.style.scrollSnapType = 'none';
    }
    window.scrollTo(0, 0);
}

window.checkAuthAndRedirect = function(viewName) {
    if(!auth.currentUser && viewName !== 'home') {
        alert("Please login to enter this portal.");
        toggleAuth();
        return;
    }
    showView(viewName);
}

// UI Toggles
window.toggleDrawer = () => document.getElementById('payment-drawer').classList.toggle('open');
window.toggleAuth = () => document.getElementById('auth-overlay').classList.toggle('active');
window.switchAuthTab = function(tab) {
    document.querySelectorAll('.auth-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.auth-form').forEach(f => f.classList.remove('active'));
    document.querySelectorAll('.auth-tab')[tab === 'login' ? 0 : 1].classList.add('active');
    document.getElementById(tab + '-form').classList.add('active');
}

window.copyV = function(text) {
    navigator.clipboard.writeText(text);
    alert("Copied: " + text);
}
window.copyText = function(elementId) {
    var copyText = document.getElementById(elementId);
    copyText.select();
    document.execCommand("copy");
    alert("Copied Referral Link: " + copyText.value);
}

// Auth Logic
window.handleSignup = async function(e) {
    e.preventDefault();
    const phone = document.getElementById('signup-phone').value;
    const password = document.getElementById('signup-password').value;
    const email = phone + "@satoshi.com"; // Dummy Email

    try {
        await createUserWithEmailAndPassword(auth, email, password);
        alert("Account Created Successfully! Please Login.");
        switchAuthTab('login');
    } catch (error) {
        alert("Signup Error: " + error.message);
    }
}

window.handleLogin = async function(e) {
    e.preventDefault();
    const phone = document.getElementById('login-phone').value;
    const password = document.getElementById('login-password').value;
    const email = phone + "@satoshi.com";

    try {
        await signInWithEmailAndPassword(auth, email, password);
        toggleAuth();
        alert("Login Successful!");
        showView('dashboard');
    } catch (error) {
        alert("Login Failed: " + error.message);
    }
}

window.handleLogout = function() {
    signOut(auth).then(() => {
        alert("Logged out.");
        showView('home');
    });
}

// Admin Login
window.adminLogin = function() {
    let pass = prompt("Enter Admin Password:");
    if(pass === "ADILahmed22@@") {
        showView('admin');
    } else if(pass !== null && pass !== "") {
        alert("Access Denied!");
    }
}

onAuthStateChanged(auth, (user) => {
    if(user) {
        document.getElementById('nav-login-btn').style.display = 'none';
        document.getElementById('nav-logout-btn').style.display = 'block';
        document.getElementById('user-balance').innerText = "$0.00"; 
    } else {
        document.getElementById('nav-login-btn').style.display = 'block';
        document.getElementById('nav-logout-btn').style.display = 'none';
    }
});

// Generators
const blockGrid = document.getElementById('blockGrid');
let blockCount = 0;
function generateBlocks(count) {
    for (let i = 0; i < count; i++) {
        const block = document.createElement('div');
        block.className = 'pixel-block';
        block.innerText = `#${blockCount + 1}`;
        blockGrid.appendChild(block);
        blockCount++;
    }
}
if(blockGrid) {
    generateBlocks(30);
    blockGrid.addEventListener('scroll', () => {
        if (blockGrid.scrollTop + blockGrid.clientHeight >= blockGrid.scrollHeight - 50) {
            generateBlocks(30);
        }
    });
}

const microJobsFeed = document.getElementById('microJobsFeed');
if(microJobsFeed) {
    for(let i=1; i<=20; i++) {
        const job = document.createElement('div');
        job.className = 'job-card';
        const avatarSeed = i % 2 === 0 ? 'Male' : 'Female';
        job.innerHTML = `
            <img src="https://api.dicebear.com/7.x/adventurer/svg?seed=${avatarSeed}" class="job-avatar" alt="User">
            <div class="job-content">
                <h4>Client Task #${i}</h4>
                <p>Like and comment on this post. Submit proof.</p>
                <div class="job-actions">
                    <span style="color: var(--gold);">❤️ Like</span>
                    <span style="color: var(--gold);">💬 Comment</span>
                    <span>🔗 Open Link</span>
                </div>
            </div>
        `;
        microJobsFeed.appendChild(job);
    }
}

const articlesFeed = document.getElementById('articlesFeed');
if(articlesFeed) {
    for(let i=1; i<=10; i++) {
        const article = document.createElement('div');
        article.className = 'job-card';
        article.innerHTML = `
            <div style="width: 80px; height: 80px; background: #eee; display:flex; justify-content:center; align-items:center; font-size:10px; color:#999;">Img</div>
            <div class="job-content">
                <h4>Read Article #${i}: Future of Tech</h4>
                <p>Click to open. 1-minute timer starts.</p>
                <div class="job-actions">
                    <span>⏱ 1 Minute</span>
                    <span>💰 +$0.02</span>
                </div>
            </div>
        `;
        articlesFeed.appendChild(article);
    }
}

// Scroll Reveal
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('active');
    });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
