
import Particles from "./_components/Particles";

export default function Page() {
  const tierPct = 62; // demo progress
  const kpis = [
    { label: "Balance", value: "12,480" },
    { label: "Today Earned", value: "+320" },
    { label: "Tier", value: "Gold" },
    { label: "Multiplier", value: "1.5x" },
  ];

  const tasks = [
    { name: "Daily check-in", reward: "+20", type: "daily" },
    { name: "Invite a friend", reward: "+300", type: "referral" },
    { name: "Complete 3 tasks", reward: "+80", type: "quest" },
  ];

  const leaderboard = [
    { user: "0xA1...F9", pts: "56,300" },
    { user: "0xC2...B7", pts: "53,210" },
    { user: "0x91...2D", pts: "49,990" },
  ];

  return (
    <>
      <Particles />
      <div className="container">
        <header className="header">
          <div className="brand">
            <div className="brand-badge" />
            <h1>OmniPredict · Points</h1>
          </div>
          <button className="btn">Connect Wallet</button>
        </header>

        <div className="grid">
          {/* Left: hero + tasks */}
          <section className="card">
            <h3>Overview</h3>
            <div className="stats">
              {kpis.map((k) => (
                <div className="stat" key={k.label}>
                  <div className="label">{k.label}</div>
                  <div className="value">{k.value}</div>
                </div>
              ))}
            </div>

            <div style={{ marginTop: 16 }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                <span className="label">Tier Progress</span>
                <span className="label">{tierPct}%</span>
              </div>
              <div className="progress">
                <span style={{ width: tierPct + "%" }} />
              </div>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: 10, marginTop: 16 }}>
              <button className="btn">Claim Daily</button>
              <span className="badge">Airdrop Season 1</span>
            </div>

            <div style={{ marginTop: 22 }} className="card">
              <h3>Earn Points</h3>
              <div className="list">
                {tasks.map((t) => (
                  <div className="list-item" key={t.name}>
                    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                      <span className="badge">{t.type}</span>
                      <div>{t.name}</div>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                      <span style={{ color: "var(--success)", fontWeight: 700 }}>{t.reward}</span>
                      <button className="btn">Start</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Right: leaderboard + metrics */}
          <aside className="card">
            <h3>Leaderboard (daily snapshot)</h3>
            <div className="list" style={{ marginTop: 10 }}>
              {leaderboard.map((r, i) => (
                <div className="list-item" key={r.user}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <span className="badge">#{i + 1}</span>
                    <div>{r.user}</div>
                  </div>
                  <div style={{ fontWeight: 800 }}>{r.pts}</div>
                </div>
              ))}
            </div>

            <div className="card" style={{ marginTop: 16 }}>
              <h3>Airdrop Metrics</h3>
              <div className="stats" style={{ gridTemplateColumns: "repeat(2,minmax(0,1fr))" }}>
                <div className="stat">
                  <div className="label">Total Participants</div>
                  <div className="value">18,204</div>
                </div>
                <div className="stat">
                  <div className="label">Pool Remaining</div>
                  <div className="value">82%</div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
