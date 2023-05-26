import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as faSolid from '@fortawesome/free-solid-svg-icons'
import { DropdownItem } from './DropdownItem'

type Props = {
    userName: string
}

export const UserCard = (props: Props) => {
    const [open, setOpen] = useState(false)

    const onButtonClick = () => {
        setOpen(!open);
    }

    const onButtonBlur = () => {
        setOpen(false);
    }

    if(props.userName.length <= 0){
        return (
            <div id='userCard'>
                <h3>login</h3>
            </div>
        )
    } 

  return (
    <div id='userCard'>
        <button className='menu-trigger' type='button' onClick={onButtonClick} onBlur={onButtonBlur}><FontAwesomeIcon style={{fontSize: '20'}} icon={open ? faSolid.faBarsStaggered : faSolid.faBars} /></button>

        <div className={`dropdown-menu ${open ? 'active' : 'inactive'}`}>
            <ul className='dropdown-content'>
                <DropdownItem img={faSolid.faHome} linkTo="/" content='Home'></DropdownItem>
                <DropdownItem img={faSolid.faList} linkTo="/schedule" content='Schedule'></DropdownItem>
                <DropdownItem img={faSolid.faFaceGrin} linkTo="/staff" content='Staff'></DropdownItem>
                <DropdownItem img={faSolid.faCalendarAlt} linkTo="/calendar" content='Calendar'></DropdownItem>
                <DropdownItem img={faSolid.faChartColumn} linkTo="/charts" content='Charts'></DropdownItem>
                <br/>
                <DropdownItem img={faSolid.faCog} linkTo="/settings" content='Settings'></DropdownItem>
                <DropdownItem img={faSolid.faSign} linkTo="/logout" content='Logout'></DropdownItem>
            </ul>
        </div>
    </div>
  )
}