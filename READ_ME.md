We will use Node Js and Express for backend and for the database is MongoDB

FOR BACKEND
INSTALL DEPENDENCIES

node js
npm init -y
npm install mongodb
npm install express dotenv cookie-parser bcrypt jsonwebtoken mongoose
npm install --save-dev nodemon
npm install cors

scripts:
"start: "node index.js"
"dev": "nodemon index.js"

vscode
make sure to install the extension of ES7

FOR FRONT END
npm create vite@latest .
npm install react-router
library for UI success/errors
npm install react-hot-toast

tailwind for styles
https://tailwindcss.com/docs/installation/using-vite

npm install tailwindcss @tailwindcss/vite
then do this in vite.config.js

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
plugins: [react(), tailwindcss()],
});

much more better UI hehehe
npm i -D daisyui@latest
https://daisyui.com/docs

install axios for api fetching
npm install axios
https://axios.rest/pages/getting-started/first-steps

install lucide for icons
npm install lucide-react
https://lucide.dev/guide/react/getting-started

npm uninstall daisyui tailwindcss axios
npm uninstall tailwindvite

We will use
RTK Query
Redux
Plain CSS for the styling

npm install react-redux
