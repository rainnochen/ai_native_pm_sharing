# Security Policy

This repository contains templates and starter material for PM AI workflows. It must not contain real secrets, internal business data, cookies, private user data, or sensitive company information.

## Data That Must Not Be Committed

- API keys, tokens, OAuth credentials, cookies, session data.
- Internal business metrics, unreleased product plans, customer data, user feedback with personal identifiers.
- Private browsing history, precise personal location, payment data, medical data, or legal data.
- Vendor-specific credentials or deployment secrets.

## High-Risk Components

Treat these as high risk:

- MCP servers and connectors.
- Browser automation.
- Shell scripts.
- Agent tools that write files, send messages, publish content, modify permissions, delete data, or call paid APIs.

Examples must default to mock data, read-only mode, or explicit human approval.

## Human Gates

Human approval is required before:

- Publishing, deleting, or overwriting external content.
- Sending emails or messages.
- Changing permissions.
- Using sensitive data.
- Making payments or calling paid services.
- Running scripts that modify external systems.

## Reporting Issues

If you find a security issue in this repository, open a private report if GitHub security advisories are enabled, or contact the repository owner directly. Do not publish exploit details in a public issue before maintainers have time to respond.
