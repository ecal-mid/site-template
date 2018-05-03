const content = {
  headerModules: [
    {
      type: 'Slider',
      batches: [
        {
          type: 'images',
          path: 'img/posters/',
          files: [
            'poster3.jpg',
            'poster4.jpg',
            'poster5.jpg',
            'poster1.jpg',
            'poster2.jpg'
          ]
        },
        {
          type: 'images',
          path: 'img/',
          files: [
            'workshop_MID_03.jpg'
          ]
        }
      ],
      style: {
        height: '100vh'
      }
    }
  ],
  wrapperModules: [
    {
      type: 'SensoryTitle',
      title: 'Sensory Augmentation & Brain Plasticity',
      professor: 'Workshop with Philip Shuette',
      style: {
        'border-bottom': 'solid black 1px'
      }
    },
    {
      type: 'SensoryTitle',
      title: 'Haptic Sound',
      students: 'Students: Lisa Kishtoo, Maya Bellier, Ivan Chestopaloff',
      description: `The device is placed on the chest, a part of the body that
        resonates and where you easily feel vibrations. The frequencies of the
        sound are mapped on a 9*64 grid. Low frequencies at the bottom and high
        frequencies at the top. The column of the middle is where you feel the
        real frequencies of the music. It takes 4 columns to fade in, 4 columns
        to fade out, so you get that rolling effect, and maybe can try to expect
        the frequencies you are going to feel. Each white circle here is a
        vibrator, and its opacity represents the intensity of the vibrations.`
    },
    {
      type: 'Video',
      path: 'img/haptic_sound/',
      file: 'BSHAPE.mp4',
      style: {
        height: 'initial'
      }
    },
    {
      type: 'SensoryTitle',
      title: 'Feeld',
      students: 'Students: Diane Thouvenin, Guillaume Giraud, Mica Pica, Paul Noël',
      description: `More connected to the World everyday, we keep focused all
        the time on our electronic devices. As a result, we feel more connected
        to our friends and family. Then how get people more depressed and feel
        more and more lonely? We arrived to the conclusion that being focused on
        our electronic devices keep us away from listening our body and emotions.
        As if we couldn’t understand what happens in our head anymore.
        Eventually, the more technology absorbs our mind, the more we loose the
        “sense of empathy”. Our purpose is to create a new sense of empathy
        developing the already existing sense of touch.`
    },
    {
      type: 'Video',
      path: 'img/feeld/',
      file: 'TextureFinal.mp4',
      style: {
        height: 'initial'
      }
    },
    {
      type: 'SensoryTitle',
      title: 'Data Scent',
      students: 'Students: Aurélien Pellegrini, Bastien Claessens, Evan Kelly, Léonard Guyot',
      description: `Our numerical identity is made of what we used to
        do on the internet. If you like a post on Facebook, share an image on
        Instagram or listen to music on Spotify, you are building your own
        numerical identity. What defined this kind of data is that these are
        not physically accessible. We cannot easily touch them, taste them or
        even smell them. So that’s the point, we want to make this numerical
        identity perceptible by one of our five senses and learn people how to
        develop it: smell. The another goal is to be able to differentiate the
        numerical profile of the other people. After training your nose will
        know what kind of person you have in front of you.`
    },
    {
      type: 'Slider',
      batches: [
        {
          type: 'images',
          path: 'img/data_scent/3d/',
          range: [1, 19],
          file: 'TheDataScent(/%num/%).jpg'
        }
      ]
    },
    {
      type: 'SensoryTitle',
      title: 'Interstellar Sensing',
      students: 'Students: Kylan Luginbühl, Yaël Sidler'
    },
    {
      type: 'Video',
      path: 'img/interstellar_sensing/',
      file: 'RenduPietroCompresser.mp4',
      style: {
        height: 'initial'
      }
    },
    {
      type: 'SensoryTitle',
      title: 'Prosh',
      students: 'Students: Pablo Bellon, Antoine Barras',
      description: `The sonar, like echolocalisation, makes distance easy and
        precise to quantify. By placing two ultrasonic sensors and two vibrtors
        on a hat, the user is able to feel a precise feedback depending on the
        proximity of an object. The vibrator would shake faster if the object
        is closer.`,
    },
    {
      type: 'Video',
      path: 'img/prosh/',
      file: 'Main_Final_3.mp4',
      style: {
        height: 'initial'
      }
    }
  ]
}

export default content
