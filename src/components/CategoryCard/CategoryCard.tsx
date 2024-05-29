interface CategoryCardProps {
    name: string,
    picture: string,
    icon: string,
    subcategories: string[]
}

export default function CategoryCard({ name, picture, icon, subcategories }: CategoryCardProps) {
    return (
        <div className="group max-w-56 2xl:max-w-80 bg-primary rounded-lg hover:bg-dark">
            <img src={picture} />
            <div className='flex justify-between p-5'>
                <p className='text-xl text-white group-hover:text-orange'>{name}</p>
                <img src={icon} className="group-hover:stroke-orange"></img>

            </div>
            <ul className='py-10 px-5 text-white'>
                {subcategories.map((subcategory) => (
                    <>
                        <li>
                            {subcategory}
                        </li>
                        <hr className='mt-1.5' />
                    </>
                ))}
            </ul>
            <div className='flex justify-center p-10'>
                <button type='button' className='text-white bg-orange rounded-md py-1 px-2 font-semibold hover:bg-gradient-to-r from-pink to-orange'>SEE MORE CATEGORIES</button>
            </div>
        </div>
    )
}