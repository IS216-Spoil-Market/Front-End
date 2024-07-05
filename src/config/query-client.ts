import { MutationCache, QueryCache, QueryClient } from "@tanstack/react-query";
import { enqueueSnackbar } from "notistack";

export default new QueryClient({
    queryCache: new QueryCache({
        onError: (error, query) => {
            if (typeof query?.meta?.errorMessage === "string") {
                enqueueSnackbar(query.meta.errorMessage, { variant: "error" });
            } else if (error instanceof Error) {
                enqueueSnackbar(error.message, { variant: "error" });
            }
        },
    }),
    mutationCache: new MutationCache({
        onError: (error, _, __, mutation) => {
            if (typeof mutation?.meta?.errorMessage === "string") {
                enqueueSnackbar(mutation.meta.errorMessage, { variant: "error" });
            } else if (error instanceof Error) {
                enqueueSnackbar(error.message, { variant: "error" });
            }
        },
    })
});