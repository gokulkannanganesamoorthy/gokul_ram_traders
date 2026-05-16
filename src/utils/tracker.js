/**
 * Utility for sending tracking events to a Discord Webhook.
 */

// Replace this with your actual Discord Webhook URL
const DISCORD_WEBHOOK_URL = "YOUR_DISCORD_WEBHOOK_URL_HERE";

export const trackEvent = async (actionName, details = {}) => {
  if (DISCORD_WEBHOOK_URL === "YOUR_DISCORD_WEBHOOK_URL_HERE") {
    console.warn("Discord Webhook URL not configured. Event not sent:", actionName);
    return;
  }

  const payload = {
    username: "Gokul Ram Tracker",
    avatar_url: "https://gokulramelectricals.in/brand_assets/logo_black.png",
    embeds: [
      {
        title: "🔔 New Customer Interaction",
        color: 16766720, // Brand yellow/gold color
        fields: [
          {
            name: "Action",
            value: actionName,
            inline: true,
          },
          {
            name: "Time",
            value: new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
            inline: true,
          },
          ...Object.entries(details).map(([key, value]) => ({
            name: key,
            value: String(value),
            inline: true,
          })),
        ],
        footer: {
          text: "Gokul Ram Electricals Monitoring",
        },
      },
    ],
  };

  try {
    await fetch(DISCORD_WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
  } catch (error) {
    console.error("Failed to send webhook:", error);
  }
};
