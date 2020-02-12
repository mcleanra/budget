import { Directorate } from '../../generated/graphql';

export default class SpendPlanDraft {
    id: string;
    fiscalYear: string;
    directorate: Directorate;
    json: any;

    constructor(data: any = {}) {
        this.id = data.id;
        this.fiscalYear = data.fiscalYear;
        this.directorate = data.directorate;
        this.json = data.json || {};
    }
}
