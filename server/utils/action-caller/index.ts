import { parseBody } from "../parse-body";
import { actionBodySchema, routes } from "./consts";

export const actionCaller = async (request: Request) => {
  const body = await request.json();
  const data = await parseBody({
    raw: body,
    schema: actionBodySchema,
  });

  const route = routes.find((item) => item.type === data.action);

  if (!route) {
    throw new Error(`Action ${data.action} doesn't exists`);
  }

  const routeData = await parseBody({ raw: body, schema: route.schema });
  const actionResult = await route.action({
    data: routeData,
  });

  return actionResult;
};
