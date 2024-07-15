export const HTTP_METHODS = {
  GET: "GET",
  POST: "POST",
  PUT: "PUT",
  DELETE: "DELETE",
} as const;

export const HTTP_RES_STATUS_CODES = {
  OK: 200,
  CREATED: 201,
  GONE: 410,
  INTERNAL_SERVIER_ERROR: 500,
} as const;
