import React from 'react'
import '../stylesheets/notfound.css'
import * as Comp from '../components/components'

type Props = {}

export const NotFound = () => {
  return (
    <>
        <div id='Error'>
            <Comp.Bot404/>
        </div>
    </>
  )
}