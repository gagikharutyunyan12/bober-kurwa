import { Counter } from 'entities/Counter/ui/Counter';
import { counterReducer } from 'entities/Counter/model/slice/counterSlice';
import type { CounterSchema } from './model/types/counterSchema';

export {
    Counter,
    counterReducer,
    CounterSchema,
};
