import { NextResponse } from 'next/server';

export async function GET() {
    const articles = [
        {
            id: 1,
            title: "Is Palm Beach really a suburb? The designation throws a few noses out of joint in Florida's billionaire enclave",
            slug: 'luxeyline-news-page',
            description: 'The Palm Beach Town Council voted to designate the town as a suburb, but some residents are not happy with the label.',
            fullContent: `
Palm Beach, Florida, has recently been **designated as a suburb** by the Palm Beach Town Council.

This decision has sparked debate among the wealthy residents, who argue that the term *"suburb"* does not reflect the luxury and history of their community.

## Why the Label Matters

- Historic mansions lining the coast  
- Private clubs and world-class golf courses  
- A legacy of billionaires and old money

The reclassification might affect future development plans and public perception.
      `,
            thumbnail: '/assets/images/grid-1.jpg',
            category: 'luxeyline-news',
            author: 'Luxeyline Editorial',
            createdAt: '2025-07-02T08:00:00Z',
        },
        {
            id: 2,
            title: "The rise of smart homes in luxury real estate",
            slug: 'smart-homes-luxury',
            description: 'Smart home technology is becoming a must-have in upscale properties.',
            fullContent: `
Smart homes are now a **necessity** in the world of luxury real estate.

From *voice-controlled* lighting to AI-powered climate systems, high-end buyers are prioritizing properties with advanced automation.

## Features Driving the Trend

- Integrated security systems  
- Smart lighting and thermostats  
- Automated window shades

As technology evolves, so does the definition of comfort and luxury.
      `,
            thumbnail: '/assets/images/grid-2.jpg',
            category: 'design',
            author: 'Tech Lux Team',
            createdAt: '2025-07-01T10:30:00Z',
        },
        {
            id: 3,
            title: "Architectural elegance: Inside modern luxury mansions",
            slug: 'modern-mansions',
            description: "Explore how modern architecture shapes today's luxury homes.",
            fullContent: `
Modern mansions are redefining what it means to live in style. Architects are embracing **minimalism** and sustainability.

## Defining Characteristics

- Floor-to-ceiling glass walls  
- Open-concept living spaces  
- Use of *natural materials* like stone and wood

These homes combine art, functionality, and environmental awareness.
      `,
            thumbnail: '/assets/images/grid-3.jpg',
            category: 'design',
            author: 'Design Watch',
            createdAt: '2025-07-01T07:00:00Z',
        },
        {
            id: 4,
            title: "Eco-luxury: Sustainable features buyers love in 2025",
            slug: 'eco-luxury-trends',
            description: 'Green roofs, solar panels, and water recycling top the list of most-wanted features.',
            fullContent: `
The luxury market is going green. Wealthy buyers are looking for homes that align with **eco-conscious values**.

## Top Sustainable Features

- Solar panel integration  
- Green roofs for insulation  
- Rainwater harvesting systems

*Sustainability is the new luxury.*
      `,
            thumbnail: '/assets/images/grid-4.jpg',
            category: 'design',
            author: 'Green Realty',
            createdAt: '2025-06-30T09:45:00Z',
        },
        {
            id: 5,
            title: "Top 5 beachfront properties around the world",
            slug: 'beachfront-properties',
            description: 'From Malibu to the Maldives, these coastal homes redefine oceanfront living.',
            fullContent: `
Beachfront living is the epitome of **serenity and exclusivity**.

## Our Top Picks

- A Malibu cliffside estate with private cove access  
- A secluded villa in the Maldives with overwater hammocks  
- A contemporary mansion in Ibiza with panoramic views

These properties offer *unmatched privacy and beauty*.
      `,
            thumbnail: '/assets/images/grid-5.jpg',
            category: 'investment',
            author: 'Oceanline Reports',
            createdAt: '2025-06-29T13:15:00Z',
        },
        {
            id: 6,
            title: "The art of staging luxury homes for sale",
            slug: 'luxury-home-staging',
            description: 'Staging can add millions in value to high-end listings.',
            fullContent: `
Staging a luxury home is about more than just furniture. It's about **telling a story**.

## Staging Essentials

- Neutral palettes with *pops of elegance*  
- Custom artwork and curated accessories  
- Scent, lighting, and ambient sound

Buyers aren’t just buying a house—they're buying a *lifestyle*.
      `,
            thumbnail: '/assets/images/grid-6.jpg',
            category: 'luxeyline-news',
            author: 'Market Focus',
            createdAt: '2025-06-28T16:20:00Z',
        },
        {
            id: 7,
            title: "Meet the interior designers behind celebrity mansions",
            slug: 'celebrity-interiors',
            description: 'These creative minds shape the look and feel of A-list residences.',
            fullContent: `
Interior designers for the stars are pushing the boundaries of **glamour and creativity**.

## Celebrity Style Staples

- Bespoke furniture pieces  
- Walk-in closets like boutiques  
- Lavish spa bathrooms

They turn every room into a statement of *individual taste*.
      `,
            thumbnail: '/assets/images/grid-7.jpg',
            category: 'design',
            author: 'Homes & Styles',
            createdAt: '2025-06-27T11:10:00Z',
        },
        {
            id: 8,
            title: "Private islands: The ultimate luxury investment",
            slug: 'private-islands',
            description: 'Ownership of a private island is no longer just a dream.',
            fullContent: `
Owning a private island has become the *pinnacle* of luxury investment.

## Why Islands?

- Complete privacy  
- Untouched natural beauty  
- Long-term real estate value

**Escape the world, own your peace.**
      `,
            thumbnail: '/assets/images/grid-8.jpg',
            category: 'investment',
            author: 'Island Insider',
            createdAt: '2025-06-26T15:00:00Z',
        },
        {
            id: 9,
            title: "How luxury real estate is adapting to Gen Z buyers",
            slug: 'genz-buyers',
            description: 'Younger high-income earners have different expectations from traditional buyers.',
            fullContent: `
Gen Z buyers demand **authenticity** and *tech integration*.

## What They Want

- Smart tech compatibility  
- Sustainability and ethical design  
- Modern aesthetics over tradition

Luxury evolves as a new generation enters the market.
      `,
            thumbnail: '/assets/images/grid-9.jpg',
            category: 'luxeyline-news',
            author: 'Future Estate',
            createdAt: '2025-06-25T14:45:00Z',
        },
        {
            id: 10,
            title: "Inside the world's most expensive penthouse",
            slug: 'most-expensive-penthouse',
            description: 'A look at the 500 million dollar sky mansion in New York.',
            fullContent: `
This $500M penthouse redefines **urban opulence**.

## Unbelievable Features

- 360° views of Manhattan  
- Private helipad  
- 7-star hotel-grade amenities

Only a select few will ever step foot inside.
      `,
            thumbnail: '/assets/images/grid-10.jpg',
            category: 'investment',
            author: 'Skyline Digest',
            createdAt: '2025-06-24T18:30:00Z',
        },
    ];

    return NextResponse.json({ data: articles });
}
