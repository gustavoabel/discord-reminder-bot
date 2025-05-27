# Discord Reminder Daemon 🔔

Discord Reminder Daemon is a lightweight background client that logs in as a Discord bot and sends scheduled reminder messages to a specified channel. Designed for one-shot execution, it’s ideal for use with cron jobs, GitHub Actions, or any external scheduler.

Built with Node.js and discord.js, this daemon ensures your team never misses a beat — without keeping the bot online full-time.

## ✨ Features

- 🔔 Sends automated reminder messages
- 💬 Integrates with any Discord text channel
- 🎨 Customizable message content via .env
- ⚙️ Simple and environment-based configuration
- ⏰ Works with any external scheduler (cron, GitHub Actions, Railway, etc.)

## 🛠️ Tech Stack

- **Node.js** - Runtime environment
- **TypeScript** - Programming language
- **Discord.js** (v14.18.0) - Discord API wrapper
- **dotenv** - Environment variable management
- **moment-timezone** - Date and time handling
- **node-cron** - Task scheduling

## 📋 Prerequisites

- Node.js (v14 or higher)
- Yarn package manager
- Discord Bot Token
- Discord Channel ID

## 🚀 Installation

1. Clone the repository:

```bash
git clone [repository-url]
```

2. Install dependencies:

```bash
yarn install
```

## 💻 Usage

1. Start the bot:

```bash
yarn start
```

The bot will:

- Connect to Discord
- Send a reminder message to the specified channel
- Automatically disconnect after sending the message

## 🔧 Configuration

### Local Development

Configure your environment variables in the `.env` file:

```
TOKEN=your_discord_bot_token
CHANNEL_ID=your_discord_channel_id
MESSAGE=your_custom_message
SCHEDULE_HOUR=17 # 24-hour format
TIMEZONE=your_timezone # (e.g., America/Sao_Paulo, America/New_York)
```

### GitHub Actions

To configure the bot in GitHub Actions, add the following secrets in your repository settings:

- `TOKEN`: Your Discord bot token
- `CHANNEL_ID`: Your Discord channel ID
- `MESSAGE`: Your custom message
- `SCHEDULE_HOUR`: The hour when the reminder should be sent (24-hour format)
- `TIMEZONE`: The timezone in which the message should be scheduled (e.g., America/Sao_Paulo, America/New_York)

## 📁 Project Structure

```
discord-reminder-daemon/
├── src/
│   └── index.ts        # Main bot implementation
├── .env                # Environment variables
├── package.json        # Project dependencies
├── tsconfig.json       # TypeScript configuration
└── yarn.lock           # Dependency lock file
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License.

## 👨‍💻 Author

[Gustavo Abel](https://gustavoabel.dev)

---

Made with ❤️ by Gustavo Abel
