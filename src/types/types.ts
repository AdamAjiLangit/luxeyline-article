export type AnimatedLinkProps = {
    href: string;
    text: string;
    customStyle?: string;
    target?: string;
}

export type Article = {
    id: number
    title: string
    slug: string
    description: string
    fullContent: string
    thumbnail: string
    category: string
    author: string
    createdAt: string
}

export type GridFullProps = {
    selectedCategory: string;
    currentPage: number;
    perPage: number;
    searchQuery?: string;
}