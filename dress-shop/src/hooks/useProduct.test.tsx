import { CARD } from "@/mocks/common";
import { axiosClient } from "@/services";
import { renderHook, waitFor } from "@testing-library/react";
import { act, ReactNode } from "react";
import { useAddProduct, useUpdateProduct } from "./useProduct";

import { AxiosError } from "axios";
import { QueryClient, QueryClientProvider } from "react-query";

interface Props {
  children?: ReactNode;
}

// const spyGet = jest.spyOn(axiosClient, "get");
const spyPost = jest.spyOn(axiosClient, "post");
const spyPut = jest.spyOn(axiosClient, "put");

// useProducts
// describe("useAppointmentListQuery", () => {
//   const queryClient = new QueryClient();
//   const wrapper = ({ children }: Props) => (
//     <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
//   );
//   // Render correct data
//   it("Should render correct data response form api", async () => {
//     spyGet.mockImplementationOnce((): Promise<unknown> => {
//       return Promise.resolve({ data: PRODUCTS });
//     });

//     const { result } = renderHook(() => useProducts(), { wrapper });

//     await waitFor(() => {
//       const { isError, isSuccess, data } = result.current;

//       expect(isSuccess).toBe(true);
//       expect(isError).toBe(false);
//       expect(data).toEqual(PRODUCTS);
//     });
//   });

//   it("Should return error if call API failure", async () => {
//     const errorMsg = AxiosError;

//     // Mock API return
//     spyGet.mockImplementationOnce(
//       (): Promise<unknown> => Promise.reject(errorMsg),
//     );

//     const { result } = renderHook(() => useProducts(), { wrapper });

//     // Call API
//     await waitFor(() => {
//       const { isError, isSuccess, error } = result.current;

//       expect(isSuccess).toBe(false);
//       expect(isError).toBe(true);
//       expect(error).toEqual(errorMsg);
//     });
//   });
// });

// useAddProduct
describe("useAddAppointmentMutation", () => {
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
