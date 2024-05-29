import { Category } from "../types/category";

export const dummyData: Category[] = [
    {
        category_id: 1,
        name: 'Legal',
        image_path: '/src/assets/legal-picture.png',
        icon_path: '/src/assets/icon-legal.svg',
        subcategories: ['Criminal Defense', 'Enviromental Law', 'Civil Law']
    },
    {
        category_id: 2,
        name: 'People',
        image_path: '/src/assets/people-picture.png',
        icon_path: '/src/assets/icon-people.svg',
        subcategories: ['Recruiting', 'Compensation & Benefits', 'Performance Management']
    },
    {
        category_id: 2,
        name: 'Marketing',
        image_path: '/src/assets/marketing-picture.png',
        icon_path: '/src/assets/icon-marketing.svg',
        subcategories: ['Content Marketing', 'Digital Marketing Stategies', 'Social Media and Community Management']
    },
    {
        category_id: 4,
        name: 'Startups',
        image_path: '/src/assets/startup-picture.png',
        icon_path: '/src/assets/icon-startup.svg',
        subcategories: ['Idea Generation and Validation', 'Naming and Branding', 'Market Research']
    }
]