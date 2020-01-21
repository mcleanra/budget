import Edit from '../modules/userprofile/Edit';
import { RouteDictionary } from '../interfaces';

const routeDictionary: RouteDictionary = {
    userprofileEdit: {
        path: '/userprofile/edit',
        component: Edit,
        exact: true,
        auth: true,
        operationName: 'UserUpdateMyProfile',
    },
};

export default routeDictionary;
