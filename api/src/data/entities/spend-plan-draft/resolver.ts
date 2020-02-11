import { ObjectId } from 'mongodb';
import {
    Resolver,
    Query,
    FieldResolver,
    Arg,
    Root,
    Mutation,
    Ctx,
} from 'type-graphql';

import {
    SpendPlanDraft,
    SpendPlanDraftModel,
    SpendPlanDraftInput,
} from './model';
import { User, UserModel } from '../user/model';
import { Context } from '../../../types';
import { ObjectIdScalar } from '../../object-id.scalar';

@Resolver(of => SpendPlanDraft)
export class SpendPlanDraftResolver {
    @Query(returns => SpendPlanDraft, { nullable: true })
    SpendPlanDraftById(
        @Arg('id', type => ObjectIdScalar) id: ObjectId,
    ) {
        return SpendPlanDraftModel.findById(id);
    }

    @Query(returns => [SpendPlanDraft])
    async SpendPlanDraftMany(): Promise<SpendPlanDraft[]> {
        return await SpendPlanDraftModel.find({});
    }

    @Mutation(returns => SpendPlanDraft)
    async SpendPlanDraftCreateOne(
        @Arg('input') input: SpendPlanDraftInput,
        @Ctx() { user }: Context,
    ): Promise<SpendPlanDraft> {
        const newItem = new SpendPlanDraftModel({
            ...input,
            createdBy: user._id,
            updatedBy: user._id,
        } as SpendPlanDraft);

        return await newItem.save();
    }

    @Mutation(returns => SpendPlanDraft, { nullable: true })
    async SpendPlanDraftUpdateById(
        @Arg('id', type => ObjectIdScalar) id: ObjectId,
        @Arg('input') input: SpendPlanDraftInput,
        @Ctx() { user }: Context,
    ) {
        const updatedItem = await SpendPlanDraftModel.findByIdAndUpdate(
            id,
            {
                ...input,
                updatedBy: user._id,
            },
            {
                new: true,
            },
        );

        return updatedItem;
    }

    @Mutation(returns => SpendPlanDraft, { nullable: true })
    async SpendPlanDraftRemoveById(
        @Arg('id', type => ObjectIdScalar) id: ObjectId,
        @Ctx() { user }: Context,
    ) {
        const deletedItem = await SpendPlanDraftModel.findByIdAndRemove(
            id,
        );
        return deletedItem;
    }

    @FieldResolver()
    async createdBy(@Root() item: SpendPlanDraft): Promise<User> {
        return (await UserModel.findById(item.createdBy))!;
    }

    @FieldResolver()
    async updatedBy(@Root() item: SpendPlanDraft): Promise<User> {
        return (await UserModel.findById(item.updatedBy))!;
    }
}
