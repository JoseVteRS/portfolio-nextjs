import { LayoutSection } from '../layouts/section-layout'
import { IconTypescript, IconReactjsFill, IconNextjs, IconHtml5, IconJavascript } from '@/components/icons'
import { IconCss3 } from '../icons/css-icon'
import Link from 'next/link'
import { IconSocketIO } from '../icons/socket-io-icon'
import { CircleBlur } from '../ui/circle-blur'


export const TECNOLOGIES = [
    {
        id: 1,
        name: 'Typescript',
        description: 'Lenguaje de programación',
        icon: <IconTypescript className="h-12 w-12 text-white" />,
        url: 'https://www.typescriptlang.org/'
    },
    {
        id: 2,
        name: 'Javascript',
        description: 'Lenguaje de programación',
        icon: <IconJavascript className="h-12 w-12 text-white" />,
        url: 'https://developer.mozilla.org/es/docs/Web/JavaScript'
    },
    {
        id: 3,
        name: 'React',
        description: 'Librería de Javascript',
        icon: <IconReactjsFill className="h-12 w-12 text-white" />,
        url: 'https://es.reactjs.org/'
    },
    {
        id: 4,
        name: 'NextJS',
        description: 'Framework de React',
        icon: <IconNextjs className="h-12 w-12 text-white" />,
        url: 'https://nextjs.org/'
    },
    {
        id: 5,
        name: 'HTML5',
        description: 'Lenguaje de marcado',
        icon: <IconHtml5 className="h-12 w-12 text-white" />,
        url: 'https://developer.mozilla.org/es/docs/Web/HTML'
    },
    {
        id: 6,
        name: 'CSS3',
        description: 'Lenguaje de estilos',
        icon: <IconCss3 className="h-12 w-12 text-white" />,
        url: 'https://developer.mozilla.org/es/docs/Web/CSS'
    },
    {
        id: 6,
        name: 'Socket.io',
        description: 'Libreria para comunicación en tiempo real',
        icon: <IconSocketIO className="h-12 w-12 fill-white" />,
        url: 'https://socket.io/'
    },

]


export const TecnologiesSection = () => {
    return (
        <>

            <CircleBlur
                circleOneParams={{
                    color: '#ff0257',
                    position: {
                        top: '30px',
                        left: '30px',
                        bottom: '30px',
                        right: '30px',
                    },
                    size: {
                        width: '350px',
                        height: '350px',
                    },
                    blur: '190px'
                }}

                circleTwoParams={{
                    color: '#2267ff',
                    position: {
                        top: '50px',
                        left: '160px',
                        bottom: '50px',
                        right: '50px',
                    },
                    size: {
                        width: '250px',
                        height: '250px',
                    },
                    blur: '190px'
                }}
            />

            <LayoutSection title='Tecnologies' subtitle='Teconologias que más he utilizado' id='tecnologias'>

                <ul className='flex flex-wrap mx-auto items-center justify-center gap-5 mt-10'>
                    {
                        TECNOLOGIES.map((tec) => {
                            return (
                                <li key={tec.id} >
                                    <Link
                                        href={tec.url}
                                        className="border border-transparent rounded-md bg-gray-800 shadow-lx p-5 grid place-items-center hover:border-gray-500/50 hover:transform hover:scale-105 transition-all duration-200"
                                        target='_blank'
                                        rel='noopener noreferrer'
                                        title={`Visitar ${tec.name}`}
                                    >
                                        {tec.icon}
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </LayoutSection>
        </>
    )
}
