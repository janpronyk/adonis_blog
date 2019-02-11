const {hooks} = require('@adonisjs/ignitor')
hooks.after.providersBooted(() => {
    const View = use('View')
    const _ = use('lodash')

    View.global('_', function (method, args) {
        return _[method](args)
    })
})