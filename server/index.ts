import { actionCaller } from "./utils/action-caller";

Bun.serve({
  hostname: "localhost",
  port: 3000,
  fetch: async (request) => {
    try {
      const result = await actionCaller(request);

      if (result) {
        return Response.json(result);
      }

      return new Response();
    } catch (error) {
      const response = new Response(null, {
        status: 400,
        statusText:
          error instanceof Error ? error.message : "Something went wrong",
      });
      console.info(
        error instanceof Error ? error.message : "Something went wrong",
      );

      return response;
    }
  },
});
