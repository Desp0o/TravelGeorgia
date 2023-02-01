export default function Social(props) {
    return (
        <div className={`flex ${props.gap} justify-center`}>

            <a href="https://www.facebook.com/profile.php?id=100063642634952" target='_blank' alt='fblink'>
                <svg className="cursor-pointer" width="35px" height="35px" viewBox="0 0 20 20">
                    <rect x="0" fill="none" width="20" height="20" />
                    <g>
                        <path fill={props.fill} d="M2.89 2h14.23c.49 0 .88.39.88.88v14.24c0 .48-.39.88-.88.88h-4.08v-6.2h2.08l.31-2.41h-2.39V7.85c0-.7.2-1.18 1.2-1.18h1.28V4.51c-.22-.03-.98-.09-1.86-.09-1.85 0-3.11 1.12-3.11 3.19v1.78H8.46v2.41h2.09V18H2.89c-.49 0-.89-.4-.89-.88V2.88c0-.49.4-.88.89-.88z" />
                    </g>
                </svg>
            </a>

            <a href="https://www.instagram.com/hello_from_georgia/" target='_blank' alt='fblink'>
                <svg className="cursor-pointer" width="35px" height="35px" viewBox="0 0 48 48" version="1.1" id="Shopicons" >
                    <g fill={props.fill} id="instagram_00000127030415805702900630000013396224003006281109_">
                        <path d="M0-.019h48v48H0v-48z" fill="none" />
                        <path d="M36.019 8A3.986 3.986 0 0 1 40 11.981v24.038A3.986 3.986 0 0 1 36.019 40H11.981A3.986 3.986 0 0 1 8 36.019V11.981A3.986 3.986 0 0 1 11.981 8h24.038m0-4H11.981A7.98 7.98 0 0 0 4 11.981v24.038A7.98 7.98 0 0 0 11.981 44h24.038A7.98 7.98 0 0 0 44 36.019V11.981A7.98 7.98 0 0 0 36.019 4z" />
                        <path d="M24 34c-5.514 0-10-4.486-10-10s4.486-10 10-10 10 4.486 10 10-4.486 10-10 10zm0-16c-3.309 0-6 2.691-6 6s2.691 6 6 6 6-2.691 6-6-2.691-6-6-6z" />
                        <circle cx="35" cy="13" r="2" />
                    </g>
                </svg>
            </a>

        </div>
    )
}