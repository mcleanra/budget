const addToSchema = (collectionName, TC, schemaComposer) => {
    let query = {};
    query[`${collectionName}ById`] = TC.getResolver('findById');
    query[`${collectionName}ByIds`] = TC.getResolver('findByIds');
    query[`${collectionName}One`] = TC.getResolver('findOne');
    query[`${collectionName}Many`] = TC.getResolver('findMany');
    query[`${collectionName}Count`] = TC.getResolver('count');
    schemaComposer.Query.addFields(query);
    let mutation = {};
    mutation[`${collectionName}CreateOne`] = TC.getResolver('createOne');
    mutation[`${collectionName}CreateMany`] = TC.getResolver('createMany');
    mutation[`${collectionName}UpdateById`] = TC.getResolver('updateById');
    mutation[`${collectionName}UpdateOne`] = TC.getResolver('updateOne');
    mutation[`${collectionName}UpdateMany`] = TC.getResolver('updateMany');
    mutation[`${collectionName}RemoveById`] = TC.getResolver('removeById');
    mutation[`${collectionName}RemoveOne`] = TC.getResolver('removeOne');
    mutation[`${collectionName}RemoveMany`] = TC.getResolver('removeMany');
    schemaComposer.Mutation.addFields(mutation);
}

const addReference = (relatedFields, typeComposer, referencedTypeComposer, onCreating, onUpdating) => {
    relatedFields.forEach(relatedField => {
        typeComposer.addRelation(relatedField.name, {
            resolver: () => referencedTypeComposer.getResolver('findById'),
            prepareArgs: {
                _id: source => source[relatedField.name] || null,
            },
            projection: { [relatedField.name]: true }
        })
    });

    ['createOne', 'createMany'].forEach(createMethodName => {
        typeComposer.wrapResolverResolve(createMethodName, next => async rp => {
            rp.beforeRecordMutate = async (doc, { context }) => onCreating(doc, context);
            return next(rp);
        });
    });

    ['updateById', 'updateOne', 'updateMany'].forEach(updateMethodName => {
        typeComposer.wrapResolverResolve(updateMethodName, next => async rp => {
            rp.beforeRecordMutate = async (doc, { context }) => onUpdating(doc, context);
            return next(rp);
        });
    })
}

module.exports = {
    addReference,
    addToSchema
}