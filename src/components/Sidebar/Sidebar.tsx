import academyIcon from '../../assets/icon-academy.png'
import infoIcon from '../../assets/icon-info.png'
import ButtonsBox from '../ButtonsBox/ButtonsBox';

/**
 * Component for the sidebar
 * * @returns {JSX.Element} - A styled sidebar
 */
export default function Sidebar() {

    //I've made a list of the differents options that needed to be added in each dropdown in the sidebar 
    //I've also create a separated component for render the box with options to avoid duplictaed code and
    //also to manage the expand state of each one separated.
    const firstButtonBoxOptions: string[] = ['Legal', 'People', 'Marketing', 'Finance'];
    const secondButtonBoxOptions: string[] = ['My prompts', 'Saved', 'Settings', 'Share with friends'];

    return (
        <>
            <aside className="bg-primary w-45 2xl:w-64 h-screen fixed">
                <ButtonsBox boxName='Prompts' options={firstButtonBoxOptions}></ButtonsBox>

                <ButtonsBox boxName='My Profile' options={secondButtonBoxOptions}></ButtonsBox>

                <div className='flex flex-row m-6 py-10'>
                    <img src={academyIcon} className='px-2' />
                    <p className='mt-1.5 text-white font-thin'>Academy</p>
                </div>

                <div className='flex flex-row m-6 py-10'>
                    <img src={infoIcon} className='px-2' />
                    <p className='mt-1.5 text-white font-thin'>FAQs</p>
                </div>
            </aside>
        </>
    )
}