import { useState } from 'react'

import sidebarIcon from '../../assets/icon-sidebar.png'
import expandedIcon from '../../assets/expanded-panel.png'
import expandIcon from '../../assets/expand-panel.png'


//Using this interfaces as data structure we're expecting to receive on the component (TS)
interface ButtonsBoxProps {
    boxName: string,
    options: string[]
}

/**
 * Button box in the sidebar.
 * @param {boxName}  - The text that appears on the box
 * @param {options}  - List of all the suboptions shoed when the user expand the box
 * @returns {JSX.Element} - A styled buttons box.
 */
export default function ButtonsBox({ boxName, options }: ButtonsBoxProps) {
    //Managin the state of the box (close as default)
    const [expanded, setExpanded] = useState(false);

    function handleExpand() {
        setExpanded(!expanded);
    }

    return (
        <div className='py-10 font-thin'>
            <div className='bg-secondary rounded-lg mx-6'>
                <div className='flex flex-row justify-around'>
                    <img src={sidebarIcon} className='p-2' />
                    <p className='mt-3 text-white'>{boxName}</p>
                    <button onClick={handleExpand}>
                        <img src={expanded ? expandedIcon : expandIcon} />
                    </button>
                </div>
                <div className={!expanded ? 'hidden' : undefined}>
                    <ul>
                        {options.map((option, index) => (
                            <li key={index}>
                                <a href="#" className="flex items-center pl-11 py-1 text-white">{option}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}