import { Category } from "../types/category";
import { User } from "../types/user";

/**
 * Dummy categories and user for showing on the dashboard
 */

export const dummyCategories: Category[] = [
    {
        category_id: 1,
        name: 'Legal',
        image_path: '/src/assets/legal-picture.png',
        icon: 'legalSVG',
        subcategories: ['Criminal Defense', 'Enviromental Law', 'Civil Law']
    },
    {
        category_id: 2,
        name: 'People',
        image_path: '/src/assets/people-picture.png',
        icon: 'peopleSVG',
        subcategories: ['Recruiting', 'Compensation & Benefits', 'Performance Management']
    },
    {
        category_id: 2,
        name: 'Marketing',
        image_path: '/src/assets/marketing-picture.png',
        icon: 'marketingSVG',
        subcategories: ['Content Marketing', 'Digital Marketing Stategies', 'Social Media and Community Management']
    },
    {
        category_id: 4,
        name: 'Startups',
        image_path: '/src/assets/startup-picture.png',
        icon: 'startupSVG',
        subcategories: ['Idea Generation and Validation', 'Naming and Branding', 'Market Research']
    }
]

export const dummyUser: User = {
    name: 'Beyonce',
    loggedin: true
}