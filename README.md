# Portfolio site

A static portfolio for GitHub Pages. No build tools needed.

## Put it online
1. Create a GitHub repository named exactly `yourusername.github.io`.
2. Upload everything in this folder (including the hidden `.nojekyll` file) to the repository.
3. In the repository, go to **Settings → Pages**, set Source to "Deploy from a branch", branch `main`, folder `/ (root)`, and save.
4. Your site will be live at `https://yourusername.github.io` within a few minutes.

## Edit your content
Almost everything lives in **`assets/js/projects.js`**:
- `SITE` holds your name, statement, intro, about text, interests, skills, email and links.
- `PROJECTS` holds every project. Copy one block to add a project; delete a block to remove one. The order in the file is the order on the home page.
- Filter buttons are created automatically from the `categories` you use.

The six projects included are examples showing the structure. Replace them with your own.

## Images
- Put images in `assets/img/` and point to them in `projects.js`, e.g. `cover: "assets/img/my-robot.jpg"`.
- Covers look best landscape at about 1200×800. Use JPG or WebP and compress them (squoosh.app) so pages load fast.
- Replace `assets/img/portrait.svg` with your photo and update `photo` in `SITE`.

## CV
Save your CV as `assets/cv.pdf`.

## Video
For YouTube, use the embed URL: `https://www.youtube.com/embed/VIDEO_ID`. It replaces the cover image at the top of the project page.

## Preview on your computer
Open `index.html` in a browser, or run `python3 -m http.server` in this folder and visit http://localhost:8000.
