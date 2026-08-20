# How to update the portfolio

The site is designed so you can write blog posts in Markdown. You do not need to edit the homepage to publish a post: every Markdown file in `src/content/blog/` automatically becomes a full article and a card on the homepage.

## Add a new blog post

### 1. Create the Markdown file

In the `src/content/blog/` folder, duplicate either existing post and rename the copy.

Use a simple lowercase filename with hyphens:

```text
my-new-blog-post.md
```

That filename becomes the post address:

```text
http://localhost:4321/blog/my-new-blog-post/
```

### 2. Paste this template

```markdown
---
title: My New Blog Post
meta: Journal · 5 min read
description: A short, inviting summary that will appear on the homepage card.
art: sun
number: "07"
date: 2026-08-20
---

Write the opening paragraph here.

## A section heading

Continue writing your post in normal paragraphs.

You can make a list:

- First item
- Second item
- Third item

> You can also add a highlighted quotation like this.

## Another heading

Finish the post here.
```

### 3. Edit the details at the top

The section between the two `---` lines controls the homepage card and article heading:

- `title`: The post title.
- `meta`: A short label, such as `Journal · 5 min read`.
- `description`: The summary shown on the homepage and below the article title.
- `art`: The card design. Choose `sun`, `tiles`, `bottle`, `play`, `table`, or `bramble`.
- `number`: The small card number. Keep the quotation marks and give every card a unique number.
- `date`: The publication date in `YYYY-MM-DD` format.

Do not remove the opening and closing `---` lines.

### 4. Write with Markdown

Below the second `---`, write the article itself. The most useful Markdown formatting is:

```markdown
## Large section heading

### Smaller heading

This is a normal paragraph.

**This text is bold.**

*This text is italic.*

[This is a link](https://example.com)

- Bulleted item
- Another item

1. Numbered item
2. Another item

> This is a quotation.
```

Save the file. The homepage card and full article page will appear automatically. The Blog total in the sidebar also updates automatically.

## Remove a blog post

Delete its `.md` file from `src/content/blog/`. Its card and article page will both disappear.

## Reorder the homepage cards

Cards are sorted by their `number` value. Change the number inside a post to move it.

The project cards still live near the top of `src/pages/index.astro`. Their numbers and the blog post numbers share the same sequence.

## Edit an existing blog post

Open the relevant file in `src/content/blog/`:

- `notes-from-lisbon.md`
- `making-room-for-play.md`

Edit the details or article text, then save. The page refreshes automatically while the development server is running.

## Add an image to a post

Put the image in the `public/images/` folder. Create that folder if it does not exist.

For example:

```text
public/images/my-sketch.jpg
```

Then place this in the Markdown article:

```markdown
![A useful description of the image](/images/my-sketch.jpg)
```

The description between `[` and `]` is important for accessibility.

## Edit the About page

The About page is `src/pages/about.astro`. Replace the placeholder paragraphs there with your sister's biography, services, interests and contact information.

## Edit the homepage projects

Projects are still stored in the `projects` list near the top of `src/pages/index.astro`.

Use this template inside that list:

```astro
{
  type: 'project',
  title: 'Project Name',
  meta: 'Brand identity · 2026',
  description: 'A concise description of the project.',
  art: 'sun',
  number: '08',
},
```

Project cards are currently visual previews and do not have full project pages.

## Change the name and introduction

Open `src/pages/index.astro` and search for:

- `Lucy Hart` — the name and browser title
- `I make thoughtful things...` — the homepage introduction
- `Independent designer...` — the sidebar biography
- `hello@lucyhart.studio` — the contact email
- `Made with curiosity in Paris.` — the footer text

The same name, biography and navigation also appear in `src/layouts/InnerPage.astro`, which controls blog posts and the About page.

## Preview the site

If the development server is already running, visit:

<http://localhost:4321>

Otherwise run:

```sh
npx astro dev --background
```

Useful commands:

```sh
npx astro dev status
npx astro dev logs
npx astro dev stop
```

Before publishing, check the complete site:

```sh
npm run build
```

