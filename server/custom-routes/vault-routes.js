let Vaults = require('../models/vault')
let Keeps = require('../models/keep')

export default {
    getKeepsOnVault: {
        path: '/vaults/:vaultId/keeps',
        reqType: 'get',
        method(req, res, next) {
            let action = 'Get All Keeps On A Vault'
            Vaults.findById(req.params.vaultid)
                .then(vault => {
                    Keeps.find({ vaultId: req.params.vaultId })
                        .then(keeps => {
                            vault.keeps = keeps
                            res.send(handleResponse(action, vault))
                        }).catch(error => {
                            next(handleResponse(action, null, error))
                        })
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