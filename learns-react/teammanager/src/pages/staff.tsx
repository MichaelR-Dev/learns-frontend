import * as Comp from "../components/components"
import { StaffPanel, StaffMember } from "../components/StaffPanel"
import "../stylesheets/staff.css"

export function Staff() :JSX.Element {
    return (
        <div className="staff-page">
            <StaffPanel></StaffPanel>
        </div>
    )
};