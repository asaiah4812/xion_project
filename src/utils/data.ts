
// import img5 from '/public/img4.jpg'

export interface FeedProps {
    id: number;
    title: string;
    content: string;
    createdAt: Date;
    author: string;
    src:string;
    categories: string[];
    comments: number;
    likes:number;
}

const Feeds:FeedProps[] = [
    {
        id: 1,
        title: 'My First Post',
        content: 'This is the first post on my feed.',
        createdAt: new Date('2023-01-01'),
        author: 'John Doe',
        src:'/img.jpg',
        categories: ['#opensource', '#github', '#gradenet'],
        comments: 7,
        likes: 10,
    },
    {
        id: 2,
        title: 'My Second Post',
        content: 'This is the second post on my feed.',
        createdAt: new Date('2023-02-01'),
        author: 'Jane Smith',
        src: '/img1.jpg',
        categories: ['#opensource', '#github', '#taraa'],
        comments:6,
        likes: 14,
    },
    {
        id: 3,
        title: 'My Third Post',
        content: 'This is the third post on my feed.',
        createdAt: new Date('2023-03-01'),
        author: 'Alice Johnson',
        src: '/img2.jpg',
        categories: ['#python', '#github', '#gradenet'],
        comments: 2,
        likes: 6,
    },
    {
        id: 4,
        title: 'My Fourth Post',
        content: 'This is the fourth post on my feed.',
        createdAt: new Date('2023-04-01'),
        author: 'Bob Brown',
        src: '/img3.jpg',
        categories: ['#copilot', '#github', '#php'],
        comments:3,
        likes: 12,
    },
    {
        id: 5,
        title: 'My Fifth Post',
        content: 'This is the fifth post on my feed.',
        createdAt: new Date('2023-05-01'),
        author: 'Charlie Davis',
        src: '/img4.jpg',
        categories: ['#dreamer', '#elonmusk', '#gradenet'],
        comments: 5,
        likes: 25,
    }
]

export default Feeds;