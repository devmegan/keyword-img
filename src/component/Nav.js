import { HREFS } from '../Config';

export default function Nav() {
    return (
        <div className="navbar bg-primary text-white">
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-xl" href={HREFS.app}>keyword-img</a>
            </div>
            {HREFS.repo && (
                <div className="flex-none">
                    <ul className="menu menu-horizontal p-0">
                        <li><a href={HREFS.repo} target="_blank" rel="noreferrer">Repo</a></li>
                    </ul>
                </div>
            )}
        </div>
    )
}