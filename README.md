# Music School Web App

A modern portfolio-style music school landing page built with **Next.js 16**, **React 19**, and **Tailwind CSS 4**. The app showcases featured music courses, upcoming webinars, instructors, testimonials, and a responsive homepage experience.

## Key Features

- **Homepage layout** with hero section, featured courses, instructor showcase, testimonial cards, and webinar highlights.
- **Courses page** that displays all available courses from local JSON data.
- **Dynamic UI components** including animated cards, hover effects, moving testimonials, and custom background elements.
- **Reusable data layer** with course information stored in `data/music_courses.json`.
- **Responsive design** optimized for desktop and mobile layouts.

## Tech Stack

- `next` 16.2.6
- `react` 19.2.4
- `react-dom` 19.2.4
- `tailwindcss` v4
- `eslint` v9
- `typescript`
- `clsx` and `tailwind-merge`
- `simplex-noise`

## Project Structure

- `app/`
  - `layout.tsx` — root layout and global font setup
  - `page.tsx` — homepage composition
  - `courses/page.tsx` — courses listing page
- `components/` — reusable sections and UI building blocks
  - `HeroSection.tsx`
  - `FeatureCourses.tsx`
  - `WhyChooseUs.tsx`
  - `MovingCard.tsx`
  - `UpcomingWebinar.tsx`
  - `instuctures.tsx`
  - `Fotter.tsx`
  - `Navbar.tsx`
  - `ui/` — custom UI utilities and animation components
- `data/music_courses.json` — course metadata used by the app
- `utils/lib.ts` — shared className helper for Tailwind merging

## Running Locally

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Open the app in the browser:

```text
http://localhost:3000
```

## Build and Production

Build the application for production:

```bash
npm run build
```

Start the production server:

```bash
npm run start
```

## Notes

- Course data is loaded from `data/music_courses.json`.
- The homepage links to `/courses` and uses local JSON data for featured course cards.
- The navbar contains links for `Home`, `Our Courses`, and `Contact Us`, with dropdown-style course links.

## Customization

- Update course listings by editing `data/music_courses.json`.
- Add new UI components or sections by extending the `components/` folder.
- Modify styling through `app/globals.css` and Tailwind utility classes.
