
<style>
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Jost:wght@300;400;500&display=swap');

  * { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --rose: #c9778a;
    --rose-light: #f5e8ec;
    --rose-dark: #8b3d52;
    --gold: #b8953a;
    --gold-light: #f7f0e0;
    --cream: #faf7f4;
    --text: #2a1f1f;
    --text-soft: #6b5050;
    --border: rgba(180,120,120,0.15);
  }

  body {
    font-family: 'Jost', sans-serif;
    background: var(--cream);
    color: var(--text);
    min-height: 100vh;
  }

  .hero {
    background: linear-gradient(160deg, #2a1520 0%, #4a2535 60%, #2a1a28 100%);
    padding: 3rem 2rem 2.5rem;
    text-align: center;
    position: relative;
    overflow: hidden;
  }

  .hero::before {
    content: '';
    position: absolute;
    inset: 0;
    background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 5 L32 24 L51 24 L36 35 L42 54 L30 43 L18 54 L24 35 L9 24 L28 24 Z' fill='none' stroke='rgba(185,149,58,0.06)' stroke-width='1'/%3E%3C/svg%3E") repeat;
    opacity: 1;
  }

  .hero-eyebrow {
    font-family: 'Jost', sans-serif;
    font-size: 11px;
    letter-spacing: 4px;
    text-transform: uppercase;
    color: var(--gold);
    margin-bottom: 1rem;
    position: relative;
  }

  .hero h1 {
    font-family: 'Cormorant Garamond', serif;
    font-size: 3.4rem;
    font-weight: 300;
    color: #f5ede8;
    line-height: 1.1;
    position: relative;
    margin-bottom: 0.5rem;
  }

  .hero h1 em {
    font-style: italic;
    color: #e8c4b0;
  }

  .hero-sub {
    font-family: 'Jost', sans-serif;
    font-size: 13px;
    color: rgba(245,237,232,0.5);
    letter-spacing: 2px;
    margin-top: 0.8rem;
    position: relative;
  }

  .divider-gold {
    display: flex;
    align-items: center;
    gap: 12px;
    justify-content: center;
    margin: 1.2rem 0 0;
    position: relative;
  }

  .divider-gold::before,
  .divider-gold::after {
    content: '';
    flex: 1;
    max-width: 80px;
    height: 0.5px;
    background: var(--gold);
    opacity: 0.4;
  }

  .divider-dot {
    width: 5px;
    height: 5px;
    background: var(--gold);
    border-radius: 50%;
    opacity: 0.7;
  }

  .nav {
    background: white;
    border-bottom: 0.5px solid var(--border);
    display: flex;
    gap: 0;
    justify-content: center;
    position: sticky;
    top: 0;
    z-index: 100;
    box-shadow: 0 1px 20px rgba(42,21,32,0.06);
  }

  .nav-btn {
    background: none;
    border: none;
    padding: 1rem 1.4rem;
    font-family: 'Jost', sans-serif;
    font-size: 12px;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    color: var(--text-soft);
    cursor: pointer;
    border-bottom: 2px solid transparent;
    transition: all 0.25s;
    white-space: nowrap;
  }

  .nav-btn:hover { color: var(--rose-dark); }

  .nav-btn.active {
    color: var(--rose-dark);
    border-bottom-color: var(--rose);
    font-weight: 500;
  }

  .container { max-width: 860px; margin: 0 auto; padding: 2.5rem 1.5rem; }

  .tab { display: none; }
  .tab.active { display: block; }

  .section-heading {
    font-family: 'Cormorant Garamond', serif;
    font-size: 2.2rem;
    font-weight: 300;
    color: var(--rose-dark);
    margin-bottom: 0.3rem;
  }

  .section-heading em { font-style: italic; color: var(--gold); }

  .section-intro {
    font-size: 13.5px;
    color: var(--text-soft);
    margin-bottom: 2rem;
    line-height: 1.7;
    letter-spacing: 0.3px;
  }

  .thin-rule {
    border: none;
    border-top: 0.5px solid var(--border);
    margin: 2rem 0;
  }

  /* Itinerary */
  .day-card {
    background: white;
    border: 0.5px solid var(--border);
    border-radius: 12px;
    margin-bottom: 1.2rem;
    overflow: hidden;
  }

  .day-header {
    background: linear-gradient(135deg, var(--rose-dark), #6b2840);
    padding: 1rem 1.4rem;
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .day-badge {
    background: rgba(255,255,255,0.15);
    border: 0.5px solid rgba(255,255,255,0.25);
    border-radius: 8px;
    padding: 0.3rem 0.7rem;
    font-size: 11px;
    letter-spacing: 2px;
    color: rgba(255,255,255,0.9);
    text-transform: uppercase;
    font-family: 'Jost', sans-serif;
  }

  .day-title {
    font-family: 'Cormorant Garamond', serif;
    font-size: 1.3rem;
    font-weight: 400;
    color: white;
    font-style: italic;
  }

  .timeline {
    padding: 1.2rem 1.4rem;
    display: flex;
    flex-direction: column;
    gap: 0;
  }

  .timeline-item {
    display: grid;
    grid-template-columns: 64px 1px 1fr;
    gap: 0 1rem;
    padding-bottom: 1.2rem;
  }

  .timeline-item:last-child { padding-bottom: 0; }

  .t-time {
    font-size: 11.5px;
    color: var(--gold);
    font-family: 'Jost', sans-serif;
    letter-spacing: 0.5px;
    padding-top: 2px;
    text-align: right;
  }

  .t-line-wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0;
  }

  .t-dot {
    width: 8px;
    height: 8px;
    background: var(--rose);
    border-radius: 50%;
    flex-shrink: 0;
    margin-top: 4px;
  }

  .t-line {
    flex: 1;
    width: 0.5px;
    background: var(--border);
    margin-top: 4px;
  }

  .timeline-item:last-child .t-line { display: none; }

  .t-content {}
  .t-name { font-size: 14px; font-weight: 500; color: var(--text); }
  .t-desc { font-size: 12.5px; color: var(--text-soft); margin-top: 2px; line-height: 1.6; }

  /* Restaurants */
  .resto-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }

  .resto-card {
    background: white;
    border: 0.5px solid var(--border);
    border-radius: 12px;
    padding: 1.2rem;
    position: relative;
  }

  .resto-tag {
    display: inline-block;
    background: var(--rose-light);
    color: var(--rose-dark);
    font-size: 10px;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    padding: 3px 8px;
    border-radius: 4px;
    margin-bottom: 0.6rem;
    font-family: 'Jost', sans-serif;
  }

  .resto-name {
    font-family: 'Cormorant Garamond', serif;
    font-size: 1.25rem;
    font-weight: 400;
    color: var(--text);
    margin-bottom: 0.3rem;
  }

  .resto-desc { font-size: 12.5px; color: var(--text-soft); line-height: 1.6; }

  .resto-stars {
    margin-top: 0.7rem;
    color: var(--gold);
    font-size: 12px;
    letter-spacing: 1px;
  }

  .resto-detail {
    font-size: 11.5px;
    color: var(--text-soft);
    margin-top: 0.4rem;
    display: flex;
    align-items: center;
    gap: 4px;
  }

  /* Things To Do */
  .activity-list { display: flex; flex-direction: column; gap: 1rem; }

  .activity-card {
    background: white;
    border: 0.5px solid var(--border);
    border-radius: 12px;
    padding: 1.2rem 1.4rem;
    display: flex;
    gap: 1.2rem;
    align-items: flex-start;
  }

  .act-icon {
    width: 44px;
    height: 44px;
    border-radius: 10px;
    background: var(--gold-light);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    font-size: 20px;
  }

  .act-body { flex: 1; }
  .act-name { font-size: 15px; font-weight: 500; color: var(--text); margin-bottom: 3px; }
  .act-desc { font-size: 13px; color: var(--text-soft); line-height: 1.6; }
  .act-badge {
    display: inline-block;
    background: var(--gold-light);
    color: #7a5c1e;
    font-size: 10px;
    letter-spacing: 1px;
    padding: 2px 7px;
    border-radius: 4px;
    margin-top: 6px;
    font-family: 'Jost', sans-serif;
    text-transform: uppercase;
  }

  /* Stay */
  .hotel-hero {
    background: linear-gradient(160deg, #2a1520 0%, #3e1e30 100%);
    border-radius: 16px;
    padding: 2.5rem;
    margin-bottom: 1.2rem;
    position: relative;
    overflow: hidden;
  }

  .hotel-hero::after {
    content: '';
    position: absolute;
    right: -30px;
    top: -30px;
    width: 180px;
    height: 180px;
    border-radius: 50%;
    border: 30px solid rgba(185,149,58,0.08);
  }

  .hotel-eyebrow {
    font-size: 10px;
    letter-spacing: 3px;
    color: var(--gold);
    text-transform: uppercase;
    font-family: 'Jost', sans-serif;
    margin-bottom: 0.6rem;
  }

  .hotel-name {
    font-family: 'Cormorant Garamond', serif;
    font-size: 2rem;
    font-weight: 300;
    color: #f5ede8;
    margin-bottom: 0.5rem;
  }

  .hotel-desc { font-size: 13.5px; color: rgba(245,237,232,0.6); line-height: 1.7; max-width: 480px; }

  .hotel-meta {
    display: flex;
    gap: 1.5rem;
    margin-top: 1.5rem;
    flex-wrap: wrap;
  }

  .hotel-meta-item { }
  .hm-label { font-size: 10px; letter-spacing: 2px; color: rgba(245,237,232,0.4); text-transform: uppercase; font-family: 'Jost', sans-serif; }
  .hm-value { font-size: 14px; color: #f5ede8; font-weight: 500; margin-top: 2px; }

  .amenities-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0.8rem;
    margin-top: 1.2rem;
  }

  .amenity {
    background: white;
    border: 0.5px solid var(--border);
    border-radius: 10px;
    padding: 0.9rem 1rem;
    text-align: center;
  }

  .amenity-icon { font-size: 18px; }
  .amenity-name { font-size: 12px; color: var(--text-soft); margin-top: 5px; }

  /* Map */
  .map-placeholder {
    background: linear-gradient(135deg, #e8ddd5, #d4c9c0);
    border-radius: 16px;
    height: 280px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 0.8rem;
    margin-bottom: 1.5rem;
    border: 0.5px solid var(--border);
    position: relative;
    overflow: hidden;
  }

  .map-pin { font-size: 40px; }
  .map-label { font-family: 'Cormorant Garamond', serif; font-size: 1.1rem; color: var(--rose-dark); font-style: italic; }
  .map-sub { font-size: 12px; color: var(--text-soft); }

  .map-open-btn {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    background: var(--rose-dark);
    color: white;
    border: none;
    border-radius: 8px;
    padding: 0.65rem 1.2rem;
    font-family: 'Jost', sans-serif;
    font-size: 12.5px;
    letter-spacing: 1px;
    cursor: pointer;
    text-decoration: none;
    transition: opacity 0.2s;
  }

  .map-open-btn:hover { opacity: 0.85; }

  .transport-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }

  .transport-card {
    background: white;
    border: 0.5px solid var(--border);
    border-radius: 12px;
    padding: 1.1rem 1.3rem;
  }

  .tc-label { font-size: 10px; letter-spacing: 2px; text-transform: uppercase; color: var(--text-soft); font-family: 'Jost', sans-serif; margin-bottom: 0.5rem; }
  .tc-title { font-size: 14.5px; font-weight: 500; color: var(--text); }
  .tc-desc { font-size: 12.5px; color: var(--text-soft); margin-top: 4px; line-height: 1.6; }

  @media (max-width: 600px) {
    .hero h1 { font-size: 2.4rem; }
    .resto-grid { grid-template-columns: 1fr; }
    .amenities-grid { grid-template-columns: 1fr 1fr; }
    .transport-grid { grid-template-columns: 1fr; }
    .nav-btn { padding: 0.8rem 0.8rem; font-size: 10px; letter-spacing: 1px; }
  }
</style>

<div class="hero">
  <div class="hero-eyebrow">Our Adventure Awaits</div>
  <h1>Atlanta,<br><em>Georgia</em></h1>
  <div class="divider-gold"><div class="divider-dot"></div></div>
  <div class="hero-sub">A trip planned with love &nbsp;·&nbsp; Spring 2026</div>
</div>

<nav class="nav">
  <button class="nav-btn active" onclick="showTab('itinerary', this)">Itinerary</button>
  <button class="nav-btn" onclick="showTab('restaurants', this)">Dining</button>
  <button class="nav-btn" onclick="showTab('todo', this)">To Do</button>
  <button class="nav-btn" onclick="showTab('stay', this)">Stay</button>
  <button class="nav-btn" onclick="showTab('map', this)">Map</button>
</nav>

<div class="container">

  <!-- ITINERARY -->
  <div class="tab active" id="tab-itinerary">
    <h2 class="section-heading">Our <em>Schedule</em></h2>
    <p class="section-intro">Day by day, moment by moment — a thoughtfully curated journey through Atlanta.</p>

    <div class="day-card">
      <div class="day-header">
        <span class="day-badge">Day 1</span>
        <span class="day-title">Arrival & First Impressions</span>
      </div>
      <div class="timeline">
        <div class="timeline-item">
          <div class="t-time">2:00 PM</div>
          <div class="t-line-wrap"><div class="t-dot"></div><div class="t-line"></div></div>
          <div class="t-content"><div class="t-name">Check In</div><div class="t-desc">Settle in and freshen up at the hotel.</div></div>
        </div>
        <div class="timeline-item">
          <div class="t-time">4:00 PM</div>
          <div class="t-line-wrap"><div class="t-dot"></div><div class="t-line"></div></div>
          <div class="t-content"><div class="t-name">Stroll Through Midtown</div><div class="t-desc">Walk Peachtree Street, explore the arts district.</div></div>
        </div>
        <div class="timeline-item">
          <div class="t-time">7:30 PM</div>
          <div class="t-line-wrap"><div class="t-dot"></div><div class="t-line"></div></div>
          <div class="t-content"><div class="t-name">Welcome Dinner</div><div class="t-desc">Romantic dinner at a curated restaurant.</div></div>
        </div>
      </div>
    </div>

    <div class="day-card">
      <div class="day-header">
        <span class="day-badge">Day 2</span>
        <span class="day-title">Culture & Connection</span>
      </div>
      <div class="timeline">
        <div class="timeline-item">
          <div class="t-time">9:30 AM</div>
          <div class="t-line-wrap"><div class="t-dot"></div><div class="t-line"></div></div>
          <div class="t-content"><div class="t-name">Georgia Aquarium</div><div class="t-desc">World's largest aquarium — whale sharks await.</div></div>
        </div>
        <div class="timeline-item">
          <div class="t-time">1:00 PM</div>
          <div class="t-line-wrap"><div class="t-dot"></div><div class="t-line"></div></div>
          <div class="t-content"><div class="t-name">Lunch at Ponce City Market</div><div class="t-desc">Explore the food hall and rooftop.</div></div>
        </div>
        <div class="timeline-item">
          <div class="t-time">3:30 PM</div>
          <div class="t-line-wrap"><div class="t-dot"></div><div class="t-line"></div></div>
          <div class="t-content"><div class="t-name">BeltLine Walk</div><div class="t-desc">Stroll the Eastside Trail with street art.</div></div>
        </div>
        <div class="timeline-item">
          <div class="t-time">7:00 PM</div>
          <div class="t-line-wrap"><div class="t-dot"></div><div class="t-line"></div></div>
          <div class="t-content"><div class="t-name">Rooftop Cocktails</div><div class="t-desc">Sunset drinks above the Atlanta skyline.</div></div>
        </div>
      </div>
    </div>

    <div class="day-card">
      <div class="day-header">
        <span class="day-badge">Day 3</span>
        <span class="day-title">Sweet Farewell</span>
      </div>
      <div class="timeline">
        <div class="timeline-item">
          <div class="t-time">10:00 AM</div>
          <div class="t-line-wrap"><div class="t-dot"></div><div class="t-line"></div></div>
          <div class="t-content"><div class="t-name">Brunch at Inman Park</div><div class="t-desc">Leisurely brunch in a charming neighborhood.</div></div>
        </div>
        <div class="timeline-item">
          <div class="t-time">12:30 PM</div>
          <div class="t-line-wrap"><div class="t-dot"></div><div class="t-line"></div></div>
          <div class="t-content"><div class="t-name">Last Wanders & Shopping</div><div class="t-desc">Little Five Points boutiques and souvenirs.</div></div>
        </div>
        <div class="timeline-item">
          <div class="t-time">4:00 PM</div>
          <div class="t-line-wrap"><div class="t-dot"></div><div class="t-line"></div></div>
          <div class="t-content"><div class="t-name">Head Home</div><div class="t-desc">Until next time, Atlanta.</div></div>
        </div>
      </div>
    </div>
  </div>

  <!-- RESTAURANTS -->
  <div class="tab" id="tab-restaurants">
    <h2 class="section-heading"><em>Dining</em> Guide</h2>
    <p class="section-intro">A curated selection of Atlanta's most memorable dining experiences — from intimate dinners to lazy brunches.</p>
    <div class="resto-grid">
      <div class="resto-card">
        <span class="resto-tag">Fine Dining</span>
        <div class="resto-name">Bacchanalia</div>
        <div class="resto-desc">Atlanta's most celebrated restaurant. Farm-to-table tasting menus in an intimate, art-filled space.</div>
        <div class="resto-stars">★★★★★</div>
        <div class="resto-detail">📍 Westside Provisions</div>
      </div>
      <div class="resto-card">
        <span class="resto-tag">Rooftop Bar</span>
        <div class="resto-name">STK Rooftop</div>
        <div class="resto-desc">Skyline views, craft cocktails, and a lively upscale atmosphere. Perfect for sunset drinks.</div>
        <div class="resto-stars">★★★★☆</div>
        <div class="resto-detail">📍 Midtown Atlanta</div>
      </div>
      <div class="resto-card">
        <span class="resto-tag">Brunch</span>
        <div class="resto-name">The Optimist</div>
        <div class="resto-desc">Coastal-inspired seafood in a converted warehouse. Their oysters and brunch are unforgettable.</div>
        <div class="resto-stars">★★★★★</div>
        <div class="resto-detail">📍 West Midtown</div>
      </div>
      <div class="resto-card">
        <span class="resto-tag">Casual Gem</span>
        <div class="resto-name">Ponce City Market</div>
        <div class="resto-desc">Multi-vendor food hall with everything from ramen to tacos. Great for a relaxed afternoon.</div>
        <div class="resto-stars">★★★★☆</div>
        <div class="resto-detail">📍 Old Fourth Ward</div>
      </div>
      <div class="resto-card">
        <span class="resto-tag">Italian</span>
        <div class="resto-name">Cooks & Soldiers</div>
        <div class="resto-desc">Basque-inspired pintxos and wood-fired dishes. A warm, romantic atmosphere with incredible wine.</div>
        <div class="resto-stars">★★★★★</div>
        <div class="resto-detail">📍 West Midtown</div>
      </div>
      <div class="resto-card">
        <span class="resto-tag">Dessert</span>
        <div class="resto-name">Sublime Doughnuts</div>
        <div class="resto-desc">Legendary creative doughnuts — a sweet Atlanta institution that's worth every calorie.</div>
        <div class="resto-stars">★★★★☆</div>
        <div class="resto-detail">📍 Multiple Locations</div>
      </div>
    </div>
  </div>

  <!-- THINGS TO DO -->
  <div class="tab" id="tab-todo">
    <h2 class="section-heading">Things <em>To Do</em></h2>
    <p class="section-intro">Adventures, culture, and quiet moments — Atlanta has something magical at every turn.</p>
    <div class="activity-list">
      <div class="activity-card">
        <div class="act-icon">🐋</div>
        <div class="act-body">
          <div class="act-name">Georgia Aquarium</div>
          <div class="act-desc">The largest aquarium in the world, home to whale sharks, beluga whales, and thousands of marine species. A jaw-dropping experience together.</div>
          <span class="act-badge">Must-do</span>
        </div>
      </div>
      <div class="activity-card">
        <div class="act-icon">🌿</div>
        <div class="act-body">
          <div class="act-name">Atlanta BeltLine</div>
          <div class="act-desc">A 22-mile urban trail connecting neighborhoods. Stroll the Eastside Trail lined with murals, cafes, and gardens. Perfect for a slow, romantic afternoon.</div>
          <span class="act-badge">Outdoor</span>
        </div>
      </div>
      <div class="activity-card">
        <div class="act-icon">🏛️</div>
        <div class="act-body">
          <div class="act-name">High Museum of Art</div>
          <div class="act-desc">Atlanta's premier art museum with world-class rotating exhibitions and a stunning Renzo Piano-designed building in Midtown.</div>
          <span class="act-badge">Culture</span>
        </div>
      </div>
      <div class="activity-card">
        <div class="act-icon">🌸</div>
        <div class="act-body">
          <div class="act-name">Atlanta Botanical Garden</div>
          <div class="act-desc">30 acres of stunning gardens with a canopy walk. Especially magical during spring blooms — a serene and romantic escape.</div>
          <span class="act-badge">Romantic</span>
        </div>
      </div>
      <div class="activity-card">
        <div class="act-icon">🍹</div>
        <div class="act-body">
          <div class="act-name">Rooftop Bar Hopping</div>
          <div class="act-desc">Atlanta has some of the South's best rooftop bars. Catch golden hour views of the skyline with cocktails in hand.</div>
          <span class="act-badge">Evening</span>
        </div>
      </div>
      <div class="activity-card">
        <div class="act-icon">🛍️</div>
        <div class="act-body">
          <div class="act-name">Little Five Points & Inman Park</div>
          <div class="act-desc">Eclectic boutiques, vintage shops, and beautiful Victorian homes. A charming neighborhood for a lazy morning wander.</div>
          <span class="act-badge">Shopping</span>
        </div>
      </div>
    </div>
  </div>

  <!-- STAY -->
  <div class="tab" id="tab-stay">
    <h2 class="section-heading">Where We <em>Stay</em></h2>
    <p class="section-intro">Rest, recharge, and wake up to the city together.</p>

    <div class="hotel-hero">
      <div class="hotel-eyebrow">Our Home in Atlanta</div>
      <div class="hotel-name">The Loews Atlanta Hotel</div>
      <div class="hotel-desc">A luxury landmark in the heart of Midtown, steps from Peachtree Street, the Fox Theatre, and the city's best dining. Refined rooms, attentive service.</div>
      <div class="hotel-meta">
        <div class="hotel-meta-item">
          <div class="hm-label">Location</div>
          <div class="hm-value">Midtown Atlanta</div>
        </div>
        <div class="hotel-meta-item">
          <div class="hm-label">Nights</div>
          <div class="hm-value">3 Nights</div>
        </div>
        <div class="hotel-meta-item">
          <div class="hm-label">Room</div>
          <div class="hm-value">King Deluxe</div>
        </div>
      </div>
    </div>

    <div class="amenities-grid">
      <div class="amenity">
        <div class="amenity-icon">🏊</div>
        <div class="amenity-name">Pool & Spa</div>
      </div>
      <div class="amenity">
        <div class="amenity-icon">🍳</div>
        <div class="amenity-name">In-room Dining</div>
      </div>
      <div class="amenity">
        <div class="amenity-icon">💆</div>
        <div class="amenity-name">Full-service Spa</div>
      </div>
      <div class="amenity">
        <div class="amenity-icon">🚗</div>
        <div class="amenity-name">Valet Parking</div>
      </div>
      <div class="amenity">
        <div class="amenity-icon">🏋️</div>
        <div class="amenity-name">Fitness Center</div>
      </div>
      <div class="amenity">
        <div class="amenity-icon">📶</div>
        <div class="amenity-name">High-speed WiFi</div>
      </div>
    </div>
  </div>

  <!-- MAP -->
  <div class="tab" id="tab-map">
    <h2 class="section-heading">Getting <em>Around</em></h2>
    <p class="section-intro">Atlanta is a city best explored with a mix of walking, rideshares, and a little wandering.</p>

    <div class="map-placeholder">
      <div class="map-pin">📍</div>
      <div class="map-label">Atlanta, Georgia</div>
      <div class="map-sub" style="color: var(--text-soft); font-size: 12px;">Tap below to open in Google Maps</div>
      <a class="map-open-btn" href="https://www.google.com/maps/place/Atlanta,+GA" target="_blank">Open in Google Maps</a>
    </div>

    <div class="transport-grid">
      <div class="transport-card">
        <div class="tc-label">Getting There</div>
        <div class="tc-title">Hartsfield-Jackson Airport</div>
        <div class="tc-desc">The world's busiest airport, ~25 min from Midtown. Take MARTA rail or a rideshare directly to the hotel.</div>
      </div>
      <div class="transport-card">
        <div class="tc-label">Around the City</div>
        <div class="tc-title">Rideshare & MARTA</div>
        <div class="tc-desc">Uber/Lyft are abundant. MARTA rail connects the airport, Midtown, and downtown efficiently.</div>
      </div>
      <div class="transport-card">
        <div class="tc-label">BeltLine</div>
        <div class="tc-title">Walk the Trail</div>
        <div class="tc-desc">The Eastside Trail connects Inman Park to Midtown on foot. Rent e-bikes along the way.</div>
      </div>
      <div class="transport-card">
        <div class="tc-label">Neighborhoods</div>
        <div class="tc-title">Key Areas</div>
        <div class="tc-desc">Midtown, Old Fourth Ward, West Midtown, Inman Park, Little Five Points — all within 15 min of each other.</div>
      </div>
    </div>
  </div>

</div>

<script>
function showTab(id, btn) {
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('tab-' + id).classList.add('active');
  btn.classList.add('active');
}
</script>
