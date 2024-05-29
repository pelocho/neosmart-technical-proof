import darkModeImg from '../assets/icon-light-dark-mode-dark.png'
import avatarImg from '../assets/Avatar.png'
import notificationImg from '../assets/icon-notification-dark.png'
import searchImg from '../assets/icon-search-dark.png'

export default function Topbar() {

    const images: string[] = [searchImg, notificationImg, darkModeImg, avatarImg];

    return (
        <>
            <nav className="bg-primary py-3.5 shadow-xl sticky top-0">
                <div className='flex justify-end mr-12'>
                    {images.map((image) => (
                        <button type='button' className='px-3.5'>
                            <img src={image}></img>
                        </button>
                    ))}
                </div>
            </nav>
        </>
    )
}