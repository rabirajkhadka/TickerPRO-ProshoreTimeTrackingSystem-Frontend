function a(r){const e={isValid:!0,errorMessage:""};let s=/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,15}$/;if(r){if(!s.test(r))return e.isValid=!1,e.errorMessage="Please use atleast one numeric digit and one special character",e}else return e.isValid=!1,e.errorMessage="Password field is required",e;return e}function i(r,e){const s={isValid:!0,errorMessage:""};return r===""?(s.isValid=!1,s.errorMessage="Confirm password field is required.",s):(r!==e&&(s.isValid=!1,s.errorMessage="Password and confirm password fields do not match."),s)}export{a as s,i as v};