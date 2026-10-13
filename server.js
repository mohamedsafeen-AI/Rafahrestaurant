import express from "express";
import bodyParser from "body-parser";
import twilio from "twilio";


const app = express();
app.use(bodyParser.json());

// Twilio credentials
const accountSid = "YOUR_TWILIO_SID";
const authToken = "YOUR_TWILIO_AUTH_TOKEN";
const twilioNumber = "YOUR_TWILIO_PHONE_NUMBER";

const client = twilio(accountSid, authToken);



app.post("/send-sms", async (req, res) => {
  try {
    const { phone, name, address } = req.body;

    // Validate phone
    if (!phone || !/^\+91[6-9]\d{9}$/.test(phone)) {
      return res.status(400).json({ message: "Invalid phone number format" });
    }

    const message = await client.messages.create({
      body: `📌 Reservation received!\n👤 Name: ${name}\n🏠 Address: ${address}\n📞 Phone: ${phone}`,
      from: twilioNumber,
      to: phone, // sending confirmation to customer
    });

    console.log("Message sent:", message.sid);
    res.json({ message: "Reservation confirmed! SMS sent ✅" });

  } catch (err) {
    console.error("SMS Error:", err);
    res.status(500).json({ message: "Failed to send SMS ❌" });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
