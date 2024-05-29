import { dummyData } from "../../dummyData/categories"
import CategoryCard from "../CategoryCard/CategoryCard"

export default function Dashboard() {
    return (
        <div className='ml-52 2xl:ml-64'>
        <p className='text-4xl text-white text-center pt-5 mb-20'>Hi, SOMEONE</p>
        <div className="flex flex-row justify-around">
            {dummyData.map((category) => (
                <CategoryCard name={category.name} picture={category.image_path} icon={category.icon_path} subcategories={category.subcategories} />
            ))}
        </div>
        </div>
    )
}