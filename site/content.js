const content = {
  headerModules: [
    {
      type: 'HeaderImage',
      title: 'Growth',
      subTitle: 'Workshop with Nicolas Barradeau',
      file: 'resources/barradeau/Mouthon_Bastien_CoverGenerator/bastien.gif',
      contain: true,
      repeat: true,
      style: {
        height: '100vh'
      }
    }
  ],
  wrapperModules: [
    {
      type: 'Video',
      file: 'resources/barradeau/Virag_Tamara_ShaderMoon/moonshade.mp4',
      margin: true,
      style: {
        height: 'initial'
      }
    },
    {
      type: 'SensoryTitle',
      title: 'Shader Moon',
      student: 'Tamara Viràg'
    },
    {
      type: 'Video',
      file: 'resources/barradeau/Al_Zouabi_Alfatih_Ohboi/decroissance.mp4',
      margin: true,
      style: {
        height: 'initial'
      }
    },
    {
      type: 'SensoryTitle',
      title: 'Oh boi',
      student: 'Alfatih Al Zouabi'
    },
    {
      type: 'Video',
      file: 'resources/barradeau/Boulenaz_jonathan_HeartBeat/SB_3_4_1.mp4',
      margin: true,
      style: {
        height: 'initial'
      }
    },
    {
      type: 'SensoryTitle',
      title: 'Heart Beat',
      student: 'Jonathan Boulenaz'
    },
    // Sebastien Matos
    {
      type: 'IFrame',
      source: 'resources/barradeau/Matos_Sébastien_Extrude',
      margin: true
    },
    {
      type: 'SensoryTitle',
      title: 'Extrude',
      student: 'Sébastien Matos'
    },
    // Bastien Mouthon
    {
      type: 'Slider',
      margin: true,
      batches: [
        {
          type: 'images',
          path: 'resources/barradeau/Mouthon_Bastien_CoverGenerator/',
          range: [0, 13],
          file:'/img/%num/%.png'
        }
      ]
    },
    {
      type: 'SensoryTitle',
      title: 'Cover Generator',
      student: 'Bastien Mouthon'
    },
    // Iyo Bisseck
    {
      type: 'Video',
      file: 'resources/barradeau/Bisseck_Iyo_Infected/iyo_1.mp4',
      margin: true,
      style: {
        height: 'initial'
      }
    },
    {
      type: 'SensoryTitle',
      title: 'Infected',
      student: 'Iyo Bisseck',
    },
    {
      type: 'Video',
      file: 'resources/barradeau/Zibaut_Anouk_Mouvement/capture.mp4',
      margin: true,
      style: {
        height: 'initial'
      }
    },
    {
      type: 'SensoryTitle',
      title: 'Mouvement',
      student: 'Anouk Zibaut'
    },
    {
      type: 'IFrame',
      source: 'resources/barradeau/Breithaupt_Kevin_Shader',
      margin: true,
    },
    {
      type: 'SensoryTitle',
      title: 'Shader',
      student: 'Kevin Breithaupt'
    },
    // Nathan Vogel
    {
      type: 'Video',
      file: 'resources/barradeau/Vogel_Nathan_Soundla/vogel.nathan_rendu.mp4',
      margin: true,
      style: {
        height: 'initial'
      }
    },
    {
      type: 'SensoryTitle',
      title: 'Soundla',
      student: 'Nathan Vogel'
    },
    // Ernest de Lapaillone
    {
      type: 'IFrame',
      source: 'resources/barradeau/de_Lapaillone_Ernest_Automorceau',
      margin: true
    },
    {
      type: 'SensoryTitle',
      title: 'Automorceau',
      student: 'Ernest de Lapaillone'
    },
  ]
}

export default content
