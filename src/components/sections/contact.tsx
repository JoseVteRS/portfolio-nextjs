import { IconLinkedin } from '../icons'
import { LayoutSection } from '../layouts/section-layout'

export const ContactSection = () => {
    return (
        <LayoutSection title="Contacto" subtitle="para más información sobre mi" id="contacto">
            <div className="flex flex-col items-center justify-center">
                <div className="flex flex-row items-center justify-center mt-10">
                    <a
                        href="https://www.linkedin.com/in/jose-vte-ripoll-solanes-44920250/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-row items-center justify-center"
                    >
                        <IconLinkedin className="text-sky-600 w-12 h-12 mr-2 hover:text-sky-500 transition-all" />
                    </a>
                </div>
            </div>
        </LayoutSection>
    )
}
