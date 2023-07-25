import React from 'react'
import { LayoutSection } from '../layouts/section-layout'
import Link from 'next/link'
import { IconExternalLink, IconGithub } from '../icons'
import Image from 'next/image'


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
    url: 'https://josevte.com/gastos',
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
    id: 3,
    name: 'Generador de CV',
    description: 'App para generar un CV en formato PDF. Versión mejorada de la app que realicé para la hackathon de Infojobs',
    url: 'https://www.google.com/',
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
    id: 4,
    name: 'Amaefotografía',
    description: 'Web para una fotógrafa profesional.',
    url: 'https://www.google.com/',
    github: 'https://www.amaefotografia.com/',
    image: 'https://picsum.photos/200/300',
    tecnologies: [
      'Wordpress',
      'PHP',
      'CSS',
    ]
  },

]


export const ProjectsSection = () => {
  return (
    <LayoutSection title='Proyectos' subtitle='Todo los proyectos que he realizado' id="proyectos" >

      <div className='grid grid-cols-2 gap-5 mt-10' >
        {
          PROJECTS.map(project => (
            <div key={project.id} className='shadow-xl dark:bg-black dark:shadow-gray-900/50 rounded-xl' >
              <div className='w-full h-64' >
                <Image width={300} height={200} className='w-full h-full object-cover rounded-lg' src={project.image} alt={project.name} />
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
                    className='flex gap-1 justify-center items-center bg-sky-600 text-white rounded w-full p-2 transition-all dark:hover:bg-sky-500'
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
  )
}

