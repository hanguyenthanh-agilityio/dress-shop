import { CARD, PRODUCTS } from "@/mocks/common";
import { axiosClient } from "@/services";
import { act, renderHook, waitFor } from "@testing-library/react";
import { ReactNode } from "react";
import {
  useAddProduct,
  useProductId,
  useProducts,
  useUpdateProduct,
} from "./useProduct";

import { AxiosError } from "axios";
import { QueryClient, QueryClientProvider } from "react-query";

interface Props {
  children?: ReactNode;
}

const spyGet = jest.spyOn(axiosClient, "get");
const spyPost = jest.spyOn(axiosClient, "post");
const spyPut = jest.spyOn(axiosClient, "put");

// useProducts
describe("useProducts", () => {
  const props = { page: 1, limit: 8 };
  const error = "Error";

  const queryClient = new QueryClient();
  const wrapper = ({ children }: Props) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
  // Render correct data
  it("Should render correct data response form api", async () => {
    spyGet.mockImplementationOnce((): Promise<unknown> => {
      return Promise.resolve({ data: PRODUCTS });
    });

    const { result } = renderHook(() => useProducts(props, () => error), {
      wrapper,
    });

    await waitFor(() => {
      const { isError, isSuccess, data } = result.current;

      expect(isSuccess).toBe(true);
      expect(isError).toBe(false);
      expect(data).toEqual(PRODUCTS);
    });
  });
});

// useProductId
describe("useProductId", () => {
  // const error = () => error;

  const queryClient = new QueryClient();
  const wrapper = ({ children }: Props) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
  // Render correct data
  it("Should render correct data response form api", async () => {
    spyGet.mockImplementationOnce((): Promise<unknown> => {
      return Promise.resolve({ data: PRODUCTS });
    });

    const { result } = renderHook(() => useProductId("1"), {
      wrapper,
    });

    await waitFor(() => {
      const { isError, isSuccess, data } = result.current;

      expect(isSuccess).toBe(true);
      expect(isError).toBe(false);
      expect(data).toEqual(PRODUCTS);
    });
  });
});

// useAddProduct
describe("useAddProduct", () => {
  const queryClient = new QueryClient();
  const wrapper = ({ children }: Props) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );

  // Render correct data
  it("Should render correct data response form api", async () => {
    // Mock API return
    spyPost.mockImplementationOnce((): Promise<unknown> => {
      return Promise.resolve();
    });

    const { result } = renderHook(() => useAddProduct(), {
      wrapper,
    });

    // Call api
    act(() => {
      result.current.mutate(CARD);
    });

    await waitFor(() => {
      const { isError, isSuccess } = result.current;

      expect(isSuccess).toBe(true);
      expect(isError).toBe(false);
    });
  });

  // Render error api
  it("Should render error when call api failure", async () => {
    const errorMsg = AxiosError;

    // Mock API return
    spyPost.mockImplementationOnce((): Promise<unknown> => {
      return Promise.reject(errorMsg);
    });

    const { result } = renderHook(() => useAddProduct(), {
      wrapper,
    });

    // Call api
    act(() => {
      result.current.mutate(CARD);
    });

    await waitFor(() => {
      const { isError, isSuccess } = result.current;

      expect(isSuccess).toBe(false);
      expect(isError).toBe(true);
    });
  });
});

// useUpdateProduct
describe("useUpdateProduct", () => {
  const queryClient = new QueryClient();
  const wrapper = ({ children }: Props) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );

  // Render correct data
  it("Should render correct data response form api", async () => {
    // Mock API return
    spyPut.mockImplementationOnce((): Promise<unknown> => {
      return Promise.resolve();
    });

    const { result } = renderHook(() => useUpdateProduct(), {
      wrapper,
    });

    // Call api
    act(() => {
      result.current.mutate(CARD);
    });

    await waitFor(() => {
      const { isSuccess } = result.current;

      expect(isSuccess).toBe(true);
    });
  });

  // Render error api
  it("Should render correct data response form api", async () => {
    // Mock API return
    spyPut.mockImplementationOnce((): Promise<unknown> => {
      return Promise.reject();
    });

    const { result } = renderHook(() => useUpdateProduct(), {
      wrapper,
    });

    // Call api
    act(() => {
      result.current.mutate(CARD);
    });

    await waitFor(() => {
      const { isSuccess } = result.current;

      expect(isSuccess).toBe(false);
    });
  });
});
