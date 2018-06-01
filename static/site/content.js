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
      title: 'Moonshade',
      student: 'Tamara Viràg',
      description: 'Moonshade is a shader-generated moon that waxes or wanes based on the global illumination of the room/space in which it is. The darker the room, the fuller the moon.'
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
      student: 'Alfatih Al Zouabi',
      description: 'A character and his environment deformed using a Leap Motion.'
    },
    {
      type: 'Video',
      file: 'resources/barradeau/Boulenaz_Jonathan_HeartBeat/SB_3_4_1.mp4',
      margin: true,
      style: {
        height: 'initial'
      }
    },
    {
      type: 'SensoryTitle',
      title: 'Heart Beat',
      student: 'Jonathan Boulenaz',
      description: 'Sport data visualization'
    },
    // Sebastien Matos
    {
      type: 'IFrame',
      source: 'resources/barradeau/Matos_Sébastien_Extrude',
      margin: true,
      flag: 'Draw',
      size: 100
    },
    {
      type: 'SensoryTitle',
      title: 'Extrude',
      student: 'Sébastien Matos',
      description: 'Extrusions generated from mouse traces'
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
      student: 'Bastien Mouthon',
      description: 'Generated covers from music metadata.'
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
      description: 'Development and multiplication of a bacteria using the Houdini procedural generation software'
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
      student: 'Anouk Zibaut',
      description: '"Errance visuel" a data visualization of the physical movement in school. The motion sensors maps the movements depending on the position of the passers-by and their speed. The variations are determined by the fluxes and their importance according to the time of the day.'
    },
    {
      type: 'IFrame',
      source: 'resources/barradeau/Breithaupt_Kevin_Shader',
      margin: true,
      flag: 'Drag<br>-<br>Zoom',
      size: 150
    },
    {
      type: 'SensoryTitle',
      title: 'Shader',
      student: 'Kevin Breithaupt',
      description: 'This project consists of a collection of experiments on using shaders, using the Three.js library which allows the display and creation of a 3D universe through programming. The collection includes several different tests and techniques on polygon and point displacement, fluid and terrain simulation, all available in a slideshow form.'
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
      student: 'Nathan Vogel',
      description: 'SOUNDLA uses musical audio data to procedurally build a tridimensional structure with the Diffusion-Limited Aggregation algorithm inside the 3D VFX software Houdini.'
    },
    // Ernest de Lapaillone
    {
      type: 'IFrame',
      source: 'resources/barradeau/de_Lapaillone_Ernest_Automorceau',
      margin: true,
      flag: 'Play',
      size: 100
    },
    {
      type: 'SensoryTitle',
      title: 'Automorceau',
      student: 'Ernest de Lapaillone',
      description: 'Chord generator'
    },
  ]
}

export default content
