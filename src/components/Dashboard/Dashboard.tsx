import { dummyCategories, dummyUser } from "../../dummyData/dummyData"
import CategoryCard from "../CategoryCard/CategoryCard"

/**
 * Space for managin the space for the categories cards
 * @returns {JSX.Element} - A styled card with category information.
 */
export default function Dashboard() {
    return (
        <div className='ml-52 2xl:ml-64'>
        <p className='text-4xl text-white text-center pt-5 mb-20'>Hi, {dummyUser.name}</p>
        <div className="flex flex-row justify-around">
            {dummyCategories.map((category, index) => (
                <CategoryCard key={index}name={category.name} picture={category.image_path} icon={category.icon} subcategories={category.subcategories} />
            ))}
        </div>
        </div>
    )
}