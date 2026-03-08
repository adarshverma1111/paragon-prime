import { useState, useEffect, useRef } from "react";
import {
  FaArrowRight, FaWrench, FaShieldAlt, FaRocket,
  FaSyncAlt, FaPlug, FaMagic, FaRobot,
  FaCreditCard, FaBitcoin, FaBrain, FaBell,
  FaBullhorn, FaComments, FaWpforms, FaHeartbeat,
  FaChartLine, FaCoins, FaUsers,
} from "react-icons/fa";

/* ─── Fonts ─────────────────────────────────────────────────────────────── */
const Fonts = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@300;400;500;600;700&display=swap');

    .int-root { font-family: 'DM Sans', sans-serif; }
    .font-display { font-family: 'Bebas Neue', sans-serif; letter-spacing: 2px; }

    /* Integration card */
    .int-card {
      transition: transform 0.28s ease, border-color 0.28s ease, box-shadow 0.28s ease;
      cursor: pointer;
    }
    .int-card:hover {
      transform: translateY(-6px);
      border-color: rgba(249,115,22,0.45) !important;
      box-shadow: 0 16px 48px rgba(249,115,22,0.12);
    }
    .int-card:hover .int-logo { transform: scale(1.08); }
    .int-logo { transition: transform 0.3s ease; }

    /* Filter pill */
    .filter-pill {
      transition: background 0.2s, color 0.2s, border-color 0.2s, transform 0.15s;
      white-space: nowrap;
    }
    .filter-pill:hover { transform: translateY(-1px); }
    .filter-pill.active {
      background: linear-gradient(135deg,#f97316,#ea580c) !important;
      border-color: transparent !important;
      color: #fff !important;
      box-shadow: 0 4px 16px rgba(249,115,22,0.35);
    }

    /* Feature card */
    .feat-card {
      transition: transform 0.28s ease, box-shadow 0.28s ease, border-color 0.28s ease;
    }
    .feat-card:hover {
      transform: translateY(-5px);
      border-color: rgba(249,115,22,0.3) !important;
      box-shadow: 0 14px 40px rgba(249,115,22,0.1);
    }

    /* Talk btn */
    .talk-link {
      transition: color 0.2s, gap 0.2s;
      display: inline-flex; align-items: center; gap: 6px;
    }
    .talk-link:hover { gap: 10px; }

   
  `}</style>
);

/* ─── useInView ─────────────────────────────────────────────────────────── */
function useInView(threshold = 0.12) {
  const ref = useRef(null);
  const [v, setV] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setV(true); obs.disconnect(); } },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, v];
}

/* ─── Data ──────────────────────────────────────────────────────────────── */
const STATS = [
  { value: "50+", label: "Integrations" },
  { value: "10+", label: "Years Experience" },
  { value: "1000+", label: "Customers Satisfied" },
  { value: "96%+", label: "Client Retention" },
];

const CATEGORIES = [
  { key: "all", label: "All", Icon: FaPlug },
  { key: "payment", label: "Payment Methods", Icon: FaCreditCard },
  { key: "crypto", label: "Crypto & Blockchain", Icon: FaBitcoin },
  { key: "ai", label: "AI & ML", Icon: FaBrain },
  { key: "metaverse", label: "Meta Verse", Icon: FaMagic },
  { key: "notifications", label: "Notifications", Icon: FaBell },
  { key: "ads", label: "Advertisement", Icon: FaBullhorn },
  { key: "support", label: "Customer Support", Icon: FaComments },
  { key: "sms", label: "SMS & Calling Solutions", Icon: FaComments },
  { key: "forms", label: "Forms & Survey", Icon: FaWpforms },
  { key: "health", label: "Health & Fitness", Icon: FaHeartbeat },
  { key: "finance", label: "Finance Services", Icon: FaChartLine },
  { key: "defi", label: "Crypto", Icon: FaCoins },
];

const INTEGRATIONS = [
  // ── Payment Methods ──────────────────────────────────────
  {
    cat: ["payment", "all"],
    name: "Stripe Integration",
    logo: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg",
    bg: "#6772E5",
    desc: "Paragon Prime Technologies has always been digitally innovative, ensuring flawless performance and reliability of your website.",
  },
  {
    cat: ["payment", "all"],
    name: "PayPal Integration",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a4/Paypal_2014_logo.png",
    bg: "#003087",
    desc: "PayPal integration is like adding a trustworthy payment partner to your online store connecting your customers seamlessly.",
  },
  {
    cat: ["payment", "all"],
    name: "Razorpay",
    logo: "https://razorpay.com/assets/razorpay-glyph.svg",
    bg: "#3395FF",
    desc: "Razorpay Integration is like adding a friendly payment assistant to your website or app, helping you easily accept payments.",
  },
  {
    cat: ["payment", "all"],
    name: "UPI Payments",
    logo: "https://upload.wikimedia.org/wikipedia/commons/e/e1/UPI-Logo-vector.svg",
    bg: "#138808",
    desc: "Integrating UPI payments involves embedding UPI payment gateways such as decentralized finance applications.",
  },
  {
    cat: ["payment", "all"],
    name: "PayU",
    logo: "https://logowik.com/content/uploads/images/payu3888.jpg",
    bg: "#60C4A9",
    desc: "PayU Integration involves incorporating PayU, a secure online payment gateway, into your website or application.",
  },
  {
    cat: ["payment", "all"],
    name: "Authorize.Net",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Authorize.Net_logo.svg/2560px-Authorize.Net_logo.svg.png",
    bg: "#336699",
    desc: "Authorize.Net is an online payment gateway that simplifies the process of accepting payments on websites and applications.",
  },
  {
    cat: ["payment", "all"],
    name: "Payoneer Integration",
    logo: "https://upload.wikimedia.org/wikipedia/commons/b/b8/Payoneer_logo.svg",
    bg: "#FF4800",
    desc: "Payoneer Integration is like adding a versatile financial assistant to your online business for global payment acceptance.",
  },
  {
    cat: ["payment", "crypto", "all"],
    name: "Solana",
    logo: "https://upload.wikimedia.org/wikipedia/en/b/b9/Solana_logo.png",
    bg: "#9945FF",
    desc: "The integration of Solana Blockchain also opens up opportunities for innovative applications such as decentralized finance.",
  },

  // ── Crypto & Blockchain ──────────────────────────────────
  {
    cat: ["crypto", "all"],
    name: "Litecoin",
    logo: "https://upload.wikimedia.org/wikipedia/commons/3/33/Litecoin.svg",
    bg: "#345D9D",
    desc: "Integrating Litecoin onto a website involves embedding functionalities that enable users to transact with Litecoin.",
  },
  {
    cat: ["crypto", "all"],
    name: "Metamask",
    logo: "https://upload.wikimedia.org/wikipedia/commons/3/36/MetaMask_Fox.svg",
    bg: "#E2761B",
    desc: "Integrating MetaMask onto a website involves embedding functionalities that enable users to interact with Ethereum.",
  },
  {
    cat: ["crypto", "all"],
    name: "Coin Exchange",
    logo: "https://cryptologos.cc/logos/bitcoin-btc-logo.svg",
    bg: "#F7931A",
    desc: "In a coin exchange, you can think of it as a digital marketplace where various cryptocurrencies are bought and sold.",
  },
  {
    cat: ["crypto", "all"],
    name: "Smart Contract",
    logo: "https://cryptologos.cc/logos/ethereum-eth-logo.svg",
    bg: "#627EEA",
    desc: "A smart contract is like a digital agreement that runs on a computer. It follows the rules written in code and executes automatically.",
  },

  // ── AI & ML ──────────────────────────────────────────────
  {
    cat: ["ai", "all"],
    name: "OpenAI Completion API",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg",
    bg: "#10A37F",
    desc: "We offer the OpenAI Completion API as a helpful service for businesses and developers. We make it easy by smoothly integrating.",
  },
  {
    cat: ["ai", "all"],
    name: "Voice Synthesizer",
    logo: "https://img.icons8.com/fluency/96/microphone.png",
    bg: "#8B5CF6",
    desc: "Our company proudly offers a state-of-the-art voice synthesizer, leveraging advanced text-to-speech (TTS) technology.",
  },
  {
    cat: ["ai", "all"],
    name: "Face Detection",
    logo: "https://img.icons8.com/fluency/96/face-id.png",
    bg: "#EF4444",
    desc: "Experience the power of our Face Detection Integration. Our technology helps machines easily find and recognize faces.",
  },
  {
    cat: ["ai", "metaverse", "all"],
    name: "Midjourney",
    logo: "https://upload.wikimedia.org/wikipedia/commons/e/e6/Midjourney_Emblem.png",
    bg: "#2D3748",
    desc: "We're excited to tell you about our new service called 'Midjourney Integration.' It's a smart feature that uses Midjourney AI.",
  },
  {
    cat: ["ai", "all"],
    name: "Data Forecasting",
    logo: "https://img.icons8.com/fluency/96/combo-chart.png",
    bg: "#3B82F6",
    desc: "We're experts in data forecasting, using past data to predict future trends. Our goal is to empower you with insights for smart decision-making.",
  },
  {
    cat: ["ai", "all"],
    name: "Text/Audio/Video Generative",
    logo: "https://img.icons8.com/fluency/96/robot-2.png",
    bg: "#6366F1",
    desc: "Our company specializes in Text/Audio/Video Generative Technology. We use super smart computer tricks to create original content.",
  },
  {
    cat: ["ai", "all"],
    name: "Banner Bear",
    logo: "https://img.icons8.com/fluency/96/bear.png",
    bg: "#F59E0B",
    desc: "Our company uses Banner Bear Integration, an advanced design tool, to help businesses easily create personalised banners.",
  },

  // ── Meta Verse ───────────────────────────────────────────
  {
    cat: ["metaverse", "all"],
    name: "Augmented Reality",
    logo: "https://img.icons8.com/fluency/96/augmented-reality.png",
    bg: "#14B8A6",
    desc: "Augmented Reality (AR) is like a magic window that adds digital information to the real world around us using devices like phones.",
  },
  {
    cat: ["metaverse", "all"],
    name: "Virtual Reality",
    logo: "https://img.icons8.com/fluency/96/virtual-reality.png",
    bg: "#8B5CF6",
    desc: "Virtual Reality (VR) is like a super cool adventure inside your computer. It's a technology that puts you in a different world.",
  },
  {
    cat: ["metaverse", "all"],
    name: "Mixed Reality",
    logo: "https://img.icons8.com/fluency/96/vr-glasses.png",
    bg: "#3B82F6",
    desc: "Mixed Reality (MR) is like a mix of the real world and the digital world coming together to create something awesome.",
  },
  {
    cat: ["metaverse", "ai", "all"],
    name: "Avatar Generation With AI",
    logo: "https://img.icons8.com/fluency/96/avatar.png",
    bg: "#EC4899",
    desc: "Generating avatars with AI is like having a digital artist in your computer. It uses clever technology to understand how you look.",
  },

  // ── Notifications ────────────────────────────────────────
  {
    cat: ["notifications", "all"],
    name: "Firebase Notification",
    logo: "https://upload.wikimedia.org/wikipedia/commons/3/37/Firebase_Logo.svg",
    bg: "#FFCA28",
    desc: "Firebase Notifications are like little messages sent to your phone from apps. They can pop up on your screen to keep you engaged.",
  },
  {
    cat: ["notifications", "all"],
    name: "One Signal Notification",
    logo: "https://img.icons8.com/color/96/onesignal.png",
    bg: "#E54B4B",
    desc: "OneSignal Notifications are like helpful messages that apps send to your phone to keep you informed about new things.",
  },
  {
    cat: ["notifications", "all"],
    name: "Local Push Notification",
    logo: "https://img.icons8.com/fluency/96/appointment-reminders.png",
    bg: "#10B981",
    desc: "Local Push Notifications are like friendly reminders from your phone itself. They pop up on your screen or make a sound to tell you something.",
  },
  {
    cat: ["notifications", "ads", "all"],
    name: "AWS Notification Services",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
    bg: "#FF9900",
    desc: "AWS Notification Services are like messengers that help apps and systems communicate with you. They send emails, texts, and more.",
  },
  {
    cat: ["ads", "all"],
    name: "Google Analytics",
    logo: "https://upload.wikimedia.org/wikipedia/commons/8/89/Logo_Google_Analytics.svg",
    bg: "#E37400",
    desc: "Google Analytics is like a smart assistant for websites that helps people understand how others interact with their site.",
  },

  // ── Advertisement / Customer Support ─────────────────────
  {
    cat: ["ads", "support", "all"],
    name: "Yahoo Gemini",
    logo: "https://img.icons8.com/color/96/yahoo.png",
    bg: "#6001D2",
    desc: "Yahoo Gemini is like a platform that helps businesses show ads to people who might be interested in their products or services.",
  },
  {
    cat: ["support", "all"],
    name: "TAWKTO",
    logo: "https://img.icons8.com/color/96/tawk-to.png",
    bg: "#03A84E",
    desc: "Tawk.to is a helpful chatting buddy for websites. It's free and makes it easy for businesses to talk with visitors in real-time.",
  },
  {
    cat: ["support", "sms", "all"],
    name: "Slack",
    logo: "https://upload.wikimedia.org/wikipedia/commons/b/b9/Slack_Technologies_Logo.svg",
    bg: "#4A154B",
    desc: "Slack is a chatting app where teams talk and work together, making teamwork fun. It's like a virtual office helping people collaborate.",
  },
  {
    cat: ["support", "all"],
    name: "Intercom",
    logo: "https://img.icons8.com/color/96/intercom.png",
    bg: "#1F8DED",
    desc: "Intercom is a digital communication tool for businesses. It helps them talk to their customers in real-time, making it easy to provide support.",
  },

  // ── SMS & Calling ─────────────────────────────────────────
  {
    cat: ["sms", "all"],
    name: "Twilio",
    logo: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Twilio-logo-red.svg",
    bg: "#F22F46",
    desc: "Twilio is like a communication wizard for software developers, making it super easy to add messaging, voice, and video capabilities.",
  },
  {
    cat: ["sms", "all"],
    name: "Sinch",
    logo: "https://img.icons8.com/color/96/sinch.png",
    bg: "#E91E63",
    desc: "Sinch is like a communication maestro for developers, offering a powerful platform to add messaging, voice, and video communications.",
  },
  {
    cat: ["sms", "all"],
    name: "Nexmo",
    logo: "https://img.icons8.com/color/96/vonage.png",
    bg: "#1B75BB",
    desc: "Nexmo is like a communication wizard for developers, making it effortless to integrate messaging, voice, and other communication features.",
  },
  {
    cat: ["sms", "all"],
    name: "Bandwidth",
    logo: "https://img.icons8.com/fluency/96/internet.png",
    bg: "#00ADB5",
    desc: "Bandwidth is like the highway for information on the internet. It refers to the capacity of a network to transmit data.",
  },
  {
    cat: ["sms", "all"],
    name: "Plivo",
    logo: "https://img.icons8.com/color/96/phone.png",
    bg: "#00BCD4",
    desc: "Plivo is like a behind-the-scenes hero for communication in software applications. It provides tools and services for messaging and voice.",
  },
  {
    cat: ["sms", "all"],
    name: "Tropo (Cisco)",
    logo: "https://img.icons8.com/color/96/cisco.png",
    bg: "#1BA0D7",
    desc: "Tropo is like a wizard for communication in software applications, making it easy for developers to add messaging and voice features.",
  },
  {
    cat: ["sms", "all"],
    name: "Twilio SendGrid",
    logo: "https://img.icons8.com/color/96/sendgrid.png",
    bg: "#1A82E2",
    desc: "Twilio SendGrid is like a helpful messenger for businesses, ensuring that emails get delivered smoothly and reliably.",
  },
  {
    cat: ["sms", "all"],
    name: "Agora",
    logo: "https://img.icons8.com/fluency/96/conference-call.png",
    bg: "#099DFD",
    desc: "Agora is like a virtual meeting room where developers can add real-time communication features to their applications.",
  },
  {
    cat: ["sms", "all"],
    name: "Clickatell",
    logo: "https://img.icons8.com/fluency/96/sms.png",
    bg: "#00C176",
    desc: "Clickatell is like a messaging maestro for businesses, providing a platform that enables easy and efficient communication.",
  },
  {
    cat: ["sms", "all"],
    name: "TokBox (Vonage)",
    logo: "https://img.icons8.com/color/96/vonage.png",
    bg: "#FF6428",
    desc: "TokBox is like a facilitator of virtual face-to-face interactions on the internet. It provides developers with tools for video chat.",
  },

  // ── Forms & Survey ────────────────────────────────────────
  {
    cat: ["forms", "all"],
    name: "Google Forms",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/5b/Google_Forms_2020_Logo.svg",
    bg: "#7B2FBE",
    desc: "Google Forms is an online tool provided by Google that allows users to create and distribute surveys, quizzes, and forms.",
  },
  {
    cat: ["forms", "all"],
    name: "Wufoo",
    logo: "https://img.icons8.com/color/96/wufoo.png",
    bg: "#D63E2A",
    desc: "Wufoo is an online form builder that allows users to easily create and design forms for various purposes without needing coding skills.",
  },
  {
    cat: ["forms", "all"],
    name: "Typeform",
    logo: "https://img.icons8.com/color/96/typeform.png",
    bg: "#262627",
    desc: "Typeform is an online platform that allows users to create interactive and engaging surveys, quizzes, forms, and questionnaires.",
  },
  {
    cat: ["forms", "all"],
    name: "JotForm",
    logo: "https://img.icons8.com/color/96/jotform.png",
    bg: "#0A1551",
    desc: "JotForm is an online form-building platform that simplifies the process of creating and customizing forms for various purposes.",
  },
  {
    cat: ["forms", "all"],
    name: "SurveyMonkey",
    logo: "https://img.icons8.com/color/96/survey.png",
    bg: "#00BF6F",
    desc: "SurveyMonkey is an online platform designed for creating and conducting surveys and questionnaires for data collection.",
  },
  {
    cat: ["forms", "all"],
    name: "Gravity Forms",
    logo: "https://img.icons8.com/color/96/wordpress.png",
    bg: "#F26522",
    desc: "Gravity Forms is a WordPress plugin designed to simplify the process of creating and managing forms on a website.",
  },
  {
    cat: ["forms", "all"],
    name: "Formstack",
    logo: "https://img.icons8.com/fluency/96/form.png",
    bg: "#21B573",
    desc: "Formstack is an online form-building platform that simplifies the process of creating, managing, and analyzing forms.",
  },

  // ── Health & Fitness ──────────────────────────────────────
  {
    cat: ["health", "all"],
    name: "Fitbit API",
    logo: "https://img.icons8.com/color/96/fitbit.png",
    bg: "#00B0B9",
    desc: "The Fitbit API is a set of tools and protocols provided by Fitbit that allows developers to access and integrate Fitbit data.",
  },
  {
    cat: ["health", "all"],
    name: "Strava API",
    logo: "https://img.icons8.com/color/96/strava.png",
    bg: "#FC4C02",
    desc: "The Strava API is a set of tools and protocols provided by Strava, a popular fitness tracking platform for athletes.",
  },
  {
    cat: ["health", "all"],
    name: "Garmin Health API",
    logo: "https://img.icons8.com/color/96/garmin.png",
    bg: "#007CC3",
    desc: "The Garmin Health API is a set of tools and protocols provided by Garmin for accessing health and fitness data.",
  },
  {
    cat: ["health", "all"],
    name: "Samsung Health SDK",
    logo: "https://img.icons8.com/color/96/samsung.png",
    bg: "#1428A0",
    desc: "The Samsung Health Software Development Kit (SDK) is a set of tools and resources provided by Samsung to enable health app development.",
  },
  {
    cat: ["health", "all"],
    name: "Apple Health Kit",
    logo: "https://img.icons8.com/color/96/apple-health.png",
    bg: "#FF375F",
    desc: "Apple Health Kit is a framework developed by Apple that allows users to collect, store, and manage their health and fitness data.",
  },
  {
    cat: ["health", "all"],
    name: "Under Armour API",
    logo: "https://img.icons8.com/color/96/under-armour.png",
    bg: "#1D1D1B",
    desc: "Under Armour is a well-known American company that specializes in sportswear. Their API enables fitness data integration.",
  },
  {
    cat: ["health", "all"],
    name: "Google Fit API",
    logo: "https://img.icons8.com/color/96/google-fit.png",
    bg: "#EA4335",
    desc: "Google Fit API is a set of tools provided by Google that allows developers to create applications that access and utilize fitness data.",
  },
  {
    cat: ["health", "all"],
    name: "Open Humans API",
    logo: "https://img.icons8.com/fluency/96/human.png",
    bg: "#4CAF50",
    desc: "Open Humans API is a platform that enables individuals to easily manage and share their personal data for scientific research.",
  },

  // ── Finance Services ──────────────────────────────────────
  {
    cat: ["finance", "all"],
    name: "QuickBooks API",
    logo: "https://img.icons8.com/color/96/quickbooks.png",
    bg: "#2CA01C",
    desc: "QuickBooks API is an interface provided by Intuit, the company behind QuickBooks accounting software, for seamless integration.",
  },
  {
    cat: ["finance", "all"],
    name: "Zoho Books API",
    logo: "https://img.icons8.com/color/96/zoho.png",
    bg: "#E42527",
    desc: "Zoho Books API is a set of tools provided by Zoho, designed to facilitate the integration of external applications with Zoho Books.",
  },
  {
    cat: ["finance", "all"],
    name: "Xero API",
    logo: "https://img.icons8.com/color/96/xero.png",
    bg: "#13B5EA",
    desc: "Xero API is an interface provided by Xero, a cloud-based accounting software, that allows developers to integrate external applications.",
  },
  {
    cat: ["finance", "all"],
    name: "Sage Intacct API",
    logo: "https://img.icons8.com/color/96/sage.png",
    bg: "#00A651",
    desc: "Sage Intacct API is an interface provided by Sage Intacct, a cloud-based financial management software for enterprise integration.",
  },
  {
    cat: ["finance", "all"],
    name: "Wave Financial API",
    logo: "https://img.icons8.com/fluency/96/financial-analytics.png",
    bg: "#0F6CB5",
    desc: "Wave Financial API is an interface provided by Wave, a financial software company, for integrating financial management tools.",
  },
  {
    cat: ["finance", "all"],
    name: "Plaid API",
    logo: "https://img.icons8.com/color/96/plaid.png",
    bg: "#000000",
    desc: "Plaid API is a set of tools provided by Plaid, a financial technology company, allowing developers to create financial applications.",
  },
  {
    cat: ["finance", "all"],
    name: "FreshBooks API",
    logo: "https://img.icons8.com/color/96/freshbooks.png",
    bg: "#1B9BD1",
    desc: "FreshBooks API is a set of tools provided by FreshBooks, an accounting software company, for seamless business integration.",
  },
  {
    cat: ["finance", "all"],
    name: "Yodlee API",
    logo: "https://img.icons8.com/fluency/96/bank.png",
    bg: "#0047AB",
    desc: "Yodlee API is a set of tools provided by Yodlee, a financial data aggregator, for integrating external applications.",
  },

  // ── DeFi / Crypto II ──────────────────────────────────────
  {
    cat: ["defi", "crypto", "all"],
    name: "Smart Contract Integration",
    logo: "https://cryptologos.cc/logos/ethereum-eth-logo.svg",
    bg: "#627EEA",
    desc: "Smart contract integration refers to the incorporation of self-executing contracts, known as smart contracts, into a system.",
  },
  {
    cat: ["defi", "all"],
    name: "CoinAPI",
    logo: "https://img.icons8.com/fluency/96/cryptocurrency.png",
    bg: "#F7931A",
    desc: "CoinAPI is a platform that provides access to a wide range of cryptocurrency data and services through a unified interface.",
  },
  {
    cat: ["defi", "all"],
    name: "Wallet Integration",
    logo: "https://img.icons8.com/fluency/96/wallet.png",
    bg: "#9945FF",
    desc: "Wallet Integration refers to the process of incorporating a digital wallet into a system, application, or platform.",
  },
  {
    cat: ["defi", "crypto", "all"],
    name: "Coinbase Pro API",
    logo: "https://img.icons8.com/color/96/coinbase.png",
    bg: "#0052FF",
    desc: "Coinbase Pro API is a service provided by Coinbase, a widely used cryptocurrency exchange, allowing developers to build applications.",
  },
];

const FEATURES = [
  {
    Icon: FaRobot,
    title: "Automation",
    accent: "#3B82F6",
    desc: "We simplify tasks with automation. Our solutions use technology to handle repetitive jobs, saving time and reducing errors.",
  },
  {
    Icon: FaMagic,
    title: "Transformation",
    accent: "#8B5CF6",
    desc: "We simplify tasks with automation. Our solutions use technology to handle repetitive jobs, saving time and reducing errors.",
  },
  {
    Icon: FaPlug,
    title: "Connectivity",
    accent: "#10B981",
    desc: "We help improve connectivity by offering smart solutions that link everything smoothly, making sure information moves effortlessly.",
  },
  {
    Icon: FaSyncAlt,
    title: "Synchronization",
    accent: "#F97316",
    desc: "We make sure everything works together seamlessly. Our solutions help synchronize different parts of your business in harmony.",
  },
];


/* ─── Pill ──────────────────────────────────────────────────────────────── */
const Pill = ({ Icon, label }) => (
  <span className="pill-badge flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold text-white/90"
    style={{ border: "1px solid rgba(255,255,255,0.18)", background: "rgba(255,255,255,0.07)" }}>
    <Icon size={12} className="text-blue-400" />
    {label}
  </span>
);

/* ─── Stat Card ─────────────────────────────────────────────────────────── */
const StatCard = ({ value, label, idx }) => {
  const [ref, vis] = useInView();
  return (
    <div ref={ref}
      className="stat-glow text-center p-5 sm:p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm"
      style={{ opacity: vis ? 1 : 0, transform: vis ? "translateY(0)" : "translateY(28px)", transition: `all 0.6s ease ${idx * 0.12}s` }}>
      <div className="font-display text-3xl sm:text-4xl md:text-5xl mb-1" style={{ color: "#f97316" }}>{value}</div>
      <div className="text-xs text-blue-200 tracking-widest uppercase font-medium">{label}</div>
    </div>
  );
};

/* ─── Section Header ────────────────────────────────────────────────────── */
const SectionHeader = ({ eyebrow, titleWhite, titleGrad, gradColors, sub }) => {
  const [ref, vis] = useInView();
  return (
    <div ref={ref} className="text-center mb-12 sm:mb-16"
      style={{ opacity: vis ? 1 : 0, transform: vis ? "translateY(0)" : "translateY(24px)", transition: "all 0.7s ease" }}>
      <p className="text-orange-400 text-xs tracking-widest uppercase font-semibold mb-3">{eyebrow}</p>
      <h2 className="font-display text-4xl sm:text-5xl md:text-6xl mb-4 text-white">
        {titleWhite}{" "}
        <span style={{ background: gradColors, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
          {titleGrad}
        </span>
      </h2>
      {sub && <p className="text-blue-200 text-sm max-w-xl mx-auto leading-relaxed">{sub}</p>}
    </div>
  );
};

/* ─── Integration Card ──────────────────────────────────────────────────── */
const IntCard = ({ item, idx }) => {
  const [ref, vis] = useInView(0.05);
  return (
    <div ref={ref}
      className="int-card rounded-2xl border border-white/10 p-5 flex flex-col gap-4"
      style={{
        background: "rgba(255,255,255,0.03)",
        backdropFilter: "blur(10px)",
        opacity: vis ? 1 : 0,
        transform: vis ? "translateY(0)" : "translateY(24px)",
        transition: `all 0.5s ease ${(idx % 8) * 0.05}s`,
      }}
    >
      {/* Logo */}
      <div className="int-logo w-14 h-14 rounded-2xl flex items-center justify-center overflow-hidden flex-shrink-0"
        style={{ background: `${item.bg}22`, border: `1px solid ${item.bg}44` }}>
        <img
          src={item.logo}
          alt={item.name}
          className="w-9 h-9 object-contain"
          onError={(e) => {
            e.target.style.display = "none";
            e.target.nextSibling.style.display = "flex";
          }}
        />
        <div className="hidden w-9 h-9 items-center justify-center rounded-lg text-lg font-bold text-white"
          style={{ background: item.bg }}>
          {item.name[0]}
        </div>
      </div>

      {/* Title */}
      <div>
        <h3 className="font-semibold text-base mb-1"
          style={{ color: item.bg === "#000000" || item.bg === "#1D1D1B" || item.bg === "#262627" ? "#60A5FA" : item.bg }}>
          {item.name}
        </h3>
        <p className="text-xs leading-relaxed line-clamp-3" style={{ color: "rgba(147,197,253,0.7)" }}>
          {item.desc}
        </p>
      </div>

      {/* Talk link */}
      <div className="mt-auto pt-2 border-t border-white/5">
        <button
          className="talk-link text-xs font-semibold"
          style={{ color: "#f97316" }}
        >
          Talk to our experts <FaArrowRight size={9} />
        </button>
      </div>
    </div>
  );
};

/* ─── Feature Card ──────────────────────────────────────────────────────── */
const FeatCard = ({ feat, idx }) => {
  const [ref, vis] = useInView(0.1);
  return (
    <div ref={ref}
      className="feat-card rounded-2xl border border-white/10 p-6 sm:p-8"
      style={{
        background: "rgba(255,255,255,0.03)",
        backdropFilter: "blur(10px)",
        opacity: vis ? 1 : 0,
        transform: vis ? "translateY(0)" : "translateY(28px)",
        transition: `all 0.6s ease ${idx * 0.12}s`,
      }}
    >
      <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 text-xl"
        style={{ background: `${feat.accent}18`, color: feat.accent, border: `1px solid ${feat.accent}33` }}>
        <feat.Icon />
      </div>
      <h3 className="font-display text-2xl text-white mb-3">{feat.title}</h3>
      <p className="text-sm leading-relaxed" style={{ color: "rgba(147,197,253,0.72)" }}>{feat.desc}</p>
    </div>
  );
};



/* ─── CTA ───────────────────────────────────────────────────────────────── */
const CTA = () => {
  const [ref, vis] = useInView();
  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-20" style={{ background: "#020917" }}>
      <div ref={ref}
        className="max-w-3xl mx-auto text-center rounded-3xl p-10 sm:p-14 border border-white/10 relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #0f172a, #1e1b4b44)",
          opacity: vis ? 1 : 0,
          transform: vis ? "translateY(0)" : "translateY(36px)",
          transition: "all 0.8s ease",
        }}>
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at 50% 0%, #f9731622 0%, transparent 60%)" }} />
        <p className="text-orange-400 text-xs tracking-widest uppercase font-semibold mb-4 relative z-10">
          Ready To Start Your Project?
        </p>
        <h2 className="font-display text-4xl sm:text-5xl md:text-6xl mb-5 relative z-10">
          Streamline Your Business{" "}
          <span style={{ background: "linear-gradient(90deg,#f97316,#fbbf24)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            Integrations
          </span>
        </h2>
        <p className="text-blue-200 text-sm mb-8 relative z-10 max-w-xl mx-auto leading-relaxed">
          We're experts at making your systems work together smoothly. Our team designs custom solutions
          to improve everything — reducing mistakes and saving you time.
        </p>
        <div className="flex gap-4 justify-center flex-wrap relative z-10">
          <a href="#"
            className="px-5 sm:px-9 py-3.5 rounded-full font-semibold text-sm transition-all hover:scale-105"
            style={{ background: "linear-gradient(135deg,#f97316,#ea580c)", boxShadow: "0 6px 30px #f9731444" }}>
            Start a Conversation
          </a>
          <a href="#"
            className="px-5 sm:px-9 py-3.5 rounded-full font-semibold text-sm border border-white/20 hover:border-blue-400 transition-all text-blue-200 hover:text-white">
            View All Integrations →
          </a>
        </div>
      </div>
    </section>
  );
};

/* ─── Main ──────────────────────────────────────────────────────────────── */
export default function IntegrationsPage() {
  const [heroRef, heroVis] = useInView(0.05);
  const [activeFilter, setActiveFilter] = useState("all");
  const [visibleCount, setVisibleCount] = useState(16);

  const filtered = INTEGRATIONS.filter(i => i.cat.includes(activeFilter));
  const visible = filtered.slice(0, visibleCount);

  const fade = (delay = 0) => ({
    opacity: heroVis ? 1 : 0,
    transform: heroVis ? "translateY(0)" : "translateY(24px)",
    transition: `all 0.75s ease ${delay}s`,
  });

  // Reset count when filter changes
  const handleFilter = (key) => {
    setActiveFilter(key);
    setVisibleCount(16);
  };

  const [featRef, featVis] = useInView(0.07);

  return (
    <div className="int-root text-white overflow-x-hidden"
      style={{ background: "linear-gradient(135deg,#020917 0%,#040d1f 50%,#060a14 100%)" }}>
      <Fonts />

      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section
        className="relative flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-20 overflow-hidden"
        style={{ minHeight: "88vh", paddingTop: "6rem", paddingBottom: "4rem" }}
      >

        {/* BG glows */}
        <div
          className="absolute top-20 left-1/4 w-72 h-72 rounded-full blur-3xl opacity-20 pointer-events-none"
          style={{ background: "radial-gradient(circle,#3b82f6,transparent)" }}
        />
        <div
          className="absolute bottom-20 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-15 pointer-events-none"
          style={{ background: "radial-gradient(circle,#f97316,transparent)" }}
        />

        {/* Content */}
        <div ref={heroRef} className="relative z-10 w-full max-w-4xl mx-auto">

          

          {/* Badge */}
          <div style={fade(0)} className="flex justify-center mb-6">
            <span
              style={{
                border: "1px solid #f9731555",
                color: "#fb923c",
                background: "#f9731511",
                padding: "6px 18px",
                borderRadius: "999px",
                fontSize: "0.7rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                fontWeight: 700
              }}
            >
              Pre-Built Integrations
            </span>
          </div>

          {/* Headline */}
          <div style={fade(0.1)}>
            <h1
              className="font-display text-white leading-none mb-2"
              style={{ fontSize: "clamp(2.4rem,6vw,5rem)" }}
            >
              Experience Our
            </h1>

            <h1
              className="font-display leading-none mb-2"
              style={{
                fontSize: "clamp(2.4rem,6vw,5rem)",
                background: "linear-gradient(90deg,#f97316,#fbbf24)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent"
              }}
            >
              Pre-Built Integration
            </h1>

            <h1
              className="font-display text-white leading-none mb-7"
              style={{ fontSize: "clamp(2.4rem,6vw,5rem)" }}
            >
              Services
            </h1>
          </div>

          {/* Subtext */}
          <p
            className="text-blue-200 max-w-xl mx-auto mb-8 leading-relaxed"
            style={{ ...fade(0.25), fontSize: "clamp(0.9rem,1.8vw,1rem)" }}
          >
            Our company specializes in providing pre-built integration services to
            streamline and enhance various aspects of your business operations.
          </p>

          {/* Pills */}
          <div className="flex flex-wrap justify-center gap-3 mb-8" style={fade(0.3)}>
            <Pill Icon={FaPlug} label="50+ Integrations" />
            <Pill Icon={FaShieldAlt} label="Enterprise Grade" />
            <Pill Icon={FaRocket} label="Quick Setup" />
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap justify-center gap-4" style={fade(0.4)}>
            <button
              className="px-3 sm:px-9 py-3.5 rounded-full font-semibold text-sm transition-all hover:scale-105 active:scale-95"
              style={{
                background: "linear-gradient(135deg,#f97316,#ea580c)",
                boxShadow: "0 6px 30px #f9731444"
              }}
            >
              Start a Conversation
            </button>

            <button className="px-3 sm:px-9 py-3.5 rounded-full font-semibold text-sm border border-white/20 hover:border-blue-400 transition-all text-blue-200 hover:text-white">
              Explore Services →
            </button>
          </div>

        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bounce-y opacity-30">
          <div
            className="w-px h-10 mx-auto"
            style={{ background: "linear-gradient(to bottom,#3b82f6,transparent)" }}
          />
        </div>

      </section>

      {/* ── STATS ────────────────────────────────────────────────────── */}
      <div className="px-4 sm:px-6 lg:px-20 pb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto">
          {STATS.map((s, i) => <StatCard key={i} {...s} idx={i} />)}
        </div>
      </div>

      {/* ── INTEGRATIONS GRID ─────────────────────────────────────────── */}
      <section className="py-8 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-20"
        style={{ background: "linear-gradient(180deg,#040d1f,#050d1e,#040d1f)" }}>

        {/* Section header */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 mb-12">
          <div>
            <p className="text-orange-400 text-xs tracking-widest uppercase font-semibold mb-2">What We Offer</p>
            <h2 className="font-display text-4xl sm:text-5xl text-white leading-none">
              Transforming Ideas Into{" "}
              <span style={{ background: "linear-gradient(90deg,#f97316,#fbbf24)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Strategic Integrations
              </span>
            </h2>
          </div>
          <p className="text-blue-200 text-sm max-w-sm leading-relaxed" style={{ color: "rgba(147,197,253,0.75)" }}>
            We understand how important seamless connectivity is in today's fast-paced
            business environment, which is why we offer a wide range of services to ensure
            that your systems are always working in sync.
          </p>
        </div>

        {/* Filter pills */}
        <div className="flex gap-2 overflow-x-auto no-scrollbar pb-2 mb-10 flex-wrap">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.key}
              onClick={() => handleFilter(cat.key)}
              className={`filter-pill px-4 py-2 rounded-full text-xs font-semibold border ${activeFilter === cat.key ? "active" : ""}`}
              style={activeFilter !== cat.key ? {
                border: "1px solid rgba(255,255,255,0.15)",
                color: "rgba(147,197,253,0.7)",
                background: "rgba(255,255,255,0.04)",
              } : {}}>
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
          {visible.map((item, i) => (
            <IntCard key={`${activeFilter}-${i}`} item={item} idx={i} />
          ))}
        </div>

        {/* Load more */}
        {visibleCount < filtered.length && (
          <div className="flex justify-center mt-10">
            <button
              onClick={() => setVisibleCount(v => v + 16)}
              className="px-8 py-3.5 rounded-full font-semibold text-sm border border-white/20 hover:border-orange-400 transition-all text-blue-200 hover:text-white"
              style={{ backdropFilter: "blur(8px)", background: "rgba(255,255,255,0.04)" }}>
              Load More ({filtered.length - visibleCount} remaining)
            </button>
          </div>
        )}

        {/* Empty */}
        {filtered.length === 0 && (
          <div className="text-center py-20 text-blue-200 opacity-50">
            <FaPlug className="text-4xl mx-auto mb-4" />
            <p>No integrations found in this category.</p>
          </div>
        )}
      </section>

      {/* ── FEATURES ──────────────────────────────────────────────────── */}
      <section className="py-6 sm:py-20 lg:py-12 px-4 sm:px-6 lg:px-20"
        style={{ background: "linear-gradient(180deg,#050d1e,#040d1f)" }}>
        <SectionHeader
          eyebrow="Why Choose Us"
          titleWhite="Streamlining Your Business:"
          titleGrad="Seamless Integration"
          gradColors="linear-gradient(90deg,#3b82f6,#8b5cf6)"
          sub="We're experts at making your systems work together smoothly. Our team checks how you do things and designs custom solutions to improve everything."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 max-w-4xl mx-auto">
          {FEATURES.map((feat, i) => (
            <FeatCard key={i} feat={feat} idx={i} />
          ))}
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────── */}
      <CTA />
    </div>
  );
}