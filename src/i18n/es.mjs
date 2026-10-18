// Español — misma estructura que en.mjs
export default {
  lang: "es",
  locale: "es_ES",
  slugs: {
    home: "", web: "diseno-web/", compliance: "cumplimiento-digital/", check: "revision-rgpd-cookies/", language: "traducciones/",
    creative: "servicios-creativos/", work: "proyectos/", journal: "journal/", about: "sobre-nosotros/", contact: "contacto/",
    privacy: "privacidad/", cookies: "cookies/", imprint: "aviso-legal/", accessibility: "accesibilidad/"
  },
  ui: {
    skip: "Saltar al contenido", home: "Inicio", mainNav: "Navegación principal", contents: "Contenido",
    menu: "Menú", language: "Idioma", soon: "pronto", services: "Servicios", startProject: "Iniciar un proyecto"
  },
  nav: {
    work: "Proyectos", journal: "Journal", about: "Sobre nosotros", contact: "Contacto",
    web: ["Diseño y desarrollo web", "Webs, landing pages, lanzamiento", "</>"],
    compliance: ["Cumplimiento digital", "RGPD, cookies, normas digitales de la UE", "§"],
    check: ["Revisión RGPD y cookies", "Revisión gratuita · corrección por 99 €", "✓"],
    language: ["Traducciones", "Cinco idiomas, en todas las direcciones", "⇄"],
    creative: ["Servicios creativos", "Identidad, gráfica, edición multimedia", "Aa"]
  },
  meta: {
    home: { title: "Lexora Digital — estudio de web, derecho, idiomas y diseño", desc: "Estudio digital independiente de webs, cumplimiento del RGPD y de cookies, traducción y diseño — para empresas de toda Europa, en cinco idiomas." },
    web: { title: "Diseño y desarrollo web — Lexora Digital", desc: "Webs y landing pages a medida para pymes. Web básica desde 99 €, adaptable a móviles, respetuosa con la privacidad y publicada en su dominio." },
    compliance: { title: "Cumplimiento digital: RGPD, cookies y normas de la UE — Lexora Digital", desc: "Ayuda práctica con el RGPD, el consentimiento de cookies, las políticas de privacidad y las normas digitales de la UE para webs de empresa — información e implementación, no asesoramiento jurídico." },
    check: { title: "Revisión RGPD y cookies gratuita — corrección por 99 € | Lexora Digital", desc: "GDPR, Cookies & Co.: revisión gratuita del consentimiento, el seguimiento y los textos legales de su web. Si encontramos problemas, los corregimos por un precio fijo de 99 €." },
    language: { title: "Traducciones en inglés, alemán, neerlandés, español y croata — Lexora Digital", desc: "Traducción de webs, documentos empresariales y textos jurídicos entre inglés, alemán, neerlandés, español y croata — precisa y natural." },
    creative: { title: "Servicios creativos: identidad, diseño gráfico y edición multimedia — Lexora Digital", desc: "Identidad visual, materiales de marca, diseño gráfico y edición seleccionada de foto, vídeo, audio y voz para empresas." },
    work: { title: "Proyectos — proyectos conceptuales | Lexora Digital", desc: "Conceptos de web para estética, oficios y talleres de automoción — diseños completos y adaptables que muestran cómo trabaja Lexora Digital." },
    journal: { title: "Journal — guías sobre RGPD, DSA y Ley de IA | Lexora Digital", desc: "Guías claras sobre las normas europeas que afectan a las webs de empresa: RGPD y cookies, la Ley de Servicios Digitales y la Ley de IA de la UE." },
    about: { title: "Sobre nosotros — Lexora Digital", desc: "Un estudio digital independiente que combina diseño web, conocimiento práctico de las normas digitales europeas, traducción y trabajo creativo." },
    contact: { title: "Contacto — Lexora Digital", desc: "Cuéntenos su proyecto: web, diseño, cumplimiento del RGPD y de cookies o traducción. Respondemos en su idioma." },
    privacy: { title: "Política de privacidad — Lexora Digital", desc: "Cómo trata Lexora Digital los datos personales en esta web." },
    cookies: { title: "Política de cookies — Lexora Digital", desc: "Esta web no utiliza cookies de seguimiento ni de publicidad. Aquí se explica exactamente qué se guarda y por qué." },
    imprint: { title: "Aviso legal — Lexora Digital", desc: "Información del titular de lexoradigital.com." },
    accessibility: { title: "Declaración de accesibilidad — Lexora Digital", desc: "Nuestros objetivos de accesibilidad para esta web, limitaciones conocidas y cómo enviarnos comentarios." }
  },

  home: {
    hero: {
      eyebrow: "Estudio digital independiente · Europa y más allá",
      h1: ["Presencia digital.", "Diseñada con *propósito.*"],
      lead: "Creamos webs cuidadas, las adaptamos al RGPD y a la normativa de cookies, las traducimos a cinco idiomas y damos vida a ideas creativas — con una comunicación clara más allá de las fronteras.",
      cta1: "Ver nuestros proyectos", cta2: "Hablemos de su proyecto",
      langs: "Trabajamos en"
    },
    intro: {
      statement: "Un buen trabajo digital no solo se ve bien. ~Genera confianza, funciona para todos y habla el idioma de sus clientes.~",
      p: [
        "Una web suele ser la primera conversación entre un cliente y su empresa. Debe transmitir cuidado, cargar rápido, funcionar en cualquier pantalla, tratar los datos con respeto — y leerse con naturalidad en el idioma de su cliente.",
        "Por eso unimos diseño, desarrollo, cumplimiento digital y traducción en un solo proceso. El resultado es una web que hace su empresa más creíble, más accesible y preparada para clientes de toda Europa."
      ],
      facts: [
        ["Creíble", "Una presencia clara y segura que refleja la calidad de su trabajo."],
        ["Conforme", "Privacidad, cookies y normas digitales de la UE desde el principio."],
        ["Multilingüe", "Contenido natural y preciso en inglés, alemán, neerlandés, español y croata."]
      ]
    },
    disc: {
      label: "Qué hacemos",
      h2: "Cuatro disciplinas. Un estudio.",
      lead: "La mayoría de las empresas necesitan algo más que una web. Combinamos capacidades que suelen estar en cuatro sitios distintos — y el mejor trabajo surge donde se cruzan.",
      core: "LEXORA",
      caption: "Donde se cruzan web, derecho, idioma y diseño: webs que se ven bien, funcionan bien, cuidan los datos y hablan a cada cliente.",
      cards: [
        { key: "web", route: "web", g: "</>", word: "Web", title: "Webs que hacen que su empresa inspire confianza.",
          p: "Webs y landing pages a medida, diseño adaptable, mejoras de webs existentes, publicación y una entrega clara. Webs básicas desde 99 €.",
          tags: ["Webs a medida", "Landing pages", "Diseño adaptable", "Mejoras", "Publicación"], link: "Diseño y desarrollo web" },
        { key: "law", route: "compliance", g: "§", word: "Derecho", title: "Webs que respetan a quienes las usan.",
          p: "Consultoría y apoyo práctico en RGPD, cookies y políticas de privacidad — con una revisión gratuita de su web y corrección a precio fijo de 99 €.",
          tags: ["RGPD y cookies", "Configuración del consentimiento", "Textos legales", "Normas digitales de la UE"],
          note: "Información general e implementación práctica en webs. No somos un despacho de abogados y no prestamos asesoramiento ni representación jurídica.", link: "Cumplimiento digital" },
        { key: "language", route: "language", g: "⇄", word: "Idioma", title: "Textos que suenan como si se hubieran escrito en su idioma.",
          p: "Traducción de webs, documentos empresariales y textos jurídicos entre inglés, alemán, neerlandés, español y croata.",
          tags: ["Localización web", "Documentos empresariales", "Textos jurídicos", "Revisión"], link: "Traducciones" },
        { key: "design", route: "creative", g: "Aa", word: "Diseño", title: "Trabajo visual con un criterio claro.",
          p: "Identidad visual, materiales de marca y diseño gráfico — además de edición seleccionada de foto, vídeo, audio y voz.",
          tags: ["Identidad visual", "Materiales de marca", "Diseño gráfico", "Foto y vídeo", "Audio y voz"], link: "Servicios creativos" }
      ]
    },
    focus: { label: "En detalle", h2: "Tres servicios, *un mismo nivel.*", lead: "Webs, cumplimiento del RGPD y de cookies, y traducción — todos con el mismo cuidado por el detalle." },
    work: {
      label: "Proyectos seleccionados",
      h2: "Proyectos conceptuales, hechos con el nivel de los reales.",
      p: "Cada concepto es una web completa y adaptable, diseñada para un tipo de empresa concreto. Muestran nuestra forma de trabajar — no son encargos de clientes.",
      all: "Ver todos los proyectos", badge: "Concepto", count: "3 conceptos · más en preparación", cta: "Ver caso",
      items: [
        { slug: "studio-rosalie", img: "rosalie", cat: "Estética y belleza", title: "Studio Rosalie",
          p: "Una web de una página, tranquila y elegante, para un centro de estética: tonos rosados cálidos, tipografía editorial con serifa y una estructura pensada para reservar cita.",
          svc: ["Diseño web", "Dirección visual", "Desarrollo adaptable"], alt: "Concepto de web para el centro de estética Studio Rosalie en ordenador y móvil" },
        { slug: "mustermann-sanitaer", img: "mustermann", cat: "Oficios y servicios para el hogar", title: "Mustermann Sanitär",
          p: "Una web clara y fiable para una empresa de fontanería y calefacción, construida en torno a un objetivo: que suene el teléfono.",
          svc: ["Diseño web", "Desarrollo adaptable", "Estructura de conversión"], alt: "Concepto de web para una empresa de fontanería y calefacción en ordenador y móvil" },
        { slug: "kfz-werkstatt", img: "kfz", cat: "Automoción y reparación", title: "Kfz-Werkstatt",
          p: "Una imagen potente y técnica para un taller mecánico independiente, con servicios, puntos de confianza y solicitud de cita desde el principio.",
          svc: ["Diseño web", "Dirección de arte", "Desarrollo adaptable"], alt: "Concepto de web para un taller mecánico en ordenador y móvil" }
      ]
    },
    trust: {
      label: "Cumplimiento digital",
      h2: "Diseño y cumplimiento forman parte de la misma conversación.",
      lead: "Los banners de cookies, los formularios de contacto y las políticas de privacidad forman parte de la experiencia de usuario. Le ayudamos a entender qué normas europeas pueden aplicarse a su web — y a integrarlas bien desde el principio, en lugar de añadirlas al final.",
      cta: "Descubrir el cumplimiento digital",
      disclaimer: "Información general, no asesoramiento jurídico. Que una norma se aplique depende de su empresa, de su web y de su país. Para asesoramiento sobre su caso, consulte a un abogado.",
      cols: { req: "Se aplica a la mayoría de webs de empresa", ctx: "Depende de su empresa", gp: "Buena práctica" },
      reviewed: "Última revisión: octubre de 2026 · fuentes: EUR-Lex",
      topics: [
        { t: "Datos personales y RGPD", s: "req", ref: "Reglamento (UE) 2016/679", p: "Se aplica siempre que una web trata datos personales — formularios de contacto, boletines, analítica e incluso registros del servidor." },
        { t: "Consentimiento de cookies y seguimiento", s: "req", ref: "Directiva 2002/58/CE, art. 5.3", p: "Las cookies no esenciales y el seguimiento similar suelen requerir consentimiento previo. El almacenamiento estrictamente necesario, no." },
        { t: "Política de privacidad", s: "req", ref: "RGPD art. 13–14", p: "Los visitantes deben saber quién trata sus datos, para qué, con qué base jurídica y cuáles son sus derechos." },
        { t: "Formularios y recogida de datos", s: "req", ref: "RGPD art. 5, 25, 32", p: "Recoja solo lo necesario, protéjalo durante la transmisión y decida cuánto tiempo lo conserva." },
        { t: "Información del titular", s: "ctx", ref: "Directiva 2000/31/CE, art. 5 · DE: § 5 DDG", p: "Las webs comerciales deben identificar al titular. Alemania y Austria tienen normas de aviso legal (Impressum) especialmente detalladas." },
        { t: "Accesibilidad digital", s: "ctx", ref: "Directiva (UE) 2019/882", p: "Desde junio de 2025, el Acta Europea de Accesibilidad cubre ciertos productos y servicios, como el comercio electrónico. Las microempresas que prestan servicios están exentas." },
        { t: "Ley de Servicios Digitales", s: "ctx", ref: "Reglamento (UE) 2022/2065", p: "Relevante si aloja contenido de usuarios o gestiona una plataforma o un marketplace. Una web de empresa típica no suele estar afectada." },
        { t: "Ley de IA de la UE", s: "ctx", ref: "Reglamento (UE) 2024/1689, modificado por el (UE) 2026/1744", p: "Relevante si desarrolla o utiliza sistemas de IA, como chatbots o contenido generado por IA. Las obligaciones se aplican por fases; varias fechas se aplazaron en 2026." },
        { t: "Diseño accesible", s: "gp", ref: "WCAG 2.2, nivel AA", p: "Un contraste legible, la navegación con teclado y una estructura clara ayudan a todos los visitantes — aunque no sea obligatorio." },
        { t: "Privacidad por defecto", s: "gp", ref: "Estándar Lexora", p: "Sin rastreadores innecesarios, fuentes alojadas en el propio servidor y opciones de consentimiento honestas, con Aceptar y Rechazar al mismo nivel." }
      ]
    },
    checkBand: {
      label: "GDPR, Cookies & Co.",
      h2: "¿Cumple su web el RGPD y la normativa de cookies? *Descúbralo gratis.*",
      lead: "Revisamos el consentimiento, el seguimiento, la política de privacidad y los textos legales. Si encontramos problemas, los corregimos por un precio fijo.",
      priceFree: "0 €", priceFix: "99 €", free: "La revisión", fix: "La corrección — pago único", cta: "Revisar mi web"
    },
    process: {
      label: "Nuestro método",
      h2: "Un proceso claro, sin sorpresas.",
      lead: "Cada proyecto sigue los mismos cuatro pasos, con un alcance definido y un precio acordado antes de empezar.",
      steps: [
        ["Descubrir", "Conocemos su empresa, su público y sus objetivos — y acordamos qué incluye el proyecto."],
        ["Diseñar", "Desarrollamos una dirección visual y una estructura de páginas cuidadas, y las ajustamos con sus comentarios."],
        ["Construir", "Desarrollamos la web, la probamos en dispositivos y navegadores reales y corregimos lo necesario."],
        ["Lanzar", "Publicamos la web y le entregamos información clara sobre cómo funciona y cuáles son los siguientes pasos."]
      ]
    },
    langs: {
      label: "Cinco idiomas",
      h2: "Su proyecto, en su idioma.",
      lead: "Trabajamos con clientes en cinco idiomas — desde la primera conversación hasta la propuesta, el contenido de la web y la documentación de entrega.",
      note: "En todas las direcciones entre los cinco idiomas",
      link: "Traducciones",
      list: [["EN", "Let's talk.", "English"], ["DE", "Lassen Sie uns sprechen.", "Deutsch"], ["NL", "Laten we praten.", "Nederlands"], ["ES", "Hablemos.", "Español"], ["HR", "Razgovarajmo.", "Hrvatski"]]
    },
    journal: {
      label: "El journal",
      h2: "Guías claras sobre las normas digitales de Europa.",
      lead: "Escritas para empresarios, no para juristas: qué dicen las normas, a quién se aplican y qué hacer a continuación.",
      soon: "En preparación", kind: "Guía",
      posts: [
        { tag: "RGPD", t: "RGPD y cookies: lo que realmente necesita la web de una pequeña empresa", d: "Consentimiento, cookies, políticas de privacidad y formularios — qué es obligatorio, qué es opcional y en qué fallan la mayoría de las webs." },
        { tag: "DSA", t: "La Ley de Servicios Digitales: lo que las empresas deben entender", d: "A quién se aplica la DSA, qué obligaciones importan a las empresas más pequeñas y cuándo afecta a una web de empresa normal." },
        { tag: "Ley de IA", t: "La Ley de IA de la UE: normas, ámbito de aplicación y calendario", d: "Categorías de riesgo, obligaciones de transparencia y el calendario por fases — incluidas las fechas aplazadas en 2026." }
      ]
    },
    about: {
      label: "Sobre Lexora",
      h2: "Un estudio independiente que trabaja sin fronteras.",
      p: [
        "Lexora Digital es un estudio digital independiente para pequeñas y medianas empresas. Combinamos diseño y desarrollo web, conocimiento práctico de las normas digitales europeas, traducción y producción creativa.",
        "Hablamos claro: un alcance definido, consejos honestos sobre lo que necesita — y lo que no — y explicaciones sencillas, en el idioma en que usted trabaja."
      ],
      link: "Más sobre Lexora",
      values: [
        ["Comunicación clara", "Sin jerga ni pasos ocultos. Siempre sabe en qué punto está su proyecto."],
        ["Diseño cuidado", "Cada elemento tiene un motivo — nada se añade solo para impresionar."],
        ["Alcance honesto", "Paquetes y precios transparentes; los extras se indican antes de que cuesten nada."],
        ["Cumplimiento práctico", "Privacidad y accesibilidad integradas, sin promesas que nadie puede cumplir."]
      ]
    },
    final: {
      label: "Iniciar un proyecto",
      h2: "¿Tiene una buena idea? *Construyámosla bien.*",
      lead: "Cuéntenos qué quiere conseguir. Hablaremos de sus necesidades y del siguiente paso más práctico.",
      cta1: "Iniciar un proyecto", cta2: "Contactar con Lexora"
    }
  },

  pages: {
    web: {
      hero: { label: "Diseño y desarrollo web", h1: "Webs que hacen que su empresa *inspire confianza.*", lead: "Desde una web de una página bien enfocada hasta una web a medida con varias páginas — diseñada con cuidado, preparada para cualquier pantalla y publicada con una entrega clara.", cta1: "Iniciar un proyecto web", cta2: "Ver proyectos conceptuales" },
      what: {
        label: "Qué creamos", h2: "Todo lo que necesita una web de empresa. Nada que sobre.", lead: "Diseñamos y desarrollamos webs rápidas, legibles, respetuosas con la privacidad y fáciles de mantener.",
        items: [
          { g: "01", t: "Webs de una página", p: "Una presencia completa y enfocada en una sola página — ideal para oficios, estudios y negocios locales." },
          { g: "02", t: "Webs a medida", p: "Webs de varias páginas con una estructura pensada para sus servicios, clientes y objetivos." },
          { g: "03", t: "Landing pages", p: "Páginas con un único objetivo — para una campaña, una oferta o un servicio nuevo." },
          { g: "04", t: "Rediseños y mejoras", p: "Una estructura más clara, mejor experiencia móvil y páginas más rápidas para una web existente." },
          { g: "05", t: "Webs multilingües", p: "Webs en hasta cinco idiomas, traducidas por nosotros — no por un plugin automático." },
          { g: "06", t: "Configuración respetuosa con la privacidad", p: "Sin rastreadores innecesarios, consentimiento correcto cuando hace falta y textos legales completos." }
        ]
      },
      pricing: {
        label: "Paquetes", h2: "Transparencia desde el principio.", lead: "Un paquete de entrada bien definido para pequeñas empresas y presupuestos individuales para todo lo demás.",
        incl: "Incluido", extra: "No incluido / extra",
        starter: { name: "Web básica", price: "99 €", unit: "pago único", svc: "web", cta: "Pedir una web básica",
          p: "Una web profesional de una página para una pequeña empresa, normalmente lista en 48 horas desde que recibimos todo el contenido.",
          incl: ["Una página adaptable con hasta 6 secciones", "Sus textos, fotos y logotipo, cuidadosamente maquetados", "Sección de contacto con teléfono, email, dirección y enlace al mapa", "Configuración respetuosa con la privacidad y enlaces a sus textos legales", "Publicación en su dominio actual"],
          extra: ["Costes de dominio y alojamiento", "Redacción o traducción de sus textos", "Páginas adicionales, reservas o tienda online", "Producción de logotipo o fotografías", "Cambios continuos tras la publicación"] },
        custom: { name: "Web a medida", price: "A consultar", unit: "presupuesto por proyecto", svc: "web", cta: "Pedir presupuesto",
          p: "Para empresas que necesitan varias páginas, más idiomas o funciones especiales. Tras una breve conversación recibe un presupuesto cerrado.",
          incl: ["Reunión inicial y estructura de páginas", "Diseño visual a medida", "Desarrollo multipágina y multilingüe", "Pruebas en dispositivos y navegadores reales", "Publicación, entrega y documentación"] },
        note: "Precios sin IVA cuando proceda. Todo lo que quede fuera de un paquete se presupuesta antes de empezar — usted decide si lo quiere."
      },
      after: {
        label: "Tras el lanzamiento", h2: "Una entrega limpia y límites claros.", lead: "Debe saber exactamente qué recibe — y qué ocurre cuando la web ya está publicada.",
        items: [
          { g: "→", t: "Publicación", p: "Publicamos la web en su dominio y comprobamos que todo funciona en producción." },
          { g: "→", t: "Entrega", p: "Recibe los accesos y una breve guía de cómo está construida su web." },
          { g: "→", t: "Mantenimiento", p: "Las actualizaciones y cambios tras el lanzamiento no están incluidos en los paquetes. Los ofrecemos bajo petición, con precio previo." }
        ]
      },
      work: { label: "Proyectos conceptuales", h2: "Así son nuestras webs en la práctica." },
      band: { h2: "¿Listo para una web que *funcione de verdad?*", lead: "Cuéntenos sobre su empresa y qué debe conseguir la web." }
    },

    compliance: {
      hero: { label: "Cumplimiento digital", h1: "RGPD, cookies y normas digitales de la UE — *explicados y aplicados.*", lead: "Ayudamos a las empresas a entender qué normas europeas afectan a su web y las llevamos a la práctica: consentimiento, seguimiento, políticas de privacidad, formularios y textos legales.", cta1: "Revisión gratuita de la web", cta2: "Solicitar una consulta" },
      help: {
        label: "Cómo ayudamos", h2: "Apoyo práctico, desde la primera pregunta hasta la web funcionando.", lead: "Información general e implementación concreta — claramente separadas del asesoramiento jurídico formal.",
        items: [
          { g: "01", t: "Consultoría", p: "Una explicación clara de qué normas probablemente importan para su web — en lenguaje sencillo y en su idioma." },
          { g: "02", t: "Configuración del consentimiento", p: "Un banner con Aceptar y Rechazar al mismo nivel y control real de cada categoría." },
          { g: "03", t: "Auditoría de seguimiento", p: "Detectamos analítica, píxeles, contenido incrustado y recursos externos que se cargan antes del consentimiento." },
          { g: "04", t: "Formularios respetuosos con la privacidad", p: "Formularios de contacto y reserva que solo piden lo necesario, con los avisos adecuados." },
          { g: "05", t: "Política de privacidad y aviso legal", p: "Textos completos y bien estructurados a partir de la información que nos facilite." },
          { g: "06", t: "Revisión de accesibilidad", p: "Una revisión práctica según WCAG 2.2 y, cuando corresponda, el Acta Europea de Accesibilidad." }
        ]
      },
      overview: { h2: "Las normas, de un vistazo.", lead: "Qué requisitos europeos suelen aplicarse a una web de empresa — y cuáles dependen de lo que usted hace." },
      national: {
        label: "Normas nacionales", h2: "Normas de la UE, aplicadas en cada país.", lead: "El RGPD se aplica en toda la UE, pero el consentimiento de cookies y la información del titular se regulan en leyes nacionales. Estas son las que más trabajamos.",
        head: ["País", "Cookies y seguimiento", "Información del titular"],
        rows: [
          ["Alemania", "§ 25 TDDDG + RGPD", "§ 5 DDG (Impressum)"],
          ["Austria", "§ 165 TKG 2021 + RGPD", "§ 5 ECG, § 25 MedienG"],
          ["Países Bajos", "Art. 11.7a Telecommunicatiewet + AVG (RGPD)", "Art. 3:15d BW"],
          ["España", "Art. 22.2 LSSI-CE + RGPD / LOPDGDD", "Art. 10 LSSI-CE"],
          ["Croacia", "Zakon o elektroničkim komunikacijama + RGPD", "Zakon o elektroničkoj trgovini"],
          ["Reino Unido", "PECR, reg. 6 + UK GDPR", "Electronic Commerce Regulations 2002, reg. 6"]
        ],
        note: "Resumen orientativo. Las normas cambian y las autoridades nacionales las interpretan de forma distinta; al revisar su web tenemos en cuenta las normas vigentes en su país."
      },
      bounds: {
        label: "Límites", h2: "Qué hacemos — y qué no.",
        doT: "Qué hacemos", do: ["Explicar de forma sencilla las normas que probablemente se aplican", "Revisar su web en busca de problemas de cumplimiento habituales", "Corregir consentimiento, seguimiento y formularios en su web", "Estructurar la política de privacidad y el aviso legal con la información que nos dé", "Volver a revisar la web tras los cambios"],
        dontT: "Qué no hacemos", dont: ["Asesoramiento o representación jurídica", "Garantizar que una web cumple \"al 100 %\"", "Actuar como su delegado de protección de datos", "Redactar contratos o representarle ante autoridades"]
      },
      band: { h2: "Empiece con una *revisión gratuita* de su web.", lead: "Revisamos el consentimiento, el seguimiento, la política de privacidad y los textos legales. Si encontramos problemas, los corregimos por un precio fijo de 99 €.", cta: "Revisar mi web" }
    },

    check: {
      hero: { label: "GDPR, Cookies & Co.", h1: "Revisión RGPD y cookies gratuita. *La corregimos por 99 €.*", lead: "Envíenos su web. Revisamos el consentimiento, el seguimiento, la política de privacidad y los textos legales según las normas de la UE y de su país. Si todo está bien, no cuesta nada. Si no, adaptamos su web por un precio fijo.",
        points: ["Sin cuenta ni tarjeta", "Gratis si no hay problemas", "Un precio fijo por la corrección", "Nueva revisión gratuita después"] },
      areas: {
        label: "Qué revisamos", h2: "Las cuatro áreas que más reclamaciones y multas generan.", lead: "Revisamos lo que sus visitantes ven realmente y lo que su web carga realmente.",
        items: [
          { g: "01", t: "Bases del RGPD", p: "Cómo se recogen y presentan los datos personales — formularios, avisos y la configuración de privacidad visible." },
          { g: "02", t: "Consentimiento de cookies", p: "Si el consentimiento es claro, si rechazar es tan fácil como aceptar y si el seguimiento espera a la decisión." },
          { g: "03", t: "Privacidad y textos legales", p: "Su política de privacidad, su aviso legal y los formularios que enlazan a ellos." },
          { g: "04", t: "Seguimiento de terceros", p: "Analítica, píxeles publicitarios, vídeos incrustados, mapas, fuentes y otros recursos externos." }
        ]
      },
      how: {
        label: "Cómo funciona", h2: "Cuatro pasos de la revisión al cumplimiento.", lead: "Usted mantiene el control: no se cambia nada en su web hasta que acepte la oferta.",
        steps: [
          ["Envíe su web", "Indique la dirección de su web, su email y su país — no necesitamos más."],
          ["La revisamos", "Revisamos consentimiento, seguimiento, política de privacidad y textos legales según las normas de la UE y de su país."],
          ["Recibe el resultado", "Sin coste. Si todo está bien, ahí termina. Si no, recibe una lista breve y clara de los problemas."],
          ["Lo corregimos por 99 €", "Con su aprobación, hacemos las correcciones en su web y después la volvemos a revisar gratis."]
        ]
      },
      example: {
        label: "Ejemplo de resultado", h2: "Un resultado claro, *no un tratado jurídico.*", lead: "Ve qué falla, por qué importa y qué ocurre después — en lenguaje sencillo y en su idioma.",
        site: "suempresa.es", tag: "Ilustración", status: { bad: "Problema", warn: "Incompleto", ok: "OK" },
        items: [
          { s: "bad", t: "La analítica se carga antes del consentimiento", p: "El seguimiento empieza al abrir la página, antes de que el visitante haya decidido." },
          { s: "warn", t: "La política de privacidad está incompleta", p: "No se indican los plazos de conservación ni los proveedores de servicios." },
          { s: "ok", t: "El aviso legal está presente", p: "Enlazado desde todas las páginas y con los datos obligatorios." }
        ],
        note: "Ejemplo solo ilustrativo — no es una web real."
      },
      pricing: {
        label: "Precios", h2: "Dos precios. Sin sorpresas.", lead: "La revisión es siempre gratuita. Solo paga si encontramos problemas y quiere que los corrijamos.",
        plans: [
          { name: "La revisión", price: "0 €", unit: "gratis", cta: "Solicitar revisión gratuita", p: "Una revisión de su web realizada por nosotros.", incl: ["Consentimiento, seguimiento, política de privacidad y textos legales", "Según las normas de la UE y de su país", "Lista breve y clara de los posibles problemas", "Sin compromiso"] },
          { name: "La corrección", price: "99 €", unit: "pago único", cta: "Empezar con la revisión gratuita", p: "Adaptamos su web al RGPD y a la normativa de cookies de la UE y de su país.",
            incl: ["Banner de consentimiento bien configurado — Aceptar y Rechazar al mismo nivel, elección real", "Rastreadores y contenido incrustado bloqueados hasta el consentimiento, si su plataforma lo permite", "Política de privacidad y aviso legal completados con la información que nos facilite", "Avisos en los formularios y enlaces a los textos legales en todas las páginas", "Nueva revisión gratuita y un breve resumen de los cambios"] }
        ],
        scope: "La corrección por 99 € cubre webs estándar en plataformas habituales como WordPress, Wix, Squarespace, Shopify, Webflow, Jimdo o HTML, y requiere acceso a su web o a su desarrollador. Si su web necesita más — por ejemplo plugins a medida, pasarelas de pago de tiendas online o un cambio de alojamiento — se lo decimos antes de empezar, con un precio aparte. Precios sin IVA cuando proceda."
      },
      countries: { label: "Países", h2: "Revisada según las normas que le afectan.", lead: "Indíquenos dónde está su empresa. Revisamos su web según las normas de la UE y la legislación nacional de ese país." },
      faq: {
        label: "Preguntas", h2: "Preguntas frecuentes.",
        items: [
          ["¿La revisión es realmente gratuita?", "Sí. La revisión no cuesta nada. Si no encontramos problemas, no paga absolutamente nada."],
          ["¿Qué incluye exactamente la corrección de 99 €?", "Configuramos bien el consentimiento, bloqueamos los rastreadores hasta el consentimiento si su plataforma lo permite, completamos su política de privacidad y aviso legal con la información que nos facilite, añadimos avisos en los formularios y enlaces a los textos legales, y después revisamos la web de nuevo."],
          ["¿Cambian mi web sin preguntar?", "No. Solo hacemos cambios después de que acepte la oferta, y únicamente los que se describen en ella."],
          ["¿Qué necesitan de mí?", "Acceso a su web (por ejemplo, un usuario de administración temporal) o el contacto de su desarrollador — además de los datos de la empresa que deben figurar en la política de privacidad y el aviso legal."],
          ["¿Es asesoramiento jurídico?", "No. La revisión y la corrección son un trabajo práctico y técnico basado en las normas de la UE y nacionales. No constituyen asesoramiento jurídico ni garantizan el cumplimiento. Para asesoramiento jurídico, consulte a un abogado."],
          ["¿Qué países cubren?", "Webs dirigidas a clientes de la UE y del Reino Unido, con especial experiencia en Alemania, Austria, Países Bajos, España y Croacia."],
          ["¿Cómo se paga?", "Recibe una oferta con el precio antes de empezar. Solo paga después de aceptarla."]
        ]
      },
      band: { h2: "Descubra en qué punto está su web — *gratis.*", lead: "Enviar su web lleva un minuto. Nosotros hacemos el resto.", cta: "Revisar mi web" },
      disclaimer: "GDPR, Cookies & Co. es un servicio de Lexora Digital. La revisión y la corrección son revisiones e implementaciones prácticas; no constituyen asesoramiento jurídico ni garantizan el cumplimiento."
    },

    language: {
      hero: { label: "Traducciones", h1: "Cinco idiomas. *En todas las direcciones.*", lead: "Traducción de webs, documentos empresariales y textos jurídicos entre inglés, alemán, neerlandés, español y croata — precisa, natural y coherente con su marca.", cta1: "Solicitar una traducción", cta2: "Combinaciones de idiomas" },
      pairs: {
        label: "Combinaciones", h2: "Veinte combinaciones de idiomas, un único contacto.", lead: "Traducimos entre cualquier par de nuestros cinco idiomas — una web alemana puede pasar al neerlandés, un contrato croata al inglés o un folleto español al alemán.",
        aria: "Cuadrícula de las veinte combinaciones entre inglés, alemán, neerlandés, español y croata",
        langs: [["EN", "English", "Reino Unido e internacional"], ["DE", "Deutsch", "Alemania, Austria, Suiza"], ["NL", "Nederlands", "Países Bajos y Flandes"], ["ES", "Español", "España"], ["HR", "Hrvatski", "Croacia"]]
      },
      services: {
        label: "Qué traducimos", h2: "De una sola página web a un conjunto completo de documentos.", lead: "Cada traducción la hace y la revisa una persona — nunca se deja en manos de un plugin.",
        items: [
          { g: "01", t: "Localización web", p: "El contenido de su web adaptado a cada mercado — incluidos títulos, botones, formularios y textos SEO." },
          { g: "02", t: "Documentos empresariales", p: "Ofertas, presentaciones, información de producto, emails y documentos internos." },
          { g: "03", t: "Textos jurídicos y contratos", p: "Contratos, condiciones generales, políticas de privacidad y correspondencia oficial." },
          { g: "04", t: "Textos de marketing", p: "Folletos, campañas y textos para redes sociales que mantienen su tono en cada idioma." },
          { g: "05", t: "Revisión y corrección", p: "Una segunda lectura cuidadosa de las traducciones que ya tiene." },
          { g: "06", t: "Webs multilingües", p: "Junto con nuestro servicio web: una web, hasta cinco idiomas, construida y traducida en un solo proyecto." }
        ]
      },
      focus: {
        label: "Nuestra especialidad", h2: "Lenguaje jurídico y empresarial para los mercados DACH y Benelux.",
        p: ["Nuestra mayor experiencia está en la traducción jurídica y empresarial para empresas que trabajan en Alemania, Austria, Suiza, Países Bajos y Bélgica — y entre esos mercados y el inglés y el croata.",
          "Tratamos con cuidado la terminología jurídica y técnica, y mantenemos sus propios términos coherentes en cada documento y cada idioma."]
      },
      how: {
        label: "Cómo funciona", h2: "Sencillo, con presupuesto cerrado.", lead: "Conoce el precio y la fecha de entrega antes de empezar.",
        steps: [
          ["Envíe su texto", "Suba o describa los documentos, la combinación de idiomas y su plazo."],
          ["Reciba un presupuesto", "Recibe un precio cerrado y una fecha de entrega — normalmente según el número de palabras."],
          ["Traducción y revisión", "Traducimos y revisamos el texto en cuanto a precisión, terminología y tono."],
          ["Entrega", "Recibe la traducción en el formato acordado, lista para usar."]
        ]
      },
      faq: {
        label: "Preguntas", h2: "Sobre nuestras traducciones.",
        items: [
          ["¿Cuánto cuesta una traducción?", "El precio depende de la combinación de idiomas, el tipo de texto y el plazo. Recibe un presupuesto cerrado antes de empezar."],
          ["¿Ofrecen traducciones juradas?", "Indíquenos si necesita una traducción jurada para una administración o un tribunal. Le diremos con honestidad si podemos ofrecerla — o le recomendaremos un traductor jurado en el país adecuado."],
          ["¿Se tratan mis documentos de forma confidencial?", "Sí. Sus documentos se usan solo para la traducción y se eliminan tras el proyecto en un plazo de 30 días tras la entrega."],
          ["¿Usan traducción automática?", "Cada texto lo traduce y lo revisa una persona. Nunca entregamos traducción automática sin editar."]
        ]
      },
      band: { h2: "¿Necesita un texto *en otro idioma?*", lead: "Indíquenos la combinación de idiomas, el tipo de texto y su plazo.", cta: "Solicitar una traducción" }
    },

    creative: {
      hero: { label: "Servicios creativos", h1: "Trabajo visual con *un criterio claro.*", lead: "Identidad, gráfica y edición multimedia para empresas que quieren verse tan bien como trabajan — con coherencia en la web, en impresión y en redes sociales.", cta1: "Hablar de un proyecto creativo", cta2: "Ver proyectos conceptuales" },
      services: {
        label: "Qué ofrecemos", h2: "Servicios creativos seleccionados.", lead: "Servicios concretos que refuerzan su web y su marca.",
        items: [
          { g: "01", t: "Identidad visual", p: "Ajuste de logotipo, paleta de colores, tipografía y una guía de marca sencilla." },
          { g: "02", t: "Materiales de marca", p: "Tarjetas de visita, plantillas para redes sociales, papelería y plantillas de presentación." },
          { g: "03", t: "Diseño gráfico", p: "Flyers, carteles, folletos y gráficos para campañas." },
          { g: "04", t: "Edición fotográfica", p: "Corrección de color, retoque y un tratamiento de imagen coherente para su web." },
          { g: "05", t: "Edición de vídeo", p: "Vídeos cortos para la web y las redes — montados, rotulados y listos para publicar." },
          { g: "06", t: "Edición de audio y voz", p: "Limpieza y edición de grabaciones de voz, podcasts y audio para vídeo." }
        ]
      },
      approach: {
        label: "Enfoque", h2: "Diseño al servicio del negocio.",
        items: [
          ["Un solo lenguaje visual", "Web, impresión y redes sociales comparten colores, tipografía y tono."],
          ["Archivos prácticos", "Recibe los archivos en los formatos que de verdad necesita, nombrados y ordenados."],
          ["Alcance claro", "Cada proyecto creativo tiene un alcance y un precio acordados antes de empezar."]
        ]
      },
      work: { label: "Proyectos conceptuales", h2: "La dirección de arte, en la práctica." },
      band: { h2: "Demos a su marca *una imagen clara.*", lead: "Cuéntenos qué necesita y dónde se va a usar." }
    },

    work: {
      hero: { label: "Proyectos", h1: "Proyectos conceptuales, *hechos con el nivel de los reales.*", lead: "Cada concepto es una web completa y adaptable para un tipo de empresa concreto. Muestran cómo trabajamos — no son encargos de clientes." },
      filter: "Filtrar por sector", all: "Todos", empty: "Todavía no hay proyectos en esta categoría.",
      soon: { label: "En preparación", items: ["Alojamientos vacacionales", "Servicios profesionales", "Proyectos creativos y digitales"], p: "Añadiremos nuevos conceptos a medida que los terminemos." },
      band: { h2: "¿Una web como esta *para su empresa?*", lead: "Cada concepto se puede adaptar a una empresa real — con su contenido, su marca y sus idiomas." }
    },

    caseUi: {
      overview: "Resumen", goals: "Objetivos de negocio", approach: "Enfoque de diseño", system: "Sistema de diseño", palette: "Paleta de colores", type2: "Tipografía",
      roles: { display: "Títulos", body: "Texto", both: "Títulos y texto" },
      type: "Tipo", sector: "Sector", services: "Servicios mostrados", lang: "Idioma",
      desk: "Escritorio — secciones de la página de inicio", mob: "Móvil — el diseño se recompone para pantallas pequeñas, no solo se reduce.",
      deskAlt: "Concepto de web %s — vista de escritorio de la página de inicio", mobAlt: "Concepto de web %s — vista móvil",
      note: "Este es un proyecto conceptual de Lexora Digital para mostrar nuestro enfoque. Los nombres, datos de contacto y textos entre corchetes son marcadores de posición.",
      next: "Siguiente proyecto", cta: "Hablar de una web similar",
      band: { h2: "¿Una web como esta *para su empresa?*", lead: "Adaptamos el enfoque a su empresa, su contenido y sus idiomas." }
    },
    cases: {
      "studio-rosalie": {
        lead: "Un concepto de web de una página, tranquilo y elegante, para un centro de estética — pensado para que reservar cita sea el siguiente paso natural.", lang: "Alemán",
        svc: ["Diseño web", "Dirección visual", "Desarrollo adaptable"],
        overview: "Studio Rosalie es un concepto para un centro de estética independiente que ofrece tratamientos faciales, pestañas, cejas y diseño de uñas. La web debía resultar cercana y, a la vez, de alta gama — y funcionar igual de bien en el móvil que en el portátil.",
        goals: ["Transmitir a primera vista un espacio acogedor y de calidad", "Presentar servicios y precios con claridad", "Hacer que reservar cita sea el siguiente paso natural", "Presentar a la propietaria para generar confianza"],
        approach: ["Una paleta cálida de rosa empolvado y burdeos sustituye al rosa habitual, con una serifa editorial para los títulos y una sans-serif limpia para la lectura.", "Las fotos del centro, del trabajo y de la propietaria sostienen la página. El diseño da espacio a cada imagen y los botones de reserva siguen visibles sin resultar insistentes."]
      },
      "mustermann-sanitaer": {
        lead: "Un concepto de web claro y fiable para una empresa de fontanería y calefacción — construido en torno a un objetivo: que suene el teléfono.", lang: "Alemán",
        svc: ["Diseño web", "Desarrollo adaptable", "Estructura de conversión"],
        overview: "Mustermann Sanitär es un concepto para una empresa artesanal de baños, fontanería y calefacción. Los clientes suelen llegar con un problema y el teléfono en la mano, así que la rapidez y la claridad importan más que nada.",
        goals: ["Mostrar profesionalidad y fiabilidad desde el primer momento", "Poner el teléfono y el servicio de urgencias a un toque", "Explicar los servicios en lenguaje sencillo", "Generar confianza con fotos reales del equipo y del trabajo"],
        approach: ["Una paleta de azul marino y naranja cálido transmite fiabilidad y acción. El teléfono es el botón principal en toda la web y, en el móvil, una barra fija de llamada lo mantiene siempre a mano.", "Las tarjetas de servicios, los puntos de confianza y una breve sección de opiniones responden a las preguntas habituales antes de que el cliente tenga que hacerlas."]
      },
      "kfz-werkstatt": {
        lead: "Un concepto de web potente y técnico para un taller mecánico independiente, con servicios, puntos de confianza y solicitud de cita desde el principio.", lang: "Alemán",
        svc: ["Diseño web", "Dirección de arte", "Desarrollo adaptable"],
        overview: "Este concepto presenta un taller mecánico independiente como moderno y competente — sin el típico aspecto de foto de banco de imágenes del sector.",
        goals: ["Transmitir profesionalidad y competencia técnica", "Mostrar los servicios principales de un vistazo", "Facilitar las solicitudes de cita", "Generar confianza sin certificados ni opiniones inventados"],
        approach: ["Un azul marino profundo y un naranja señal con una tipografía condensada dan a la web el aire seguro y técnico de un taller. Fotos realistas del taller cuentan la historia.", "Una cuadrícula clara de servicios, cuatro puntos de confianza y un formulario de cita sencillo hacen evidente el siguiente paso en cualquier pantalla."]
      }
    },

    journal: {
      hero: { label: "Journal", h1: "Guías sobre *las normas digitales de Europa.*", lead: "Artículos claros sobre RGPD y cookies, la Ley de Servicios Digitales y la Ley de IA de la UE — qué dicen las normas, a quién se aplican y qué hacer." },
      note: { label: "Sobre el journal", p: "Escrito por **Goran Kolouh**, fundador de Lexora Digital — jurista de formación que crea sitios web. Cada guía se contrasta con los textos oficiales y se actualiza cuando cambian las normas. Información general, no asesoramiento jurídico." },
      article: { by: "Por", min: "min de lectura", read: "Leer el artículo", back: "Todos los artículos", sources: "Fuentes", more: "Seguir leyendo", talk: "Hablemos", all: "Todos los artículos", bio: "Jurista de formación, creador de webs de profesión. Goran escribe sobre el derecho digital de la UE — el RGPD, la DSA y la Ley de IA — y lo que significa para quienes crean y gestionan sitios web.", disclaimer: "Este artículo es información general, no asesoramiento jurídico. Refleja la normativa vigente en la fecha de publicación." },
      band: { h2: "¿Quiere saber en qué punto está su web?", lead: "Nuestra revisión gratuita de RGPD y cookies le da una respuesta clara." }
    },

    about: {
      photoAlt: "Retrato de Goran Kolouh, fundador y director de Lexora Digital", photoCap: "Goran Kolouh — Fundador y director", photoLine: "Una mitad derecho e idiomas, la otra mitad digital.",
      hero: { label: "Sobre Lexora", h1: "Un estudio independiente que *trabaja sin fronteras.*", lead: "Lexora Digital une diseño web, conocimiento práctico de las normas digitales europeas, traducción y trabajo creativo — para pequeñas y medianas empresas de toda Europa." },
      story: {
        label: "Nuestra historia", h2: "Por qué web, derecho, idioma y diseño van juntos.",
        p: ["A las pequeñas empresas se les dice que necesitan una web, un banner de cookies, una política de privacidad, contenido traducido y una imagen coherente — normalmente de cuatro proveedores distintos que nunca hablan entre sí.",
          "Lexora Digital nació de una idea sencilla: estas cosas funcionan mejor cuando se planifican juntas. Una web bonita que carga rastreadores sin consentimiento es un riesgo. Una política de privacidad que nadie entiende no ayuda a nadie. Una traducción que ignora el diseño rompe la maqueta.",
          "El estudio reúne experiencia en derecho, traducción profesional y diseño web. Trabajamos en cinco idiomas y explicamos cada paso de forma sencilla."]
      },
      four: {
        label: "Cuatro disciplinas", h2: "WEB · LAW · LANGUAGE · DESIGN", lead: "Un estudio, cuatro capacidades — combinadas en cada proyecto.",
        items: [
          { g: "</>", t: "Web", p: "Webs y landing pages rápidas, claras y fáciles de mantener." },
          { g: "§", t: "Derecho", p: "Cumplimiento práctico del RGPD y de cookies — información e implementación, no asesoramiento jurídico." },
          { g: "⇄", t: "Idioma", p: "Traducción entre inglés, alemán, neerlandés, español y croata." },
          { g: "Aa", t: "Diseño", p: "Identidad visual, gráfica y edición multimedia con un criterio claro." }
        ]
      },
      values: { h2: "Cómo trabajamos." },
      bounds: {
        doT: "Qué puede esperar", do: ["Un alcance y un precio definidos antes de empezar", "Explicaciones sencillas en su idioma", "Consejos honestos — también cuando algo no le hace falta", "Webs respetuosas con la privacidad por defecto"],
        dontT: "Qué no somos", dont: ["Un despacho de abogados — no prestamos asesoramiento ni representación jurídica", "Una agencia de traducción jurada — traducciones juradas solo cuando se indique expresamente", "Una agencia que le vende más de lo que necesita"]
      }
    },

    contact: {
      hero: { label: "Contacto", h1: "Empecemos con *una conversación.*", lead: "Cuéntenos qué quiere conseguir — una web, una revisión de cumplimiento, una traducción o un proyecto creativo. Respondemos en su idioma." },
      direct: { label: "Email", p: "Solemos responder en un plazo de dos días laborables." },
      next: { label: "Qué pasa después", steps: [["Leemos su mensaje", "y le preguntamos si algo no está claro."], ["Le proponemos un siguiente paso", "— una llamada breve, un presupuesto o una revisión gratuita."], ["Usted decide", "No empieza nada sin su aprobación."]] },
      check: { t: "¿Solo quiere saber si su web cumple el RGPD?", p: "Utilice entonces la revisión gratuita de RGPD y cookies." }
    },

    privacy: {
      label: "Legal", h1: "Política de privacidad", lead: "Cómo tratamos los datos personales cuando visita esta web o se pone en contacto con nosotros.", updated: "Última actualización: octubre de 2026",
      draft: "",
      blocks: [
        ["h2", "Responsable del tratamiento"],
        ["p", "El responsable del tratamiento de datos en esta web es: Lexora Digital (Goran Kolouh), Rue Jean Robbie 44, 1060 Saint-Gilles (Bruxelles), Bélgica, gdpr@lexoradigital.com. Encontrará más datos en el aviso legal."],
        ["h2", "Alojamiento y registros del servidor"],
        ["p", "Esta web está alojada en Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, EE. UU.. Al visitarla, el proveedor trata automáticamente datos técnicos como la dirección IP, la fecha y hora, la página solicitada, el navegador y el sistema operativo, para servir la web y mantenerla segura."],
        ["p", "Base jurídica: art. 6.1.f RGPD (nuestro interés legítimo en una web segura y operativa). Las transferencias a EE. UU. se basan en el Marco de Privacidad de Datos UE-EE. UU. y/o en cláusulas contractuales tipo. Conservación: un máximo de 30 días."],
        ["h2", "Formulario de contacto y revisión RGPD y cookies"],
        ["p", "Cuando utiliza uno de nuestros formularios, tratamos los datos que introduce (por ejemplo nombre, email, dirección web, país y mensaje) para responder a su consulta o realizar la revisión que ha solicitado."],
        ["p", "Base jurídica: art. 6.1.b RGPD (medidas precontractuales a petición suya) y art. 6.1.f RGPD (atención de consultas). Los formularios los procesa Formspree, Inc., EE. UU., sobre la base de un contrato de encargo del tratamiento y del Marco de Privacidad de Datos UE-EE. UU. y/o cláusulas contractuales tipo."],
        ["p", "Eliminamos su consulta cuando ya no es necesaria, salvo que existan obligaciones legales de conservación como máximo 12 meses después de cerrar la consulta."],
        ["h2", "Email"],
        ["p", "Si nos escribe por email, tratamos su dirección y su mensaje para responderle. Base jurídica: art. 6.1.b o f RGPD."],
        ["h2", "Cookies y almacenamiento local"],
        ["p", "Esta web no utiliza cookies de analítica, publicidad ni seguimiento. Si elige un idioma, esa elección se guarda en el almacenamiento local de su navegador para que la web se abra en su idioma la próxima vez. Es estrictamente necesario para una función que usted solicita y no se nos envía. Encontrará los detalles en nuestra política de cookies."],
        ["h2", "Fuentes y recursos externos"],
        ["p", "Todas las fuentes y scripts se alojan en nuestro propio servidor. Al visitar esta web no se envían datos a Google Fonts ni a otras redes de terceros."],
        ["h2", "Sus derechos"],
        ["ul", ["Acceso (art. 15 RGPD)", "Rectificación (art. 16 RGPD)", "Supresión (art. 17 RGPD)", "Limitación del tratamiento (art. 18 RGPD)", "Portabilidad (art. 20 RGPD)", "Oposición al tratamiento basado en intereses legítimos (art. 21 RGPD)"]],
        ["p", "También tiene derecho a presentar una reclamación ante una autoridad de control de protección de datos, en particular en el Estado miembro de su residencia habitual o lugar de trabajo la Autoridad belga de Protección de Datos (Autorité de protection des données / Gegevensbeschermingsautoriteit), Rue de la Presse 35, 1000 Bruselas, www.dataprotectionauthority.be."],
        ["h2", "Cambios"],
        ["p", "Actualizamos esta política cuando cambian nuestra web o la ley. La versión vigente está siempre disponible en esta página."]
      ]
    },

    cookies: {
      label: "Legal", h1: "Política de cookies", lead: "En resumen: no usamos cookies de seguimiento, analítica ni publicidad.", updated: "Última actualización: octubre de 2026",
      draft: "",
      blocks: [
        ["h2", "Qué utilizamos"],
        ["p", "Esta web no instala cookies. Guarda un único dato en el almacenamiento local de su navegador, y solo si usted elige un idioma:"],
        ["ul", ["**lexora-lang** — el idioma elegido (por ejemplo \"es\"). Finalidad: abrir la web en ese idioma la próxima vez. Se conserva hasta que lo borre. No se envía ni a nosotros ni a terceros."]],
        ["p", "Como este almacenamiento es estrictamente necesario para una función que usted solicita expresamente, no requiere un banner de consentimiento."],
        ["h2", "Qué no utilizamos"],
        ["ul", ["Sin analítica (por ejemplo Google Analytics)", "Sin píxeles de publicidad ni de redes sociales", "Sin vídeos, mapas ni fuentes de terceros incrustados", "Ningún tipo de seguimiento entre sitios"]],
        ["h2", "Formularios"],
        ["p", "Cuando envía uno de nuestros formularios, sus datos se transmiten a nuestro proveedor de formularios. El envío no instala cookies en esta web. Consulte la política de privacidad para más detalles."],
        ["h2", "Su configuración"],
        ["p", "Puede consultar y borrar en cualquier momento la preferencia de idioma guardada en **Configuración de privacidad**, en el pie de página, o borrando los datos del sitio en su navegador."]
      ]
    },

    imprint: {
      label: "Legal", h1: "Aviso legal", lead: "Información del titular de lexoradigital.com.", updated: "Última actualización: octubre de 2026",
      draft: "",
      blocks: [
        ["h2", "Titular"],
        ["p", "**Lexora Digital**  \nRue Jean Robbie 44  \n1060 Saint-Gilles (Bruxelles), Bélgica  \nRepresentada por: Goran Kolouh, Fundador y director"],
        ["h2", "Contacto"],
        ["p", "General: info@lexoradigital.com  \nProtección de datos: gdpr@lexoradigital.com  \nFundador: kolouh@lexoradigital.com"],
        ["h2", "Número de IVA"],
        ["p", "17636920948"],
        ["h2", "Sociedad en EE. UU."],
        ["p", "**Lexora Digital C-Corp.**  \n1401 Pennsylvania Ave  \nWilmington, DE 19806  \nDelaware, EE. UU."],
        ["h2", "Responsable del contenido"],
        ["p", "Responsable de los contenidos periodísticos y editoriales (§ 18.2 MStV): Goran Kolouh, Rue Jean Robbie 44, 1060 Saint-Gilles (Bruxelles), Bélgica"],
        ["h2", "Resolución de litigios de consumo"],
        ["p", "No estamos dispuestos ni obligados a participar en procedimientos de resolución de litigios ante una entidad de arbitraje de consumo."],
        ["h2", "Responsabilidad por contenidos y enlaces"],
        ["p", "Elaboramos el contenido de esta web con cuidado, pero no podemos garantizar que sea completo, correcto y actual. Los artículos y resúmenes de cumplimiento son información general y no asesoramiento jurídico. No somos responsables del contenido de las webs externas a las que enlazamos."]
      ]
    },

    accessibility: {
      label: "Legal", h1: "Declaración de accesibilidad", lead: "Queremos que todas las personas puedan usar esta web.", updated: "Última actualización: octubre de 2026",
      draft: "",
      blocks: [
        ["h2", "Nuestro objetivo"],
        ["p", "Aspiramos a cumplir las Pautas de Accesibilidad para el Contenido Web (WCAG) 2.2 en el nivel AA."],
        ["h2", "Qué hemos hecho"],
        ["ul", ["Estructura semántica con títulos, regiones y enlace para saltar al contenido", "Navegación completa con teclado y foco visible", "Contraste del texto comprobado según WCAG AA", "Las animaciones se reducen o desactivan cuando su dispositivo solicita movimiento reducido", "Formularios con etiquetas visibles y mensajes de error claros", "Textos alternativos descriptivos para las imágenes"]],
        ["h2", "Limitaciones conocidas"],
        ["ul", ["El planeta animado es decorativo y está oculto para los lectores de pantalla.", "Las capturas de los proyectos conceptuales contienen texto pequeño que se describe en el texto que las acompaña y no se lee completo."]],
        ["h2", "Comentarios"],
        ["p", "Si encuentra una barrera en esta web, escríbanos a info@lexoradigital.com. Le responderemos y trabajaremos en una solución."],
        ["h2", "Estado"],
        ["p", "Esta declaración se basa en una autoevaluación realizada en octubre de 2026."]
      ]
    }
  },

  form: {
    optional: "(opcional)", privacyLink: "política de privacidad", note: "Respondemos en su idioma.",
    js: {
      required: "Rellene este campo.", email: "Introduzca una dirección de email válida.", url: "Introduzca una dirección web válida, p. ej. ejemplo.es.",
      consent: "Confirme para que podamos tramitar su solicitud.",
      fix: "Revise los campos marcados.", sending: "Enviando…",
      error: "Algo ha fallado. Inténtelo de nuevo — o escríbanos directamente por email.",
      notConnected: "Este formulario todavía no está conectado. Por ahora, escríbanos directamente por email."
    },
    contact: {
      title: "Cuéntenos su proyecto", intro: "Los campos opcionales pueden quedar vacíos.",
      submit: "Enviar mensaje", subject: "Nueva consulta desde lexoradigital.com",
      consent: "Acepto que Lexora Digital utilice mis datos para responder a mi consulta. Más información en la {privacy}.",
      success: ["Gracias — su mensaje se ha enviado.", "Le responderemos lo antes posible, en su idioma."],
      f: { name: "Nombre", email: "Email", company: "Empresa", language: "Idioma preferido", service: "¿En qué podemos ayudarle?", budget: "Presupuesto", message: "Su mensaje", messagePh: "¿Qué quiere conseguir?", choose: "Seleccione una opción" },
      services: [["web", "Web (diseño y desarrollo)"], ["design", "Servicios creativos y de diseño"], ["compliance", "Consultoría RGPD y cookies"], ["check", "Revisión RGPD y cookies / corrección por 99 €"], ["translation", "Traducción"], ["other", "Otra cosa"]],
      budgets: [["<500", "Menos de 500 €"], ["500-1500", "500–1.500 €"], ["1500-5000", "1.500–5.000 €"], ["5000+", "Más de 5.000 €"], ["unsure", "Aún no lo sé"]]
    },
    check: {
      title: "Solicite su revisión gratuita", intro: "Le enviamos el resultado a su email.",
      submit: "Revisar mi web gratis", subject: "Solicitud de revisión RGPD y cookies",
      consent: "Acepto que mis datos se utilicen solo para realizar la revisión y enviarme el resultado. Más información en la {privacy}.",
      success: ["Gracias — hemos recibido su solicitud.", "Le enviaremos el resultado por email. Si encontramos problemas, recibirá una oferta para la corrección de 99 € — no se cambia nada en su web sin su aprobación."],
      f: { website: "Dirección web", email: "Email para el resultado", country: "País de su empresa", platform: "Plataforma de la web", message: "¿Algo que debamos saber?", choose: "Seleccione una opción" },
      countries: [["DE", "Alemania"], ["AT", "Austria"], ["CH", "Suiza"], ["NL", "Países Bajos"], ["BE", "Bélgica"], ["ES", "España"], ["HR", "Croacia"], ["UK", "Reino Unido"], ["EU", "Otro país de la UE"], ["other", "Otro país"]],
      platforms: [["wordpress", "WordPress"], ["wix", "Wix"], ["squarespace", "Squarespace"], ["shopify", "Shopify"], ["webflow", "Webflow"], ["jimdo", "Jimdo"], ["html", "A medida / HTML"], ["unknown", "No lo sé"]]
    }
  },

  footer: {
    pos: "Un estudio digital independiente de webs, cumplimiento digital, traducción y diseño — para empresas de toda Europa y más allá.",
    studio: "Estudio", services: "Servicios", legal: "Legal", email: "Email", emailPh: "dirección de email",
    privacy: "Política de privacidad", cookies: "Política de cookies", imprint: "Aviso legal", accessibility: "Accesibilidad", settings: "Configuración de privacidad", langs: "Idiomas"
  },
  privacyDialog: {
    title: "Configuración de privacidad",
    p: "Esta web no utiliza cookies de analítica, publicidad ni seguimiento, y no carga fuentes ni scripts de terceros. No hay nada que aceptar.",
    rows: [["Estrictamente necesarias", "Siempre activas"], ["Analítica", "No se usa"], ["Marketing", "No se usa"]],
    pref: "Si elige un idioma, se recuerda en el almacenamiento local de su navegador para que la web se abra en ese idioma la próxima vez. Nunca se nos envía.",
    prefSet: "Preferencia de idioma guardada: %s", prefNone: "No hay ninguna preferencia de idioma guardada.",
    clear: "Borrar preferencia guardada", close: "Cerrar", more: "Leer la política de cookies"
  },
  notFound: {
    title: "Página no encontrada — Lexora Digital",
    h1: "Esta página se ha salido *de su órbita.*",
    lead: "La página que busca no existe o se ha movido. Le ayudamos a volver al rumbo.",
    home: "Volver al inicio", contact: "Contactar"
  }
};
