#!/bin/bash
set -x  # Enable debugging

# Redirect both stdout and stderr to a log file
exec > /var/log/update-and-build.log 2>&1

echo "Navigating to the project directory..."
cd /var/www/html/riodilawedding || { echo "Failed to navigate to project directory"; exit 1; }

echo "Pulling latest changes from the GitHub repository..."
git pull origin main || { echo "Git pull failed"; exit 1; }

echo "Running Tailwind CSS build..."
npx tailwindcss -i ./src/css/input.css -o ./public/css/output.css || { echo "Tailwind build failed"; exit 1; }

echo "Script executed successfully"
