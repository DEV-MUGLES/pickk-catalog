export const constructUrl = (
  pathname: string,
  queries: Record<string, unknown>
) => {
  const queryString = Object.keys(queries)
    .map((v) => [v, queries[v]])
    .reduce((acc, cur, i) => {
      return acc + (i === 0 ? '?' : '&') + cur[0] + '=' + cur[1];
    }, '');
  return pathname + queryString;
};

export const getQueryParameters = (url: string) => {
  const queryString = url.split('?').reverse()[0];
  if (queryString === url) return {};
  const result: Record<string, unknown> = {};
  queryString.split('&').forEach((query) => {
    const [name, value] = query.split('=');
    result[name] = value;
  });
  return result;
};
