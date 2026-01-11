export const publications = [
    {
        id: 1,
        title: "The Future of Digital Journalism",
        summary: "Exploring how AI and data analytics are reshaping the newsroom and the way we consume information.",
        type: "Journal",
        date: "Oct 12, 2025",
        author: "Sarah Jenkins",
        image: "https://picsum.photos/seed/journalism/800/600",
        content: `
            <p>The landscape of journalism is undergoing a seismic shift...</p>
            <p>Artificial Intelligence tools are now capable of analyzing vast datasets...</p>
            <p>However, the human element remains irreplaceable...</p>
        `
    },
    {
        id: 2,
        title: "Global Summit Reaches New Climate Accord",
        summary: "World leaders agree on ambitious targets to reduce carbon emissions by 2030.",
        type: "News",
        date: "Oct 10, 2025",
        author: "David Chen",
        image: "https://picsum.photos/seed/climate/800/600",
        content: `
            <p>In a historic agreement, representatives from over 190 nations...</p>
            <p>The new targets aim to limit global warming to 1.5 degrees Celsius...</p>
        `
    },
    {
        id: 3,
        title: "Interview: The Architect of Tomorrow",
        summary: "An exclusive conversation with Elena Rossi about her vision for sustainable urban living.",
        type: "Interview",
        date: "Oct 08, 2025",
        author: "Michael Ross",
        image: "https://picsum.photos/seed/architect/800/600",
        content: `
            <p><strong>Q: What inspired your latest project?</strong></p>
            <p>A: I wanted to create a space that breathes...</p>
            <p><strong>Q: How do you see cities evolving?</strong></p>
            <p>A: We need to reintegrate nature into our concrete jungles...</p>
        `
    },
    {
        id: 4,
        title: "Tech Giants Unveil Quantum Processors",
        summary: "A leap forward in computing power that could solve problems previously thought impossible.",
        type: "News",
        date: "Oct 05, 2025",
        author: "Alex West",
        image: "https://picsum.photos/seed/quantum/800/600",
        content: `
            <p>Quantum supremacy has long been a theoretical goal...</p>
            <p>New processors demonstrate stability and error correction...</p>
        `
    },
    {
        id: 5,
        title: "The Art of Slow Living",
        summary: "Why more people are choosing to disconnect and simplify their lives in a hyper-connected world.",
        type: "Journal",
        date: "Oct 01, 2025",
        author: "Emily White",
        image: "https://picsum.photos/seed/slowlife/800/600",
        content: `
            <p>In a world of instant notifications and 24/7 connectivity...</p>
            <p>The slow living movement advocates for intentionality...</p>
        `
    },
    {
        id: 6,
        title: "Economic Outlook: 2026 Predictions",
        summary: "Experts weigh in on inflation, market trends, and the emerging gig economy.",
        type: "News",
        date: "Sep 28, 2025",
        author: "Robert Stone",
        image: "https://picsum.photos/seed/economy/800/600",
        content: `
            <p>As we approach 2026, economic indicators suggest...</p>
            <p>The labor market is continuing its transformation...</p>
        `
    },
    {
        id: 7,
        title: "Minimalism in Modern Architecture",
        summary: "How less is becoming more in the world of structural design.",
        type: "Journal",
        date: "Sep 25, 2025",
        author: "James Lee",
        image: "https://picsum.photos/seed/architecture/800/600",
        content: `
            <p>Minimalism is not just an aesthetic choices; it is a philosophy...</p>
        `
    },
    {
        id: 8,
        title: "Interview: The Voice of a Generation",
        summary: "Rising pop star speaks out on fame, mental health, and artistic integrity.",
        type: "Interview",
        date: "Sep 22, 2025",
        author: "Sarah Jenkins",
        image: "https://picsum.photos/seed/singer/800/600",
        content: `
            <p><strong>Q: How do you handle the pressure?</strong></p>
            <p>A: I try to stay grounded by...</p>
        `
    }
];

export const getRecentPublications = (limit = 3) => {
    return publications.slice(0, limit);
};

export const getPublicationsByType = (type) => {
    if (!type) return publications;
    return publications.filter(p => p.type.trim().toLowerCase() === type.trim().toLowerCase());
};

export const getPublicationById = (id) => {
    return publications.find(p => p.id === parseInt(id));
};
