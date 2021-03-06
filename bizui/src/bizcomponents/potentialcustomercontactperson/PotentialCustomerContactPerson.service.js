import { get,postForm,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}potentialCustomerContactPersonManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}potentialCustomerContactPersonManager/loadPotentialCustomerContactPerson/${targetObjectId}/${parametersExpr}/`,
  })
}



const requestCandidatePotentialCustomer = (ownerClass, id, filterKey, pageNo) => {
 
  const url = `${PREFIX}potentialCustomerContactPersonManager/requestCandidatePotentialCustomer/ownerClass/id/filterKey/pageNo/`
  const requestParameters = {id, ownerClass,filterKey, pageNo}
  return postForm({url,requestParameters})
}	

const transferToAnotherPotentialCustomer = (id, parameters) => {
  //const parametersExpr = joinParameters(parameters)
  const url = `${PREFIX}potentialCustomerContactPersonManager/transferToAnotherPotentialCustomer/id/anotherPotentialCustomerId/`
  const requestParameters = {id, ...parameters}
  return postForm({url,requestParameters})
}







const addPotentialCustomerContact = (targetObjectId, parameters) => {
  const url = `${PREFIX}potentialCustomerContactPersonManager/addPotentialCustomerContact/potentialCustomerContactPersonId/name/contactDate/contactMethod/potentialCustomerId/cityPartnerId/description/tokensExpr/`
  const potentialCustomerContactPersonId = targetObjectId
  const requestParameters = { ...parameters, potentialCustomerContactPersonId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updatePotentialCustomerContact = (targetObjectId, parameters) => {
  const url = `${PREFIX}potentialCustomerContactPersonManager/updatePotentialCustomerContactProperties/potentialCustomerContactPersonId/id/name/contactDate/contactMethod/description/tokensExpr/`
  const potentialCustomerContactPersonId = targetObjectId
  const requestParameters = { ...parameters, potentialCustomerContactPersonId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removePotentialCustomerContactList = (targetObjectId, parameters) => {
  const url = `${PREFIX}potentialCustomerContactPersonManager/removePotentialCustomerContactList/potentialCustomerContactPersonId/potentialCustomerContactIds/tokensExpr/`
  const requestParameters = { ...parameters, potentialCustomerContactPersonId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}


const PotentialCustomerContactPersonService = { view,
  load,
  addPotentialCustomerContact,
  updatePotentialCustomerContact,
  removePotentialCustomerContactList,
  requestCandidatePotentialCustomer,
  transferToAnotherPotentialCustomer }
export default PotentialCustomerContactPersonService

