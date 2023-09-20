import useSWR from "swr";
import { apiClient } from "../utility/api";

type HealthCheckResponse = {
  status: string;
};

export function useHealthCheck(): { status: string } {
  const { data } = useSWR<HealthCheckResponse>("/healthcheck", (url) =>
    apiClient({ url })
  );
  return { status: data?.status ?? "unknown" };
}
