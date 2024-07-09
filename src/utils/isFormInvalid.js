/*-------------------------------------------------------------------
|  🐼 Function isFormInvalid
|
|  🐯 Purpose: CHECKS IF FORM IS VALID OR NOT
|
|  🐸 Returns:  OBJECT
*-------------------------------------------------------------------*/

export function isFormInvalid(err) {
  if (Object.keys(err).length > 0) return true;
  return false;
}
