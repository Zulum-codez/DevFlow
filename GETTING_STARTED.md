# Getting Started

Welcome to the project! This guide will help you get up and running.

## Prerequisites

- Node.js >= 14.0.0
- npm >= 6.0.0
- Git

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/yourproject.git
cd yourproject
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Setup Environment Variables

```bash
cp .env.example .env
# Edit .env with your configuration
```

### 4. Run the Application

```bash
npm start
```

The application should now be running on the port specified in your `.env` file.

## Available Commands

```bash
# Start the application
npm start

# Start with auto-reload during development
npm run dev

# Run tests
npm test

# Run tests in watch mode
npm run test:watch

# Lint code
npm run lint

# Fix linting issues
npm run lint:fix

# Format code with Prettier
npm run format

# Build for production
npm run build
```

## Project Structure

```
yourproject/
├── src/                 # Source code
│   ├── utils/          # Utility functions
│   ├── config/         # Configuration files
│   └── modules/        # Feature modules
├── tests/              # Test files
├── docs/               # Documentation
├── config/             # Configuration
├── .github/            # GitHub templates
├── index.js            # Entry point
├── package.json        # Dependencies
├── .env.example        # Example environment variables
└── README.md           # Project overview
```

## Configuration

### Environment Variables

Edit `.env` file to configure:

- `NODE_ENV` - Environment (development/production)
- `PORT` - Server port
- `DB_HOST` - Database host
- `LOG_LEVEL` - Logging level (error/warn/info/debug)

## Development Workflow

1. Create a feature branch: `git checkout -b feature/your-feature`
2. Make changes and commit: `git commit -m "feat: description"`
3. Run tests: `npm test`
4. Push and create a pull request

## Testing

Write tests in the `tests/` directory with `.test.js` extension.

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Check coverage
npm test -- --coverage
```

## Debugging

### Node Inspector

```bash
node --inspect index.js
```

Then open `chrome://inspect` in Chrome.

### Console Logging

```javascript
const logger = require('./src/utils/logger');
logger.info('Debug message');
logger.debug('Debug info', data);
```

## Common Issues

### Port Already in Use

Change the `PORT` in `.env` file to an available port.

### Dependencies Not Installing

```bash
rm -rf node_modules package-lock.json
npm install
```

### Permission Denied

On macOS/Linux:
```bash
chmod +x scripts/*.sh
```

## Next Steps

- Read the [API Reference](./API.md)
- Check the [Contributing Guidelines](../CONTRIBUTING.md)
- Review [Best Practices](./BEST_PRACTICES.md)

## Getting Help

- Check [FAQ](./FAQ.md)
- Open an [issue on GitHub](https://github.com/yourusername/yourproject/issues)
- Read the [documentation](./README.md)

## Additional Resources

- [Node.js Documentation](https://nodejs.org/docs/)
- [npm Documentation](https://docs.npmjs.com/)
- [Express.js Guide](https://expressjs.com/)

Happy coding! 🚀
