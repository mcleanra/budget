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

import { Widget, WidgetModel, WidgetInput } from './model';
import { User, UserModel } from '../user/model';
import { Context } from '../../../types';
import { ObjectIdScalar } from '../../object-id.scalar';

@Resolver(of => Widget)
export class WidgetResolver {
    @Query(returns => Widget, { nullable: true })
    WidgetById(@Arg('id', type => ObjectIdScalar) id: ObjectId) {
        return WidgetModel.findById(id);
    }

    @Query(returns => [Widget])
    async WidgetMany(): Promise<Widget[]> {
        return await WidgetModel.find({});
    }

    @Mutation(returns => Widget)
    async WidgetCreateOne(
        @Arg('input') input: WidgetInput,
        @Ctx() { user }: Context,
    ): Promise<Widget> {
        const newItem = new WidgetModel({
            ...input,
            createdBy: user._id,
            updatedBy: user._id,
        } as Widget);

        return await newItem.save();
    }

    @Mutation(returns => Widget, { nullable: true })
    async WidgetUpdateById(
        @Arg('id', type => ObjectIdScalar) id: ObjectId,
        @Arg('input') input: WidgetInput,
        @Ctx() { user }: Context,
    ) {
        const updatedItem = await WidgetModel.findByIdAndUpdate(
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

    @Mutation(returns => Widget, { nullable: true })
    async WidgetRemoveById(
        @Arg('id', type => ObjectIdScalar) id: ObjectId,
        @Ctx() { user }: Context,
    ) {
        const deletedItem = await WidgetModel.findByIdAndRemove(id);
        return deletedItem;
    }

    @FieldResolver()
    async createdBy(@Root() item: Widget): Promise<User> {
        return (await UserModel.findById(item.createdBy))!;
    }

    @FieldResolver()
    async updatedBy(@Root() item: Widget): Promise<User> {
        return (await UserModel.findById(item.updatedBy))!;
    }
}
