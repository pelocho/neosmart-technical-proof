import academyIcon from '../assets/icon-academy.png'
import infoIcon from '../assets/icon-info.png'
import ButtonsBox from './ButtonsBox';

export default function Sidebar() {

    const firstButtonBoxOptions: string[] = ['Legal', 'People', 'Marketing', 'Finance'];
    const secondButtonBoxOptions: string[] = ['My prompts', 'Saved', 'Settings', 'Share with friends'];

    return (
        <>
            <aside className="bg-primary w-64 h-screen">
                <ButtonsBox boxName='Prompts' options={firstButtonBoxOptions}></ButtonsBox>

                <ButtonsBox boxName='My Profile' options={secondButtonBoxOptions}></ButtonsBox>

                <div className='flex flex-row m-6 py-10'>
                    <img src={academyIcon} className='px-2' />
                    <p className='mt-1.5 text-white'>Academy</p>
                </div>

                <div className='flex flex-row m-6 py-10'>
                    <img src={infoIcon} className='px-2' />
                    <p className='mt-1.5 text-white'>FAQs</p>
                </div>
            </aside>
        </>
    )
}