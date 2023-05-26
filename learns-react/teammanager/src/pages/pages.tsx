import { Dashboard } from './dashboard';
import { Login } from './login';
import { Events } from './events';
import { Charts } from './charts';
import { Schedule } from './schedule';
import { Staff } from './staff';
import { NotFound } from './notfound'
import { StaffMember } from '../components/StaffPanel';

export function DashboardPage () :JSX.Element {
    return Dashboard();
};

export function LoginPage () :JSX.Element {
    return Login();
};

export function EventsPage () :JSX.Element {
    return Events();
};

export function ChartsPage () :JSX.Element {
    return Charts();
};

export function SchedulePage () :JSX.Element {
    return Schedule();
};

export function StaffPage () :JSX.Element {
    return Staff();
};

export function NOTFOUND() :JSX.Element {
    return NotFound();
}