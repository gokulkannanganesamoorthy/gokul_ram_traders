/**
 * tracker.js
 * Sends structured analytics events to a Discord Webhook.
 */

const DISCORD_WEBHOOK_URL =
  'https://discord.com/api/webhooks/1505063519584915586/hIkZ-WKRs-kV9opdTK_8wipWeuCGzUDvzIsqakk-Sa1Ufn0ip8wKkfPMQdqgrQNcs8YE';

// Cache geo info so we only fetch once per session
let _geoCache = null;

export const getGeoInfo = async () => {
  if (_geoCache) return _geoCache;
  try {
    const res = await fetch('https://ipapi.co/json/');
    const data = await res.json();
    _geoCache = {
      ip: data.ip || 'Unknown',
      city: data.city || 'Unknown',
      region: data.region || 'Unknown',
      country: data.country_name || 'Unknown',
      isp: data.org || 'Unknown',
      timezone: data.timezone || 'Unknown',
    };
  } catch {
    _geoCache = {
      ip: 'Unavailable',
      city: 'Unavailable',
      region: 'Unavailable',
      country: 'Unavailable',
      isp: 'Unavailable',
      timezone: 'Unavailable',
    };
  }
  return _geoCache;
};

export const getDeviceType = () => {
  const ua = navigator.userAgent;
  if (/Mobi|Android|iPhone/i.test(ua)) return 'Mobile';
  if (/Tablet|iPad/i.test(ua)) return 'Tablet';
  return 'Desktop';
};

export const getReferrer = () => {
  if (!document.referrer) return 'Direct / Bookmark';
  try {
    return new URL(document.referrer).hostname;
  } catch {
    return document.referrer;
  }
};

export const getTimeIST = () =>
  new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });

/**
 * Core function: sends any event with any fields to Discord.
 * @param {string} title - Title of the embed
 * @param {Object} fields - Key-value pairs to show as embed fields
 * @param {number} color - Embed left-border color as decimal
 */
export const sendToDiscord = async (title, fields = {}, color = 3092271) => {
  const payload = {
    username: 'Gokulram Site Monitor',
    avatar_url: 'https://gokulramelectricals.in/brand_assets/logo_black.png',
    embeds: [
      {
        title,
        color,
        fields: Object.entries(fields).map(([name, value]) => ({
          name,
          value: String(value) || 'N/A',
          inline: true,
        })),
        footer: { text: 'gokulramelectricals.in' },
        timestamp: new Date().toISOString(),
      },
    ],
  };

  try {
    await fetch(DISCORD_WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
  } catch (err) {
    console.error('Discord webhook failed:', err);
  }
};

/**
 * Convenience wrapper used by buttons/links.
 */
export const trackEvent = async (actionName, details = {}) => {
  const geo = await getGeoInfo();
  await sendToDiscord(
    'Customer Action',
    {
      Action: actionName,
      'IP Address': geo.ip,
      Location: `${geo.city}, ${geo.region}, ${geo.country}`,
      ISP: geo.isp,
      Device: getDeviceType(),
      Time: getTimeIST(),
      ...details,
    },
    15844367, // orange-ish for actions
  );
};
