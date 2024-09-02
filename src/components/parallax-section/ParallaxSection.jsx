import { useRef } from 'react'
import { useScroll, useTransform, motion } from 'framer-motion'
import Image from '../shared/Image'
import Picture1 from '../../images/1.jpg'
import Picture2 from '../../images/2.jpg'
import Picture3 from '../../images/3.jpg'
import Picture4 from '../../images/4.jpg'
import Picture5 from '../../images/5.jpg'
import Picture6 from '../../images/6.jpg'
import Picture7 from '../../images/7.jpg'

const ParallaxSection = () => {
  const container = useRef(null)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  })

  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4])
  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5])
  const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6])
  const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8])
  const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9])

  const pictures = [
    {
      src: Picture1,
      scale: scale4,
    },
    {
      src: Picture2,
      scale: scale5,
    },
    {
      src: Picture3,
      scale: scale6,
    },
    {
      src: Picture4,
      scale: scale5,
    },
    {
      src: Picture5,
      scale: scale6,
    },
    {
      src: Picture6,
      scale: scale8,
    },
    {
      src: Picture7,
      scale: scale9,
    },
  ]

  return (
    <div ref={container} className='parallax-container'>
      <div className='sticky'>
        {pictures.map(({ src, scale }, index) => {
          return (
            <motion.div
              key={index}
              style={{ scale }}
              className='sticky-element'
            >
              <div className='image-container'>
                <Image src={src} layout='fill' alt='image' placeholder='blur' />
                {/* <Image src={src} layout='fill' alt='image' placeholder='blur' /> */}
              </div>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}

export default ParallaxSection
