import React from 'react'

interface Props {
    children: React.ReactNode,
    title: string,
    id?: string,
    subtitle?: string
}

export const LayoutSection = ({ title, subtitle, id, children }: Props) => {
    return (
        <section className='mx-auto py-20 w-2/3 ' id={id} >

            <h2 className='text-6xl text-sky-600 font-bold text-center'>{title}</h2>

            {
                subtitle && <h3 className='text-center text-xl font-regular dark:text-neutral-400 mt-3'>{subtitle}</h3>
            }


            {children}
        </section>
    )
}
