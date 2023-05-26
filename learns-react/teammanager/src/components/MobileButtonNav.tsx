import { IconProp } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon, FontAwesomeIconProps } from "@fortawesome/react-fontawesome"
import { useLocation } from 'react-router-dom'

type Props = {
    img: IconProp,
    linkTo: string
}

export const MobileButtonNav = (props: Props) => {
    const location = useLocation();

    return (
        <a className={`${location.pathname.includes(props.linkTo) ? 'active' : 'inactive'}`} style={{  textDecoration: 'none'}} href={props.linkTo}>
            <li className='dropdownItem'>
                <FontAwesomeIcon style={{color: 'white',  fontSize: 'x-large'}} icon={props.img} />
            </li>
        </a>
    )
}