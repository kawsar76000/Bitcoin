:root { 
    --black: #000000; 
    --white: #ffffff; 
    --grey: #888888;
    --gold: #FCD535;
}

html { scroll-snap-type: y mandatory; scroll-behavior: smooth; }
body { 
    margin: 0; padding: 0; background: var(--white); color: var(--black); 
    font-family: 'Times New Roman', serif; overflow-x: hidden; cursor: none; 
}

#cursor-outline { position: fixed; width: 10px; height: 10px; border: 1px solid var(--black); border-radius: 50%; pointer-events: none; z-index: 10000; transform: translate(-50%, -50%); }
@media (max-width: 768px) { #cursor-outline { display: none; } body { cursor: auto; } }

/* Navbar */
.nav-bar {
    position: fixed; top: 0; width: 100%; height: 140px;
    display: flex; flex-direction: column; align-items: center; justify-content: center;
    z-index: 2000; background: rgba(255,255,255,0.95); backdrop-filter: blur(10px);
    border-bottom: 1px solid rgba(0,0,0,0.05);
}
.nav-actions { position: absolute; left: 30px; top: 60px; display: flex; gap: 20px; }
.nav-link { font-size: 10px; letter-spacing: 2px; font-weight: bold; border-bottom: 1px solid var(--black); cursor: pointer; text-transform: uppercase; background: none; border-top:none; border-left:none; border-right:none; font-family: inherit;}
.portal-link { position: absolute; right: 30px; top: 60px; font-size: 10px; letter-spacing: 2px; font-weight: bold; text-decoration: none; color: black; border-bottom: 1px solid var(--black);}
.satoshi-logo { width: 50px; height: 50px; object-fit: contain; transition: transform 0.3s ease; }
.rr-logo-container:hover .satoshi-logo { transform: scale(1.1); fill: var(--gold); }
.brand-subtitle { font-size: 10px; letter-spacing: 10px; margin-top: 5px; text-transform: uppercase; }

/* Views (SPA) */
.view-section { display: none; opacity: 0; transition: opacity 0.5s ease; }
.view-section.active { display: block; opacity: 1; }
.inner-container { min-height: 100vh; padding: 50px 5%; display: flex; flex-direction: column; align-items: center; text-align: center; }

/* Homepage Sections */
.snap-section { height: 100vh; width: 100%; scroll-snap-align: start; display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center; padding: 0 5%; box-sizing: border-box; }
.reveal { opacity: 0; transform: translateY(30px); transition: 1.2s ease-out; }
.reveal.active { opacity: 1; transform: translateY(0); }
.label { font-size: 9px; letter-spacing: 10px; color: #888; text-transform: uppercase; margin-bottom: 25px; }
.title { font-size: 32px; font-weight: 100; letter-spacing: 18px; text-transform: uppercase; margin-bottom: 15px; }
.sub-desc { font-size: 11px; letter-spacing: 3px; color: #999; margin-bottom: 40px; font-style: italic; }

/* Buttons */
.btn-enter { padding: 18px 80px; border: 1px solid var(--black); text-decoration: none; color: var(--black); font-size: 10px; letter-spacing: 6px; transition: 0.4s; text-transform: uppercase; background: transparent; box-shadow: 0 4px 15px rgba(0,0,0,0.05); cursor: pointer; }
.btn-enter:hover { background: var(--black); color: var(--gold); border-color: var(--black); box-shadow: 0 8px 25px rgba(0,0,0,0.2); transform: translateY(-2px); }
.btn-auth { padding: 15px; background: var(--black); color: var(--white); border: none; cursor: pointer; letter-spacing: 3px; font-size: 10px; margin-top: 10px; transition: 0.3s; font-family: inherit; }
.btn-auth:hover { background: var(--gold); color: var(--black); }

/* Block Grid */
.grid-container { display: flex; flex-wrap: wrap; justify-content: center; gap: 5px; max-width: 900px; margin: 0 auto; max-height: 60vh; overflow-y: auto; padding: 10px; border: 1px solid #eee; border-radius: 5px; background: #fafafa; }
.grid-container::-webkit-scrollbar { width: 5px; }
.grid-container::-webkit-scrollbar-thumb { background: var(--gold); }
.pixel-block { width: 100px; height: 100px; background: var(--white); border: 1px solid #ddd; display: flex; align-items: center; justify-content: center; font-size: 10px; color: #aaa; transition: 0.3s; cursor: pointer; }
.pixel-block:hover { background: var(--gold); color: var(--black); border-color: var(--black); }

/* Feed (Micro Jobs & Articles) */
.feed-container { width: 100%; max-width: 600px; margin: 0 auto; max-height: 60vh; overflow-y: auto; text-align: left; padding-right: 10px; }
.feed-container::-webkit-scrollbar { width: 5px; }
.feed-container::-webkit-scrollbar-thumb { background: var(--black); }
.job-card { display: flex; gap: 15px; border: 1px solid #eee; padding: 15px; margin-bottom: 15px; background: var(--white); transition: 0.3s; }
.job-card:hover { border-color: var(--gold); }
.job-avatar { width: 45px; height: 45px; border-radius: 50%; border: 1px solid #ddd; padding: 2px; background: #f9f9f9; }
.job-content h4 { margin: 0 0 5px 0; font-size: 14px; font-weight: bold; }
.job-content p { margin: 0; font-size: 11px; color: #666; font-style: italic; }
.job-actions { margin-top: 10px; display: flex; gap: 15px; font-size: 10px; color: var(--grey); }
.job-actions span { cursor: pointer; transition: 0.3s; }
.job-actions span:hover { color: var(--black); }

/* Dashboard & Admin Grid */
.dash-grid, .admin-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; width: 100%; max-width: 800px; margin-bottom: 20px; }
.dash-card, .admin-card { border: 1px solid #eee; padding: 20px; text-align: center; background: #fafafa; }
.dash-card h4, .admin-card h4 { font-size: 10px; letter-spacing: 2px; color: var(--grey); margin-bottom: 10px; }
.dash-card h1 { margin: 0; font-weight: 100; color: var(--gold); }
.admin-card input { width: 100%; padding: 10px; margin-bottom: 10px; border: 1px solid #ccc; font-family: inherit; box-sizing: border-box; }
.referral-box, .withdraw-box { width: 100%; max-width: 800px; border: 1px solid #eee; padding: 20px; margin-bottom: 20px; text-align: left; box-sizing: border-box; }
.ref-input { display: flex; gap: 10px; margin-top: 10px; }
.ref-input input { flex: 1; padding: 10px; border: 1px solid #ccc; font-family: inherit; }
.ref-input button { background: var(--black); color: white; border: none; padding: 0 20px; cursor: pointer; }
.withdraw-box select, .withdraw-box input { width: 100%; padding: 10px; margin-bottom: 10px; border: 1px solid #ccc; font-family: inherit; box-sizing: border-box; }

/* Footer */
.footer { background: var(--white); padding: 80px 10%; border-top: 1px solid #f0f0f0; display: grid; grid-template-columns: 1fr 1fr; gap: 50px; }
.footer h3 { font-size: 12px; letter-spacing: 5px; margin-bottom: 20px; }
.gov-item { font-size: 11px; line-height: 1.8; margin-bottom: 15px; }
.gov-item b { display: block; text-transform: uppercase; font-size: 10px; letter-spacing: 2px; margin-bottom: 5px; }
.step-box { margin-bottom: 15px; }
.step-num { font-family: serif; font-style: italic; font-size: 18px; margin-right: 10px; }
.step-text { font-size: 11px; }
.copyright { grid-column: 1 / -1; text-align: center; font-size: 10px; letter-spacing: 2px; margin-top: 40px; color: var(--grey); border-top: 1px solid #fafafa; padding-top: 20px; }

/* Drawer & Modal */
#payment-drawer { position: fixed; top: 0; left: -100%; width: 350px; height: 100vh; background: var(--white); z-index: 3000; transition: 0.5s; padding: 40px 30px; box-shadow: 5px 0 30px rgba(0,0,0,0.1); border-right: 1px solid #eee; box-sizing: border-box; }
#payment-drawer.open { left: 0; }
.pay-item { border: 1px solid #ccc; padding: 15px; margin-bottom: 20px; cursor: pointer; border-radius: 5px; word-break: break-all; }
.pay-item:hover { border-color: var(--gold); background: #fffdf5; }
.pay-item h4 { margin: 0 0 10px 0; font-size: 11px; color: var(--grey); }
.pay-item p { margin: 0; font-size: 12px; font-weight: bold; }

#auth-overlay { position: fixed; top: 0; left: 0; width: 100%; height: 100vh; background: rgba(0,0,0,0.85); backdrop-filter: blur(8px); display: flex; justify-content: center; align-items: center; z-index: 5000; opacity: 0; pointer-events: none; transition: 0.3s; }
#auth-overlay.active { opacity: 1; pointer-events: all; }
.auth-container { background: var(--white); padding: 40px 30px; width: 350px; max-width: 90%; position: relative; box-sizing: border-box; }
.auth-close { position: absolute; top: 15px; right: 15px; background: none; border: none; font-size: 18px; cursor: pointer; }
.auth-header h2 { font-size: 14px; letter-spacing: 5px; text-align: center; margin-bottom: 30px; }
.auth-tabs { display: flex; border-bottom: 1px solid #eee; margin-bottom: 20px; }
.auth-tab { flex: 1; padding: 10px; background: none; border: none; border-bottom: 2px solid transparent; cursor: pointer; font-family: inherit; font-size: 10px; letter-spacing: 2px; }
.auth-tab.active { border-bottom-color: var(--gold); font-weight: bold; }
.auth-form { display: none; flex-direction: column; gap: 15px; }
.auth-form.active { display: flex; }
.input-group { display: flex; flex-direction: column; gap: 5px; }
.input-group label { font-size: 9px; letter-spacing: 1px; color: var(--grey); }
.input-group input { padding: 10px 0; border: none; border-bottom: 1px solid #ccc; outline: none; font-family: inherit; font-size: 14px; }
.input-group input:focus { border-bottom-color: var(--gold); }

/* Telegram Buttons */
.telegram-btn { position: fixed; bottom: 30px; width: 50px; height: 50px; border: 0.5px solid var(--black); border-radius: 50%; display: flex; align-items: center; justify-content: center; z-index: 2500; background: #fff; transition: 0.3s; box-shadow: 0 4px 15px rgba(0,0,0,0.1); }
.telegram-btn svg { fill: var(--black); width: 22px; transition: 0.3s; }
.telegram-btn:hover { background: var(--black); transform: translateY(-5px); border-color: var(--gold); }
.telegram-btn:hover svg { fill: var(--gold); }
.tg-channel { left: 30px; }
.tg-group { right: 30px; }

/* Loader */
#loader { position: fixed; top: 0; left: 0; width: 100%; height: 100vh; background: #000; display: flex; flex-direction: column; justify-content: center; align-items: center; z-index: 99999; transition: opacity 0.8s; }
.loader-logo { font-size: 80px; font-weight: 900; color: var(--gold); animation: pulse 2s infinite; }
.fade-out { opacity: 0; pointer-events: none; }
@keyframes pulse { 0%, 100% { transform: scale(0.9); opacity: 0.5; } 50% { transform: scale(1); opacity: 1; } }

/* Responsive */
@media (max-width: 768px) {
    .title { font-size: 20px; letter-spacing: 8px; }
    .btn-enter { padding: 15px 40px; font-size: 8px; }
    .dash-grid, .admin-grid { grid-template-columns: 1fr; }
    .footer { grid-template-columns: 1fr; padding: 40px 5%; }
}
