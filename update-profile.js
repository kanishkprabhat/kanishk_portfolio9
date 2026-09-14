const fs = require('fs');
const path = './content/data/profile.json';
const data = JSON.parse(fs.readFileSync(path, 'utf8'));

data.skills = [
    { "category": "Paid Media", "items": ["Google Ads", "Meta Ads", "LinkedIn Ads", "Lead Generation", "Audience Targeting", "Campaign Optimization"] },
    { "category": "Analytics & Tracking", "items": ["GA4", "Google Tag Manager", "Conversion Tracking", "Campaign Performance Analysis"] },
    { "category": "Digital Marketing", "items": ["SEO", "WordPress", "Canva", "Landing Page Strategy", "Creative Strategy", "Funnel Strategy", "A/B Testing"] },
    { "category": "AI & Automation", "items": ["AI Website & Landing Page Creation", "AI Agents", "Antigravity", "AI-Assisted Marketing Workflows", "Marketing Automation"] }
];

data.certifications = [
    { "name": "Fundamentals of Digital Marketing", "issuer": "Google" },
    { "name": "Become an AI-Powered Marketer" },
    { "name": "Introduction to Prompt Engineering for Generative AI" },
    { "name": "Master Your Brand Voice", "issuer": "Jack Appleby" }
];

fs.writeFileSync(path, JSON.stringify(data, null, 4));
console.log('Profile updated successfully');
