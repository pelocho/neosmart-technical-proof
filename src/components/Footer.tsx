import logoImg from '../assets/logo.png'
import linkedInImg from '../assets/icon-linkedin.png'
import instagramImg from '../assets/icon-instagram.png'
import twitterImg from '../assets/icon-twitter.png'

export default function Footer() {

    const europeAddress: string[] = ['Vía de las Dos Castillas, 33', 'Edificio Ática 7, Planta 3', '28224 Pozuelo de Alarcón', 'Madrid, Spain']
    const usaAddress: string[] = ['1101 Brickell Ave Suite', 'N1400 33131, Miami FL,', 'United States']

    return (
        <footer className="bg-gradient-to-r from-primary to-secondary h-fit p-10 ml-44 2xl:ml-64">
            <div className='flex justify-start'>
                <img src={logoImg} className='pr-2' />
                <p className='text-4xl text-white font-semibold'>neo</p><p className='text-4xl text-white font-thin'>prompts</p>
            </div>
            <div className='grid grid-cols-[230px_250px_200px] pl-0 lg:pl-80 pt-5 text-white'>
                <ul>
                    <li>
                        <p className='font-semibold'>EUROPE</p>
                    </li>
                    {europeAddress.map((line) => (
                        <li>
                            <p className='font-thin'>{line}</p>
                        </li>
                    ))}

                    <li>
                        <p className='font-semibold mt-10'>USA</p>
                    </li>
                    {usaAddress.map((line) => (
                        <li>
                            <p className='font-thin'>{line}</p>
                        </li>
                    ))}
                </ul>
                <ul>
                    <li>
                        <p className='font-thin'>Neoprompts</p>
                    </li>
                    <li>
                        <p>FAQs</p>
                    </li>
                </ul>
                <ul className='font-thin'>
                    <li>
                        <p>Legal Policy</p>
                    </li>
                    <li>
                        <p>Privacy Policy</p>
                    </li>
                    <li>
                        <p>Terms of Service</p>
                    </li>
                    <li className='flex flex-row py-3'>
                        <img src={linkedInImg} className='pr-2'/>
                        <img src={instagramImg} className='pr-2'/>
                        <img src={twitterImg}/>
                    </li>
                </ul>
                <div className='text-center text-white font-thin p-5 col-span-3'>
                <p className='pb-2'>support@neoprompts.ai</p>
                <p className=''>Neoprompts is a product of <span className='font-semibold'>Neosmart</span>, all rights reserved.</p>
            </div>
            </div>
            
        </footer>
    )
}