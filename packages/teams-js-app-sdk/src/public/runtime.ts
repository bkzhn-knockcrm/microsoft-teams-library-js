/* eslint-disable @typescript-eslint/ban-types */

import { deepFreeze } from '../internal/utils';
export interface IRuntime {
  readonly apiVersion: number;
  readonly supports: {
    readonly calendar?: {};
    readonly chat?: {};
    readonly dialog?: {};
    readonly files?: {};
    readonly location?: {};
    readonly mail?: {};
    readonly media?: {};
    readonly meeting?: {};
    readonly notifications?: {};
    readonly pages?: {
      readonly appButton?: {};
      readonly tabs?: {};
      readonly config?: {};
      readonly backStack?: {};
      readonly fullTrust?: {};
    };
    readonly teams?: {
      readonly fullTrust?: {};
    };
  };
}

export let runtime: IRuntime = {
  apiVersion: 1,
  supports: {
    calendar: undefined,
    chat: undefined,
    dialog: undefined,
    location: undefined,
    mail: undefined,
    media: undefined,
    meeting: undefined,
    notifications: undefined,
    pages: {
      appButton: undefined,
      tabs: undefined,
      config: undefined,
      backStack: undefined,
      fullTrust: undefined,
    },
    teams: {
      fullTrust: undefined,
    },
  },
};

export const teamsRuntimeConfig: IRuntime = {
  apiVersion: 1,
  supports: {
    chat: {},
    dialog: {},
    files: {},
    location: {},
    media: {},
    meeting: {},
    notifications: {},
    pages: {
      appButton: {},
      tabs: {},
      config: {},
      backStack: {},
      fullTrust: {},
    },
    teams: {
      fullTrust: {},
    },
  },
};

export function applyRuntimeConfig(runtimeConfig: IRuntime): void {
  runtime = deepFreeze(runtimeConfig);
}
