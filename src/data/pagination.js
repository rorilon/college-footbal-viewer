export const dataForPage = (data, page, perPage) => {
  // page could be an empty string
  let pageForData = page;
  if (!page) pageForData = 1;

  const start = (pageForData - 1) * perPage;
  const end = pageForData * perPage;
  return data.slice(start, end);
};

export const totalPages = (data, perPage) =>
  Math.trunc(data.length / perPage) + (data.length % perPage ? 1 : 0);

export const handleChangePerPageValue = (event, selectPerPage) => {
  let perPageValue = event.target.value;
  if (perPageValue && perPageValue < 1) perPageValue = 1;
  if (perPageValue && perPageValue > 100) perPageValue = 100;
  event.target.value = perPageValue;
  selectPerPage(perPageValue);
};

export const handleChangePage = (event, selectPage, pagination, content) => {
  let pageValue = event.target.value;
  if (pageValue && pageValue < 1) {
    pageValue = 1;
    event.target.value = pageValue;
  }
  if (pageValue && pageValue > totalPages(content, pagination.perPage)) {
    pageValue = totalPages(content, pagination.perPage);
    event.target.value = pageValue;
  }
  selectPage(pageValue);
};
