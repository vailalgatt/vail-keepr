let Vaults = require('../models/vault')
let Keeps = require('../models/keep')

export default {
    getKeepsbyVaultId: {
        path: '/vaults/:vaultId/keeps',
        reqType: 'get',
        method(req, res, next) {
            let action = 'Return vault and associated keeps'
            Vaults.findById(req.params.vaultId)
                .then(vault => {
                    Keeps.find({ vaultId: req.params.vaultId })
                        .then(keeps => {
                            vault.keeps = keeps
                            res.send(handleResponse(action, vault.keeps))
                        })
                }).catch(error => {
                    return next(handleResponse(action, null, error))
                })
        }
    }
}