import {useEffect, useState} from "react";
import axios from "axios";

function Header(){

    const str = "<header class=\"app-header\">\n" +
        "            <nav class=\"navbar navbar-expand-lg navbar-light\">\n" +
        "                <ul class=\"navbar-nav\">\n" +
        "                    <li class=\"nav-item d-block d-xl-none\">\n" +
        "                        <a class=\"nav-link sidebartoggler nav-icon-hover\" id=\"headerCollapse\" href=\"javascript:void(0)\">\n" +
        "                            <i class=\"ti ti-menu-2\"></i>\n" +
        "                        </a>\n" +
        "                    </li>\n" +
        "                    <li class=\"nav-item\">\n" +
        "                        <a class=\"nav-link nav-icon-hover\" href=\"javascript:void(0)\">\n" +
        "                            <i class=\"ti ti-bell-ringing\"></i>\n" +
        "                            <div class=\"notification bg-primary rounded-circle\"></div>\n" +
        "                        </a>\n" +
        "                    </li>\n" +
        "                </ul>\n" +
        "                <div class=\"navbar-collapse justify-content-end px-0\" id=\"navbarNav\">\n" +
        "                    <ul class=\"navbar-nav flex-row ms-auto align-items-center justify-content-end\">\n" +
        "                        <a href=\"https://adminmart.com/product/modernize-free-bootstrap-admin-dashboard/\" target=\"_blank\" class=\"btn btn-primary\">Download Free</a>\n" +
        "                        <li class=\"nav-item dropdown\">\n" +
        "                            <a class=\"nav-link nav-icon-hover\" href=\"javascript:void(0)\" id=\"drop2\" data-bs-toggle=\"dropdown\"\n" +
        "                               aria-expanded=\"false\">\n" +
        "                                <img src=\"../assets/images/profile/user-1.jpg\" alt=\"\" width=\"35\" height=\"35\" class=\"rounded-circle\"/>\n" +
        "                            </a>\n" +
        "                            <div class=\"dropdown-menu dropdown-menu-end dropdown-menu-animate-up\" aria-labelledby=\"drop2\">\n" +
        "                                <div class=\"message-body\">\n" +
        "                                    <a href=\"javascript:void(0)\" class=\"d-flex align-items-center gap-2 dropdown-item\">\n" +
        "                                        <i class=\"ti ti-user fs-6\"></i>\n" +
        "                                        <p class=\"mb-0 fs-3\">My Profile</p>\n" +
        "                                    </a>\n" +
        "                                    <a href=\"javascript:void(0)\" class=\"d-flex align-items-center gap-2 dropdown-item\">\n" +
        "                                        <i class=\"ti ti-mail fs-6\"></i>\n" +
        "                                        <p class=\"mb-0 fs-3\">My Account</p>\n" +
        "                                    </a>\n" +
        "                                    <a href=\"javascript:void(0)\" class=\"d-flex align-items-center gap-2 dropdown-item\">\n" +
        "                                        <i class=\"ti ti-list-check fs-6\"></i>\n" +
        "                                        <p class=\"mb-0 fs-3\">My Task</p>\n" +
        "                                    </a>\n" +
        "                                    <a href=\"./authentication-login.html\" class=\"btn btn-outline-primary mx-3 mt-2 d-block\">Logout</a>\n" +
        "                                </div>\n" +
        "                            </div>\n" +
        "                        </li>\n" +
        "                    </ul>\n" +
        "                </div>\n" +
        "            </nav>\n" +
        "        </header>"
    return (
        <div dangerouslySetInnerHTML={{__html:str}}></div>
    );
}

export default Header;