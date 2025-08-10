import React from 'react'
import SmallLabel from './SmallLabel'
import { cn } from '@/lib/utils'

interface Props {
  iconLabel: string,
  icon: React.ReactNode,
  heading: string,
  paragraph?: string,
  iconColor: string,
  headingColor: string,
  paragraphColor?: string,
}

const SectionHeading = ({icon, iconLabel, heading, paragraph, iconColor, headingColor, paragraphColor}:Props) => {
  return (
    <div className="flex flex-col items-center text-center gap-5">
      <SmallLabel icon={icon} label={iconLabel} style={iconColor} />
      <h1 className={cn(
        "capitalize text-3xl md:text-5xl font-bold",
        headingColor
      )}>{heading}</h1>
      {paragraph && (
        <p className={cn(
          "text-xl max-w-3xl mx-auto leading-relaxed",
          paragraphColor
        )}>{paragraph}</p>
      )}
    </div>
  )
}

export default SectionHeading