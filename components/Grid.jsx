import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/BentoGrid'
import { gridItems } from '@/data'

const Grid = () => {
  return (
    <section className="id">
        <BentoGrid>
            {gridItems.map(({ title, description, id, className, img, imgClassName, spareImg, titleClassName })=>(
                <BentoGridItem
                    id={id}
                    key={id}
                    title={title}
                    description={description}
                    className={className}
                    img={img}
                    imgClassName={imgClassName}
                    spareImg={spareImg}
                    titleClassName={titleClassName}
                />
            ))}
        </BentoGrid>
    </section>
  )
}

export default Grid
