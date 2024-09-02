import React, { useState } from 'react'

const Image = ({
  src,
  alt,
  width,
  height,
  layout = 'intrinsic',
  objectFit = 'cover',
  priority = false,
  placeholder = 'empty',
  quality = 75,
  className = '',
  ...rest
}) => {
  const [loaded, setLoaded] = useState(false)

  const handleLoad = () => {
    setLoaded(true)
  }

  const getPlaceholderStyle = () => {
    if (placeholder === 'blur') {
      return {
        filter: 'blur(10px)',
        transition: 'filter 0.3s ease-in-out',
      }
    }
    return {}
  }

  const getStyle = () => {
    return {
      objectFit,
      width: layout === 'responsive' || layout === 'fill' ? '100%' : width,
      height: layout === 'fill' ? '100%' : height,
      opacity: loaded ? 1 : 0,
      transition: 'opacity 0.3s ease-in-out',
    }
  }

  return (
    <div
      className={`image-container ${
        layout === 'responsive' ? 'responsive' : ''
      } ${className}`}
      style={{ position: 'relative', width, height }}
    >
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        style={getStyle()}
        onLoad={handleLoad}
        loading={priority ? 'eager' : 'lazy'}
        {...rest}
      />
      {!loaded && placeholder !== 'empty' && (
        <div
          className='placeholder'
          style={{
            ...getPlaceholderStyle(),
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0,0,0,0.1)',
          }}
        ></div>
      )}
    </div>
  )
}

export default Image
