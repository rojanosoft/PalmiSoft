/**
 * PALMISOFT - Internationalization (i18n)
 * Supports: Spanish (es) and English (en)
 * Persists choice in localStorage; auto-detects browser language on first visit.
 */

// ============= TRANSLATIONS =============
const translations = {
    es: {
        nav: {
            home: 'Inicio',
            services: 'Servicios',
            technologies: 'Tecnologías',
            contact: 'Contacto'
        },
        hero: {
            title: 'Software a la medida que impulsa tu negocio',
            subtitle: 'Transformamos ideas en soluciones tecnológicas innovadoras. Automatización, desarrollo web y aplicaciones empresariales en Palmira, Colombia.',
            cta: {
                quote: 'Solicitar cotización',
                services: 'Conocer servicios'
            },
            stat: {
                projects: 'Proyectos completados',
                clients: 'Clientes satisfechos',
                quality: 'Código de calidad'
            }
        },
        about: {
            title: 'Sobre PalmiSoft',
            p1: 'Somos una empresa de desarrollo de software ubicada en Palmira, Colombia, especializada en crear soluciones tecnológicas personalizadas que se adaptan a las necesidades específicas de cada negocio.',
            p2: 'Con experiencia en múltiples lenguajes de programación y tecnologías modernas, ayudamos a empresas a automatizar procesos, desarrollar aplicaciones robustas y optimizar sus operaciones mediante la tecnología.',
            f1: 'Soluciones personalizadas',
            f2: 'Tecnologías modernas',
            f3: 'Soporte continuo',
            f4: 'Entrega oportuna'
        },
        services: {
            title: 'Nuestros Servicios',
            desc: 'Ofrecemos soluciones tecnológicas integrales para impulsar el crecimiento de tu empresa',
            s1: {
                title: 'Desarrollo de Software a la Medida',
                desc: 'Creamos aplicaciones personalizadas que se adaptan perfectamente a los procesos y necesidades específicas de tu negocio.',
                f1: 'Análisis de requerimientos',
                f2: 'Arquitectura escalable',
                f3: 'Desarrollo ágil',
                f4: 'Mantenimiento continuo'
            },
            s2: {
                title: 'Automatización y RPA',
                desc: 'Automatizamos procesos repetitivos para aumentar la eficiencia, reducir errores y liberar tiempo valioso de tu equipo.',
                f1: 'Análisis de procesos',
                f2: 'Bots inteligentes',
                f3: 'Integración de sistemas',
                f4: 'Monitoreo y optimización'
            },
            s3: {
                title: 'Gestión de Bases de Datos',
                desc: 'Diseño, implementación y optimización de bases de datos robustas para garantizar la integridad y disponibilidad de tu información.',
                f1: 'Oracle Database',
                f2: 'PostgreSQL',
                f3: 'MySQL',
                f4: 'Optimización de queries'
            },
            s4: {
                title: 'Desarrollo de Aplicaciones',
                desc: 'Aplicaciones web y móviles modernas, intuitivas y escalables con las mejores prácticas de desarrollo.',
                f1: 'Aplicaciones web',
                f2: 'Interfaces modernas',
                f3: 'Diseño responsive',
                f4: 'Experiencia de usuario'
            }
        },
        tech: {
            title: 'Tecnologías que Dominamos',
            desc: 'Trabajamos con las tecnologías más modernas y confiables del mercado',
            cat1: 'Lenguajes de Programación',
            cat2: 'Frameworks y Librerías',
            cat3: 'Bases de Datos',
            cat4: 'Herramientas y DevOps'
        },
        cta: {
            title: '¿Listo para transformar tu negocio?',
            desc: 'Conversemos sobre tu proyecto y descubre cómo podemos ayudarte a alcanzar tus objetivos',
            quote: 'Solicitar cotización',
            call: 'Llamar ahora'
        },
        footer: {
            desc: 'Soluciones tecnológicas innovadoras que impulsan el crecimiento de tu negocio.',
            services: 'Servicios',
            company: 'Empresa',
            contact: 'Contacto',
            links: {
                s1: 'Desarrollo de Software',
                s2: 'Automatización y RPA',
                s3: 'Bases de Datos',
                s4: 'Desarrollo de Aplicaciones',
                about: 'Sobre Nosotros',
                tech: 'Tecnologías',
                contact: 'Contacto',
                privacy: 'Política de Privacidad'
            },
            rights: '© 2026 PalmiSoft - NIT: 1112956985-1. Todos los derechos reservados.',
            legal: {
                privacy: 'Política de Privacidad',
                data: 'Tratamiento de Datos'
            }
        },
        whatsapp: {
            tooltip: '¡Chatea con nosotros!',
            aria: 'Contactar por WhatsApp'
        },
        // Contact page
        contact: {
            page: {
                title: 'Contáctanos',
                subtitle: 'Estamos listos para ayudarte con tu proyecto'
            },
            info: {
                title: 'Información de Contacto',
                desc: '¿Tienes un proyecto en mente? Conversemos sobre cómo podemos ayudarte a alcanzar tus objetivos tecnológicos.'
            },
            location: 'Ubicación',
            phone: 'Teléfono',
            email: 'Email',
            hours: {
                title: 'Horario de Atención',
                text: 'Lunes - Viernes: 8:00 AM - 6:00 PM<br>Sábados: 9:00 AM - 1:00 PM'
            },
            follow: 'Síguenos',
            form: {
                title: 'Envíanos un Mensaje',
                desc: 'Completa el formulario y nos pondremos en contacto contigo lo antes posible.'
            }
        },
        form: {
            nombre: { label: 'Nombre completo', placeholder: 'Ej: Juan Pérez' },
            email: { label: 'Correo electrónico', placeholder: 'Ej: tu@email.com' },
            telefono: { label: 'Teléfono', placeholder: 'Ej: +57 317 318 4631' },
            empresa: { label: 'Empresa / Organización', placeholder: 'Nombre de tu empresa (opcional)' },
            asunto: {
                label: 'Asunto',
                default: 'Selecciona un asunto',
                opt1: 'Solicitud de cotización',
                opt2: 'Desarrollo de software',
                opt3: 'Automatización / RPA',
                opt4: 'Soporte técnico',
                opt5: 'Consulta general',
                opt6: 'Otro'
            },
            mensaje: { label: 'Mensaje', placeholder: 'Cuéntanos sobre tu proyecto o necesidad...' },
            privacy: {
                text: 'He leído y acepto la <a href="privacidad.html" target="_blank">Política de Privacidad y Tratamiento de Datos</a> <span class="required">*</span>'
            },
            captcha: {
                label: 'Verificación de seguridad',
                placeholder: 'Tu respuesta',
                question: '¿Cuánto es',
                refreshTitle: 'Nueva pregunta',
                refreshAria: 'Generar nueva pregunta'
            },
            submit: 'Enviar mensaje',
            sending: 'Enviando...'
        },
        success: {
            title: '¡Mensaje enviado con éxito!',
            text: 'Gracias por contactarnos. Hemos recibido tu mensaje y nos pondremos en contacto contigo lo antes posible.',
            another: 'Enviar otro mensaje'
        },
        map: {
            title: 'Nuestra Ubicación'
        },
        errors: {
            nombre: {
                submit: 'Por favor ingresa tu nombre completo (mínimo 3 caracteres)',
                validate: 'Mínimo 3 caracteres'
            },
            email: {
                submit: 'Por favor ingresa un correo electrónico válido',
                validate: 'Correo electrónico inválido'
            },
            telefono: {
                submit: 'Por favor ingresa un número de teléfono válido',
                validate: 'Número de teléfono inválido'
            },
            asunto: {
                submit: 'Por favor selecciona un asunto',
                validate: 'Selecciona un asunto'
            },
            mensaje: {
                submit: 'Por favor ingresa un mensaje (mínimo 10 caracteres)',
                validate: 'Mínimo 10 caracteres'
            },
            privacidad: {
                submit: 'Debes aceptar la política de privacidad para continuar',
                validate: 'Debes aceptar la política'
            },
            captcha: {
                empty: 'Por favor responde la pregunta de verificación',
                wrong: 'Respuesta incorrecta. Intenta de nuevo'
            },
            sendFail: 'Hubo un error al enviar el mensaje. Por favor inténtalo de nuevo o contáctanos directamente por <strong>WhatsApp</strong>.'
        },
        // Privacy page
        privacy: {
            title: 'Política de Privacidad y Tratamiento de Datos Personales',
            subtitle: 'Última actualización: Enero 2026',
            disclaimer: '',
            s1: {
                title: 'IDENTIFICACIÓN DEL RESPONSABLE DEL TRATAMIENTO',
                body: `<ul class="info-list">
                            <li><strong>Razón social:</strong> PalmiSoft</li>
                            <li><strong>NIT:</strong> 1112956985-1</li>
                            <li><strong>Domicilio:</strong> Palmira, Valle del Cauca – Colombia</li>
                            <li><strong>Dirección:</strong> Palmira, Valle del Cauca</li>
                            <li><strong>Correo electrónico:</strong> <a href="mailto:rojan11@gmail.com">rojan11@gmail.com</a></li>
                            <li><strong>Teléfono:</strong> <a href="tel:+573173184631">+57 317 318 4631</a></li>
                        </ul>
                        <p>En adelante, <strong>PALMISOFT</strong>, actuando como Responsable del Tratamiento de Datos Personales.</p>`
            },
            s2: {
                title: 'MARCO LEGAL',
                body: `<p>La presente Política de Privacidad y Tratamiento de Datos Personales se rige por:</p>
                        <ul>
                            <li>Artículo 15 de la Constitución Política de Colombia</li>
                            <li>Ley 1581 de 2012</li>
                            <li>Decreto 1377 de 2013</li>
                            <li>Decreto 1074 de 2015</li>
                            <li>Demás normas que las modifiquen, adicionen o sustituyan</li>
                        </ul>`
            },
            s3: {
                title: 'DEFINICIONES',
                body: `<dl class="definition-list">
                            <dt>Dato Personal:</dt>
                            <dd>Cualquier información vinculada o que pueda asociarse a una persona natural determinada o determinable.</dd>
                            <dt>Titular:</dt>
                            <dd>Persona natural a quien se refieren los datos personales.</dd>
                            <dt>Tratamiento:</dt>
                            <dd>Cualquier operación sobre datos personales, como la recolección, almacenamiento, uso, circulación o supresión.</dd>
                            <dt>Responsable del Tratamiento:</dt>
                            <dd>Persona natural o jurídica que decide sobre la base de datos y el tratamiento de los datos.</dd>
                        </dl>`
            },
            s4: {
                title: 'DATOS PERSONALES OBJETO DE TRATAMIENTO',
                body: `<p>PALMISOFT recolecta y trata únicamente datos personales no sensibles, tales como:</p>
                        <ul>
                            <li>Nombres y apellidos</li>
                            <li>Tipo y número de documento de identificación</li>
                            <li>Dirección física</li>
                            <li>Número de teléfono</li>
                            <li>Correo electrónico</li>
                            <li>Información suministrada a través de formularios de contacto, solicitudes de servicio o comunicaciones digitales</li>
                        </ul>
                        <p class="highlight-text">
                            <i class="fas fa-info-circle"></i>
                            PALMISOFT no recolecta datos sensibles ni datos de menores de edad.
                        </p>`
            },
            s5: {
                title: 'FINALIDAD DEL TRATAMIENTO DE LOS DATOS',
                body: `<p>Los datos personales recolectados serán tratados para las siguientes finalidades:</p>
                        <ul>
                            <li>Atender solicitudes, consultas, peticiones o cotizaciones realizadas por los usuarios</li>
                            <li>Prestar los servicios de desarrollo de software, automatización y servicios tecnológicos ofrecidos por PalmiSoft</li>
                            <li>Mantener comunicación con clientes, proveedores y usuarios</li>
                            <li>Enviar información comercial, técnica o informativa relacionada con los servicios</li>
                            <li>Cumplir obligaciones legales, contractuales y administrativas</li>
                            <li>Gestionar la relación comercial y mejorar la calidad de los servicios</li>
                        </ul>`
            },
            s6: {
                title: 'AUTORIZACIÓN DEL TITULAR',
                body: `<p>La recolección y tratamiento de los datos personales se realiza previa autorización libre, expresa e informada del titular, la cual se obtiene mediante formularios físicos, electrónicos, mensajes digitales o a través del uso del sitio web de PalmiSoft.</p>
                        <p>El titular manifiesta que la información suministrada es veraz y actualizada.</p>`
            },
            s7: {
                title: 'DERECHOS DEL TITULAR DE LOS DATOS',
                body: `<p>De conformidad con la ley, el titular tiene derecho a:</p>
                        <ul class="rights-list">
                            <li><i class="fas fa-check"></i> Conocer, actualizar y rectificar sus datos personales</li>
                            <li><i class="fas fa-check"></i> Solicitar prueba de la autorización otorgada</li>
                            <li><i class="fas fa-check"></i> Ser informado sobre el uso dado a sus datos</li>
                            <li><i class="fas fa-check"></i> Presentar quejas ante la Superintendencia de Industria y Comercio</li>
                            <li><i class="fas fa-check"></i> Revocar la autorización y/o solicitar la supresión de los datos cuando no exista un deber legal o contractual</li>
                            <li><i class="fas fa-check"></i> Acceder de forma gratuita a sus datos personales</li>
                        </ul>`
            },
            s8: {
                title: 'PROCEDIMIENTO PARA EJERCER LOS DERECHOS',
                body: `<p>El titular podrá ejercer sus derechos enviando una solicitud al siguiente correo electrónico:</p>
                        <div class="contact-box">
                            <i class="fas fa-envelope"></i>
                            <a href="mailto:rojan11@gmail.com">rojan11@gmail.com</a>
                        </div>
                        <p>La solicitud deberá contener:</p>
                        <ul>
                            <li>Nombre completo del titular</li>
                            <li>Documento de identidad</li>
                            <li>Descripción clara de la solicitud</li>
                            <li>Datos de contacto</li>
                        </ul>
                        <p><strong>Los plazos de respuesta serán:</strong></p>
                        <ul>
                            <li><strong>Consultas:</strong> hasta diez (10) días hábiles</li>
                            <li><strong>Reclamos:</strong> hasta quince (15) días hábiles</li>
                        </ul>`
            },
            s9: {
                title: 'MEDIDAS DE SEGURIDAD DE LA INFORMACIÓN',
                body: `<p>PalmiSoft adopta medidas técnicas, administrativas y humanas razonables para proteger los datos personales contra pérdida, acceso no autorizado, uso indebido, alteración o divulgación.</p>`
            },
            s10: {
                title: 'TRANSFERENCIA Y TRANSMISIÓN DE DATOS PERSONALES',
                body: `<p>Los datos personales no serán vendidos, cedidos ni compartidos con terceros, salvo cuando:</p>
                        <ul>
                            <li>Sea requerido por autoridad competente</li>
                            <li>Sea necesario para el cumplimiento de una obligación legal o contractual</li>
                            <li>Exista autorización expresa del titular</li>
                        </ul>`
            },
            s11: {
                title: 'VIGENCIA DEL TRATAMIENTO',
                body: `<p>La presente política entra en vigencia a partir de su publicación en el sitio web.</p>
                        <p>Los datos personales serán tratados durante el tiempo necesario para cumplir con las finalidades descritas o mientras exista una relación legal o contractual.</p>`
            },
            s12: {
                title: 'MODIFICACIONES A LA POLÍTICA',
                body: `<p>PalmiSoft se reserva el derecho de modificar la presente Política de Privacidad y Tratamiento de Datos Personales en cualquier momento.</p>
                        <p>Cualquier cambio será publicado oportunamente en el sitio web.</p>`
            },
            contactSection: {
                title: '¿Tienes dudas sobre esta política?',
                desc: 'Si tienes preguntas sobre nuestra Política de Privacidad o deseas ejercer tus derechos, contáctanos:',
                emailBtn: 'Enviar correo',
                formBtn: 'Formulario de contacto'
            },
            back: 'Volver al inicio'
        }
    },

    // ============================================================
    en: {
        nav: {
            home: 'Home',
            services: 'Services',
            technologies: 'Technologies',
            contact: 'Contact'
        },
        hero: {
            title: 'Custom Software that Drives Your Business',
            subtitle: 'We transform ideas into innovative technology solutions. Automation, web development and enterprise applications in Palmira, Colombia.',
            cta: {
                quote: 'Request a Quote',
                services: 'Explore Services'
            },
            stat: {
                projects: 'Completed Projects',
                clients: 'Satisfied Clients',
                quality: 'Quality Code'
            }
        },
        about: {
            title: 'About PalmiSoft',
            p1: 'We are a software development company based in Palmira, Colombia, specialized in creating tailored technology solutions that adapt to the specific needs of each business.',
            p2: 'With expertise in multiple programming languages and modern technologies, we help businesses automate processes, develop robust applications and optimize their operations through technology.',
            f1: 'Tailored Solutions',
            f2: 'Modern Technologies',
            f3: 'Continuous Support',
            f4: 'Timely Delivery'
        },
        services: {
            title: 'Our Services',
            desc: 'We offer comprehensive technology solutions to drive the growth of your company',
            s1: {
                title: 'Custom Software Development',
                desc: 'We create custom applications that perfectly adapt to the processes and specific needs of your business.',
                f1: 'Requirements analysis',
                f2: 'Scalable architecture',
                f3: 'Agile development',
                f4: 'Continuous maintenance'
            },
            s2: {
                title: 'Automation & RPA',
                desc: 'We automate repetitive processes to increase efficiency, reduce errors and free up valuable time for your team.',
                f1: 'Process analysis',
                f2: 'Intelligent bots',
                f3: 'System integration',
                f4: 'Monitoring and optimization'
            },
            s3: {
                title: 'Database Management',
                desc: 'Design, implementation and optimization of robust databases to ensure the integrity and availability of your information.',
                f1: 'Oracle Database',
                f2: 'PostgreSQL',
                f3: 'MySQL',
                f4: 'Query optimization'
            },
            s4: {
                title: 'Application Development',
                desc: 'Modern, intuitive and scalable web and mobile applications using the best development practices.',
                f1: 'Web applications',
                f2: 'Modern interfaces',
                f3: 'Responsive design',
                f4: 'User experience'
            }
        },
        tech: {
            title: 'Technologies We Master',
            desc: 'We work with the most modern and reliable technologies on the market',
            cat1: 'Programming Languages',
            cat2: 'Frameworks & Libraries',
            cat3: 'Databases',
            cat4: 'Tools & DevOps'
        },
        cta: {
            title: 'Ready to Transform Your Business?',
            desc: "Let's talk about your project and discover how we can help you achieve your goals",
            quote: 'Request a Quote',
            call: 'Call Now'
        },
        footer: {
            desc: 'Innovative technology solutions that drive the growth of your business.',
            services: 'Services',
            company: 'Company',
            contact: 'Contact',
            links: {
                s1: 'Software Development',
                s2: 'Automation & RPA',
                s3: 'Databases',
                s4: 'App Development',
                about: 'About Us',
                tech: 'Technologies',
                contact: 'Contact',
                privacy: 'Privacy Policy'
            },
            rights: '© 2026 PalmiSoft - NIT: 1112956985-1. All rights reserved.',
            legal: {
                privacy: 'Privacy Policy',
                data: 'Data Processing'
            }
        },
        whatsapp: {
            tooltip: 'Chat with us!',
            aria: 'Contact via WhatsApp'
        },
        // Contact page
        contact: {
            page: {
                title: 'Contact Us',
                subtitle: "We're ready to help with your project"
            },
            info: {
                title: 'Contact Information',
                desc: 'Have a project in mind? Let\'s talk about how we can help you achieve your technology goals.'
            },
            location: 'Location',
            phone: 'Phone',
            email: 'Email',
            hours: {
                title: 'Business Hours',
                text: 'Monday - Friday: 8:00 AM - 6:00 PM<br>Saturdays: 9:00 AM - 1:00 PM'
            },
            follow: 'Follow Us',
            form: {
                title: 'Send Us a Message',
                desc: 'Fill out the form and we will get in touch with you as soon as possible.'
            }
        },
        form: {
            nombre: { label: 'Full name', placeholder: 'Ex: John Smith' },
            email: { label: 'Email address', placeholder: 'Ex: you@email.com' },
            telefono: { label: 'Phone', placeholder: 'Ex: +57 317 318 4631' },
            empresa: { label: 'Company / Organization', placeholder: 'Your company name (optional)' },
            asunto: {
                label: 'Subject',
                default: 'Select a subject',
                opt1: 'Quote request',
                opt2: 'Software development',
                opt3: 'Automation / RPA',
                opt4: 'Technical support',
                opt5: 'General inquiry',
                opt6: 'Other'
            },
            mensaje: { label: 'Message', placeholder: 'Tell us about your project or need...' },
            privacy: {
                text: 'I have read and accept the <a href="privacidad.html" target="_blank">Privacy Policy and Data Processing</a> <span class="required">*</span>'
            },
            captcha: {
                label: 'Security verification',
                placeholder: 'Your answer',
                question: 'How much is',
                refreshTitle: 'New question',
                refreshAria: 'Generate new question'
            },
            submit: 'Send message',
            sending: 'Sending...'
        },
        success: {
            title: 'Message Sent Successfully!',
            text: 'Thank you for contacting us. We have received your message and will get back to you as soon as possible.',
            another: 'Send Another Message'
        },
        map: {
            title: 'Our Location'
        },
        errors: {
            nombre: {
                submit: 'Please enter your full name (minimum 3 characters)',
                validate: 'Minimum 3 characters'
            },
            email: {
                submit: 'Please enter a valid email address',
                validate: 'Invalid email address'
            },
            telefono: {
                submit: 'Please enter a valid phone number',
                validate: 'Invalid phone number'
            },
            asunto: {
                submit: 'Please select a subject',
                validate: 'Select a subject'
            },
            mensaje: {
                submit: 'Please enter a message (minimum 10 characters)',
                validate: 'Minimum 10 characters'
            },
            privacidad: {
                submit: 'You must accept the privacy policy to continue',
                validate: 'You must accept the policy'
            },
            captcha: {
                empty: 'Please answer the verification question',
                wrong: 'Wrong answer. Please try again'
            },
            sendFail: 'There was an error sending the message. Please try again or contact us directly via <strong>WhatsApp</strong>.'
        },
        // Privacy page
        privacy: {
            title: 'Privacy Policy and Personal Data Processing',
            subtitle: 'Last updated: January 2026',
            disclaimer: '<i class="fas fa-info-circle"></i> <strong>Note:</strong> The legally binding version of this policy is in Spanish, as it is governed by Colombian law (Ley 1581 de 2012). This English translation is provided for informational purposes only.',
            s1: {
                title: 'IDENTIFICATION OF THE DATA CONTROLLER',
                body: `<ul class="info-list">
                            <li><strong>Company name:</strong> PalmiSoft</li>
                            <li><strong>Tax ID:</strong> 1112956985-1</li>
                            <li><strong>Registered address:</strong> Palmira, Valle del Cauca – Colombia</li>
                            <li><strong>Address:</strong> Palmira, Valle del Cauca</li>
                            <li><strong>Email:</strong> <a href="mailto:rojan11@gmail.com">rojan11@gmail.com</a></li>
                            <li><strong>Phone:</strong> <a href="tel:+573173184631">+57 317 318 4631</a></li>
                        </ul>
                        <p>Hereinafter referred to as <strong>PALMISOFT</strong>, acting as the Data Controller.</p>`
            },
            s2: {
                title: 'LEGAL FRAMEWORK',
                body: `<p>This Privacy and Personal Data Processing Policy is governed by:</p>
                        <ul>
                            <li>Article 15 of the Political Constitution of Colombia</li>
                            <li>Law 1581 of 2012</li>
                            <li>Decree 1377 of 2013</li>
                            <li>Decree 1074 of 2015</li>
                            <li>Any other regulations that may modify, add to or replace them</li>
                        </ul>`
            },
            s3: {
                title: 'DEFINITIONS',
                body: `<dl class="definition-list">
                            <dt>Personal Data:</dt>
                            <dd>Any information linked to or that can be associated with a specific or identifiable natural person.</dd>
                            <dt>Data Subject:</dt>
                            <dd>The natural person whose personal data is being processed.</dd>
                            <dt>Processing:</dt>
                            <dd>Any operation performed on personal data, such as collection, storage, use, circulation or deletion.</dd>
                            <dt>Data Controller:</dt>
                            <dd>The natural or legal person who decides on the database and the processing of the data.</dd>
                        </dl>`
            },
            s4: {
                title: 'PERSONAL DATA SUBJECT TO PROCESSING',
                body: `<p>PALMISOFT collects and processes only non-sensitive personal data, such as:</p>
                        <ul>
                            <li>Full name</li>
                            <li>Type and number of identification document</li>
                            <li>Physical address</li>
                            <li>Phone number</li>
                            <li>Email address</li>
                            <li>Information provided through contact forms, service requests or digital communications</li>
                        </ul>
                        <p class="highlight-text">
                            <i class="fas fa-info-circle"></i>
                            PALMISOFT does not collect sensitive data or data from minors.
                        </p>`
            },
            s5: {
                title: 'PURPOSE OF DATA PROCESSING',
                body: `<p>The personal data collected will be processed for the following purposes:</p>
                        <ul>
                            <li>Handling requests, inquiries, petitions or quotes made by users</li>
                            <li>Providing software development, automation and technology services offered by PalmiSoft</li>
                            <li>Maintaining communication with clients, suppliers and users</li>
                            <li>Sending commercial, technical or informational content related to our services</li>
                            <li>Fulfilling legal, contractual and administrative obligations</li>
                            <li>Managing the commercial relationship and improving service quality</li>
                        </ul>`
            },
            s6: {
                title: 'AUTHORIZATION OF THE DATA SUBJECT',
                body: `<p>The collection and processing of personal data is carried out with the prior free, express and informed authorization of the data subject, which is obtained through physical or electronic forms, digital messages or through the use of the PalmiSoft website.</p>
                        <p>The data subject confirms that the information provided is truthful and up to date.</p>`
            },
            s7: {
                title: 'RIGHTS OF THE DATA SUBJECT',
                body: `<p>In accordance with the law, the data subject has the right to:</p>
                        <ul class="rights-list">
                            <li><i class="fas fa-check"></i> Know, update and rectify their personal data</li>
                            <li><i class="fas fa-check"></i> Request proof of the authorization granted</li>
                            <li><i class="fas fa-check"></i> Be informed about how their data is used</li>
                            <li><i class="fas fa-check"></i> File complaints with the Superintendencia de Industria y Comercio</li>
                            <li><i class="fas fa-check"></i> Revoke authorization and/or request deletion of data when there is no legal or contractual obligation</li>
                            <li><i class="fas fa-check"></i> Access their personal data free of charge</li>
                        </ul>`
            },
            s8: {
                title: 'PROCEDURE TO EXERCISE RIGHTS',
                body: `<p>The data subject may exercise their rights by sending a request to the following email address:</p>
                        <div class="contact-box">
                            <i class="fas fa-envelope"></i>
                            <a href="mailto:rojan11@gmail.com">rojan11@gmail.com</a>
                        </div>
                        <p>The request must include:</p>
                        <ul>
                            <li>Full name of the data subject</li>
                            <li>Identity document</li>
                            <li>Clear description of the request</li>
                            <li>Contact information</li>
                        </ul>
                        <p><strong>Response time frames:</strong></p>
                        <ul>
                            <li><strong>Inquiries:</strong> up to ten (10) business days</li>
                            <li><strong>Claims:</strong> up to fifteen (15) business days</li>
                        </ul>`
            },
            s9: {
                title: 'INFORMATION SECURITY MEASURES',
                body: `<p>PalmiSoft adopts reasonable technical, administrative and human measures to protect personal data against loss, unauthorized access, misuse, alteration or disclosure.</p>`
            },
            s10: {
                title: 'TRANSFER AND TRANSMISSION OF PERSONAL DATA',
                body: `<p>Personal data will not be sold, transferred or shared with third parties, except when:</p>
                        <ul>
                            <li>Required by a competent authority</li>
                            <li>Necessary for the fulfillment of a legal or contractual obligation</li>
                            <li>Explicit authorization from the data subject exists</li>
                        </ul>`
            },
            s11: {
                title: 'DURATION OF PROCESSING',
                body: `<p>This policy takes effect from the date of its publication on the website.</p>
                        <p>Personal data will be processed for as long as necessary to fulfill the purposes described or while a legal or contractual relationship exists.</p>`
            },
            s12: {
                title: 'MODIFICATIONS TO THE POLICY',
                body: `<p>PalmiSoft reserves the right to modify this Privacy and Personal Data Processing Policy at any time.</p>
                        <p>Any changes will be published promptly on the website.</p>`
            },
            contactSection: {
                title: 'Have questions about this policy?',
                desc: 'If you have questions about our Privacy Policy or wish to exercise your rights, contact us:',
                emailBtn: 'Send email',
                formBtn: 'Contact form'
            },
            back: 'Back to Home'
        }
    }
};

// ============= I18N ENGINE =============
window.PalmiI18n = {
    currentLang: 'es',

    /**
     * Initialize: detect language from localStorage or browser preference.
     * Default is always Spanish; auto-switches to English only if the browser
     * language is English AND no explicit preference has been saved yet.
     */
    init() {
        const saved = localStorage.getItem('palmisoft-lang');
        if (saved && translations[saved]) {
            // Explicit preference previously saved by the user — respect it, no re-save needed.
            this.apply(saved, false);
        } else {
            // First visit: default to Spanish, auto-switch to English for EN browsers.
            const browserLang = (navigator.language || navigator.userLanguage || 'es').toLowerCase();
            const detected = browserLang.startsWith('en') ? 'en' : 'es';
            // Persist the detected language so it survives page navigation.
            this.apply(detected, true);
        }
    },

    /**
     * Apply translations for a given language code
     * @param {string} lang - 'es' or 'en'
     * @param {boolean} save - whether to save to localStorage (default true)
     */
    apply(lang, save = true) {
        if (!translations[lang]) return;
        this.currentLang = lang;
        if (save) localStorage.setItem('palmisoft-lang', lang);

        // Update <html lang>
        document.documentElement.lang = lang;

        // Text content
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const val = this._get(lang, el.getAttribute('data-i18n'));
            if (val !== undefined) el.textContent = val;
        });

        // innerHTML (for content containing HTML tags)
        document.querySelectorAll('[data-i18n-html]').forEach(el => {
            const val = this._get(lang, el.getAttribute('data-i18n-html'));
            if (val !== undefined) el.innerHTML = val;
        });

        // Placeholder attributes
        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const val = this._get(lang, el.getAttribute('data-i18n-placeholder'));
            if (val !== undefined) el.placeholder = val;
        });

        // Title / tooltip attributes
        document.querySelectorAll('[data-i18n-title]').forEach(el => {
            const val = this._get(lang, el.getAttribute('data-i18n-title'));
            if (val !== undefined) el.title = val;
        });

        // aria-label attributes
        document.querySelectorAll('[data-i18n-aria]').forEach(el => {
            const val = this._get(lang, el.getAttribute('data-i18n-aria'));
            if (val !== undefined) el.setAttribute('aria-label', val);
        });

        // <select> options with data-i18n
        document.querySelectorAll('option[data-i18n]').forEach(el => {
            const val = this._get(lang, el.getAttribute('data-i18n'));
            if (val !== undefined) el.textContent = val;
        });

        // <document.title> via the <html data-i18n-pagetitle> attribute
        const pageTitleKey = document.documentElement.getAttribute('data-i18n-pagetitle');
        if (pageTitleKey) {
            const val = this._get(lang, pageTitleKey);
            if (val) document.title = val;
        }

        // Update active state of lang switcher buttons
        document.querySelectorAll('.lang-btn').forEach(btn => {
            const isActive = btn.getAttribute('data-lang') === lang;
            btn.classList.toggle('active', isActive);
            btn.setAttribute('aria-pressed', isActive.toString());
        });

        // Handle privacy page disclaimer visibility
        const disclaimer = document.getElementById('privacy-disclaimer');
        if (disclaimer) {
            const val = this._get(lang, 'privacy.disclaimer');
            disclaimer.style.display = val ? 'block' : 'none';
            if (val) disclaimer.innerHTML = val;
        }

        // Re-generate CAPTCHA question in the new language
        if (typeof generateCaptcha === 'function') {
            generateCaptcha();
        }
    },

    /**
     * Translate a key using the current language (fallback to es)
     * @param {string} key - dot-notation key e.g. 'hero.title'
     * @returns {string}
     */
    t(key) {
        return this._get(this.currentLang, key) ?? this._get('es', key) ?? key;
    },

    /**
     * Retrieve a value from a translation dict by dot-notation key
     */
    _get(lang, key) {
        const parts = key.split('.');
        let obj = translations[lang];
        for (const part of parts) {
            if (obj == null) return undefined;
            obj = obj[part];
        }
        return obj;
    }
};

// ============= BOOT =============
document.addEventListener('DOMContentLoaded', () => {
    // Wire up language switcher buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            window.PalmiI18n.apply(btn.getAttribute('data-lang'));
        });
    });

    // Initialize language
    window.PalmiI18n.init();
});
