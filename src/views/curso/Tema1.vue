<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Conceptos básicos de la legislación laboral'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/1.png", data-aos="zoom-in")
      .col-lg-8
        .bg-color-1.p-4.mb-3(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema1/2.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 La normativa laboral en Colombia, está en constante evolución, con importantes novedades que surgen cada año, tales como la definición del salario mínimo mensual legal vigente y el auxilio de transporte, entre otros pronunciamientos jurisprudenciales. Estos cambios reflejan cómo el sistema laboral responde a las necesidades de empleadores y trabajadores, tanto dependientes como independientes, para garantizar el cumplimiento de sus derechos y obligaciones.
        p(data-aos="fade-left") En esta unidad, se abordan los conceptos principales de la Legislación Laboral colombiana, comenzando con el derecho laboral, las distintas formas de contratación, los principios que rigen las relaciones laborales y las obligaciones de los empleadores. 
        p(data-aos="fade-left") A través de estos temas, se busca proporcionar una comprensión integral de cómo el marco legal regula las condiciones laborales en Colombia, preparando al estudiante para aplicar estos principios en la administración de salarios en los sectores público y privado, que serán tratados más adelante.

    #t_1_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.1] Derecho laboral en Colombia
    
    p.mb-4 El derecho laboral en Colombia constituye un marco normativo esencial para regular las relaciones laborales, garantizando justicia y equilibrio entre empleadores y trabajadores.

    .bg-full-width.bg-color-3.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-8.mb-3.mb-lg-0
            h2.mb-4(data-aos="flip-up") Derecho laboral en Colombia
            p.mb-4(data-aos="fade-right") En el PDF <b>Derecho laboral en Colombia</b>, se exploran los fundamentos históricos, la importancia del Código Sustantivo del Trabajo y los principios legales que rigen el ámbito laboral, proporcionando herramientas clave para comprender y aplicar las normativas en favor del bienestar social y económico del país.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_1.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Derecho laboral en Colombia.
    
          .col-lg-4
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/3.png', alt='')
    
    #t_1_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.2] Contratación laboral en Colombia
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/4.png", data-aos="zoom-in")
      .col-lg-8
        .bg-color-2.p-5.mb-3(data-aos="fade-left")
          p.mb-0 La contratación laboral en Colombia, se refiere al acuerdo mediante el cual un trabajador pone a disposición del empleador su capacidad productiva, a cambio de una remuneración. 
        p(data-aos="fade-left") Este acuerdo está regulado por el Código Sustantivo del Trabajo (CST), específicamente en los Artículos 22 al 75, que establecen los lineamientos esenciales sobre la naturaleza, modalidades y derechos de los trabajadores, en virtud del contrato laboral. 
        h5(data-aos="fade-left") Según el Artículo 22 del CST, el contrato de trabajo es un acuerdo mediante el cual una persona natural se compromete a prestar un servicio personal a favor de otra persona, ya sea natural o jurídica, bajo subordinación y a cambio de una remuneración.
        p(data-aos="fade-left") Elementos de un contrato laboral: 
    
    .row.justify-content-center.align-items-stretch.mb-4
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-4.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema1/5.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5.mb-2 Primero
              p.mb-0 La prestación personal del servicio.
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-4.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema1/5.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5.mb-2 Segundo
              p.mb-0 La subordinación. 
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-4.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema1/5.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5.mb-2 Tercero
              p.mb-0 La remuneración acordada por las partes (CST, Art. 23). 
    
    p.mb-5 Es importante señalar que la Legislación Laboral colombiana, establece diversas modalidades de contrato, tales como contrato a término fijo, contrato a término indefinido, contrato ocasional y contrato por obra o labor. Aunque los trabajadores tienen los mismos derechos en términos de acreencias laborales, cada tipo de contrato tiene aspectos diferenciadores que son cruciales para evitar posibles inconsistencias en su aplicación.

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/tema1/6.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        h2.mb-4(data-aos="fade-left") Contrato de trabajo
        .bg-color-1.p-4.mb-3(data-aos="fade-left")
          p.mb-0 De acuerdo con el Artículo 22 del CST, el contrato de trabajo se define como un acuerdo entre las partes, ya sea verbal o escrito, en el que una persona se obliga a prestar un servicio personal a favor de otra, bajo subordinación y a cambio de un salario.  
        p(data-aos="fade-left") Esta relación tiene implicaciones tanto para los empleadores como para los empleados, dado que establece un marco claro de derechos y deberes para ambos.

    h2(data-aos="fade-left") Características y contenido del contrato de trabajo
    p.mb-5 Según el Artículo 39 del CST, el contrato de trabajo debe contener, al menos, la siguiente información esencial:


    .bg-full-width.bg-color-2.mb-5
      .px-4.px-md-5.pb-md-3
        .row.justify-content-center.align-items-center
          .col-lg-12
            .row.justify-content-center.align-items-center
              .col-lg-7(data-aos="fade-left").order-2
                ul.lista-ul--color
                  li.d-flex
                    i.far.fa-arrow-alt-circle-right.bg-color-6
                    p.mb-0 La identificación y el domicilio de las partes (trabajador y empleador).
                  li.d-flex
                    i.far.fa-arrow-alt-circle-right.bg-color-6
                    p.mb-0 El lugar y la fecha de celebración del contrato.
                  li.d-flex
                    i.far.fa-arrow-alt-circle-right.bg-color-6
                    p.mb-0 El lugar donde se prestarán los servicios.
                  li.d-flex
                    i.far.fa-arrow-alt-circle-right.bg-color-6
                    p.mb-0 La naturaleza del trabajo que se va a realizar.
                  li.d-flex
                    i.far.fa-arrow-alt-circle-right.bg-color-6
                    p.mb-0 Las condiciones de terminación del contrato y los procedimientos para dar el preaviso de terminación.
                  li.d-flex
                    i.far.fa-arrow-alt-circle-right.bg-color-6
                    p.mb-0 Las cláusulas adicionales que las partes acuerden libremente.
              .col-lg-5(data-aos="zoom-in").order-1.mb-3.mb-lg-0
                img.img-fluid(src='@/assets/curso/tema1/7.svg', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0
    
    p.mb-5 El contrato de trabajo debe incluir, no solo los aspectos administrativos mencionados anteriormente, sino también garantizar que la relación laboral se desarrolle en conformidad con los principios de la Ley. Esto asegura la protección de los derechos del trabajador, como la seguridad social, el descanso, las horas de trabajo y las garantías ante posibles despidos injustificados.

    h2(data-aos="fade-left") Diferencias entre un contrato de trabajo y una relación laboral
    p.mb-5 Aunque el contrato de trabajo y la relación laboral comparten características comunes, existen diferencias entre ambos:

    .bg-full-width-2.bg-fondo-3
      .px-4.px-md-5.pb-md-3
        .row.justify-content-center.align-items-stretch.mb-5
          .col-lg-6.mb-3(data-aos="zoom-in-up")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema1/8.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Contrato de trabajo
                p.mb-0 El contrato de trabajo es la formalización del acuerdo entre el trabajador y el empleador, ya sea de manera verbal o escrita, y establece las condiciones de trabajo, la remuneración y los derechos y obligaciones de las partes.
          .col-lg-6.mb-3(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema1/9.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Relación laboral
                p.mb-0 La relación laboral se origina a partir de la ejecución del contrato de trabajo, lo que implica que el trabajador preste sus servicios de manera personal, bajo subordinación, y que el empleador cumpla con sus obligaciones de remuneración y bienestar laboral (CST, Art. 22).

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/tema1/10.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        .bg-color-2.p-4.mb-3(data-aos="fade-left")
          p.mb-0 Es importante comprender que, aunque no siempre sea necesario un contrato formalizado para que exista una relación laboral, un trabajador puede demostrar ante un juez laboral que existe una relación laboral, basándose en hechos como la prestación personal de servicios y la subordinación a las órdenes del empleador.
        p(data-aos="fade-left") En tal caso, se le reconocerán los derechos laborales y las acreencias correspondientes, incluso si no existe un contrato escrito (CST, Art. 23).
    
    h2.mb-5(data-aos="fade-left") Tipos de contrato de trabajo en Colombia
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/11.png", data-aos="zoom-in")
      .col-lg-8
        .bg-color-2.p-4.mb-3(data-aos="fade-left")
          p.mb-0 La Legislación Laboral Colombiana, establece diversas modalidades de contrato de trabajo, cada una con características y condiciones particulares que determinan el tipo de relación entre empleador y trabajador. Estas modalidades se ajustan a las necesidades específicas del empleador y a las condiciones del trabajo a realizar.
        p(data-aos="fade-left") A continuación, se describen los principales tipos de contrato de trabajo, reconocidos por el Código Sustantivo del Trabajo (CST):
    
    .row.align-items-start.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/12.png", alt="").mb-4.mb-lg-0
      .col-lg-8.order-lg-1
    
        AcordionA(tipo="b")
          .div(titulo="Contrato a término fijo")
            p El contrato a término fijo, es aquel en el que se establece una duración determinada para la relación laboral, que puede ser de días, meses o años. Este tipo de contrato se utiliza cuando el empleador necesita contar con los servicios de un trabajador, por un período específico. Según el Artículo 46 del CST, si la duración del contrato excede a un año, debe ser celebrado por escrito. Además, el trabajador tiene derecho a recibir una indemnización si el empleador decide no renovar el contrato al finalizar el término acordado, a menos que haya justificación legal para su terminación anticipada (CST, Art. 46).
    
          .div(titulo="Contrato a término indefinido")
            p El contrato a término indefinido, es aquel que no establece un plazo determinado para su terminación, sino que la relación laboral se mantiene hasta que alguna de las partes decida terminarla, siguiendo las disposiciones legales correspondientes. Este tipo de contrato es la modalidad preferida en Colombia, dado que asegura una mayor estabilidad laboral para el trabajador. El empleador solo puede dar por terminada esta relación laboral por causas justas, de acuerdo con las disposiciones del CST, como en los casos de despido injustificado (CST, Art. 62).
    
          .div(titulo="Contrato por obra o labor determinada")
            p El contrato por obra o labor determinada, es aquel que se celebra para la realización de una tarea específica, cuya finalización marca el término del contrato. Este tipo de contrato es común en trabajos que tienen un propósito temporal, como la construcción, proyectos especiales o eventos. Aunque no tiene un término fijo, su duración está directamente relacionada con la culminación de la obra o la tarea específica para la que fue contratado el trabajador (CST, Art. 45). Una vez terminada la obra o labor, se extingue el contrato sin necesidad de preaviso.
    
          .div(titulo="Contrato accidental u ocasional")
            p El contrato accidental u ocasional, es aquel que se celebra para cubrir una necesidad transitoria e imprevista de la empresa, como la sustitución de un trabajador en vacaciones o la realización de tareas esporádicas. Este tipo de contrato tiene una duración limitada y no se considera parte de la actividad normal de la empresa. Según el Artículo 47 del CST, los contratos ocasionales no deben exceder de un mes, salvo que existan circunstancias excepcionales que justifiquen una prórroga. Es fundamental que el empleador y el trabajador tengan claridad sobre la duración de este tipo de contrato y sus derechos durante su vigencia.
    
    p.mb-4 En el siguiente esquema, se presenta un resumen sobre la forma y duración de los contratos de trabajo.

    .titulo-figura.mb-4
      h5 Figura 1.
      span Modalidades de contrato en Colombia
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        figure
          img(src="@/assets/curso/tema1/13.svg", data-aos="zoom-in")
        
    h2.mb-4(data-aos="fade-left") Concurrencia de contratos

    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/14.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        p(data-aos="fade-left") La concurrencia de contratos, hace referencia a la posibilidad que un trabajador celebre varios contratos laborales, ya sea con un mismo empleador o con diferentes empleadores. 
        p(data-aos="fade-left") Este aspecto está regulado en los Artículos 25 y 26 del Código Sustantivo del Trabajo (CST). El Artículo 25 establece que un trabajador puede suscribir múltiples contratos de trabajo con un solo empleador, siempre que no se vulneren las disposiciones legales sobre condiciones laborales y la remuneración. 

    
        .bg-color-4.p-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema1/15.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Por otro lado, el Artículo 26 establece que es posible que un trabajador firme contratos con varios empleadores al mismo tiempo, a menos que el contrato estipule una exclusividad en la prestación de servicios, lo que impediría esta posibilidad.

    #t_1_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.3] Derechos y obligaciones del trabajador
    
    p.mb-5 Los derechos del trabajador son las garantías fundamentales que le otorgan a cada empleado, la protección necesaria dentro de la relación laboral. Entre los principales derechos establecidos en el Código Sustantivo del Trabajo (CST), se encuentran:

    .bg-full-width.bg-fondo-1
      .px-4.px-md-5.pb-md-3
        .row.justify-content-center.mb-5
          .col-lg-8.mb-3.mb-lg-0.order-lg-2
            SlyderF(columnas="col-12 col-lg-6")
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema1/16.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Salarios
                p.text-center Derecho a recibir el pago acordado por el trabajo realizado.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema1/17.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Aportes a seguridad social
                p.text-center El empleador debe realizar los aportes correspondientes a salud, pensión y riesgos laborales.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema1/18.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Prestaciones sociales
                p.text-center Como la prima de servicios, las cesantías e intereses a las cesantías.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema1/19.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Vacaciones
                p.text-center Derecho a disfrutar de tiempo libre remunerado por el empleador.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema1/20.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Aportes a cajas de compensación familiar
                p.text-center Contribución a los beneficios sociales.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema1/21.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Auxilio de transporte
                p.text-center Para aquellos trabajadores que devengan hasta dos salarios mínimos legales mensuales vigentes.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema1/22.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Horas extra, trabajo suplementario, dominicales y festivos
                p.text-center Remuneración adicional en situaciones de trabajo fuera del horario ordinario.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema1/23.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Pago de incapacidades
                p.text-center Cubre tanto las incapacidades de origen común, como las originadas por accidentes laborales.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema1/24.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Licencias laborales
                p.text-center Derecho a ausentarse por motivos personales como matrimonio, fallecimiento de un familiar, entre otras.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema1/25.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Viáticos
                p.text-center Reembolso por gastos incurridos en la realización de labores, fuera del lugar de trabajo.
    
          .col-lg-4.order-lg-1
            figure
              img(src='@/assets/curso/tema1/15-1.png', alt='')

        p.mb-4 Además, el trabajador tiene derecho a:

    .bg-full-width.bg-h85.mb-5
      .px-4.px-md-5.pb-md-3
        .row.justify-content-center.align-items-center
          .col-lg-12
            .row.justify-content-center.align-items-center
              .col-lg-7(data-aos="fade-left").mb-3.mb-lg-0
                ul.lista-ul--color.mt-5
                  li.mb-0.d-flex
                    i.far.fa-arrow-alt-circle-right.bg-color-6
                    p.mb-0 Que el empleador proporcione las herramientas necesarias para el desempeño de sus tareas.
                  li.mb-0.d-flex
                    i.far.fa-arrow-alt-circle-right.bg-color-6
                    p.mb-0 El respeto a sus creencias, sentimientos y dignidad humana.
                  li.mb-0.d-flex
                    i.far.fa-arrow-alt-circle-right.bg-color-6
                    p.mb-0 El otorgamiento de licencias establecidas por la Ley.
                  li.mb-0.d-flex
                    i.far.fa-arrow-alt-circle-right.bg-color-6
                    p.mb-0 El respeto a su privacidad y espacio personal en el entorno laboral.
                  li.mb-0.d-flex
                    i.far.fa-arrow-alt-circle-right.bg-color-6
                    p.mb-0 Las cláusulas adicionales que las partes acuerden libremente.
              .col-lg-5(data-aos="zoom-in")
                img.img-fluid(src='@/assets/curso/tema1/26.svg', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0


    p.mb-5 Por otro lado, el trabajador también tiene <b>obligaciones</b> frente al empleador, las cuales se derivan del contrato de trabajo y de las disposiciones del reglamento interno de la empresa. Entre las principales obligaciones se destacan:

    .bg-full-width.bg-fondo-1
      .px-4.px-md-5.pb-md-3
        .row.justify-content-center.mb-5
          .col-lg-8.mb-3.mb-lg-0.order-lg-2
            SlyderF(columnas="col-12 col-lg-6")
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema1/28.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 01
                p.text-center Cumplir con los términos establecidos en el contrato laboral y en el reglamento interno de trabajo.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema1/29.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 02
                p.text-center Desempeñar personalmente las tareas encomendadas por el empleador o sus representantes.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema1/30.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 03
                p.text-center Observar y cumplir con las disposiciones de seguridad y salud laboral estipuladas por el Sistema de Gestión de la Seguridad y Salud en el Trabajo (SG-SST) y las administradoras de riesgos laborales (ARL).
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema1/31.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 04
                p.text-center Mantener la confidencialidad sobre la información laboral relacionada con la empresa.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema1/32.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 05
                p.text-center Cuidar y devolver en buen estado las herramientas o equipos proporcionados por el empleador.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema1/33.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 06
                p.text-center Mantener relaciones respetuosas con compañeros y superiores.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema1/34.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 07
                p.text-center Informar al empleador sobre cualquier situación que pueda generar riesgos o perjuicios para la empresa.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema1/35.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 08
                p.text-center Participar en situaciones de emergencia que amenacen la seguridad de las personas o las instalaciones de la empresa.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema1/36.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 09
                p.text-center Las trabajadoras en estado de gestación deben iniciar su licencia de maternidad al menos una semana antes de la fecha estimada del parto, conforme a la legislación vigente.
           
    
          .col-lg-4.order-lg-1
            figure
              img(src='@/assets/curso/tema1/27.png', alt='')


    #t_1_4.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.4] Derechos y obligaciones del empleador

    p.mb-5 En la relación laboral, el empleador también adquiere ciertos derechos y obligaciones que deben ser respetados para garantizar el cumplimiento de la normativa laboral. Entre los derechos del empleador, se incluyen:

    .row.align-items-start.mb-5
      .col-lg-4.order-2
        figure
          img(src="@/assets/curso/tema1/37.png", alt="").mb-4.mb-lg-0
      .col-lg-8.mb-3.mb-lg-0.order-1
    
        AcordionA(tipo="b")
          .div(titulo="Primero")
            p Elegir a los trabajadores que considere aptos para llevar a cabo las tareas específicas de la empresa, con base en las necesidades operativas.
    
          .div(titulo="Segundo")
            p Dar instrucciones y directivas a los trabajadores sobre cómo deben desempeñar las labores encomendadas, siempre respetando los derechos establecidos por la Ley.
    
          .div(titulo="Tercero")
            p Tomar decisiones relacionadas con el contrato de trabajo, de acuerdo con las circunstancias, pero respetando las garantías legales que protegen al trabajador.
    
          .div(titulo="Cuarto")
            p Modificar las condiciones de trabajo en cuanto a modo, tiempo y lugar, siempre dentro de los límites establecidos por la Ley y bajo criterios de justificación.
          .div(titulo="Quinto")
            p Dar por terminado el contrato de trabajo, siguiendo las disposiciones legales que regulan las causales de terminación.
          .div(titulo="Sexto")
            p Recibir respeto y lealtad de parte de los trabajadores en el marco de la relación laboral.
    
    p.mb-5 En cuanto a las <b>obligaciones</b> del empleador, se destacan las siguientes:

    .bg-full-width.bg-fondo-1
      .px-4.px-md-5.pb-md-3
        .row.justify-content-center.mb-5
          .col-lg-8.mb-3.mb-lg-0.order-lg-2
            SlyderF(columnas="col-12 col-lg-6")
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema1/39.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 01
                p.text-center Pagar la remuneración pactada de acuerdo con lo establecido en el contrato laboral, cumpliendo con los términos y plazos acordados.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema1/40.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 02
                p.text-center Cumplir con los pagos de acreencias laborales, tales como los aportes a seguridad social (salud, pensión y riesgos laborales), las prestaciones sociales (cesantías, primas, etc.) y el auxilio de transporte.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema1/41.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 03
                p.text-center Proveer al trabajador con las herramientas y materiales necesarios para el adecuado desempeño de sus funciones.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema1/42.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 04
                p.text-center Respetar las creencias, sentimientos y dignidad del trabajador, garantizando un ambiente laboral libre de discriminación.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema1/43.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 05
                p.text-center Conceder al trabajador las licencias laborales previstas en la Ley, como las licencias de maternidad, paternidad, y otras situaciones personales.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema1/44.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 06
                p.text-center Reembolsar los gastos ocasionados por el traslado de residencia del trabajador debido a las funciones laborales, siempre que esté previsto en el contrato.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema1/45.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 07
                p.text-center Prevenir accidentes laborales y enfermedades profesionales, ofreciendo condiciones de trabajo seguras, con espacios adecuados y equipos de protección necesarios.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema1/46.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 08
                p.text-center Cumplir con el reglamento interno de trabajo y con las disposiciones legales aplicables al ámbito laboral.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema1/47.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 09
                p.text-center Al finalizar la relación laboral, liquidar correctamente el contrato de trabajo, pagando las acreencias pendientes y expidiendo un certificado laboral que detalle el tiempo de servicio, las labores desempeñadas y el salario devengado.
           
    
          .col-lg-4.order-lg-1
            figure
              img(src='@/assets/curso/tema1/38.png', alt='')


    #t_1_5.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.5] Del periodo de prueba y la jornada laboral
    
    p.mb-5 En Colombia, el período de prueba es una figura contemplada en el Artículo 76 del Código Sustantivo del Trabajo (CST), la cual se aplica exclusivamente en los contratos de trabajo. Este mecanismo permite tanto al empleador como al trabajador evaluar la relación laboral, dando la posibilidad de terminar el contrato de manera unilateral y anticipada, sin que haya lugar a indemnización por parte del empleador, siempre y cuando se cumplan ciertos requisitos legales.

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/48.png", data-aos="zoom-in")
      .col-lg-8
        .bg-color-2.p-4.mb-3(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema1/49.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 La finalidad principal del período de prueba es ofrecer un plazo razonable durante el cual ambas partes pueden valorar si las condiciones del contrato y el desempeño del trabajador son satisfactorias. Si alguna de las partes decide finalizar la relación laboral dentro del período de prueba, no se estará obligada a pagar indemnizaciones por terminación anticipada. 
              
        p(data-aos="fade-left") Sin embargo, para que esta figura sea válida, debe ser acordada por escrito, incluso en contratos verbales o a término indefinido. Si no se establece por escrito la duración del período de prueba, no existiría un marco claro para dar por terminado el contrato sin incurrir en consecuencias legales. 
        p(data-aos="fade-left") Las características principales del período de prueba son las siguientes:
    
    .bg-full-width.bg-color-info.mb-5
      .p-4.p-md-5
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-12
            ImagenInfografica.color-secundario
              template(v-slot:imagen)
                figure
                  img(src='@/assets/curso/tema1/50.png', alt='', style="max-width: 1106px;").mx-auto
    
              .bg-color-white.box-shadow.p-3(x="7.2%" y="49.5%" numero="+")
                h5 Duración limitada
                p El período de prueba no puede exceder los dos (2) meses, de acuerdo con lo que establece la Ley. Este tiempo es suficiente para que ambas partes evalúen la relación laboral.
    
              .bg-color-white.box-shadow.p-3(x="11.6%" y="81.5%" numero="+")
                h5 Formalidad escrita
                p Debe ser acordado por escrito, incluso en contratos verbales o indefinidos. La ausencia de un acuerdo escrito sobre el período de prueba puede generar incertidumbre en cuanto a la validez de su terminación anticipada.
    
              .bg-color-white.box-shadow.p-3(x="58.5%" y="95.5%" numero="+")
                h5 Evaluación de desempeño
                p Durante este periodo, el empleador evalúa el desempeño del trabajador, en función de los requisitos del puesto y las expectativas establecidas en el contrato.
    
              .bg-color-white.box-shadow.p-3(x="89.3%" y="81.5%" numero="+")
                h5 No indemnización
                p Si la relación laboral se termina dentro del periodo de prueba, el empleador no está obligado a pagar indemnización, salvo que se trate de una terminación ilegal o contraria a los derechos laborales.
    
              .bg-color-white.box-shadow.p-3(x="92.8%" y="52.5%" numero="+")
                h5 Garantías del trabajador
                p El trabajador goza de las mismas garantías y derechos laborales durante el período de prueba que en el resto de la relación laboral, como el pago de salario, prestaciones sociales y seguridad social.

    h5.mb-5 En cuanto a la jornada laboral, en Colombia, la Ley, puntualmente en el Artículo 161 del CST, establece que la jornada laboral estándar es de 48 horas semanales, distribuidas generalmente en 6 días de trabajo, con un máximo de 8 horas diarias. Sin embargo, existen disposiciones que permiten la reducción de la jornada laboral en ciertos sectores o situaciones, siempre respetando los límites establecidos por la Ley.


    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/tema1/51.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        p(data-aos="fade-left") El Congreso de la República expidió la Ley 2101 del 2021, que modificó el Artículo 161 del CST y estableció que la jornada laboral semanal se reducirá gradualmente de 48 a 42 horas. Esta reducción será progresiva, comenzando con una disminución de 1 o 2 horas por semana hasta alcanzar las 42 horas en el 2024.
        .bg-color-2.p-4.mb-3(data-aos="fade-left")
          p.mb-0 La reducción de la jornada laboral no implica una reducción en el salario de los trabajadores ni afectará el valor de las prestaciones sociales (como la prima de servicios, las cesantías y los intereses sobre las cesantías). Tampoco exonera al empleador de ninguna de sus obligaciones económicas hacia los trabajadores, tales como el pago de horas extras, auxilio de transporte o viáticos.

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="http://www.scielo.org.co/scielo.php?lng=en " target="_blank" rel="noopener noreferrer") Artículo: Presente y futuro del derecho del trabajo: Breve historia jurídica del derecho del trabajo en Colombia. 

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://hdl.handle.net/10983/23770" target="_blank" rel="noopener noreferrer") Artículo: Reconocimiento y promoción del principio de libre concurrencia en la licitación pública a través de la normatividad colombiana: Gutiérrez, E.  (2019).  Reconocimiento y promoción del principio de libre concurrencia en la licitación pública a través de la normatividad colombiana. 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://actualicese.com/" target="_blank" rel="noopener noreferrer") Actualícese. (2025, enero 27). ABC de la nómina. Actualícese. 

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://youtu.be/PqP47Jkg6_U?si=0xgOvpd_D18jQaRC" target="_blank" rel="noopener noreferrer") Derecho con guaca. (2019, 22 de noviembre). Modalidades de contrato laboral. [Video]. YouTube. 

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
