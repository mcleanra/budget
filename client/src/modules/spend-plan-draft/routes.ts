import EditPage from './EditPage';
import ListPage from './ListPage';
import { RouteDictionary } from '../../interfaces';

const routeDictionary: RouteDictionary = {
    SpendPlanDraftMany: {
        path: '/spend-plan-draft',
        component: ListPage,
        exact: true,
        auth: false,
        operationName: '',
    },
    SpendPlanDraftUpdateById: {
        path: '/spend-plan-draft/edit',
        component: EditPage,
        exact: true,
        auth: false,
        operationName: '',
    },
};

export default routeDictionary;
