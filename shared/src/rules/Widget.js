const { roleNames } = require('../roleNames');

const grantsObject = {
    [roleNames.VISITOR]: {
        SpendPlanDraft: {},
    },
    [roleNames.LOGGED_IN_USER]: {
        SpendPlanDraft: {
            'read:any': ['*'],
        },
    },
    [roleNames.ADMIN]: {
        SpendPlanDraft: {
            'create:any': ['*'],
            'read:any': ['*'],
            'update:any': ['*'],
            'delete:any': ['*'],
        },
    },
};

// TODO: perform permissions based on data https://auth0.com/blog/role-based-access-control-rbac-and-react-apps/
const apiSecurity = {
    SpendPlanDraft: {
        Query: {
            SpendPlanDraftById: ac => (user, data) => {
                return ac.can(user.role)['readAny']('SpendPlanDraft')
                    .granted;
            },
            SpendPlanDraftMany: ac => (user, data) => {
                return ac.can(user.role)['readAny']('SpendPlanDraft')
                    .granted;
            },
        },
        Mutation: {
            SpendPlanDraftCreateOne: ac => (user, data) => {
                return ac
                    .can(user.role)
                    ['createOwn']('SpendPlanDraft').granted;
            },
            SpendPlanDraftRemoveById: ac => (user, data) => {
                return ac
                    .can(user.role)
                    ['deleteOwn']('SpendPlanDraft').granted;
            },
            SpendPlanDraftUpdateById: ac => (user, data) => {
                return ac
                    .can(user.role)
                    ['updateOwn']('SpendPlanDraft').granted;
            },
        },
    },
};

module.exports = {
    apiSecurity,
    grantsObject,
};
