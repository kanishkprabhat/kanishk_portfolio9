const fs = require("fs");
let pTerminal = fs.readFileSync("src/components/PortfolioTerminal/PortfolioTerminal.jsx", "utf8");

const newFunctions = `
function runHelp() {
  const rows = [
    ["help",           "show available commands"],
    ["about",          "learn about Kanishk"],
    ["skills",         "view performance marketing skills"],
    ["campaigns",      "explore marketing projects"],
    ["certifications", "view certifications"],
    ["resume",         "view resume information"],
    ["contact",        "view contact details"],
    ["links",          "view LinkedIn and portfolio links"],
    ["clear",          "clear the terminal"],
    ["visual",         "switch to visual portfolio"]
  ];
  return [
    { kind: "blank" },
    ...rows.map(([c, d]) => ({ kind: "raw", text: \`  \${c.padEnd(15, " ")}  \${d}\` })),
    { kind: "blank" }
  ];
}

function runAbout() {
  return [
    { kind: "blank" },
    { kind: "out", text: "Kanishk Prabhat" },
    { kind: "blank" },
    { kind: "out", text: "Entry-level performance marketer focused on:" },
    { kind: "out", text: "- Google Ads" },
    { kind: "out", text: "- Meta Ads" },
    { kind: "out", text: "- SEO" },
    { kind: "out", text: "- Conversion tracking" },
    { kind: "out", text: "- GA4" },
    { kind: "out", text: "- Performance analytics" },
    { kind: "blank" },
    { kind: "out", text: "Currently open to performance marketing opportunities." },
    { kind: "blank" }
  ];
}

function runSkills() {
  return [
    { kind: "blank" },
    { kind: "out", text: "PAID MEDIA" },
    { kind: "muted", text: "Google Ads / Meta Ads / Lead Generation" },
    { kind: "blank" },
    { kind: "out", text: "ANALYTICS" },
    { kind: "muted", text: "GA4 / Google Tag Manager / Conversion Tracking / Performance Analytics" },
    { kind: "blank" },
    { kind: "out", text: "DIGITAL MARKETING" },
    { kind: "muted", text: "SEO / Keyword Research / Landing Page Optimization" },
    { kind: "blank" },
    { kind: "out", text: "TOOLS" },
    { kind: "muted", text: "Canva / Google Ads / Meta Ads Manager / Looker Studio" },
    { kind: "blank" }
  ];
}

function runCampaigns() {
  return [
    { kind: "blank" },
    { kind: "out", text: "1. Dwell Construction — Meta Ads Lead Generation (Real Client)" },
    { kind: "muted", text: "   Generated 31 Instant Form leads at ₹66.19/lead and 38 WhatsApp conversations." },
    { kind: "blank" },
    { kind: "out", text: "2. ThePetNest — Google Display Network TOFU Strategy (Practice Project)" },
    { kind: "muted", text: "   Planned awareness campaign covering segmentation, custom intent, and remarketing." },
    { kind: "blank" },
    { kind: "out", text: "3. Digital Marketing Course — YouTube Lead Gen (Illustrative Simulation)" },
    { kind: "muted", text: "   Configured video lead-gen campaign targeting Delhi, Noida, and Ghaziabad." },
    { kind: "blank" }
  ];
}

function runCertifications() {
  return [
    { kind: "blank" },
    { kind: "out", text: "- Fundamentals of Digital Marketing (Google)" },
    { kind: "out", text: "- Become an AI-Powered Marketer" },
    { kind: "out", text: "- Introduction to Prompt Engineering for Generative AI" },
    { kind: "out", text: "- Master Your Brand Voice (Jack Appleby)" },
    { kind: "blank" }
  ];
}

function runResume() {
  return [
    { kind: "blank" },
    { kind: "out", text: "Experience:" },
    { kind: "muted", text: "Sikharthy Infotech Pvt. Ltd. — Marketing Intern (May 2023 – Jul 2023)" },
    { kind: "muted", text: "Nblik — Community Manager / Reporting Manager Intern (Apr 2023 – Jun 2023)" },
    { kind: "blank" },
    { kind: "out", text: "Education:" },
    { kind: "muted", text: "BBA — Sikkim Manipal Institute of Technology (SMU) (2021 – 2024)" },
    { kind: "muted", text: "Class XII, Commerce/Business — Doon Senior Secondary School (2019 – 2021)" },
    { kind: "blank" },
    { kind: "out", text: "You can download the full PDF resume by clicking the link in the visual portfolio or typing 'visual'." },
    { kind: "blank" }
  ];
}

function runContact() {
  return [
    { kind: "blank" },
    { kind: "out", text: "Name: Kanishk Prabhat" },
    { kind: "out", text: "Location: Noida, India" },
    { kind: "out", text: "Email: kanishkprabha31@gmail.com" },
    { kind: "out", text: "LinkedIn: https://linkedin.com/in/kanishk-prabhat" },
    { kind: "blank" }
  ];
}

function runLinks() {
  return [
    { kind: "blank" },
    { kind: "out", text: "LinkedIn: https://linkedin.com/in/kanishk-prabhat" },
    { kind: "out", text: "Email: kanishkprabha31@gmail.com" },
    { kind: "blank" }
  ];
}

function runVim(state, args) {`;

pTerminal = pTerminal.replace(/function runHelp\(\) \{[\s\S]*?function runVim\(state, args\) \{/, newFunctions);

const newSubmitBlock = `
    if (cmd === "clear") { setLines([]); return; }
    if (cmd === "help") { pushOutput(runHelp()); return; }
    if (cmd === "about") { pushOutput(runAbout()); return; }
    if (cmd === "skills") { pushOutput(runSkills()); return; }
    if (cmd === "campaigns") { pushOutput(runCampaigns()); return; }
    if (cmd === "certifications") { pushOutput(runCertifications()); return; }
    if (cmd === "resume") { pushOutput(runResume()); return; }
    if (cmd === "contact") { pushOutput(runContact()); return; }
    if (cmd === "links") { pushOutput(runLinks()); return; }
    if (cmd === "visual") { window.location.href = "/"; return; }
    
    if (cmd === "ls")    { pushOutput(runLs({ cwd }, args)); return; }
    if (cmd === "pwd")   { pushOutput(runPwd({ cwd })); return; }
    if (cmd === "whoami"){ pushOutput([{ kind: "out", text: "kanishk" }]); return; }
    if (cmd === "cat")   { pushOutput(runCat({ cwd }, args)); return; }
    if (cmd === "echo")  { pushOutput([{ kind: "out", text: args.join(" ") }]); return; }
    if (cmd === "exit")  { pushOutput([{ kind: "muted", text: "There is no escape. Try 'help'." }]); return; }
    if (cmd === "tree")  { pushOutput(runTree({ cwd }, args)); return; }
    if (cmd === "man")   { pushOutput([{ kind: "muted", text: \`No manual entry for \${args[0] || "that"}. Try 'help'.\` }]); return; }
`;

pTerminal = pTerminal.replace(/    if \(cmd === "clear"\) \{[\s\S]*?if \(cmd === "man"\)[\s\S]*?return; \}/, newSubmitBlock);

fs.writeFileSync("src/components/PortfolioTerminal/PortfolioTerminal.jsx", pTerminal);
