# Moksha Seva — Dignity in Departure

A production-ready Next.js 14 platform for providing dignified cremation services for unclaimed bodies, homeless individuals, and poor families.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS (custom saffron/cream/gold design system)
- **Icons**: Lucide React
- **Fonts**: Playfair Display (serif headings) + DM Sans (body)

## Project Structure

```
moksha-seva/
├── app/                        # Next.js App Router pages
│   ├── layout.tsx              # Global layout (Navbar + Footer)
│   ├── page.tsx                # Home page
│   ├── about/page.tsx          # About Moksha Seva
│   ├── services/page.tsx       # Services
│   ├── how-it-works/page.tsx   # Process walkthrough
│   ├── transparency/page.tsx   # Public dashboard
│   ├── database/page.tsx       # Unidentified bodies DB
│   ├── report/page.tsx         # Report unclaimed body form
│   ├── volunteer/page.tsx      # Volunteer registration
│   ├── donate/page.tsx         # Donation page
│   ├── schemes/page.tsx        # Government schemes
│   ├── media/page.tsx          # Media & awareness
│   ├── faq/page.tsx            # FAQ
│   └── contact/page.tsx        # Contact
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx          # Sticky responsive navbar
│   │   └── Footer.tsx          # Footer with links
│   ├── ui/
│   │   ├── Button.tsx          # Button variants
│   │   ├── Card.tsx            # Card variants
│   │   ├── Elements.tsx        # Badge, Alert, StatsCard, SectionHeader, Container
│   │   └── FormFields.tsx      # InputField, TextareaField, SelectField
│   └── sections/               # (reserved for future section components)
├── lib/
│   ├── utils.ts                # cn(), formatDate(), formatCurrency()
│   └── mockData.ts             # Mock data (replace with API calls later)
├── types/
│   └── index.ts                # TypeScript type definitions
└── styles/ (via globals.css)   # Global CSS + Tailwind
```

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the platform.

## Pages

| Route | Page |
|-------|------|
| `/` | Home |
| `/about` | About Moksha Seva |
| `/services` | Services |
| `/how-it-works` | How It Works |
| `/transparency` | Transparency Dashboard |
| `/database` | Unidentified Bodies Database |
| `/report` | Report Unclaimed Body |
| `/volunteer` | Volunteer Registration |
| `/donate` | Donate |
| `/schemes` | Government Schemes |
| `/media` | Media & Awareness |
| `/faq` | FAQ |
| `/contact` | Contact |

## Design System

**Colors**
- Primary: Saffron (`#ea580c`)
- Background: Cream (`#fdf8ed`)
- Accent: Muted Gold (`#d97706`)
- Text: Stone (`#1c1917`)

**Typography**
- Headings: Playfair Display (Google Fonts)
- Body: DM Sans (Google Fonts)

## Backend Integration

The platform is designed backend-ready:
- All data fetching is isolated in `lib/mockData.ts`
- Replace mock functions with API calls (REST or GraphQL)
- TypeScript interfaces in `types/index.ts` define all data models
- Forms are ready to POST to API endpoints

## Packaging as ZIP

```bash
# From parent directory
zip -r moksha-seva.zip moksha-seva/ --exclude "moksha-seva/node_modules/*" --exclude "moksha-seva/.next/*"
```

## Production Build

```bash
npm run build
npm start
```

## Environment Variables (for backend integration)

```env
NEXT_PUBLIC_API_URL=https://api.mokshaseva.org
NEXT_PUBLIC_RAZORPAY_KEY=your_razorpay_key
DATABASE_URL=your_database_url
```
# moksha-v-16
# moksha-v11
