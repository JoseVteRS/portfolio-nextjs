import { LayoutSection } from '../layouts/section-layout'
import { IconTypescript, IconReactjsFill, IconNextjs, IconHtml5, IconJavascript } from '@/components/icons'
import { IconCss3 } from '../icons/css-icon'
import Link from 'next/link'


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

]


export const TecnologiesSection = () => {
    return (
        <LayoutSection title='Tecnologies' subtitle=' Teconologias que más he utilizado' id='tecnologias'>

            <ul className='flex flex-wrap mx-auto items-center justify-center gap-5 mt-10'>
                {
                    TECNOLOGIES.map((tec) => {
                        return (
                            <li key={tec.id} >
                                <Link
                                    href={tec.url}
                                    className="border border-transparent rounded-md bg-gray-500/20 shadow-lx p-5 grid place-items-center hover:border-gray-500/50 hover:transform hover:scale-105 transition-all duration-200"
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
    )
}
