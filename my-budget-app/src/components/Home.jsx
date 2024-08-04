import React from 'react';

const Home = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h1>Welcome to My Budget App!</h1>
      <p>🚧 This page is under construction. We're hammering away to make it perfect! 🛠️</p>
      <p>Meanwhile, enjoy this random financial tip: "Don't spend it all in one place... unless it's on a really good pizza." 🍕</p>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        <li>📊 View your budget data for the past 6 months</li>
        <li>🗓️ Enter and manage your budget for any specified month</li>
      </ul>
      <p>To check it out, simply head to the <strong>Budget</strong> tab in the navigation menu. Start making the most of your budget today! 💰💡</p>
      <p>If you have any feedback or need help, feel free to reach out. We’re always here to assist! 🤝</p>
    </div>
  );
};

export default Home;