#!/bin/bash
set -x  # Enable debugging

# Function to check if a command exists
command_exists() {
    command -v "$1" >/dev/null 2>&1
}

echo "Navigating to the project directory..."
cd /var/www/html/riodilawedding || { echo "Failed to navigate to project directory"; exit 1; }

# Ensure Node.js and npm are installed using apt
if ! command_exists node || ! command_exists npm; then
    echo "Node.js and npm are required but not installed. Installing with apt..."
    sudo apt update
    sudo apt install -y nodejs npm
fi
# Ensure npx (comes with npm) is available
if ! command_exists npx; then
    echo "npx is not available. Installing npm globally..."
    sudo npm install -g npm
fi

# Ensure Tailwind CSS is installed
if ! [ -d "node_modules/tailwindcss" ]; then
    echo "Tailwind CSS is not installed. Installing it locally..."
    npm install tailwindcss
fi

echo "Pulling latest changes from the GitHub repository..."
git pull origin main || { echo "Git pull failed"; exit 1; }

echo "Running Tailwind CSS build..."
npx tailwindcss -i ./src/css/input.css -o ./public/css/output.css || { echo "Tailwind build failed"; exit 1; }

echo "Script executed successfully"

