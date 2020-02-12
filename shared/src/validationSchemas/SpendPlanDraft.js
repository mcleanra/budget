const Yup = require('yup');
const {
    generateValidatorForSingleRecord,
    generateValidatorForMultipleRecords,
} = require('./helpers');

const defaultSchema = Yup.object().shape({
    fiscalYear: Yup.string()
        .trim()
        .required('Fiscal year is required'),
    directorate: Yup.object(),
    json: Yup.string()
        .trim()
        .required('Spend plan data is required'),
});

module.exports = {
    SpendPlanDraft: {
        yupSchemas: {
            defaultSchema,
        },
        graphqlMutations: {
            SpendPlanDraftCreateOne: generateValidatorForSingleRecord(
                defaultSchema,
            ),
            SpendPlanDraftUpdateById: generateValidatorForSingleRecord(
                defaultSchema,
            ),
        },
    },
};
