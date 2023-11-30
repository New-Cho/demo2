import {useEffect, useState} from "react";
import axios from "axios";

function Sidebar(){
    const [msg,msgSet] = useState("hello")
    useEffect(() => {
        axios.get("http://localhost",{

        }).then(response=>{
            msgSet(response.data);
            console.log(response.data);
        })
    }, []);
    const str2 = "<div>hello</div>"
    const str = "<aside class=\"left-sidebar\">\n" +
        "            <div>\n" +
        "                <div class=\"brand-logo d-flex align-items-center justify-content-between\">\n" +
        "                    <a href=\"index.html\" class=\"text-nowrap logo-img\">\n" +
        "                        <img src=\"../assets/images/logos/dark-logo.svg\" width=\"180\" alt=\"\"/>\n" +
        "                    </a>\n" +
        "                    <div class=\"close-btn d-xl-none d-block sidebartoggler cursor-pointer\" id=\"sidebarCollapse\">\n" +
        "                        <i class=\"ti ti-x fs-8\"></i>\n" +
        "                    </div>\n" +
        "                </div>\n" +
        "                <nav class=\"sidebar-nav scroll-sidebar\" data-simplebar=\"\">\n" +
        "                    <ul id=\"sidebarnav\">\n" +
        "                        <li class=\"nav-small-cap\">\n" +
        "                            <i class=\"ti ti-dots nav-small-cap-icon fs-4\"></i>\n" +
        "                            <span class=\"hide-menu\">Home</span>\n" +
        "                        </li>\n" +
        "                        <li class=\"sidebar-item\">\n" +
        "                            <a class=\"sidebar-link\" href=\"./index.html\" aria-expanded=\"false\">\n" +
        "                <span>\n" +
        "                  <i class=\"ti ti-layout-dashboard\"></i>\n" +
        "                </span>\n" +
        "                                <span class=\"hide-menu\">사용내역</span>\n" +
        "                            </a>\n" +
        "                        </li>\n" +
        "                        <li class=\"nav-small-cap\">\n" +
        "                            <i class=\"ti ti-dots nav-small-cap-icon fs-4\"></i>\n" +
        "                            <span class=\"hide-menu\">UI COMPONENTS</span>\n" +
        "                        </li>\n" +
        "                        <li class=\"sidebar-item\">\n" +
        "                            <a class=\"sidebar-link\" href=\"./ui-buttons.html\" aria-expanded=\"false\">\n" +
        "                <span>\n" +
        "                  <i class=\"ti ti-article\"></i>\n" +
        "                </span>\n" +
        "                                <span class=\"hide-menu\">Buttons</span>\n" +
        "                            </a>\n" +
        "                        </li>\n" +
        "                        <li class=\"sidebar-item\">\n" +
        "                            <a class=\"sidebar-link\" href=\"./ui-alerts.html\" aria-expanded=\"false\">\n" +
        "                <span>\n" +
        "                  <i class=\"ti ti-alert-circle\"></i>\n" +
        "                </span>\n" +
        "                                <span class=\"hide-menu\">Alerts"+str2+"</span>\n" +
        "                            </a>\n" +
        "                        </li>\n" +
        "                        <li class=\"sidebar-item\">\n" +
        "                            <a class=\"sidebar-link\" href=\"./ui-card.html\" aria-expanded=\"false\">\n" +
        "                <span>\n" +
        "                  <i class=\"ti ti-cards\"></i>\n" +
        "                </span>\n" +
        "                                <span class=\"hide-menu\">Card</span>\n" +
        "                            </a>\n" +
        "                        </li>\n" +
        "                        <li class=\"sidebar-item\">\n" +
        "                            <a class=\"sidebar-link\" href=\"./ui-forms.html\" aria-expanded=\"false\">\n" +
        "                <span>\n" +
        "                  <i class=\"ti ti-file-description\"></i>\n" +
        "                </span>\n" +
        "                                <span class=\"hide-menu\">Forms</span>\n" +
        "                            </a>\n" +
        "                        </li>\n" +
        "                        <li class=\"sidebar-item\">\n" +
        "                            <a class=\"sidebar-link\" href=\"./ui-typography.html\" aria-expanded=\"false\">\n" +
        "                <span>\n" +
        "                  <i class=\"ti ti-typography\"></i>\n" +
        "                </span>\n" +
        "                                <span class=\"hide-menu\">Typography</span>\n" +
        "                            </a>\n" +
        "                        </li>\n" +
        "                        <li class=\"nav-small-cap\">\n" +
        "                            <i class=\"ti ti-dots nav-small-cap-icon fs-4\"></i>\n" +
        "                            <span class=\"hide-menu\">AUTH</span>\n" +
        "                        </li>\n" +
        "                        <li class=\"sidebar-item\">\n" +
        "                            <a class=\"sidebar-link\" href=\"./authentication-login.html\" aria-expanded=\"false\">\n" +
        "                <span>\n" +
        "                  <i class=\"ti ti-login\"></i>\n" +
        "                </span>\n" +
        "                                <span class=\"hide-menu\">Login</span>\n" +
        "                            </a>\n" +
        "                        </li>\n" +
        "                        <li class=\"sidebar-item\">\n" +
        "                            <a class=\"sidebar-link\" href=\"./authentication-register.html\" aria-expanded=\"false\">\n" +
        "                <span>\n" +
        "                  <i class=\"ti ti-user-plus\"></i>\n" +
        "                </span>\n" +
        "                                <span class=\"hide-menu\">Register</span>\n" +
        "                            </a>\n" +
        "                        </li>\n" +
        "                        <li class=\"nav-small-cap\">\n" +
        "                            <i class=\"ti ti-dots nav-small-cap-icon fs-4\"></i>\n" +
        "                            <span class=\"hide-menu\">EXTRA</span>\n" +
        "                        </li>\n" +
        "                        <li class=\"sidebar-item\">\n" +
        "                            <a class=\"sidebar-link\" href=\"./icon-tabler.html\" aria-expanded=\"false\">\n" +
        "                <span>\n" +
        "                  <i class=\"ti ti-mood-happy\"></i>\n" +
        "                </span>\n" +
        "                                <span class=\"hide-menu\">Icons</span>\n" +
        "                            </a>\n" +
        "                        </li>\n" +
        "                        <li class=\"sidebar-item\">\n" +
        "                            <a class=\"sidebar-link\" href=\"./sample-page.html\" aria-expanded=\"false\">\n" +
        "                <span>\n" +
        "                  <i class=\"ti ti-aperture\"></i>\n" +
        "                </span>\n" +
        "                                <span class=\"hide-menu\">Sample Page</span>\n" +
        "                            </a>\n" +
        "                        </li>\n" +
        "                    </ul>\n" +
        "                    <div class=\"unlimited-access hide-menu bg-light-primary position-relative mb-7 mt-5 rounded\">\n" +
        "                        <div class=\"d-flex\">\n" +
        "                            <div class=\"unlimited-access-title me-3\">\n" +
        "                                <h6 class=\"fw-semibold fs-4 mb-6 text-dark w-85\">Upgrade to pro</h6>\n" +
        "                                <a href=\"https://adminmart.com/product/modernize-bootstrap-5-admin-template/\"\n" +
        "                                   target=\"_blank\" class=\"btn btn-primary fs-2 fw-semibold lh-sm\">Buy Pro</a>\n" +
        "                            </div>\n" +
        "                            <div class=\"unlimited-access-img\">\n" +
        "                                <img src=\"../assets/images/backgrounds/rocket.png\" alt=\"\" class=\"img-fluid\"/>\n" +
        "                            </div>\n" +
        "                        </div>\n" +
        "                    </div>\n" +
        "                </nav>\n" +
        "            </div>\n" +
        "        </aside>"
    return (
        <div dangerouslySetInnerHTML={{__html: str}}></div>
    );

}

export default Sidebar;
