import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { render, RenderOptions, RenderResult } from "@testing-library/react";
import {
  renderHook,
  RenderHookOptions,
  RenderHookResult,
} from "@testing-library/react-hooks";
import { ConfigProvider } from "antd";
import { MemoryRouterProvider } from "next-router-mock/MemoryRouterProvider";
import React, { ReactElement, ReactNode, useMemo } from "react";

const RootSupplierWrapper = ({ children }: { children: ReactNode }) => {
  const mockQueryClient = useMemo(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            // ✅ turns retries off
            retry: false,
          },
        },
      }),
    []
  );

  return (
    <QueryClientProvider client={mockQueryClient}>
      <MemoryRouterProvider>
        <ConfigProvider>{children}</ConfigProvider>
      </MemoryRouterProvider>
    </QueryClientProvider>
  );
};

const customRender = (ui: ReactElement, options: RenderOptions = {}) =>
  render(ui, { wrapper: RootSupplierWrapper, ...options });

function customRenderHook<TProps, TResult>(
  callback: (props: TProps) => TResult,
  options?: RenderHookOptions<TProps>
): RenderHookResult<TProps, TResult> {
  return renderHook(callback, {
    wrapper: ({ children }: TProps & { children: ReactNode }) => (
      <RootSupplierWrapper {...options?.initialProps}>
        {children}
      </RootSupplierWrapper>
    ),
    ...options,
  });
}

function componentRenderer<Props>(
  C: React.ComponentType<Props>,
  defaultProps: Props = {} as Props & { children?: React.ReactNode },
  options?: RenderOptions
): (props?: Partial<Props>, overrideOptions?: RenderOptions) => RenderResult {
  const renderComponent = (props?: Partial<Props>) => (
    <C {...defaultProps} {...props} />
  );

  return (props?: Partial<Props>, overrideOptions?: RenderOptions) =>
    customRender(renderComponent(props), {
      ...options,
      ...overrideOptions,
    });
}

// re-export everything
export * from "@testing-library/react";

// override render method
export {
  componentRenderer,
  customRender as render,
  customRenderHook as renderHook,
};
