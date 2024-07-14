import MUIDataTable from "mui-datatables";

export default function Table({ title, data, columns }) {
  const options = {
    viewColumns: false,
    selectableRowsHeader: false,
    selectableRowsHideCheckboxes: true,
    textLabels: {
      body: {
        noMatch: "No data found",
        toolTip: "Filter",
        columnHeaderTooltip: (column) => `Filter by ${column.label}`,
      },
      pagination: {
        next: "Next page",
        previous: "Previous page",
        rowsPerPage: "Rows per page:",
        displayRows: "of",
      },
      toolbar: {
        search: "Search",
        downloadCsv: "Download CSV",
        print: "Print",
        filterTable: "Filter",
      },
      filter: {
        all: "All",
        title: "Filters",
        reset: "Reset",
      },
      selectedRows: {
        text: "Row(s) selected",
        delete: "Delete",
        deleteAria: "Delete rows selected",
      },
    },
  };

  return (
    <MUIDataTable
      title={title}
      data={data}
      columns={columns}
      options={options}
    />
  );
}
