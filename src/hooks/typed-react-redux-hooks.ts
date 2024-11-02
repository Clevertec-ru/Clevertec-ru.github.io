import { type TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { configureAppStore } from '~/configure-store';
import { ApplicationState } from '~/redux/root-reducer';

type ApplicationDispatch = ReturnType<typeof configureAppStore>['dispatch'];

export const useAppSelector: TypedUseSelectorHook<ApplicationState> = useSelector;
export const useAppDispatch = () => useDispatch<ApplicationDispatch>();
