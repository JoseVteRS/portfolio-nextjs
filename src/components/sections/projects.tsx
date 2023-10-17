import React from 'react'
import { LayoutSection } from '../layouts/section-layout'
import Link from 'next/link'
import { IconExternalLink, IconGithub } from '../icons'
import Image from 'next/image'
import { CircleBlur } from '../ui/circle-blur'


const PROJECTS = [
  {
    id: 1,
    name: 'Portfolio profesional',
    description: 'Portfolio profesional para mostrar mis proyectos y habilidades.',
    url: 'https://josevte.com',
    github: 'https://www.google.com/',
    image: 'https://picsum.photos/200/300',
    tecnologies: [
      'React',
      'Next.js',
      'Tailwindcss',
      'Typescript'
    ]
  },
  {
    id: 2,
    name: 'Controlador de gastos',
    description: 'App para registrar y controlar los gastos mensuales.',
    url: 'https://gastos.josevte.com',
    github: 'https://github.com/JoseVteRS/gastos-next',
    image: '/assets/images/projects/gastos.jpg',
    tecnologies: [
      'React',
      'Next.js',
      'Tailwindcss',
      'Typescript',
      'SQLite',
      'Prisma'
    ]
  },
  {
    id: 2,
    name: 'Clone de Discord',
    description: 'Clone de Discord con el proposito de practicar NextJS 13, sockets. Utilizadon Clerk para la autenticacion.',
    url: '#',
    github: 'https://github.com/JoseVteRS/clone-discord',
    image: '/assets/images/projects/gastos.jpg',
    tecnologies: [
      'React',
      'Next.js',
      'Tailwindcss',
      'Typescript',
      'MYSQL',
      'Prisma',
      'Clerk'
    ]
  },
  {
    id: 2,
    name: 'Clone de Messenger de Facebook',
    description: 'Clone de Messenger de Facebook con el proposito de practicar NextJS 13, sockets. Utilizando NextAuth para la autenticacion. Y la API de Pusher para los mensajes en tiempo real. Para la base de datos se utilizó MongoDB.',
    url: 'https://messages-clone.josevte.com/users',
    github: 'https://github.com/JoseVteRS/message-clone',
    image: '/assets/images/projects/screenshot_01-front.png',
    tecnologies: [
      'React',
      'Next.js',
      'Tailwindcss',
      'Typescript',
      'NextAuth',
      'Pusher',
      'MongoDB',
      'Prisma'
    ]
  },

]


export const ProjectsSection = () => {
  return (

    <>
      <CircleBlur
        circleOneParams={{
          color: '#ff0257',
          position: {
            top: '500px',
            bottom: '90px',
            left: '820px',
            right: '800px',
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
            top: '500px',
            bottom: '90px',
            left: '820px',
            right: '800px',
          },
          size: {
            width: '250px',
            height: '250px',
          },
          blur: '190px'
        }}
      />

      <LayoutSection title='Proyectos' subtitle='Todo los proyectos que he realizado' id="proyectos" >

        <div className='grid md:grid-cols-2 gap-5 mt-10 px-5' >
          {
            PROJECTS.map(project => (
              <div key={project.id} className='shadow-xl border dark:border-black/40 rounded-xl bg-neutral-900' >
                <div className='relative inline-block overflow-hidden h-52 w-full rounded-md' >
                  <Image width={600} height={208} quality={90} className='object-cover' src={project.image} alt={project.name} />
                </div>

                <div className="p-4">

                  <div className='w-full' >
                    <h3 className='text-2xl font-bold dark:text-neutral-200 project-title' >{project.name}</h3>
                    <p className='text-gray-600 dark:text-neutral-400' >{project.description}</p>
                  </div>
                  <div className='my-5'>
                    {
                      project.tecnologies.map(tecnology => (
                        <span key={tecnology} className='inline-block px-2 py-1 mr-2 mb-2 text-sm dark:text-gray-400 dark:bg-gray-800 rounded-lg' >
                          {tecnology}
                        </span>
                      ))
                    }
                  </div>
                  <div className='flex gap-5 items-center justify-between w-2/3'>

                    <Link
                      target='_blank'
                      rel='noopener noreferrer'
                      title={`Visitar ${project.name}`}
                      className='flex gap-1 justify-center items-center bg-pearl-600 text-white rounded w-full p-2 transition-all dark:hover:bg-pearl-500'
                      href={project.url} >
                      <IconExternalLink />
                      Visitar
                    </Link>
                    <Link
                      target='_blank'
                      rel='noopener noreferrer'
                      title={`Visitar repositorio en Github de ${project.name}`}
                      className='flex gap-1 justify-center items-center dark:bg-white dark:text-black rounded w-full p-2 transition-all dark:hover:bg-neutral-200' href={project.github} >
                      <IconGithub />
                      Github
                    </Link>

                  </div>

                </div>

              </div>
            ))
          }
        </div>

      </LayoutSection>
    </>

  )
}

