import { IconProp } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

type Props = {
    img: IconProp,
    content: string,
    linkTo: string
}

export const DropdownItem = (props: Props) => {
  return (
    <a style={{  textDecoration: 'none'}} href={props.linkTo}>
        <li className='dropdownItem'>
            <FontAwesomeIcon style={{color: 'red', marginRight: '20px'}} icon={props.img} />{props.content}
        </li>
    </a>
  )
}