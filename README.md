# riodilawedding

my-project/
│
├── public/                     # Static assets for deployment
│   ├── css/
│   │   └── styles.css          # Compiled Tailwind CSS file
│   ├── js/
│   │   └── alpine.js           # Alpine.js (optional if using CDN)
│   ├── index.html              # Main HTML file
│   └── assets/                 # Images, fonts, etc.
│
├── src/                        # Source files
│   ├── css/
│   │   └── tailwind.css        # Tailwind CSS source file
│   └── js/
│       └── main.js             # Your custom JS (optional)
│
├── .gitignore                  # Ignore files like node_modules, .env, etc.
├── tailwind.config.js          # Tailwind CSS configuration
├── postcss.config.js           # PostCSS configuration for Tailwind CSS
└── package.json                # Node.js dependencies and scripts

## Run tailwind build
npx tailwindcss -i ./src/css/input.css -o ./public/css/output.css --watch

## To Use Prettier
npx prettier --write public/index.html