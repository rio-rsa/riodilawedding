#!/bin/bash

# Go to the correct directory
cd /var/www/html/riodilawedding

# Pull the latest changes from the repository
git pull origin main

# Run Tailwind CSS build
npx tailwindcss -i ./src/css/input.css -o ./public/css/output.css
