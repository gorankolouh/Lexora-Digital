// Artículos del journal — Español
export default [
  {
    slug: "gdpr-website-legal-document",
    tag: "RGPD",
    t: "Su web ya es un documento jurídico",
    d: "El RGPD y las normas sobre cookies no son un banner que se añade al final. Son decisiones de diseño, y el momento más barato para tomarlas es antes de la primera línea de código.",
    lead: "El RGPD y las normas sobre cookies no son un banner que se añade al final. Son decisiones de diseño — y el momento más barato para tomarlas es antes de la primera línea de código.",
    date: "Octubre de 2026", iso: "2026-10-18",
    blocks: [
      ["p", "La mayoría de las webs que reviso no incumplen porque a sus propietarios no les importe. Incumplen porque el derecho llegó al final. Se aprobó el diseño, el desarrollador lo construyó, la web se publicó — y entonces alguien se acordó del banner de cookies y lo pegó encima."],
      ["p", "Ese orden es el problema. Cuando llega el banner, las fuentes ya se cargan desde un servidor de otro país, el mapa ya instala cookies y el script de analítica ya se ejecuta antes de que nadie haya hecho clic en nada. El banner se convierte en una decoración colocada sobre decisiones que se tomaron sin él."],
      ["quote", "Una web no es un folleto con una política de privacidad adjunta. Cada elemento que contiene es una decisión sobre los datos de otra persona."],

      ["h2", "Cada elemento es una decisión jurídica"],
      ["p", "Quien construye una web no solo decide cómo se ve. Decide qué empresas reciben los datos de sus visitantes, cuándo y con qué base jurídica. Algunos ejemplos corrientes:"],
      ["ul", [
        "**Fuentes web.** Cargar fuentes directamente desde el servidor de un tercero envía la dirección IP de cada visitante a ese proveedor. En 2022 un tribunal alemán (LG München I) concedió una indemnización a un visitante precisamente por eso. Alojar las fuentes en su propio servidor no cuesta nada y elimina el problema.",
        "**Vídeos y mapas incrustados.** Un vídeo de YouTube o un mapa de Google pueden instalar cookies y contactar con servidores externos en cuanto se carga la página. Un simple marcador «haga clic para cargar» lo resuelve.",
        "**Analítica.** Las herramientas de seguimiento que guardan identificadores en el dispositivo suelen necesitar consentimiento previo. Las soluciones respetuosas con la privacidad y sin cookies a menudo no — es una decisión de diseño, no un tecnicismo jurídico.",
        "**Formularios de contacto.** Cada formulario es un punto de recogida de datos personales. ¿Quién recibe los envíos, dónde se guardan y durante cuánto tiempo?",
        "**Chats, herramientas de newsletter, sistemas de reservas.** Cada uno suele ser un encargado del tratamiento que necesita un contrato (artículo 28 RGPD) y una línea en su política de privacidad."
      ]],
      ["p", "Nada de esto es exótico. Es la anatomía normal de una web de empresa. Precisamente por eso el conocimiento jurídico pertenece al briefing, junto a la paleta de colores y el mapa del sitio."],

      ["h2", "Lo que la ley realmente exige"],
      ["p", "Sin jerga, las normas para una web de empresa típica se reducen a unos pocos principios:"],
      ["ul", [
        "**Consentimiento antes de las cookies no esenciales.** Según las normas de ePrivacy (artículo 5.3 de la Directiva ePrivacy, transpuesta en cada país — en España, el artículo 22.2 de la LSSI), almacenar o leer información en el dispositivo requiere consentimiento, salvo que sea estrictamente necesario para el servicio solicitado por el visitante.",
        "**Consentimiento real, no un truco.** El Tribunal de Justicia de la UE declaró en **Planet49** (2019) que las casillas premarcadas no son un consentimiento válido. Las autoridades europeas esperan que «rechazar» sea tan fácil como «aceptar».",
        "**Una base jurídica para cada tratamiento.** Artículo 6 RGPD: consentimiento, contrato, obligación legal, interés legítimo — necesita una y debe saber cuál.",
        "**Transparencia.** Artículo 13 RGPD: explique con lenguaje claro qué recoge, para qué, quién lo recibe y cuánto tiempo lo conserva.",
        "**Protección de datos desde el diseño y por defecto.** El artículo 25 RGPD exige literalmente que la protección de datos se integre en el sistema desde el principio. La propia ley lo dice: primero diseñar, no parchear después.",
        "**Cuidado con las transferencias fuera de la UE.** Muchas herramientas envían datos a EE. UU. El Marco de Privacidad de Datos UE-EE. UU. (desde julio de 2023) cubre a las empresas certificadas, pero usted sigue necesitando saber qué herramientas usa y con qué base."
      ]],

      ["h2", "Por qué arreglarlo después cuesta más"],
      ["p", "El riesgo de los titulares es la multa del RGPD: hasta 20 millones de euros o el 4 % de la facturación anual mundial. Para una pequeña empresa rara vez es la amenaza realista. Las amenazas realistas son menores y más frecuentes:"],
      ["ul", [
        "requerimientos de competidores o asociaciones — habituales en Alemania y Austria;",
        "reclamaciones de visitantes por daños inmateriales según el artículo 82 RGPD;",
        "reclamaciones ante la autoridad de protección de datos, que luego hace preguntas que usted debe responder;",
        "y el coste silencioso: reconstruir partes de una web que podrían haberse hecho bien desde el principio."
      ]],
      ["p", "Sustituir un mapa incrustado, alojar de nuevo las fuentes, rehacer la analítica y reescribir la política de privacidad después del lanzamiento lleva más tiempo que hacerlo durante la construcción. El conocimiento jurídico aplicado a tiempo es, sencillamente, más barato."],

      ["h2", "Lo que cambia — y lo que no"],
      ["p", "En noviembre de 2025 la Comisión Europea propuso un «Digital Omnibus» que, entre otras cosas, trasladaría las normas sobre cookies al RGPD e introduciría algunas excepciones, por ejemplo para cierta medición de audiencia. A octubre de 2026 esta parte **sigue siendo un borrador**: el Consejo no ha acordado su posición negociadora y no se ha adoptado nada."],
      ["p", "La regla práctica es sencilla: **construya para la ley vigente, no para una propuesta.** Las normas actuales de consentimiento se aplican hoy. Si cambian, una web diseñada con una lógica de consentimiento limpia será también la más fácil de adaptar."],

      ["h2", "Una lista breve para su próxima web"],
      ["check", [
        "Enumere todos los servicios de terceros que cargará la web — antes de aprobar el diseño.",
        "Aloje usted mismo las fuentes y los scripts esenciales siempre que pueda.",
        "Ponga vídeos, mapas y contenidos de redes sociales detrás de un marcador de «clic para cargar».",
        "Bloquee las cookies no esenciales hasta obtener el consentimiento; haga «rechazar» tan visible como «aceptar».",
        "Firme contratos de encargo con los proveedores de formularios, alojamiento, newsletter y chat.",
        "Redacte la política de privacidad a partir de la configuración real — no de una plantilla."
      ]],

      ["h2", "Lo esencial"],
      ["p", "El derecho no es enemigo del buen diseño. Las webs limpias y rápidas que solo cargan lo que necesitan suelen ser a la vez más conformes y más agradables de usar. El mejor momento para pensar en el RGPD es cuando todavía está decidiendo qué será la web. Después ya no diseña — repara."],
      ["note", "¿Quiere saber en qué situación está su web actual? Nuestra **revisión gratuita de RGPD y cookies** muestra qué se carga, qué instala cookies y qué hay que corregir — y desde 99 € lo corregimos por usted."]
    ],
    sources: [
      ["RGPD — Reglamento (UE) 2016/679 (EUR-Lex)", "https://eur-lex.europa.eu/eli/reg/2016/679/oj"],
      ["Directiva ePrivacy 2002/58/CE (EUR-Lex)", "https://eur-lex.europa.eu/eli/dir/2002/58/oj"],
      ["TJUE, Planet49, C-673/17 (2019)", "https://curia.europa.eu/juris/liste.jsf?num=C-673/17"],
      ["Comisión Europea — Digital Omnibus", "https://digital-strategy.ec.europa.eu/en/library/digital-omnibus-regulation-proposal"]
    ]
  },

  {
    slug: "digital-services-act-business",
    tag: "DSA",
    t: "La Ley de Servicios Digitales no va solo de las grandes tecnológicas",
    d: "Los titulares hablan de multas récord a plataformas globales. Pero la DSA también decide qué ocurre cuando su empresa aloja reseñas, vende en un marketplace o ve su cuenta suspendida.",
    lead: "Los titulares hablan de multas récord a plataformas globales. Pero la DSA también determina qué ocurre cuando su empresa aloja reseñas, vende en un marketplace — o amanece con la cuenta suspendida.",
    date: "Octubre de 2026", iso: "2026-10-18",
    blocks: [
      ["p", "En diciembre de 2025 la Comisión Europea multó a X con 120 millones de euros en virtud de la Ley de Servicios Digitales (DSA). En julio de 2026 multó a AliExpress con 550 millones por no gestionar adecuadamente productos ilegales y peligrosos. Si solo lee los titulares, la DSA parece una ley sobre un puñado de gigantes."],
      ["p", "No lo es. Los gigantes soportan las obligaciones más pesadas, pero la DSA está construida por capas — y algunas alcanzan a empresas corrientes de dos formas muy distintas: como **prestadoras** de un servicio digital y como **usuarias** de las plataformas de las que dependen."],
      ["quote", "No hacen falta 45 millones de usuarios para que la DSA le afecte. Basta con alojar contenido de otros — o depender de una plataforma que lo haga."],

      ["h2", "Las capas, en lenguaje claro"],
      ["p", "La DSA se aplica a los «servicios intermediarios» — servicios que transmiten, almacenan o publican información facilitada por otros. Sus obligaciones se acumulan:"],
      ["ul", [
        "**Todos los servicios intermediarios** — obligaciones básicas como un punto de contacto y unas condiciones generales claras.",
        "**Servicios de alojamiento de datos** — quien almacena información por cuenta de los usuarios debe ofrecer una vía para notificar contenido ilícito (notificación y acción, artículo 16) y explicar las decisiones de restringir contenido (declaración de motivos, artículo 17).",
        "**Plataformas en línea** — servicios de alojamiento que además difunden públicamente el contenido de los usuarios, como foros, redes sociales y marketplaces: sistemas de reclamación, transparencia publicitaria, prohibición de interfaces engañosas («patrones oscuros», artículo 25), protección de menores.",
        "**Plataformas y buscadores de muy gran tamaño** — más de 45 millones de usuarios mensuales en la UE: evaluaciones de riesgos sistémicos, auditorías independientes, acceso a datos para investigadores."
      ]],
      ["p", "Una web de empresa normal que presenta su propio contenido no suele ser en absoluto un servicio intermediario. Pero en cuanto permite que otros publiquen — reseñas de clientes, un foro, anuncios de otros vendedores, archivos subidos por usuarios —, puede haber subido a los primeros peldaños de esta escalera."],

      ["h2", "Cuando su web se convierte en anfitriona"],
      ["p", "Aquí el conocimiento jurídico cambia el diseño. Añadir una sección de reseñas o un pequeño marketplace no es solo una funcionalidad; es elegir un papel jurídico. Si la DSA se aplica, la construcción necesita algunos elementos fáciles de incluir al principio y engorrosos de añadir después:"],
      ["ul", [
        "una forma visible para que cualquiera notifique contenido que considere ilícito;",
        "un proceso para gestionar esas notificaciones — quién las revisa, con qué rapidez y cómo se registran las decisiones;",
        "una breve explicación al usuario cuyo contenido se elimina o restringe;",
        "condiciones generales que digan con palabras sencillas qué está permitido y cómo funciona la moderación."
      ]],
      ["p", "Hay una buena noticia para los pequeños: las **microempresas y pequeñas empresas** están exentas de la mayoría de las obligaciones adicionales para plataformas en línea (artículo 19). Las obligaciones básicas de alojamiento, sin embargo, se aplican sea cual sea el tamaño. Saber exactamente dónde está esa línea evita construir de más o de menos."],

      ["h2", "Lo que la mayoría pasa por alto: sus derechos como usuaria de plataformas"],
      ["p", "Para muchas empresas, la DSA importa menos como obligación que como **herramienta**. Si vende a través de un marketplace, se anuncia en redes sociales o depende de un perfil para recibir reservas, la DSA le da derechos que antes no tenía:"],
      ["ul", [
        "**Una explicación.** Si una plataforma elimina su contenido, reduce su visibilidad, suspende su cuenta o detiene los pagos, debe darle una declaración de motivos clara (artículo 17).",
        "**Una reclamación.** Las plataformas en línea deben ofrecer un sistema interno de reclamaciones gratuito, y las decisiones no pueden tomarse de forma exclusivamente automatizada (artículo 20).",
        "**Una revisión independiente.** Puede acudir a un órgano certificado de resolución extrajudicial de litigios (artículo 21).",
        "**Transparencia publicitaria.** Los anuncios deben indicar quién está detrás y los principales parámetros utilizados para dirigirlos (artículo 26)."
      ]],
      ["p", "En la práctica, una tienda o una cuenta publicitaria suspendida se trata a menudo como un problema de atención al cliente. También es un problema jurídico — y una empresa que puede citar el artículo correcto en su reclamación tiene muchas más probabilidades de obtener una respuesta real."],

      ["h2", "Vender en marketplaces: trazabilidad"],
      ["p", "Los marketplaces deben recabar y verificar información básica de los comerciantes que venden a través de ellos — nombre, datos de contacto, registro e información de pago (artículo 30). Si vende en un marketplace, cuente con estas solicitudes y mantenga sus datos de empresa coherentes en todas partes: en su web, en su aviso legal y en sus perfiles de vendedor. La incoherencia es una de las causas más frecuentes de retrasos y suspensiones."],

      ["h2", "Una lección para cualquier web"],
      ["p", "La prohibición de patrones oscuros de la DSA se aplica formalmente a las plataformas en línea. Pero el principio que la inspira — no diseñar interfaces que empujen a las personas a decisiones que no querían tomar — recorre también el derecho de consumo y la protección de datos. Las opciones preseleccionadas, los botones de «rechazar» escondidos y los procesos de baja confusos se tratan cada vez más como un problema jurídico, no solo de mal gusto. El diseño honesto se está convirtiendo en un requisito de cumplimiento."],

      ["h2", "Lo esencial"],
      ["p", "La DSA recuerda que una presencia digital nunca es solo suya. Vive en servidores, plataformas y marketplaces con sus propias reglas — y ahora con obligaciones legales hacia usted. Entender esas reglas le permite diseñar funcionalidades con responsabilidad y defender su negocio cuando una plataforma se equivoca."],
      ["note", "¿Está planeando una sección de reseñas, una comunidad o un marketplace? Lo diseñamos desde el primer día con el flujo adecuado de notificación y moderación — **hablemos** de su proyecto."]
    ],
    sources: [
      ["Ley de Servicios Digitales — Reglamento (UE) 2022/2065 (EUR-Lex)", "https://eur-lex.europa.eu/eli/reg/2022/2065/oj"],
      ["Comisión Europea — La Ley de Servicios Digitales", "https://digital-strategy.ec.europa.eu/en/policies/digital-services-act"],
      ["Comisión Europea — Multa de 550 millones a AliExpress (julio de 2026)", "https://digital-strategy.ec.europa.eu/en/news/commission-fines-aliexpress-eu550-million-breaching-digital-services-act"],
      ["Goran Kolouh en Medium — The fine that missed the point (EN)", "https://gorankolouch.medium.com/the-fine-that-missed-the-point-why-platform-xs-anti-muslim-amplification-is-a-digital-services-b7007ec68ff0"]
    ]
  },

  {
    slug: "eu-ai-act-website",
    tag: "Ley de IA",
    t: "Su chatbot tiene que decir que es un chatbot",
    d: "Las obligaciones de transparencia de la Ley de IA de la UE se aplican desde el 2 de agosto de 2026. Qué aplazó el Digital Omnibus, qué no — y qué debe incorporar ya una web de empresa.",
    lead: "Las obligaciones de transparencia de la Ley de IA de la UE se aplican desde el 2 de agosto de 2026. Qué aplazó el Digital Omnibus, qué no — y qué debe incorporar ya una web de empresa.",
    date: "Octubre de 2026", iso: "2026-10-18",
    blocks: [
      ["p", "Este verano muchas empresas oyeron una sola cosa sobre la Ley de IA: «se ha aplazado». Es verdad a medias. El Digital Omnibus, adoptado en junio y en vigor desde finales de julio de 2026, aplazó las normas para los sistemas de IA de **alto riesgo**. No aplazó las normas que con más probabilidad afectan a una web de empresa normal."],
      ["p", "Si su web tiene un chatbot, publica imágenes generadas con IA o usa IA para crear contenido, las obligaciones correspondientes ya se aplican."],
      ["quote", "La transparencia es la parte de la Ley de IA que alcanza a casi todos — y nunca se aplazó."],

      ["h2", "El calendario, tal como está"],
      ["ul", [
        "**1 de agosto de 2024** — entra en vigor la Ley de IA.",
        "**2 de febrero de 2025** — se aplican las prácticas prohibidas (como la IA manipuladora o que explota vulnerabilidades) y la obligación de alfabetización en IA.",
        "**2 de agosto de 2025** — se aplican las normas para modelos de IA de uso general.",
        "**2 de agosto de 2026** — se aplican las obligaciones de transparencia (artículo 50) y la mayoría de las demás normas.",
        "**2 de diciembre de 2026** — nueva prohibición de sistemas de IA que generan imágenes íntimas no consentidas; fin del periodo transitorio del marcado legible por máquina para sistemas ya comercializados.",
        "**2 de diciembre de 2027** — normas de alto riesgo para sistemas independientes (anexo III), como la IA en selección de personal o decisiones de crédito — aplazadas por el Omnibus.",
        "**2 de agosto de 2028** — normas de alto riesgo para la IA integrada en productos regulados (anexo I)."
      ]],

      ["h2", "Lo que se aplica hoy a una web de empresa"],
      ["h3", "1. Los chatbots deben ser reconocibles como IA"],
      ["p", "Los sistemas de IA que interactúan directamente con personas deben diseñarse de modo que estas sepan que tratan con una máquina, salvo que resulte evidente por el contexto (artículo 50.1). Formalmente, esta obligación recae en el proveedor del sistema. En la práctica, son sus visitantes quienes deben saberlo — así que el aviso pertenece a su diseño: una etiqueta clara al inicio de la conversación, no una frase escondida en la política de privacidad."],
      ["h3", "2. Las ultrafalsificaciones deben revelarse"],
      ["p", "Si publica imágenes, audio o vídeo generados o manipulados con IA que parecen reales — una «foto» realista de una persona, un lugar o un acontecimiento —, debe indicar que son artificiales (artículo 50.4). Las obras claramente artísticas, satíricas o de ficción reciben un trato más ligero y adaptado. Una ilustración estilizada no es el problema; una «foto de cliente» falsa y realista sí lo es."],
      ["h3", "3. Textos de interés público escritos con IA"],
      ["p", "Los textos generados con IA que se publican para informar al público sobre asuntos de interés público deben identificarse — salvo que hayan pasado por una revisión humana y alguien asuma la responsabilidad editorial. Para un blog de empresa, la lección es sencilla: mantenga a una persona editora en el proceso y responda de lo que publica."],
      ["h3", "4. Alfabetización en IA en su equipo"],
      ["p", "Desde febrero de 2025, las organizaciones que usan sistemas de IA deben adoptar medidas para que las personas que los utilizan en su nombre tengan un nivel suficiente de alfabetización en IA (artículo 4). El Omnibus lo suavizó — ya no hay que garantizar un nivel concreto para cada persona —, pero la obligación de adoptar medidas se mantiene. Una breve guía interna y una formación básica cuentan."],

      ["h2", "Cuándo la IA pasa a ser de alto riesgo"],
      ["p", "Algunos usos se consideran de alto riesgo porque pueden decidir las oportunidades de las personas: filtrar candidaturas, evaluar a empleados, valorar la solvencia, el acceso a la educación o a servicios esenciales. Si su web o su proceso de RR. HH. usa IA para clasificar candidatos, está cerca de esta categoría. Las obligaciones detalladas — gestión de riesgos, documentación, supervisión humana — se aplican ahora a partir de **diciembre de 2027**. No es motivo para esperar; es tiempo de preparación."],
      ["p", "Aquí la ley también tiene lagunas. Como he defendido en otro lugar, los empleadores privados que usan IA en la selección de personal no están obligados a realizar una evaluación de impacto sobre los derechos fundamentales antes de implantarla — una comprobación que la Ley sí exige para el crédito y los seguros. Aquí, el conocimiento jurídico significa saber no solo lo que es obligatorio, sino también lo que es sensato."],

      ["h2", "La Ley de IA no sustituye al RGPD"],
      ["p", "Una conversación con un chatbot está llena de datos personales. El RGPD se aplica en paralelo: necesita una base jurídica, un contrato de encargo con el proveedor del chatbot, una mención en su política de privacidad y un plan sobre cuánto tiempo se conservan las conversaciones. Las decisiones con efectos jurídicos o igualmente significativos no pueden dejarse exclusivamente en manos del tratamiento automatizado (artículo 22 RGPD). La mayoría de los problemas de cumplimiento de IA en las webs son, al final, problemas de protección de datos."],

      ["h2", "Cómo son las multas"],
      ["p", "Infringir las prácticas prohibidas puede costar hasta 35 millones de euros o el 7 % de la facturación mundial; la mayoría de las demás infracciones, incluida la transparencia, hasta 15 millones o el 3 %. Para pymes y empresas emergentes se aplica la menor de las dos cantidades. Como con el RGPD, el riesgo realista para una pequeña empresa no es tanto una multa máxima como una reclamación, una orden de corrección — o la pérdida de confianza."],

      ["h2", "Una lista breve"],
      ["check", [
        "Enumere todas las herramientas de IA de su web y de sus procesos.",
        "Identifique claramente su chatbot como IA al inicio de cada conversación.",
        "Revele las imágenes, el audio y el vídeo realistas generados con IA.",
        "Mantenga a una persona editora responsable del contenido publicado.",
        "Actualice su política de privacidad y sus contratos de encargo para las herramientas de IA.",
        "Redacte una guía interna de IA de una página para su equipo."
      ]],

      ["h2", "Lo esencial"],
      ["p", "La IA permite añadir funciones impresionantes a una web en una tarde. La ley hace una pregunta más lenta: ¿sabrán las personas al otro lado con qué están tratando? Integrar esa honestidad en el diseño desde el principio no es una carga. Es lo que hace que la función sea lo bastante fiable para usarla."],
      ["note", "¿Quiere añadir un chatbot o funciones de IA a su web? Las diseñamos con los avisos adecuados y la privacidad bien resuelta desde el principio — **escríbanos**."]
    ],
    sources: [
      ["Ley de IA — Reglamento (UE) 2024/1689 (EUR-Lex)", "https://eur-lex.europa.eu/eli/reg/2024/1689/oj"],
      ["Comisión Europea — Calendario de la Ley de IA", "https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai"],
      ["Gibson Dunn — AI Act Omnibus: plazos de alto riesgo aplazados (EN)", "https://www.gibsondunn.com/eu-ai-act-omnibus-agreement-postponed-high-risk-deadlines-and-other-key-changes/"],
      ["Goran Kolouh en Medium — The algorithm Europe forgot to check (EN)", "https://gorankolouch.medium.com/the-algorithm-europe-forgot-to-check-1bc7f0ac18d2"]
    ]
  }
];
