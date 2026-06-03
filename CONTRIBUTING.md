# Contributing to This Project

Thank you for your interest in contributing! We welcome all contributions, from bug reports to new features.

## Code of Conduct

Please read our [CODE_OF_CONDUCT.md](./CODE_OF_CONDUCT.md) to understand our community standards.

## How to Contribute

### Reporting Bugs

Before creating a bug report, check the existing issues as you might find that the problem has already been reported.

**When creating a bug report, please include:**

- A clear, descriptive title
- A detailed description of the problem
- Steps to reproduce the issue
- Expected behavior vs actual behavior
- Screenshots or error messages (if applicable)
- Your environment (OS, Node version, etc.)

### Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. When creating one, please include:

- A clear, descriptive title
- A detailed description of the suggested enhancement
- Why this enhancement would be useful
- Possible implementation approach (optional)

### Pull Requests

1. **Fork the repository** and create your branch from `main`
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes** and test them locally
   ```bash
   npm test
   npm run lint
   ```

3. **Commit with clear messages**
   ```bash
   git commit -m "feat: add new feature" -m "Detailed description of changes"
   ```

4. **Push to your fork**
   ```bash
   git push origin feature/your-feature-name
   ```

5. **Create a Pull Request** with:
   - A clear title describing the changes
   - Reference to related issues (#123)
   - Description of what changed and why
   - Testing information (how you tested the changes)
   - Screenshots or examples (if applicable)

## Commit Message Convention

We follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

- `feat:` A new feature
- `fix:` A bug fix
- `docs:` Documentation changes
- `style:` Code style changes (formatting, semicolons, etc.)
- `refactor:` Code refactoring
- `perf:` Performance improvements
- `test:` Adding or updating tests
- `chore:` Dependency updates, tooling changes

Example:
```
feat: add user authentication module

Added JWT-based authentication with support for refresh tokens.
Closes #456
```

## Development Setup

```bash
# Clone your fork
git clone https://github.com/yourusername/yourproject.git
cd yourproject

# Install dependencies
npm install

# Create a feature branch
git checkout -b feature/your-feature

# Make changes and test
npm run lint
npm test

# Build the project
npm run build
```

## Testing

- Write tests for new features
- Ensure all tests pass: `npm test`
- Aim for >80% code coverage
- Follow existing test patterns and naming conventions

## Code Style

- Use 2 spaces for indentation
- Use semicolons
- Use single quotes for strings
- Run `npm run format` to auto-format code
- Run `npm run lint` to check for issues

## Documentation

- Update README.md if adding features
- Add inline comments for complex logic
- Update CHANGELOG.md with notable changes
- Keep documentation up to date

## Review Process

All pull requests will be reviewed by maintainers. We may request changes or ask clarifying questions. Once approved and tests pass, your PR will be merged!

## Community

- Be respectful and constructive
- Provide helpful feedback
- Welcome new contributors
- Celebrate contributions

## Questions?

Feel free to reach out by:
- Opening a GitHub issue with the `question` label
- Checking existing discussions
- Mentioning @maintainer in your issue

Thank you for contributing! 🎉
