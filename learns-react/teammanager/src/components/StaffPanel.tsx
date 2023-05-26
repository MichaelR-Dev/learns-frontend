import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import * as faSolid from '@fortawesome/free-solid-svg-icons'
import { createRef, useEffect, useState } from "react"
import EventEmitter from "events"
import { Event } from "react-big-calendar"

export type StaffMember = {
  name: string,
  title: string
}

export const StaffEntry = (props: StaffMember) => {
  const textInput = createRef();

  return (
    <tr>
      <td style={{width: '50vw'}}>{props.name}</td>
      <td style={{width: '40vw'}}>{props.title}</td>
    </tr>
  )
}

export const StaffPanel = () => {

  const textInput = createRef<HTMLInputElement>();
  const [Staff, setStaff] = useState<StaffMember[]>([]);

  useEffect(() => {
    const getStaff = async () => {
      const staffFromServer = await fetchStaff();
      setStaff(staffFromServer);
    }

    getStaff()
  }, []);

  //Fetch staff list
  const fetchStaff = async () => {
    const res = await fetch("http://192.168.1.138:3101/api/staff")
    const data = await res.json()

    return data
  }

  function filterList(): any {
    if(textInput.current) {
      textInput.current.focus()
    }

    setStaff(() => {
      return Staff.filter(staffMember => { 
        if(staffMember.name.toLowerCase().includes(textInput?.current?.value.toLowerCase() ? textInput.current.value.toLowerCase() : ""))
        {
          return true
        }else{
          return false
        }})
    })
  }
  
  return (
    <div className="staff-panel">
        <form onSubmit={(e) => {e.preventDefault()}}>
          <label htmlFor="staff-search">STAFF SEARCH</label>
          <button type="button"><FontAwesomeIcon icon={faSolid.faMagnifyingGlass}></FontAwesomeIcon></button>
          <input id="staff-search" ref={textInput} className="staff-search" type="text" placeholder="John Doe..." onKeyUp={filterList}></input>


          <table id="myTable">
            <tbody>
              {Staff.map((staff, i) => (<StaffEntry key={i} name={staff.name} title={staff.title}></StaffEntry>))}
            </tbody>
          </table>
        </form>
    </div>
  )
}