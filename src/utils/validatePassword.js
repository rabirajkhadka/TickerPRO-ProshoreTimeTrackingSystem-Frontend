export default function (value) {
  const response = { isValid: true, errorMessage: "" };
  // if value is empty
  if (!value) {
    response.isValid = false;
    response.errorMessage = "Password field is required";
    return response;
  } 
  return response;
}
