<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'2. Aplicación de la administración de salarios en empresas públicas y privadas'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    p.mb-5 El sistema de remuneración en Colombia, está regido por un marco normativo que establece los parámetros para la contratación laboral, el salario mínimo, las prestaciones sociales, y los derechos y deberes tanto de empleadores como de empleados. Sin embargo, la aplicación de estos principios varía según el tipo de organización, especialmente cuando se comparan las empresas públicas y privadas. 

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/1.png", data-aos="zoom-in")
      .col-lg-8
        .bg-color-1.p-4.mb-3(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema2/2.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Mientras que las empresas privadas tienen mayor flexibilidad en la negociación de salarios y beneficios, las empresas públicas deben ajustarse a normativas y políticas gubernamentales que regulan sus presupuestos y salarios.

        p(data-aos="fade-left") Este tema busca explicar las diferencias y similitudes en la administración de salarios en ambos sectores, revisando la estructura salarial, los marcos legales aplicables y las particularidades que distinguen el manejo de los recursos humanos en el sector público y privado. 
    
    #t_2_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.1] Diferencia entre empresa pública y privada
    
    .row.mb-5
      .col-lg-3.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/tema2/3.png", data-aos="zoom-in")
      .col-lg-9.order-lg-1
        p(data-aos="fade-left") La diferencia entre las empresas públicas y privadas, se evidencia en su naturaleza, objetivos, fuente de financiamiento y la forma en que operan dentro del marco económico y social de un país. 
        .bg-color-2.p-4.mb-3(data-aos="fade-left")
          p.mb-0 Las empresas públicas son propiedad del Estado y cuyo objetivo principal es satisfacer necesidades sociales, económicas y de interés público, a diferencia de las empresas privadas que son gestionadas por particulares con el fin de maximizar los beneficios económicos para los accionistas o propietarios.
        h5(data-aos="fade-left") Se caracterizan por: 
    
    .row.align-items-start.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/4.png", alt="").mb-4.mb-lg-0
      .col-lg-8
    
        AcordionA(tipo="b")
          .div(titulo="Propiedad y control")
            p La propiedad de las empresas públicas recae en el Estado, es decir, el Gobierno central o local es el propietario y controlador de la empresa (Gutiérrez Aragón, 2015). Esto implica que sus decisiones son influenciadas por políticas públicas y objetivos sociales, más que por las exigencias del mercado.
            p Las empresas privadas son propiedad de personas particulares, y su operación está orientada hacia la maximización de las ganancias y la competitividad en el mercado.

    
          .div(titulo="Objetivos y finalidad")
            p Las empresas públicas buscan la satisfacción de necesidades sociales básicas y la implementación de políticas públicas que contribuyan al bienestar colectivo, tales como la provisión de servicios de salud, educación, transporte público, y servicios básicos. 
            p Por el contrario, las empresas privadas tienen como fin principal la rentabilidad económica, y se enfocan en la eficiencia operativa y la competitividad para garantizar la rentabilidad de sus propietarios o accionistas.

    
          .div(titulo="Financiamiento")
            p El financiamiento de las empresas públicas, proviene de los recursos del Estado, ya sea a través de los presupuestos nacionales o locales, o mediante la emisión de deuda pública 
            p Las empresas públicas pueden recibir subsidios gubernamentales para cubrir déficit operativos si fuera necesario. 
            p En contraste, las empresas privadas se financian principalmente a través de la inversión de capital privado, la emisión de acciones o deuda, y la reinversión de sus ganancias.

    
          .div(titulo="Flexibilidad y regulación")
            p Las empresas privadas gozan de mayor flexibilidad en su gestión, porque están menos sujetas a regulaciones del gobierno y pueden adaptarse rápidamente a las condiciones del mercado. 
            p Esto les permite innovar, modificar sus estrategias y ajustar su estructura salarial con mayor rapidez. Por otro lado, las empresas públicas están sometidas a una mayor regulación y control por parte del Estado, lo que puede generar una estructura más rígida en cuanto a políticas salariales, contratación y cambios organizacionales.
          .div(titulo="Estructura salarial")
            p En términos de administración de salarios, las empresas privadas tienen la capacidad de establecer estructuras salariales más dinámicas, ajustándose a las condiciones del mercado y a la competitividad en el sector. 
            p Esto les permite ofrecer salarios adaptados a la realidad económica del país, en algunos casos para atraer talento especializado. En contraste, las empresas públicas, aunque ofrecen salarios competitivos, deben adherirse a normas establecidas por el gobierno que definen los rangos salariales, beneficios y condiciones laborales, lo que puede limitar su flexibilidad salarial.

    
    .bg-full-width.bg-color-4.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema2/5.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 Es así que  aunque tanto las empresas públicas como privadas, juegan roles fundamentales en la economía, sus diferencias estructurales, objetivos y fuentes de financiamiento las convierten en entidades con características operativas y organizacionales distintas, lo que se refleja también en la manera en que gestionan y administran los salarios y la relación laboral con sus empleados.

    #t_2_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.2] Estructura salarial sector público
    

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/tema2/6.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        p(data-aos="fade-left") En el caso de las empresas públicas, la estructura salarial no solo se rige por los lineamientos internos de cada entidad, sino también por un conjunto de Leyes, normas y decretos que buscan garantizar la equidad, transparencia y justicia social en el acceso a la remuneración por el trabajo realizado. Además, la regulación busca evitar la discrecionalidad en los pagos y promover la eficiencia en el uso de los recursos públicos.
        .bg-color-2.p-4.mb-3(data-aos="fade-left")
          p.mb-0 Las empresas públicas en Colombia, entendidas como aquellas que prestan servicios o realizan actividades económicas bajo el control del Estado, se ven obligadas a cumplir con un marco normativo estricto para la fijación de salarios. Esto incluye, en primer lugar, el cumplimiento de las leyes laborales generales y, en segundo lugar, las normas específicas aplicables a los sectores públicos.
    
    h2(data-aos="fade-left") Marco normativo de la estructura salarial
    p.mb-5 La estructura salarial de las empresas públicas en Colombia está regida por diversas normativas que combinan principios de la Ley laboral general con especificaciones propias del sector público. A continuación, se explican las Leyes más relevantes:

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema2/7.png")
            .col-lg-7
              h5 Constitución Política de 1991
              p La Constitución de 1991, establece principios fundamentales en cuanto a la gestión pública, el empleo y la remuneración de los servidores públicos. 
              p En particular, el Artículo 125 de la Constitución establece que los empleos en el <b>Estado son de carrera,</b> es decir, que los servidores públicos tienen derecho a ocupar cargos en el Estado, de acuerdo con principios de mérito, imparcialidad y eficiencia, lo cual tiene implicaciones en la estructura salarial (Congreso de la República de Colombia, 1991).

    
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema2/8.png")
            .col-lg-7
              h5 Ley 80 de 1993 - Estatuto General de Contratación de la Administración Pública
              p La Ley 80 de 1993, establece el marco general para la contratación y contratación laboral en el sector público, y de manera indirecta, influye en la determinación de la estructura salarial de las empresas públicas. 
              p La Ley estipula que el salario debe ser razonable y adecuado a las funciones que desempeñan los servidores públicos, teniendo en cuenta las capacidades financieras de las entidades y los principios de transparencia y eficiencia en la administración pública (Congreso de la República de Colombia, 1993).

          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema2/9.png")
            .col-lg-7
              h5 Ley 909 del 2004 - Estatuto de la Función Pública
              p Esta Ley regula la carrera administrativa de los empleados públicos en Colombia. Establece normas sobre la contratación, el ascenso, la evaluación del desempeño, la remuneración y los beneficios. 
              p En su Artículo 13, se especifica que el salario de los servidores públicos debe ser determinado de acuerdo con las funciones y responsabilidades asignadas, garantizando la igualdad de oportunidades y la competencia justa entre los aspirantes a cargos públicos (Congreso de la República de Colombia, 2004).

    
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema2/10.png")
            .col-lg-7
              h5 Decreto 1567 de 1998 - Estatuto Orgánico del Presupuesto
              p El Decreto 1567 de 1998, establece las bases para la organización y el manejo del presupuesto en las entidades del Estado. En cuanto a la estructura salarial, este decreto regula cómo deben asignarse los recursos presupuestales.
              p Para el pago de salarios en las entidades públicas, estableciendo un marco para el uso eficiente de los recursos, y garantizando que las políticas salariales estén alineadas con la disponibilidad de los recursos públicos (Presidencia de la República de Colombia, 1998).

          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema2/11.png")
            .col-lg-7
              h5 Ley 275 de 1996 - Modificación al Sistema de Remuneración de los Servidores Públicos
              p Esta Ley introduce modificaciones al sistema de remuneración de los empleados públicos en Colombia, estableciendo un sistema más equitativo y ajustado a las responsabilidades y competencias de los servidores. Busca equilibrar las desigualdades salariales entre los distintos niveles de la administración pública (Congreso de la República de Colombia, 1996).
    
    h2(data-aos="fade-left") Características de la estructura salarial en las empresas públicas
    p.mb-5 La estructura salarial en las empresas públicas, debe seguir ciertos principios para garantizar la eficiencia y equidad:

    .row.align-items-start.mb-5
      .col-lg-4.order-2
        figure
          img(src="@/assets/curso/tema2/12.png", alt="").mb-4.mb-lg-0
      .col-lg-8.mb-3.mb-lg-0.order-1
    
        AcordionA(tipo="b")
          .div(titulo="Equidad interna")
            p La estructura salarial en las empresas públicas, debe garantizar la equidad interna, es decir, que los salarios sean proporcionales a las responsabilidades y tareas desempeñadas por los empleados dentro de la organización. Este principio se asegura por medio de la clasificación de los cargos y la asignación de un salario, según las competencias, habilidades y experiencia requeridas para cada puesto.
    
          .div(titulo="Equidad externa")
            p Este principio se refiere a la necesidad de que los salarios en las empresas públicas sean competitivos en comparación con el sector privado y otras entidades públicas, para evitar la fuga de talento hacia el sector privado. Sin embargo, las empresas públicas no pueden ofrecer salarios desproporcionados, debido a que deben ajustarse a las limitaciones presupuestales del Estado.
    
          .div(titulo="Transparencia y publicidad")
            p De acuerdo con la Ley 1474 del 2011, las entidades públicas deben publicar la información sobre los salarios de sus empleados, lo cual asegura la transparencia y permite que los ciudadanos puedan conocer los niveles salariales y compararlos con los de otros sectores. Esto ayuda a prevenir prácticas irregulares o desproporcionadas en el establecimiento de remuneraciones (Congreso de la República de Colombia, 2011).
    
          .div(titulo="Régimen de remuneración por cargos de confianza")
            p Los empleados públicos que desempeñan cargos de libre nombramiento y remoción, como los gerentes o directores de las empresas públicas, tienen una estructura salarial distinta, pues sus salarios están determinados por los consejos directivos o las juntas de las entidades, bajo criterios de competitividad y responsabilidad del cargo
  
    #t_2_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.3] Estructura salarial sector privado
    
    p.mb-5 La estructura salarial en el sector privado de Colombia, es un componente clave en la relación laboral entre empleadores y trabajadores. Esta estructura define cómo se organizan y asignan los salarios dentro de las empresas privadas, considerando tanto la legislación laboral vigente como las políticas internas de cada compañía. 

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/13.png", data-aos="zoom-in")
      .col-lg-8
        .bg-color-2.p-4.mb-3(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema2/14.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 A diferencia del sector público, donde la determinación salarial está regulada estrictamente por leyes y normativas gubernamentales, el sector privado tiene mayor flexibilidad para establecer sus propios sistemas de remuneración, lo que permite a las empresas ajustar los salarios a las necesidades del mercado y a la competitividad de la industria.

        p(data-aos="fade-left") Sin embargo, esta flexibilidad también está sujeta a ciertas normas legales que garantizan la equidad, la protección de los derechos laborales y el respeto por los principios fundamentales de la justicia salarial.
        h5(data-aos="fade-left") En Colombia, el marco normativo que regula la estructura salarial del sector privado, se basa principalmente en el Código Sustantivo del Trabajo, el Salario Mínimo Legal Vigente (SMLV), la Ley 100 de 1993, y la Ley 789 del 2002, entre otras normativas. Además, las dinámicas del mercado laboral y los acuerdos entre empleadores y trabajadores, también juegan un papel importante en la determinación de los salarios en el sector privado.
    
    h2(data-aos="fade-left") Marco normativo de la estructura salarial en el sector privado
    p.mb-5 La estructura salarial en el sector privado, está regida por varias normativas que equilibran la flexibilidad empresarial con la protección de los derechos de los trabajadores:


    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0.order-lg-2
              figure
                img(src="@/assets/curso/tema2/15.png")
            .col-lg-7.order-lg-1
              h5 Constitución Política de Colombia de 1991
              p La Constitución establece en su Artículo 53, que los trabajadores tienen derecho a una remuneración justa y adecuada, que garantice su bienestar y dignidad. Este principio es la base de la estructura salarial en el sector privado y obliga a los empleadores a respetar los derechos fundamentales de los trabajadores, incluyendo el derecho a recibir un salario que permita cubrir sus necesidades básicas. 
              p Además, la Constitución establece que los salarios no deben ser inferiores al Salario Mínimo Legal Vigente (SMLV), que es fijado anualmente por el Gobierno Nacional (Congreso de la República de Colombia, 1991).


    
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0.order-lg-2
              figure
                img(src="@/assets/curso/tema2/16.png")
            .col-lg-7.order-lg-1
              h5 Código Sustantivo del Trabajo (CST)
              p El CST, que regula las relaciones laborales en Colombia, establece las normas generales sobre el salario, incluyendo las definiciones, los métodos de pago y las compensaciones adicionales. Según el CST, el salario debe ser un acuerdo entre el empleador y el trabajador, pero siempre debe respetar las condiciones mínimas establecidas por la Ley, como el salario mínimo. Este código también regula los pagos por horas extras, recargos nocturnos, y el pago de prestaciones sociales, tales como cesantías, primas, vacaciones, entre otros (Congreso de la República de Colombia, 1950).

          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0.order-lg-2
              figure
                img(src="@/assets/curso/tema2/17.png")
            .col-lg-7.order-lg-1
              h5 Ley 100 de 1993
              p Esta Ley establece el sistema de Seguridad Social en Colombia y regula las contribuciones que los empleadores y los empleados deben hacer para el sistema de salud, pensiones y riesgos laborales. 
              p Si bien no regula directamente la estructura salarial, las contribuciones a estos sistemas tienen un impacto significativo sobre el salario neto que los trabajadores reciben, y las empresas deben ajustarse a estas obligaciones para garantizar el cumplimiento de la legislación en cuanto a bienestar social (Congreso de la República de Colombia, 1993).


    
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0.order-lg-2
              figure
                img(src="@/assets/curso/tema2/18.png")
            .col-lg-7.order-lg-1
              h5 Ley 789 del 2002
              p Esta Ley, además de regular aspectos de la contratación laboral, establece incentivos para la formalización laboral y la promoción de la contratación de personal en el sector privado. 
              p Introduce beneficios fiscales y de seguridad social para las empresas que cumplan con ciertas condiciones, lo que influye en la estructura salarial al facilitar la creación de empleos formales y aumentar la oferta de salarios adecuados (Congreso de la República de Colombia, 2002).


          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0.order-lg-2
              figure
                img(src="@/assets/curso/tema2/19.png")
            .col-lg-7.order-lg-1
              h5 La Ley 1429, establece un conjunto de medidas para fomentar la formalización del empleo en el sector privado. Aunque está más centrada en la creación de empleo formal, también tiene implicaciones en la estructura salarial, ya que las empresas que formalizan más empleos están exentas de ciertas cargas tributarias y de seguridad social, lo que les permite una mayor flexibilidad para ofrecer salarios competitivos y mejorar la calidad del empleo en el sector privado (Congreso de la República de Colombia, 2010).

    p.mb-5 Las características de la estructura salarial en el sector privado, son:

    .row.align-items-start.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/20.png", alt="").mb-4.mb-lg-0
      .col-lg-8
    
        AcordionA(tipo="b")
          .div(titulo="Salario Mínimo Legal Vigente (SMLV)")
            p El Salario Mínimo Legal Vigente (SMLV), es la base para la estructura salarial del sector privado en Colombia. El SMLV es fijado anualmente por el Gobierno Nacional, a través de un decreto presidencial, y se aplica a todos los trabajadores dependientes del sector privado. En 2025, el salario mínimo es de $1.423.500 COP, con un auxilio de transporte de $200.000 COP,  para aquellos trabajadores que ganan hasta dos salarios mínimos. 
            p Este salario mínimo es el umbral más bajo que los empleadores deben pagar a sus trabajadores, y los salarios por encima de este monto dependen de las negociaciones entre empleadores y empleados (Ministerio de Trabajo de Colombia, 2025).

    
          .div(titulo="Remuneración variable")
            p En muchas empresas privadas, especialmente en sectores como la tecnología, ventas y servicios, el salario base puede complementarse con remuneración variable, que depende del rendimiento individual o colectivo. 
            p Esto incluye bonos, comisiones por ventas, incentivos por metas alcanzadas y otras compensaciones atadas a resultados. Esta modalidad de salario busca incentivar el desempeño de los empleados y alinearlos con los objetivos de la empresa (Revista Dinero, 2021).

    
          .div(titulo="Compensaciones y beneficios adicionales")
            p Además del salario básico, las empresas del sector privado en Colombia pueden ofrecer beneficios adicionales como primas, vacaciones, seguros de salud privados, vales de comida, transporte, entre otros. 
            p Los beneficios adicionales pueden ser establecidos por cada empresa, siempre y cuando no contravengan la legislación laboral básica. Estos beneficios contribuyen a la competitividad salarial, ya que permiten a las empresas atraer y retener talento, especialmente en sectores que enfrentan alta rotación de personal (Maldonado, 2020).
    .row.align-items-start.mb-5
      .col-lg-4.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/tema2/21.png", alt="").mb-4.mb-lg-0
      .col-lg-8.order-lg-1
        AcordionA(tipo="b")
    
          .div(titulo="Clasificación de cargos y salarios")
            p Las empresas privadas en Colombia suelen estructurar su escala salarial a partir de una clasificación de cargos, que determina los salarios según las responsabilidades, nivel de formación, experiencia y competencias requeridas para cada puesto. Esta clasificación puede variar significativamente según la industria y el tamaño de la empresa. 
            p Las grandes corporaciones multinacionales, por ejemplo, suelen ofrecer salarios más altos y más beneficios que las pequeñas y medianas empresas, en parte debido a su capacidad de generar mayores ingresos (Sánchez & Rodríguez, 2022).
          .div(titulo="Flexibilidad en la negociación salarial")
            p A diferencia del sector público, en el sector privado, existe una mayor flexibilidad para negociar los salarios. Los empleadores tienen la posibilidad de establecer diferentes tipos de compensación, según la situación económica de la empresa, la demanda de talento en su sector y las negociaciones individuales con los trabajadores. Esto se refleja en la variabilidad de los salarios entre distintas empresas del mismo sector.
    
    h2(data-aos="fade-left") Desafíos y retos en la estructura salarial del sector privado

    TabsC.color-acento-contenido.mb-5
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Desigualdad salarial" :icon="require('@/assets/bullets/1.svg')")
        .row.justify-content-center
          .col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
            h4 Desigualdad salarial
            p Un desafío significativo en el sector privado es la desigualdad salarial. Aunque la legislación establece un salario mínimo, existe una gran disparidad salarial entre los distintos sectores y niveles de empleo, especialmente entre trabajadores de alto nivel (gerentes, directores) y empleados operativos. Además, existen disparidades entre hombres y mujeres, así como entre trabajadores rurales y urbanos.
    
          .col-md-8.col-lg-5.col-xl-4.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/22.png', alt='')
    
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Impacto de la informalidad" :icon="require('@/assets/bullets/2.svg')")
        .row.justify-content-center
          .col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
            h4 Impacto de la informalidad
            p La informalidad laboral sigue siendo un problema importante en Colombia. Aunque el país ha avanzado en la formalización de empleo, aún persiste una parte significativa de trabajadores en la economía informal que no reciben el salario mínimo, ni tienen acceso a prestaciones sociales, lo que afecta la calidad de vida de estos empleados.
    
          .col-md-8.col-lg-5.col-xl-4.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/23.png', alt='')
    
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Competitividad salarial" :icon="require('@/assets/bullets/1.svg')")
        .row.justify-content-center
          .col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
            h4 Competitividad salarial
            p La competitividad salarial es otro reto, ya que muchas empresas luchan por ofrecer salarios atractivos en un entorno económico complejo, donde los márgenes de beneficio son ajustados y las empresas deben competir por el talento con otras organizaciones.
    
          .col-md-8.col-lg-5.col-xl-4.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/24.png', alt='', style="width: 100%;")
    
    #t_2_4.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.4] Análisis de las diferencias salariales entre empresas públicas y privadas
    
    p.mb-5 Para conocer más sobre la temática, lo invitamos a ver el siguiente video.

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/9cqLwqWDCzs?si=F1b2M6SlLRnGqFf9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)


    .bg-full-width.border-top.actividad.bg-color-actividad
      .p-4.p-md-5
        #Actividad                
          <Actividad :cuestionario="cuestionario"/>

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://banrep.gov.co/sites/default/files/publicaciones/archivos/lbr_precios_tomo_II_0.pdf " target="_blank" rel="noopener noreferrer") Artículo: Diferencias salariales en el mercado formal en Colombia: Evidencia a partir de una encuesta a nivel de firma.  

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.mintrabajo.gov.co/web/guest/inicio" target="_blank" rel="noopener noreferrer") Ministerio de Trabajo. (2025, enero 27). Mi calculadora laboral. Ministerio de Trabajo 


            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://youtu.be/tLBX_y66eOs?si=_AuDkwobgjV3bbVn" target="_blank" rel="noopener noreferrer") Infogénero, Productora de información de género. (2012, 15 de diciembre). Acciones positivas para superar la brecha laboral y salarial. [Video]. YouTube. 

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')
  
  </template>

<script>
import Actividad from '@/components/actividad/Actividad.vue'
export default {
  name: 'Tema2',
  components: {
    Actividad,
  },
  data() {
    return {
      cuestionario: {
        tema: 'Herramientas colaborativas para la construcción de paz',
        titulo: 'Ponte a prueba',
        introduccion:
          'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
        barajarPreguntas: true,
        preguntas: [
          {
            id: 1,
            texto:
              '¿Cuál es el tipo de contrato laboral más común en Colombia?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Contrato a término fijo',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Contrato por obra o labor',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Contrato a término indefinido',
                esCorrecta: true,
              },
              {
                id: 'd',
                texto: 'Contrato de aprendizaje',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 2,
            texto: '¿Qué característica define un contrato a término fijo?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto:
                  'Tiene una duración indefinida, pero con la posibilidad de terminación anticipada por el empleador.',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto:
                  'Es utilizado para realizar una obra o labor específica, sin una duración establecida.',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto:
                  'Es un contrato con una fecha de finalización predeterminada, que no se puede modificar.',
                esCorrecta: true,
              },
              {
                id: 'd',
                texto: 'Solo aplica para trabajadores con discapacidad.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 3,
            texto:
              '¿Qué derecho tiene un trabajador con contrato por obra o labor?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Estabilidad laboral durante toda su vida laboral.',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto:
                  'Derecho a indemnización si el contrato se termina antes de finalizar la obra.',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Derecho a vacaciones durante el tiempo de la obra.',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto:
                  'Derecho a una pensión de jubilación inmediatamente después de la firma del contrato.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 4,
            texto:
              '¿Cuál de los siguientes contratos está dirigido a personas en formación técnica, tecnológica o profesional?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Contrato de trabajo doméstico',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Contrato de aprendizaje',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Contrato a término fijo',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Contrato de trabajo temporal',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 5,
            texto:
              '¿Qué tipo de contrato se utiliza para el reemplazo temporal de un trabajador o para el aumento de la carga laboral durante un período específico?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Contrato de trabajo temporal',
                esCorrecta: true,
              },
              {
                id: 'b',
                texto: 'Contrato a término indefinido',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Contrato de aprendizaje',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Contrato por obra o labor',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
        ],
        mensaje_final_aprobado:
          '¡Felicidades! Has superado la prueba con éxito.',
        mensaje_final_reprobado:
          'Te recomendamos repasar nuevamente la unidad para reforzar los conceptos clave antes de volver a intentarlo.',
      },
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.bg-color-actividad
  background-color: #EBF1F5
</style>
