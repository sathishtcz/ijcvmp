import React from 'react'
import Issues from '../../shared/components/Issues/Issues'
import HelmetComponent from '../HelmetComponent/Helmetcomponent'

export default function Issuepage() {
  return (
    <div>
      <HelmetComponent title="Issues - International Journal of Computer Vision and Multimedia Processing" />
      <Issues />
      </div>
  )
}
