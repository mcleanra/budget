const Yup = require('yup');
const {
    generateValidatorForSingleRecord,
    generateValidatorForMultipleRecords,
} = require('./helpers');

const defaultSchema = Yup.object().shape({
    title: Yup.string()
        .trim()
        .required('Title is required'),
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
