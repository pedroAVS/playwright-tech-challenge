#!/bin/bash

# Install dependencies
npm install

# Install latest browser binaries
npx playwright install

# Run tests
npm run test

# Generate report
npm run generate-report

# Open report
npm run open-report