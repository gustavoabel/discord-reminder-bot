# Discord Reminder Bot 🤖

A Discord bot designed to send automated reminders in your Discord channels.

## Description

This bot is built to help teams stay on top of their tasks by sending automated reminders in a specified Discord channel. It uses Discord.js to interact with the Discord API and runs on a Node.js environment.

## Features

- Automated reminder messages
- Discord channel integration
- Simple and efficient design
- Customizable message content
- Easy to configure

## Tech Stack

- **Node.js** - Runtime environment
- **TypeScript** - Programming language
- **Discord.js** (v14.18.0) - Discord API wrapper
- **dotenv** - Environment variable management
- **moment-timezone** - Date and time handling
- **node-cron** - Task scheduling

## Prerequisites

- Node.js (v14 or higher)
- Yarn package manager
- Discord Bot Token
- Discord Channel ID

## Installation

1. Clone the repository:

```bash
git clone [repository-url]
```

2. Install dependencies:

```bash
yarn install
```

3. Create a `.env` file in the root directory with the following variables:

```
TOKEN=your_discord_bot_token
CHANNEL_ID=your_discord_channel_id
MESSAGE=your_custom_message # Optional - defaults to a reminder message
```

## Usage

1. Start the bot:

```bash
yarn start
```

The bot will:

- Connect to Discord
- Send a reminder message to the specified channel
- Automatically disconnect after sending the message

## Project Structure

```
discord-reminder-bot/
├── src/
│   └── index.ts        # Main bot implementation
├── .env                # Environment variables
├── package.json        # Project dependencies
├── tsconfig.json       # TypeScript configuration
└── yarn.lock           # Dependency lock file
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the ISC License.

## Author

Gustavo Abel

---

Made with ❤️ Gustavo Abel
