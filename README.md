# FitCheck

## Description
This is the Full Stack app for FitCheck, an app to match fashion influencers and users. The stack is made up of the following:
- [x] Next js setup
- [x] Vitest setup for unit testing
- [x] MSW setup for mocking API calls in integration tests
- [x] React query setup
- [x] React query codegen setup
- [x] Typescript setup
- [x] Basic CI pipeline which includes linting, semantic release and unit tests
- [x] Eslint setup
- [x] Prettier setup
- [x] Storybook setup
- [x] Chakra UI library
- [x] Atomic design folder structure
- [x] Commitlint for linting commit messages
- [x] Husky for git hooks
- [x] SST deploy setup

## Getting Started
1. Clone the repo
2. Run `yarn install`
3. Run `yarn dev` to start the dev server

## Folder structure 
See below for a high level overview of the folder structure. 
1. **Components** - This folder contains all the components for the project. The components follow the Atomic design methodology. This means the folders are split into atoms, molecules, organisms and templates. For more information on atomic design please see [here](https://bradfrost.com/blog/post/atomic-web-design/).
2. **Pages** - This folder contains all the pages for the project. The pages should render Atomic design Templates.
3. **Public** - This folder contains all the static assets for the project.
4. **Styles** - This folder contains all the global styles for the project.
5. **Utils** - This folder contains generic utility functions for the project. Functions in this folder can be applied to any FE project.
6. **Types** - This folder contains all the types for the project.
7. **Helpers** - This folder contains specific utility functions to the corresponding repo only. Functions in this folder cannot be shared to another FE project as they are repo specific.
8. **Hooks** - This folder contains all the custom React hooks for the project.
9. **Constants** - This folder contains all the constants for the project.
10. **Graphql** - This folder contains all the graphql queries, mutations and fragments for the project. It also contains the codegen setup and customer fetcher for React query.


## Testing

The project uses [Vitest](https://vitest.dev/) and [React testing library](https://testing-library.com/docs/react-testing-library/intro/) for unit testing. The project also uses [MSW](https://mswjs.io/) for mocking API calls in integration tests. All functions, components and hooks should have unit tests and integration tests where applicable. 

Several custom render functions have been created to wrap all the component or hook tests in a provider. This allows us to mock the React query client and the theme provider in one centralised place for all tests. The functions can be
found in `src/helpers/tests/customrender.tsx`. 



All component unit tests should follow a similar pattern using the `componentRenderer` function and setup should be called in a beforeEach for a block of tests. This `componentRenderer`
function is a closure which allows us to render the component once and then run multiple tests on it. This is more efficient than rendering the component in each test. This function also
allows us to setup default props at the root render level and then override individual props in each setup function called. To override individual props ensure `setup` functions are called
in different test scopes. 

```ts
import { componentRenderer, screen } from "@/helpers/tests/customRender";
import Home from "@/pages/index";

const setup = componentRenderer(Home);

describe(`<${Home.name}/>`, () => {
  beforeEach(() => setup());

  it("should render the home page", async () => {
    await expect(
      screen.findByText(
        /Fortune and glory, kid. Fortune and glory. intercepted event type/i
      )
    ).resolves.toBeVisible();
  });
});
```


All hook unit tests should follow a similar pattern using the custom `renderHook` function.

```ts
import * as featureFlagConfig from "./featureFlagConfig";
import { useFeatureFlag } from "./useFeatureFlag";

import { BUILD_ENV } from "../../constants/env";
import { FEATURE_FLAGS } from "../../constants/features";
import { renderHook } from "../../utils/tests/customRender";

const mockFeatureFlagObj = {
  [BUILD_ENV.DEVELOPMENT]: {
    [FEATURE_FLAGS.CATERERS_LINE_ITEMS]: "mockFeatureFlagTrue",
  },
};

describe(useFeatureFlag.name, () => {
  it("should return a given feature flags value", () => {
    Object.defineProperty(featureFlagConfig, "FEATURE_FLAG_CONFIG", {
      value: mockFeatureFlagObj,
    });

    const { result } = renderHook(() =>
      useFeatureFlag(FEATURE_FLAGS.CATERERS_LINE_ITEMS),
    );

    expect(result.current).toEqual("mockFeatureFlagTrue");
  });
});
```

## Data fetching
The project uses [React query](https://react-query.tanstack.com/) for data fetching with a corresponding [React query codegen](https://the-guilddev/graphql/codegen/plugins/typescript/typescript-react-query) for auto hook generation. A codegen custom fetcher has also been added to handle errors and invoke the custom Axios client. The custom fetcher can be found in `src/graphql/codegen/customFetcher.ts`. This custom fetcher invokes the Axios singleton client found in `src/helpers/http/services/client.ts`. The point of this singleton is to have one instance used for all requests.

Any new services whether graphql or rest should have a corresponding axios client file created in the service's folder.

Data fetching is only setup from a client side rendering POV for now. If you require SSR data fetching please see the [React query docs](https://react-query.tanstack.com/guides/ssr). A
further update is needed to fetch data via React query on the server side.

## Codegen
To generate the hooks run `yarn run gen:types`. This will generate the hooks in the `src/graphql/codegen` folder. The hooks can then be imported and used in the project. The hooks are typed
meaning you will get intellisense when using them.

## Storybook
The project uses Storybook. This is a tool for UI development. It makes development faster and easier by isolating components. This allows us to build components in isolation and test them in isolation. Storybook also allows us to document components and their props whilst creating visibility for wider business teams such as design on per-project basis.

## Deploying
Likely with Vercel (TBC)
