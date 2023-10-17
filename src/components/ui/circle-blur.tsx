type Position = {
  top: string
  left: string
  bottom: string
  right: string
}

type Size = {
  width: string
  height: string
}

interface CircleBlurParams {
  circleOneParams: {
    color: string
    size: Size
    position: Position,
    blur: string
  },
  circleTwoParams: {
    color: string
    size: Size
    position: Position
    blur: string
  }
}

export const CircleBlur = ({
  circleOneParams,
  circleTwoParams
}: CircleBlurParams) => {



  return (
    <div className='relative'>
      <div style={{
        position: "absolute",
        inset: `${circleOneParams.position.top} ${circleOneParams.position.right} ${circleOneParams.position.bottom} ${circleOneParams.position.left}`,
        width: circleOneParams.size.width,
        height: circleOneParams.size.height,
        backgroundColor: circleOneParams.color,
        filter: `blur(${circleOneParams.blur})`,
        opacity: 0.5
      }} />
      <div
        style={{
          position: "absolute",
          inset: `${circleTwoParams.position.top} ${circleTwoParams.position.right} ${circleTwoParams.position.bottom} ${circleTwoParams.position.left}`,
          width: circleTwoParams.size.width,
          height: circleTwoParams.size.height,
          backgroundColor: circleTwoParams.color,
          filter: `blur(${circleTwoParams.blur})`,
          opacity: 0.5
        }}
      />
    </div>
  )
}
