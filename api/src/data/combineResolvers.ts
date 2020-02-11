import { DirectorateResolver } from './entities/directorate/resolver';
import { ExecutionMethodResolver } from './entities/executionmethod/resolver';
import { ExpenditureTypeResolver } from './entities/expendituretype/resolver';
import { MfpIndicatorResolver } from './entities/mfpindicator/resolver';
import { ProgramResolver } from './entities/program/resolver';
import { UserResolver } from './entities/user/resolver';
import { SpendPlanDraftResolver } from './entities/spend-plan-draft/resolver';

export const combinedResolvers = [
    DirectorateResolver,
    ExecutionMethodResolver,
    ExpenditureTypeResolver,
    MfpIndicatorResolver,
    ProgramResolver,
    UserResolver,
    SpendPlanDraftResolver,
];
