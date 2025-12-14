# 📚 Memoryfy CLI App

A command-line interface application for storing and managing personal memories with tagging functionality.

## 🌟 Features

* Store memories with content and tags
* Retrieve memories by tags
* Simple and intuitive command-line interface
* Lightweight and easy to use

## 🛠 Technologies Used

### Backend
* Node.js
* JavaScript (ES Modules)

### Database
* JSON file-based storage

### Command Line Interface
* Yargs for command parsing
* Chalk for colored output
* Figlet for ASCII art

## 🏗 Application Structure

```
memoryfy-cli-app/
├── db.json
├── index.js
├── package.json
├── src/
│   ├── command.js
│   ├── db.js
│   └── memories.js
└── Readme.md
```

## 🔄 Data Flow

1. User enters a command in the terminal
2. Yargs parses the command and arguments
3. The appropriate function in `command.js` is called
4. The database functions in `db.js` interact with `db.json`
5. Results are formatted and displayed to the user

## 🤖 How It Works

The application uses a simple JSON file as a database to store memories. Each memory has:
- Content (the actual memory text)
- Tags (keywords for categorization)
- An ID (unique identifier)

The core functionality is built around CRUD operations:
- Create: Add new memories with content and tags
- Read: Retrieve memories by tags
- Update: Modify existing memories
- Delete: Remove memories

## 📖 CLI Documentation

### Basic Commands

1. **Capture a new memory**:
```bash
memoryfy new "Your memory content here" --tags "tag1,tag2"
```
- Replace "Your memory content here" with your memory text
- Add tags to categorize your memory (optional)

2. **Recall all memories**:
```bash
memoryfy all
```
- Displays all stored memories with their IDs, content, and tags

3. **Find a specific memory by ID**:
```bash
memoryfy find <memory-id>
```
- Replace `<memory-id>` with the ID of the memory you want to find

4. **Delete a memory by ID**:
```bash
memoryfy delete <memory-id>
```
- Replace `<memory-id>` with the ID of the memory you want to delete

5. **Clear all memories**:
```bash
memoryfy clear
```
- WARNING: This will permanently delete all stored memories

### Advanced Usage

1. **Tagging memories**:
- You can add multiple tags to a memory by separating them with commas
- Example: `--tags "work,important,project"`

2. **Viewing memory details**:
- When listing memories, each memory will show:
  - ID: Unique identifier
  - Content: The memory text
  - Tags: Categorization keywords

## 🚀 Getting Started

### Prerequisites

* Node.js (v18 or later)
* npm (comes with Node.js)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/memoryfy-cli-app.git
```

2. Navigate to the project directory:
```bash
cd memoryfy-cli-app
```

3. Install dependencies:
```bash
npm install
```

### Development

To run the application in development mode:
```bash
npm start
```

### Production

To install the application globally:
```bash
npm install -g
```

Then you can use the `memoryfy` command from anywhere in your terminal.

## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. Fork the repository
2. Create a new branch for your feature or bug fix
3. Make your changes
4. Test thoroughly
5. Submit a pull request with a clear description of your changes

### Development Workflow

1. Clone your forked repository
2. Create a new branch for your changes
3. Make your changes and commit them with descriptive messages
4. Push your changes to your fork
5. Submit a pull request to the main repository

## 🎉 Closing

Start building your digital memory collection today! With Memoryfy CLI App, preserving your memories has never been easier. Happy storing! 📖💻