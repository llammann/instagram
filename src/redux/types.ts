import { ThunkAction, ThunkDispatch } from "@reduxjs/toolkit";
import { RootState } from "./store";

export type AppDispatch = ThunkDispatch<RootState, void, any>;
export type ThunkResult<R> = ThunkAction<R, RootState, undefined, any>;
