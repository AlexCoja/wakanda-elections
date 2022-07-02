import { useCallback } from "react";

// Hooks //
import { useApi } from "../../../../src/common/hooks";

/* Services */
import { APIService } from "../../../../src/common/services";
import { CandidatesList } from "../../elections-page.types";

function useWakandaCandidates() {
  const { data, setData, loading, setLoading, error, setError } =
    useApi<CandidatesList>();

  const getWakandaCandidates = useCallback(async () => {
    setLoading(true);

    try {
      const result = await APIService.getWakandaCandidates();

      if (result) {
        setData(result);
      } else {
        setData(undefined);
      }

      setLoading(false);
    } catch (e: any) {
      setError(e.message);
      setLoading(false);
    }
  }, [setError, setLoading, setData]);

  return [getWakandaCandidates, { data, loading, error }] as const;
}

export default useWakandaCandidates;
