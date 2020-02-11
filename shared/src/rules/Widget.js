const { roleNames } = require('../roleNames');

const grantsObject = {
    [roleNames.VISITOR]: {
        Widget: {},
    },
    [roleNames.LOGGED_IN_USER]: {
        Widget: {
            'read:any': ['*'],
        },
    },
    [roleNames.ADMIN]: {
        Widget: {
            'create:any': ['*'],
            'read:any': ['*'],
            'update:any': ['*'],
            'delete:any': ['*'],
        },
    },
};

// TODO: perform permissions based on data https://auth0.com/blog/role-based-access-control-rbac-and-react-apps/
const apiSecurity = {
    Widget: {
        Query: {
            WidgetById: ac => (user, data) => {
                return ac.can(user.role)['readAny']('Widget').granted;
            },
            WidgetMany: ac => (user, data) => {
                return ac.can(user.role)['readAny']('Widget').granted;
            },
        },
        Mutation: {
            WidgetCreateOne: ac => (user, data) => {
                return ac.can(user.role)['createOwn']('Widget')
                    .granted;
            },
            WidgetRemoveById: ac => (user, data) => {
                return ac.can(user.role)['deleteOwn']('Widget')
                    .granted;
            },
            WidgetUpdateById: ac => (user, data) => {
                return ac.can(user.role)['updateOwn']('Widget')
                    .granted;
            },
        },
    },
};

module.exports = {
    apiSecurity,
    grantsObject,
};
