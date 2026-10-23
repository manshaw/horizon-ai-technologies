HorizonAI Tech website (Next.js 15, App Router, plain JavaScript)

To run it, open a terminal in this folder and run npm install, then npm run dev, and open http://localhost:3000. For a production build run npm run build and then npm start.

Where things live: the five pages are in the app folder (app/page.js is Home, and agriculture, projects, about and contact each have their own folder). The repeated text such as services, process steps, features, projects and FAQ is in data/content.js, so most wording changes happen there. Shared pieces like the header, footer, scroll animation and the detection demo are in the components folder. All colours and styling are in app/globals.css, and the colour variables are at the top of that file with a few alternative palettes written in the comment.

Images are in public/images. The hero image is an upscaled and sharpened copy of the original drone photo, so if you get a higher resolution photo, replace public/images/hero.jpg with it. Replace the other images the same way and keep the file names, or update the paths in data/content.js.

The contact form currently opens the visitor's email app. When you want a real form, change the send function in components/ContactForm.js to call an API route or an email service.
