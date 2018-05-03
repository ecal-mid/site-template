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
      student: 'Iyo Bisseck'
    },
    {
      type: 'Video',
      file: 'barradeau/Zibaut_Anouk_Mouvement/capture.mp4',
      margin: true
    },
    {
      type: 'SensoryTitle',
      title: 'Mouvement',
      student: 'Anouk Zibaut'
    },
    {
      type: 'SensoryTitle',
      title: 'Shader',
      margin: true,
      student: 'Kevin Breithaupt'
    },
    // {
    //   type: 'IFrame',
    //   source: 'resources/barradeau/Breithaupt_Kevin_Shader'
    // },
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
