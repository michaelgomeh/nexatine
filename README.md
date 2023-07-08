# Nexatine Template
<p align="center">
   <br/>
   <a href="https://nextjs.org" target="_blank">
   <img height="64" src="https://nextjs.org/static/favicon/android-chrome-192x192.png" />
   </a>
   <a href="https://authjs.dev/" target="_blank">
   <img height="64" src="https://authjs.dev/img/logo/logo-sm.webp" />
   </a>
   <a href="https://xata.io/" target="_blank">
   <img height="64" src="https://seeklogo.com/images/X/xata-icon-logo-975E9C67F2-seeklogo.com.png" />
   </a>
   <a href="https://mantine.dev/" target="_blank">
   <img height="64" src="https://pbs.twimg.com/profile_images/1384763585742704642/TJa1rkqk_400x400.jpg" />
   </a>
   <h3 align="center">Next.js + Auth.js + Xata.io + MantineUI</h3>
   <p align="center">
   </p>
  
</p>

Simple Next.js starter using auth.js, Xata.io & MantineUI.
You can test here the demo: https://nexatine.vercel.app

## Overview

<p align="center"><b>WORK IN PROGRESS</b> <br/></p>

1. connect Auth.js using google API key (or any other provider) [`https://authjs.dev/reference/core/providers_google`](https://authjs.dev/reference/core/providers_google)
2. connect xata using xata cli [`https://xata.io/docs/getting-started/cli`](https://xata.io/docs/getting-started/cli)
3. Store xata.ts and schema.json files in db/ or anywhere you would like

## .env file

your .env file should have the following variables to run:
- GOOGLE_ID
- GOOGLE_SECRET
- NEXTAUTH_URL
- NEXTAUTH_URL_INTERNAL
- NEXTAUTH_SECRET
- XATA_BRANCH
- XATA_API_KEY


## To run the app:

```
npm install
npm run dev
```
