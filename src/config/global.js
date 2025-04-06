export default {
  global: {
    numeroUnidad: '2',
    tituloUnidad: 'Conceptos básicos de la legislación laboral colombiana',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Conceptos básicos de la legislación laboral',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Derecho laboral en Colombia',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Contratación laboral en Colombia',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Derechos y obligaciones del trabajador',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Derechos y obligaciones del empleador',
            hash: 't_1_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo: 'Del periodo de prueba y la jornada laboral',
            hash: 't_1_5',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo:
          'Aplicación de la administración de salarios en empresas públicas y privadas',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Diferencia entre empresa pública y privada',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Estructura salarial sector público',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Estructura salarial sector privado',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo:
              'Análisis de las diferencias salariales entre empresas públicas y privadas',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Chicano Tejada, E. (2022). Contratación laboral. ADGD0208 (2.ª ed.). Málaga, IC Editorial',
      link:
        'https://elibro.net/es/ereader/tecnologicadeloriente/226880?page=10',
    },
    {
      referencia:
        'Corte Constitucional de Colombia. (2023). Sentencia C-038 de 2023.(Colombia). ',
      link: 'https://www.corteconstitucional.gov.co',
    },
    {
      referencia:
        'Gutiérrez, E.  (2019).  Reconocimiento y promoción del principio de libre concurrencia en la licitación pública a través de la normatividad colombiana.',
      link: 'https://hdl.handle.net/10983/23770   ',
    },
    {
      referencia:
        'Jaramillo, D. (2010, septiembre 21). Presente y futuro del derecho del trabajo: breve historia jurídica del derecho del trabajo en Colombia. Opinión Jurídica, Vol. 9, N° 18, pp. pp. 57-74 - ISSN 1692-2530',
      link: 'http://www.scielo.org.co/pdf/ojum/v9n18/v9n18a04.pdf  ',
    },
    {
      referencia:
        'Congreso de la República de Colombia. Código Sustantivo del Trabajo.(CST). 1950. ',
      link:
        'http://www.secretariasenado.gov.co/senado/basedoc/codigo_sustantivo_trabajo.html ',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (1991). Constitución Política de 1991. ',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=4125',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (1993). Ley 100 de 1993 - Sistema de Seguridad Social.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=4125',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (1993). Ley 80 de 1993 - Estatuto General de Contratación de la Administración Pública.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=304 ',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (1996). Ley 275 de 1996 - Modificación al Sistema de Remuneración de los Servidores Públicos. ',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=84396 ',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (2002). Ley 789 de 2002 - Ley de Formalización Laboral.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=6778',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (2004). Ley 909 de 2004 - Estatuto de la Función Pública ',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=14861 ',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (2010). Ley 1429 de 2010 - Ley de Formalización y Generación de Empleo.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=39430 ',
    },
    {
      referencia:
        'Departamento Administrativo Nacional de Estadística (DANE). (2020). Encuesta Nacional de Calidad de Vida 2020',
      link:
        'https://www.dane.gov.co/index.php/estadisticas-por-tema/salud/calidad-de-vida-ecv/encuesta-nacional-de-calidad-de-vida-ecv-2020',
    },
    {
      referencia:
        'Fedesarrollo. (2020). Análisis del mercado laboral en Colombia: diferencias salariales entre el sector público y privado',
      link: 'https://www.repository.fedesarrollo.org.co/handle/11445/3881',
    },
    {
      referencia:
        'Gutiérrez Aragón, Ó. (2015). Fundamentos de administración de empresas (ed.). Difusora Larousse',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/49039 ',
    },
    {
      referencia:
        'Ministerio de Trabajo de Colombia. (2025). Salario Mínimo Legal Vigente ',
      link:
        'https://mintrabajo.gov.co/presidente-decreto-salario-minimo-para-2025-quedo-en-1.623.500-incluido-auxilio-de-transporte ',
    },
    {
      referencia:
        'Presidencia de la República de Colombia. (1998). Decreto 1567 de 1998 - Estatuto Orgánico del Presupuesto.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=1246 ',
    },
  ],
  glosario: [
    {
      termino: 'Beneficios laborales',
      significado:
        'Conjunto de ventajas o compensaciones adicionales que los empleadores ofrecen a sus empleados, como seguros de salud, pensiones, vacaciones, entre otros, más allá del salario básico.',
    },
    {
      termino: 'Brecha salarial',
      significado:
        'Diferencia en los salarios que reciben distintos grupos de trabajadores, habitualmente basada en factores como género, edad, raza, educación o sector',
    },
    {
      termino: 'Contrato de trabajo',
      significado:
        'Acuerdo entre empleador y empleado que establece las condiciones laborales, incluyendo tareas, salario y duración del vínculo laboral.',
    },
    {
      termino: 'Desigualdad salarial',
      significado:
        'Disparidad o desequilibrio en la remuneración que reciben trabajadores en situaciones similares debido a factores no justificados, como género, raza o nivel educativo.',
    },
    {
      termino: 'Escala salarial',
      significado:
        'Conjunto de niveles salariales que están establecidos según el cargo o la categoría de un trabajador, determinando el salario que corresponde a cada puesto.',
    },
    {
      termino: 'Estabilidad laboral',
      significado:
        'Condición que asegura la permanencia de un trabajador en su puesto de trabajo, caracterizada por la protección contra despidos injustificados o arbitrarios.',
    },
    {
      termino: 'Pensión',
      significado:
        'Prestación económica periódica que recibe una persona después de haber alcanzado una cierta edad o por incapacidad laboral, y que en muchos casos es proporcionada por el sistema de seguridad social.',
    },
    {
      termino: 'Prestaciones sociales',
      significado:
        'Conjunto de beneficios que, por Ley, los empleadores deben otorgar a sus empleados, como vacaciones, bonificaciones, y pago de salud o pensión.',
    },
    {
      termino: 'Salario',
      significado:
        'Retribución económica que recibe una persona a cambio de la prestación de sus servicios en un empleo, generalmente de forma periódica.',
    },
    {
      termino: 'Salario mínimo',
      significado:
        'Remuneración más baja que, por Ley, un trabajador puede recibir en el país, determinada anualmente por el gobierno o los acuerdos laborales.',
    },
    {
      termino: 'Sector público',
      significado:
        'Conjunto de entidades estatales y organismos del gobierno encargados de la administración pública, donde los empleados trabajan bajo condiciones específicas y reguladas por el Estado.',
    },
    {
      termino: 'Sector privado',
      significado:
        'Conjunto de empresas y entidades que no pertenecen al Estado y donde los empleadores fijan los salarios de acuerdo con las condiciones del mercado y la rentabilidad de la empresa.',
    },
    {
      termino: 'Seguridad social',
      significado:
        'Sistema de protección social que tiene como objetivo cubrir los riesgos sociales a los que está expuesto un trabajador, como enfermedades, accidentes o jubilación.',
    },
    {
      termino: 'Trabajo informal',
      significado:
        'Actividad económica no registrada formalmente, en la que el trabajador no tiene los beneficios legales establecidos, como seguridad social o pensión.',
    },
  ],
}
