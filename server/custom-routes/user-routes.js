
let Vaults = require('../models/vault')


export default {
  userVaults: {
    path: '/uservaults',
    reqType: 'get',
    method(req, res, next){
      let action = 'Find user Vaults'
      Vaults.find({creatorId: req.session.uid})
      .then(vaults => {
        res.send(handleResponse(action, vaults))
      }).catch(error => {
        return next (handleResponse(action, null, error))
      })
    }
  },
  sharedVaults: {
    path: '/sharedvaults',
    reqType: 'get',
    method(req, res, next) {
      Vaults.find({collaborators: {$in: req.session.uid}})
      .then(vaults => {
        res.send(handleResponse(action, vaults))
      }).catch(error => {
        return next(handleResponse(action, null, error))
      })
    }
  }
}


function handleResponse(action, data, error) {
    var response = {
      action: action,
      data: data
    }
    if (error) {
      response.error = error
    }
    return response
  }