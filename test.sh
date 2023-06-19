#!/bin/bash

NODE_VERSION=$(node -v)
REQUIRED_NODE_VERSION="v20.2.0"

if [[ $NODE_VERSION != $REQUIRED_NODE_VERSION ]]; then
  echo "Error: Invalid Node.js version. Expected $REQUIRED_NODE_VERSION but found $NODE_VERSION."
  exit 1
fi

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