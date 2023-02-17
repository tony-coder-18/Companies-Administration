import React from 'react';
import { Link } from 'react-router-dom'
import styles from './sidebar.module.css';

export default function Sidebar() {
    const userName = "Laura";

    return (
        <div
            id="sidebar"
            className={styles.sidebar}
        >
            <div class="">
                <div className={styles.profile}>
                    <h2 class="">
                        Hi { userName }!
                    </h2>
                </div>

                <div class="">
                    <h3>
                        Menu
                    </h3>
                    <nav aria-label='main-nav'>
                        <ul>
                            <li>
                                <Link to={'/'} className='menu-lateral'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" viewBox="0 0 16 14" fill="currentColor">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M8 1.75V3.25H14C14.825 3.25 15.5 3.925 15.5 4.75V12.25C15.5 13.075 14.825 13.75 14 13.75H2C1.175 13.75 0.5 13.075 0.5 12.25V1.75C0.5 0.925 1.175 0.25 2 0.25H6.5C7.325 0.25 8 0.925 8 1.75ZM2 12.25H3.5V10.75H2V12.25ZM3.5 9.25H2V7.75H3.5V9.25ZM2 6.25H3.5V4.75H2V6.25ZM3.5 3.25H2V1.75H3.5V3.25ZM5 12.25H6.5V10.75H5V12.25ZM6.5 9.25H5V7.75H6.5V9.25ZM5 6.25H6.5V4.75H5V6.25ZM6.5 3.25H5V1.75H6.5V3.25ZM8 12.25H13.25C13.6625 12.25 14 11.9125 14 11.5V5.5C14 5.0875 13.6625 4.75 13.25 4.75H8V6.25H9.5V7.75H8V9.25H9.5V10.75H8V12.25ZM12.5 6.25H11V7.75H12.5V6.25ZM11 9.25H12.5V10.75H11V9.25Z" fill="#6D7D8B" />
                                    </svg>
                                    <span>
                                        Companies
                                    </span>
                                </Link>
                            </li>
                            <li>
                                <Link to={'people'}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12" viewBox="0 0 18 12" fill="currentColor">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M8.2425 3C8.2425 4.245 7.245 5.25 6 5.25C4.755 5.25 3.75 4.245 3.75 3C3.75 1.755 4.755 0.75 6 0.75C7.245 0.75 8.2425 1.755 8.2425 3ZM14.2425 3C14.2425 4.245 13.245 5.25 12 5.25C10.755 5.25 9.75 4.245 9.75 3C9.75 1.755 10.755 0.75 12 0.75C13.245 0.75 14.2425 1.755 14.2425 3ZM6 6.75C4.2525 6.75 0.75 7.6275 0.75 9.375V10.5C0.75 10.9125 1.0875 11.25 1.5 11.25H10.5C10.9125 11.25 11.25 10.9125 11.25 10.5V9.375C11.25 7.6275 7.7475 6.75 6 6.75ZM11.2725 6.7875C11.535 6.765 11.7825 6.75 12 6.75C13.7475 6.75 17.25 7.6275 17.25 9.375V10.5C17.25 10.9125 16.9125 11.25 16.5 11.25H12.615C12.6975 11.0175 12.75 10.7625 12.75 10.5V9.375C12.75 8.2725 12.1575 7.44 11.3025 6.8175C11.3002 6.81523 11.298 6.81227 11.2955 6.80904C11.2898 6.8016 11.283 6.79273 11.2725 6.7875Z" fill="#6D7D8B" />
                                    </svg>
                                    <span>
                                        People
                                    </span>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                    <h3>
                        Settings
                    </h3>
                    <nav aria-label='settings-nav'>
                        <ul>
                            <li>
                                <Link>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.5 8C0.5 3.8525 3.8525 0.5 8 0.5C12.1475 0.5 15.5 3.8525 15.5 8C15.5 12.1475 12.1475 15.5 8 15.5C3.8525 15.5 0.5 12.1475 0.5 8ZM10.1675 11.225C10.46 11.5175 10.9325 11.5175 11.225 11.225C11.51 10.9325 11.51 10.4525 11.225 10.1675L9.0575 8L11.225 5.8325C11.5175 5.54 11.5175 5.0675 11.225 4.775C10.9325 4.4825 10.46 4.4825 10.1675 4.775L8 6.9425L5.8325 4.775C5.54 4.4825 5.0675 4.4825 4.775 4.775C4.63456 4.91512 4.55564 5.10536 4.55564 5.30375C4.55564 5.50214 4.63456 5.69238 4.775 5.8325L6.9425 8L4.775 10.1675C4.63456 10.3076 4.55564 10.4979 4.55564 10.6962C4.55564 10.8946 4.63456 11.0849 4.775 11.225C5.0675 11.5175 5.54 11.5175 5.8325 11.225L8 9.0575L10.1675 11.225Z" fill="#6D7D8B" />
                                    </svg>
                                    <span>
                                        Log out
                                    </span>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
}
