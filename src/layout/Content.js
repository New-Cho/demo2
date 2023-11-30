function Content(){
    const str ="<div class=\"container-fluid\">\n" +
        "        <div class=\"row\">\n" +
        "          <div class=\"col-lg-8 d-flex align-items-strech\">\n" +
        "            <div class=\"card w-100\">\n" +
        "              <div class=\"card-body\">\n" +
        "                <div class=\"d-sm-flex d-block align-items-center justify-content-between mb-9\">\n" +
        "                  <div class=\"mb-3 mb-sm-0\">\n" +
        "                    <h5 class=\"card-title fw-semibold\">Sales Overview</h5>\n" +
        "                  </div>\n" +
        "                  <div>\n" +
        "                    <select class=\"form-select\">\n" +
        "                      <option value=\"1\">March 2023</option>\n" +
        "                      <option value=\"2\">April 2023</option>\n" +
        "                      <option value=\"3\">May 2023</option>\n" +
        "                      <option value=\"4\">June 2023</option>\n" +
        "                    </select>\n" +
        "                  </div>\n" +
        "                </div>\n" +
        "                <div id=\"chart\"></div>\n" +
        "              </div>\n" +
        "            </div>\n" +
        "          </div>\n" +
        "          <div class=\"col-lg-4\">\n" +
        "            <div class=\"row\">\n" +
        "              <div class=\"col-lg-12\">\n" +
        "                <!-- Yearly Breakup -->\n" +
        "                <div class=\"card overflow-hidden\">\n" +
        "                  <div class=\"card-body p-4\">\n" +
        "                    <h5 class=\"card-title mb-9 fw-semibold\">Yearly Breakup</h5>\n" +
        "                    <div class=\"row align-items-center\">\n" +
        "                      <div class=\"col-8\">\n" +
        "                        <h4 class=\"fw-semibold mb-3\">$36,358</h4>\n" +
        "                        <div class=\"d-flex align-items-center mb-3\">\n" +
        "                          <span\n" +
        "                            class=\"me-1 rounded-circle bg-light-success round-20 d-flex align-items-center justify-content-center\">\n" +
        "                            <i class=\"ti ti-arrow-up-left text-success\"></i>\n" +
        "                          </span>\n" +
        "                          <p class=\"text-dark me-1 fs-3 mb-0\">+9%</p>\n" +
        "                          <p class=\"fs-3 mb-0\">last year</p>\n" +
        "                        </div>\n" +
        "                        <div class=\"d-flex align-items-center\">\n" +
        "                          <div class=\"me-4\">\n" +
        "                            <span class=\"round-8 bg-primary rounded-circle me-2 d-inline-block\"></span>\n" +
        "                            <span class=\"fs-2\">2023</span>\n" +
        "                          </div>\n" +
        "                          <div>\n" +
        "                            <span class=\"round-8 bg-light-primary rounded-circle me-2 d-inline-block\"></span>\n" +
        "                            <span class=\"fs-2\">2023</span>\n" +
        "                          </div>\n" +
        "                        </div>\n" +
        "                      </div>\n" +
        "                      <div class=\"col-4\">\n" +
        "                        <div class=\"d-flex justify-content-center\">\n" +
        "                          <div id=\"breakup\"></div>\n" +
        "                        </div>\n" +
        "                      </div>\n" +
        "                    </div>\n" +
        "                  </div>\n" +
        "                </div>\n" +
        "              </div>\n" +
        "              <div class=\"col-lg-12\">\n" +
        "                <!-- Monthly Earnings -->\n" +
        "                <div class=\"card\">\n" +
        "                  <div class=\"card-body\">\n" +
        "                    <div class=\"row alig n-items-start\">\n" +
        "                      <div class=\"col-8\">\n" +
        "                        <h5 class=\"card-title mb-9 fw-semibold\"> Monthly Earnings </h5>\n" +
        "                        <h4 class=\"fw-semibold mb-3\">$6,820</h4>\n" +
        "                        <div class=\"d-flex align-items-center pb-1\">\n" +
        "                          <span\n" +
        "                            class=\"me-2 rounded-circle bg-light-danger round-20 d-flex align-items-center justify-content-center\">\n" +
        "                            <i class=\"ti ti-arrow-down-right text-danger\"></i>\n" +
        "                          </span>\n" +
        "                          <p class=\"text-dark me-1 fs-3 mb-0\">+9%</p>\n" +
        "                          <p class=\"fs-3 mb-0\">last year</p>\n" +
        "                        </div>\n" +
        "                      </div>\n" +
        "                      <div class=\"col-4\">\n" +
        "                        <div class=\"d-flex justify-content-end\">\n" +
        "                          <div\n" +
        "                            class=\"text-white bg-secondary rounded-circle p-6 d-flex align-items-center justify-content-center\">\n" +
        "                            <i class=\"ti ti-currency-dollar fs-6\"></i>\n" +
        "                          </div>\n" +
        "                        </div>\n" +
        "                      </div>\n" +
        "                    </div>\n" +
        "                  </div>\n" +
        "                  <div id=\"earning\"></div>\n" +
        "                </div>\n" +
        "              </div>\n" +
        "            </div>\n" +
        "          </div>\n" +
        "        </div>\n" +
        "        <div class=\"row\">\n" +
        "          <div class=\"col-lg-4 d-flex align-items-stretch\">\n" +
        "            <div class=\"card w-100\">\n" +
        "              <div class=\"card-body p-4\">\n" +
        "                <div class=\"mb-4\">\n" +
        "                  <h5 class=\"card-title fw-semibold\">Recent Transactions</h5>\n" +
        "                </div>\n" +
        "                <ul class=\"timeline-widget mb-0 position-relative mb-n5\">\n" +
        "                  <li class=\"timeline-item d-flex position-relative overflow-hidden\">\n" +
        "                    <div class=\"timeline-time text-dark flex-shrink-0 text-end\">09:30</div>\n" +
        "                    <div class=\"timeline-badge-wrap d-flex flex-column align-items-center\">\n" +
        "                      <span class=\"timeline-badge border-2 border border-primary flex-shrink-0 my-8\"></span>\n" +
        "                      <span class=\"timeline-badge-border d-block flex-shrink-0\"></span>\n" +
        "                    </div>\n" +
        "                    <div class=\"timeline-desc fs-3 text-dark mt-n1\">Payment received from John Doe of $385.90</div>\n" +
        "                  </li>\n" +
        "                  <li class=\"timeline-item d-flex position-relative overflow-hidden\">\n" +
        "                    <div class=\"timeline-time text-dark flex-shrink-0 text-end\">10:00 am</div>\n" +
        "                    <div class=\"timeline-badge-wrap d-flex flex-column align-items-center\">\n" +
        "                      <span class=\"timeline-badge border-2 border border-info flex-shrink-0 my-8\"></span>\n" +
        "                      <span class=\"timeline-badge-border d-block flex-shrink-0\"></span>\n" +
        "                    </div>\n" +
        "                    <div class=\"timeline-desc fs-3 text-dark mt-n1 fw-semibold\">New sale recorded <a\n" +
        "                        href=\"javascript:void(0)\" class=\"text-primary d-block fw-normal\">#ML-3467</a>\n" +
        "                    </div>\n" +
        "                  </li>\n" +
        "                  <li class=\"timeline-item d-flex position-relative overflow-hidden\">\n" +
        "                    <div class=\"timeline-time text-dark flex-shrink-0 text-end\">12:00 am</div>\n" +
        "                    <div class=\"timeline-badge-wrap d-flex flex-column align-items-center\">\n" +
        "                      <span class=\"timeline-badge border-2 border border-success flex-shrink-0 my-8\"></span>\n" +
        "                      <span class=\"timeline-badge-border d-block flex-shrink-0\"></span>\n" +
        "                    </div>\n" +
        "                    <div class=\"timeline-desc fs-3 text-dark mt-n1\">Payment was made of $64.95 to Michael</div>\n" +
        "                  </li>\n" +
        "                  <li class=\"timeline-item d-flex position-relative overflow-hidden\">\n" +
        "                    <div class=\"timeline-time text-dark flex-shrink-0 text-end\">09:30 am</div>\n" +
        "                    <div class=\"timeline-badge-wrap d-flex flex-column align-items-center\">\n" +
        "                      <span class=\"timeline-badge border-2 border border-warning flex-shrink-0 my-8\"></span>\n" +
        "                      <span class=\"timeline-badge-border d-block flex-shrink-0\"></span>\n" +
        "                    </div>\n" +
        "                    <div class=\"timeline-desc fs-3 text-dark mt-n1 fw-semibold\">New sale recorded <a\n" +
        "                        href=\"javascript:void(0)\" class=\"text-primary d-block fw-normal\">#ML-3467</a>\n" +
        "                    </div>\n" +
        "                  </li>\n" +
        "                  <li class=\"timeline-item d-flex position-relative overflow-hidden\">\n" +
        "                    <div class=\"timeline-time text-dark flex-shrink-0 text-end\">09:30 am</div>\n" +
        "                    <div class=\"timeline-badge-wrap d-flex flex-column align-items-center\">\n" +
        "                      <span class=\"timeline-badge border-2 border border-danger flex-shrink-0 my-8\"></span>\n" +
        "                      <span class=\"timeline-badge-border d-block flex-shrink-0\"></span>\n" +
        "                    </div>\n" +
        "                    <div class=\"timeline-desc fs-3 text-dark mt-n1 fw-semibold\">New arrival recorded \n" +
        "                    </div>\n" +
        "                  </li>\n" +
        "                  <li class=\"timeline-item d-flex position-relative overflow-hidden\">\n" +
        "                    <div class=\"timeline-time text-dark flex-shrink-0 text-end\">12:00 am</div>\n" +
        "                    <div class=\"timeline-badge-wrap d-flex flex-column align-items-center\">\n" +
        "                      <span class=\"timeline-badge border-2 border border-success flex-shrink-0 my-8\"></span>\n" +
        "                    </div>\n" +
        "                    <div class=\"timeline-desc fs-3 text-dark mt-n1\">Payment Done</div>\n" +
        "                  </li>\n" +
        "                </ul>\n" +
        "              </div>\n" +
        "            </div>\n" +
        "          </div>\n" +
        "          <div class=\"col-lg-8 d-flex align-items-stretch\">\n" +
        "            <div class=\"card w-100\">\n" +
        "              <div class=\"card-body p-4\">\n" +
        "                <h5 class=\"card-title fw-semibold mb-4\">Recent Transactions</h5>\n" +
        "                <div class=\"table-responsive\">\n" +
        "                  <table class=\"table text-nowrap mb-0 align-middle\">\n" +
        "                    <thead class=\"text-dark fs-4\">\n" +
        "                      <tr>\n" +
        "                        <th class=\"border-bottom-0\">\n" +
        "                          <h6 class=\"fw-semibold mb-0\">Id</h6>\n" +
        "                        </th>\n" +
        "                        <th class=\"border-bottom-0\">\n" +
        "                          <h6 class=\"fw-semibold mb-0\">Assigned</h6>\n" +
        "                        </th>\n" +
        "                        <th class=\"border-bottom-0\">\n" +
        "                          <h6 class=\"fw-semibold mb-0\">Name</h6>\n" +
        "                        </th>\n" +
        "                        <th class=\"border-bottom-0\">\n" +
        "                          <h6 class=\"fw-semibold mb-0\">Priority</h6>\n" +
        "                        </th>\n" +
        "                        <th class=\"border-bottom-0\">\n" +
        "                          <h6 class=\"fw-semibold mb-0\">Budget</h6>\n" +
        "                        </th>\n" +
        "                      </tr>\n" +
        "                    </thead>\n" +
        "                    <tbody>\n" +
        "                      <tr>\n" +
        "                        <td class=\"border-bottom-0\"><h6 class=\"fw-semibold mb-0\">1</h6></td>\n" +
        "                        <td class=\"border-bottom-0\">\n" +
        "                            <h6 class=\"fw-semibold mb-1\">Sunil Joshi</h6>\n" +
        "                            <span class=\"fw-normal\">Web Designer</span>                          \n" +
        "                        </td>\n" +
        "                        <td class=\"border-bottom-0\">\n" +
        "                          <p class=\"mb-0 fw-normal\">Elite Admin</p>\n" +
        "                        </td>\n" +
        "                        <td class=\"border-bottom-0\">\n" +
        "                          <div class=\"d-flex align-items-center gap-2\">\n" +
        "                            <span class=\"badge bg-primary rounded-3 fw-semibold\">Low</span>\n" +
        "                          </div>\n" +
        "                        </td>\n" +
        "                        <td class=\"border-bottom-0\">\n" +
        "                          <h6 class=\"fw-semibold mb-0 fs-4\">$3.9</h6>\n" +
        "                        </td>\n" +
        "                      </tr> \n" +
        "                      <tr>\n" +
        "                        <td class=\"border-bottom-0\"><h6 class=\"fw-semibold mb-0\">2</h6></td>\n" +
        "                        <td class=\"border-bottom-0\">\n" +
        "                            <h6 class=\"fw-semibold mb-1\">Andrew McDownland</h6>\n" +
        "                            <span class=\"fw-normal\">Project Manager</span>                          \n" +
        "                        </td>\n" +
        "                        <td class=\"border-bottom-0\">\n" +
        "                          <p class=\"mb-0 fw-normal\">Real Homes WP Theme</p>\n" +
        "                        </td>\n" +
        "                        <td class=\"border-bottom-0\">\n" +
        "                          <div class=\"d-flex align-items-center gap-2\">\n" +
        "                            <span class=\"badge bg-secondary rounded-3 fw-semibold\">Medium</span>\n" +
        "                          </div>\n" +
        "                        </td>\n" +
        "                        <td class=\"border-bottom-0\">\n" +
        "                          <h6 class=\"fw-semibold mb-0 fs-4\">$24.5k</h6>\n" +
        "                        </td>\n" +
        "                      </tr> \n" +
        "                      <tr>\n" +
        "                        <td class=\"border-bottom-0\"><h6 class=\"fw-semibold mb-0\">3</h6></td>\n" +
        "                        <td class=\"border-bottom-0\">\n" +
        "                            <h6 class=\"fw-semibold mb-1\">Christopher Jamil</h6>\n" +
        "                            <span class=\"fw-normal\">Project Manager</span>                          \n" +
        "                        </td>\n" +
        "                        <td class=\"border-bottom-0\">\n" +
        "                          <p class=\"mb-0 fw-normal\">MedicalPro WP Theme</p>\n" +
        "                        </td>\n" +
        "                        <td class=\"border-bottom-0\">\n" +
        "                          <div class=\"d-flex align-items-center gap-2\">\n" +
        "                            <span class=\"badge bg-danger rounded-3 fw-semibold\">High</span>\n" +
        "                          </div>\n" +
        "                        </td>\n" +
        "                        <td class=\"border-bottom-0\">\n" +
        "                          <h6 class=\"fw-semibold mb-0 fs-4\">$12.8k</h6>\n" +
        "                        </td>\n" +
        "                      </tr>      \n" +
        "                      <tr>\n" +
        "                        <td class=\"border-bottom-0\"><h6 class=\"fw-semibold mb-0\">4</h6></td>\n" +
        "                        <td class=\"border-bottom-0\">\n" +
        "                            <h6 class=\"fw-semibold mb-1\">Nirav Joshi</h6>\n" +
        "                            <span class=\"fw-normal\">Frontend Engineer</span>                          \n" +
        "                        </td>\n" +
        "                        <td class=\"border-bottom-0\">\n" +
        "                          <p class=\"mb-0 fw-normal\">Hosting Press HTML</p>\n" +
        "                        </td>\n" +
        "                        <td class=\"border-bottom-0\">\n" +
        "                          <div class=\"d-flex align-items-center gap-2\">\n" +
        "                            <span class=\"badge bg-success rounded-3 fw-semibold\">Critical</span>\n" +
        "                          </div>\n" +
        "                        </td>\n" +
        "                        <td class=\"border-bottom-0\">\n" +
        "                          <h6 class=\"fw-semibold mb-0 fs-4\">$2.4k</h6>\n" +
        "                        </td>\n" +
        "                      </tr>                       \n" +
        "                    </tbody>\n" +
        "                  </table>\n" +
        "                </div>\n" +
        "              </div>\n" +
        "            </div>\n" +
        "          </div>\n" +
        "        </div>\n" +
        "        <div class=\"row\">\n" +
        "          <div class=\"col-sm-6 col-xl-3\">\n" +
        "            <div class=\"card overflow-hidden rounded-2\">\n" +
        "              <div class=\"position-relative\">\n" +
        "                <a href=\"javascript:void(0)\"><img src=\"../assets/images/products/s4.jpg\" class=\"card-img-top rounded-0\" alt=\"...\"></a>\n" +
        "                <a href=\"javascript:void(0)\" class=\"bg-primary rounded-circle p-2 text-white d-inline-flex position-absolute bottom-0 end-0 mb-n3 me-3\" data-bs-toggle=\"tooltip\" data-bs-placement=\"top\" data-bs-title=\"Add To Cart\"><i class=\"ti ti-basket fs-4\"></i></a>                      </div>\n" +
        "              <div class=\"card-body pt-3 p-4\">\n" +
        "                <h6 class=\"fw-semibold fs-4\">Boat Headphone</h6>\n" +
        "                <div class=\"d-flex align-items-center justify-content-between\">\n" +
        "                  <h6 class=\"fw-semibold fs-4 mb-0\">$50 <span class=\"ms-2 fw-normal text-muted fs-3\"><del>$65</del></span></h6>\n" +
        "                  <ul class=\"list-unstyled d-flex align-items-center mb-0\">\n" +
        "                    <li><a class=\"me-1\" href=\"javascript:void(0)\"><i class=\"ti ti-star text-warning\"></i></a></li>\n" +
        "                    <li><a class=\"me-1\" href=\"javascript:void(0)\"><i class=\"ti ti-star text-warning\"></i></a></li>\n" +
        "                    <li><a class=\"me-1\" href=\"javascript:void(0)\"><i class=\"ti ti-star text-warning\"></i></a></li>\n" +
        "                    <li><a class=\"me-1\" href=\"javascript:void(0)\"><i class=\"ti ti-star text-warning\"></i></a></li>\n" +
        "                    <li><a class=\"\" href=\"javascript:void(0)\"><i class=\"ti ti-star text-warning\"></i></a></li>\n" +
        "                  </ul>\n" +
        "                </div>\n" +
        "              </div>\n" +
        "            </div>\n" +
        "          </div>\n" +
        "          <div class=\"col-sm-6 col-xl-3\">\n" +
        "            <div class=\"card overflow-hidden rounded-2\">\n" +
        "              <div class=\"position-relative\">\n" +
        "                <a href=\"javascript:void(0)\"><img src=\"../assets/images/products/s5.jpg\" class=\"card-img-top rounded-0\" alt=\"...\"></a>\n" +
        "                <a href=\"javascript:void(0)\" class=\"bg-primary rounded-circle p-2 text-white d-inline-flex position-absolute bottom-0 end-0 mb-n3 me-3\" data-bs-toggle=\"tooltip\" data-bs-placement=\"top\" data-bs-title=\"Add To Cart\"><i class=\"ti ti-basket fs-4\"></i></a>                      </div>\n" +
        "              <div class=\"card-body pt-3 p-4\">\n" +
        "                <h6 class=\"fw-semibold fs-4\">MacBook Air Pro</h6>\n" +
        "                <div class=\"d-flex align-items-center justify-content-between\">\n" +
        "                  <h6 class=\"fw-semibold fs-4 mb-0\">$650 <span class=\"ms-2 fw-normal text-muted fs-3\"><del>$900</del></span></h6>\n" +
        "                  <ul class=\"list-unstyled d-flex align-items-center mb-0\">\n" +
        "                    <li><a class=\"me-1\" href=\"javascript:void(0)\"><i class=\"ti ti-star text-warning\"></i></a></li>\n" +
        "                    <li><a class=\"me-1\" href=\"javascript:void(0)\"><i class=\"ti ti-star text-warning\"></i></a></li>\n" +
        "                    <li><a class=\"me-1\" href=\"javascript:void(0)\"><i class=\"ti ti-star text-warning\"></i></a></li>\n" +
        "                    <li><a class=\"me-1\" href=\"javascript:void(0)\"><i class=\"ti ti-star text-warning\"></i></a></li>\n" +
        "                    <li><a class=\"\" href=\"javascript:void(0)\"><i class=\"ti ti-star text-warning\"></i></a></li>\n" +
        "                  </ul>\n" +
        "                </div>\n" +
        "              </div>\n" +
        "            </div>\n" +
        "          </div>\n" +
        "          <div class=\"col-sm-6 col-xl-3\">\n" +
        "            <div class=\"card overflow-hidden rounded-2\">\n" +
        "              <div class=\"position-relative\">\n" +
        "                <a href=\"javascript:void(0)\"><img src=\"../assets/images/products/s7.jpg\" class=\"card-img-top rounded-0\" alt=\"...\"></a>\n" +
        "                <a href=\"javascript:void(0)\" class=\"bg-primary rounded-circle p-2 text-white d-inline-flex position-absolute bottom-0 end-0 mb-n3 me-3\" data-bs-toggle=\"tooltip\" data-bs-placement=\"top\" data-bs-title=\"Add To Cart\"><i class=\"ti ti-basket fs-4\"></i></a>                      </div>\n" +
        "              <div class=\"card-body pt-3 p-4\">\n" +
        "                <h6 class=\"fw-semibold fs-4\">Red Valvet Dress</h6>\n" +
        "                <div class=\"d-flex align-items-center justify-content-between\">\n" +
        "                  <h6 class=\"fw-semibold fs-4 mb-0\">$150 <span class=\"ms-2 fw-normal text-muted fs-3\"><del>$200</del></span></h6>\n" +
        "                  <ul class=\"list-unstyled d-flex align-items-center mb-0\">\n" +
        "                    <li><a class=\"me-1\" href=\"javascript:void(0)\"><i class=\"ti ti-star text-warning\"></i></a></li>\n" +
        "                    <li><a class=\"me-1\" href=\"javascript:void(0)\"><i class=\"ti ti-star text-warning\"></i></a></li>\n" +
        "                    <li><a class=\"me-1\" href=\"javascript:void(0)\"><i class=\"ti ti-star text-warning\"></i></a></li>\n" +
        "                    <li><a class=\"me-1\" href=\"javascript:void(0)\"><i class=\"ti ti-star text-warning\"></i></a></li>\n" +
        "                    <li><a class=\"\" href=\"javascript:void(0)\"><i class=\"ti ti-star text-warning\"></i></a></li>\n" +
        "                  </ul>\n" +
        "                </div>\n" +
        "              </div>\n" +
        "            </div>\n" +
        "          </div>\n" +
        "          <div class=\"col-sm-6 col-xl-3\">\n" +
        "            <div class=\"card overflow-hidden rounded-2\">\n" +
        "              <div class=\"position-relative\">\n" +
        "                <a href=\"javascript:void(0)\"><img src=\"../assets/images/products/s11.jpg\" class=\"card-img-top rounded-0\" alt=\"...\"></a>\n" +
        "                <a href=\"javascript:void(0)\" class=\"bg-primary rounded-circle p-2 text-white d-inline-flex position-absolute bottom-0 end-0 mb-n3 me-3\" data-bs-toggle=\"tooltip\" data-bs-placement=\"top\" data-bs-title=\"Add To Cart\"><i class=\"ti ti-basket fs-4\"></i></a>                      </div>\n" +
        "              <div class=\"card-body pt-3 p-4\">\n" +
        "                <h6 class=\"fw-semibold fs-4\">Cute Soft Teddybear</h6>\n" +
        "                <div class=\"d-flex align-items-center justify-content-between\">\n" +
        "                  <h6 class=\"fw-semibold fs-4 mb-0\">$285 <span class=\"ms-2 fw-normal text-muted fs-3\"><del>$345</del></span></h6>\n" +
        "                  <ul class=\"list-unstyled d-flex align-items-center mb-0\">\n" +
        "                    <li><a class=\"me-1\" href=\"javascript:void(0)\"><i class=\"ti ti-star text-warning\"></i></a></li>\n" +
        "                    <li><a class=\"me-1\" href=\"javascript:void(0)\"><i class=\"ti ti-star text-warning\"></i></a></li>\n" +
        "                    <li><a class=\"me-1\" href=\"javascript:void(0)\"><i class=\"ti ti-star text-warning\"></i></a></li>\n" +
        "                    <li><a class=\"me-1\" href=\"javascript:void(0)\"><i class=\"ti ti-star text-warning\"></i></a></li>\n" +
        "                    <li><a class=\"\" href=\"javascript:void(0)\"><i class=\"ti ti-star text-warning\"></i></a></li>\n" +
        "                  </ul>\n" +
        "                </div>\n" +
        "              </div>\n" +
        "            </div>\n" +
        "          </div>\n" +
        "        </div>\n" +
        "        <div class=\"py-6 px-6 text-center\">\n" +
        "          <p class=\"mb-0 fs-4\">Design and Developed by <a href=\"https://adminmart.com/\" target=\"_blank\" class=\"pe-1 text-primary text-decoration-underline\">AdminMart.com</a> Distributed by <a href=\"https://themewagon.com\">ThemeWagon</a></p>\n" +
        "        </div>\n" +
        "      </div>"
    return (
        <div dangerouslySetInnerHTML={{__html: str}}></div>
    );

}

export default Content;