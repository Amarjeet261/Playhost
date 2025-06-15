// Interface for News Items
export interface NewsItem {
    date: string;
    title: string;
    description: string;
    image: string | null;
    tags: string[];
}

// News Data
export const newsData: NewsItem[] = [
    {
        date: "25.10.2023",
        title: "How to Set Up Your Own Game Server",
        description: "Dolore officia sint incididunt non excepteur ea mollit commodo ut enim reprehenderit cupidatat labore ad laborum consectetur consequat...",
        image: "/1.webp",
        tags: ["GAMES", "GUIDE"],
    },
    {
        date: "25.10.2023",
        title: "Rise in Demand for Private Game Servers",
        description: "Dolore officia sint incididunt non excepteur ea mollit commodo ut enim reprehenderit cupidatat labore ad laborum consectetur consequat...",
        image: "/2.webp",
        tags: ["GAMES", "GUIDE"],
    },
    {
        date: "25.10.2023",
        title: "Top Hosting Providers for Game Servers",
        description: "Dolore officia sint incididunt non excepteur ea mollit commodo ut enim reprehenderit cupidatat labore ad laborum consectetur consequat...",
        image: "/3.webp",
        tags: ["GAMES", "GUIDE"],
    },
    {
        date: "25.10.2023",
        title: "E-Sports and Competitive Gaming",
        description: "Dolore officia sint incididunt non excepteur ea mollit commodo ut enim reprehenderit cupidatat labore ad laborum consectetur consequat...",
        image: "/4.webp",
        tags: ["GAMES", "GUIDE"],
    },
    {
        date: "25.10.2023",
        title: "How to Protecting Your Online World",
        description: "Dolore officia sint incididunt non excepteur ea mollit commodo ut enim reprehenderit cupidatat labore ad laborum consectetur consequat...",
        image: "/g9.webp",
        tags: ["GAMES", "GUIDE"],
    },
    {
        date: "25.10.2023",
        title: "5 Ways to Maintain a Good Posture",
        description: "Dolore officia sint incididunt non excepteur ea mollit commodo ut enim reprehenderit cupidatat labore ad laborum consectetur consequat...",
        image: "/g10.webp",
        tags: ["GAMES", "GUIDE"],
    },
];

    // Interface for Pagination
    export interface PaginationItem {
        label: string;
        isActive: boolean;
    }

    // Pagination Data
    export const paginationData: PaginationItem[] = [
        { label: "Prev", isActive: false },
        { label: "1", isActive: true },
        { label: "2", isActive: false },
        { label: "3", isActive: false },
        { label: "4", isActive: false },
        { label: "5", isActive: false },
        { label: "Next", isActive: false },
    ];
