import MUIDataTable from "mui-datatables";

export default function Table({ title, data, columns }) {
  const options = {
    viewColumns: false,
    selectableRowsHeader: false,
    selectableRowsHideCheckboxes: true,
    textLabels: {
      body: {
        noMatch: "No se encontraron datos",
        toolTip: "Filtrar",
        columnHeaderTooltip: (column) => `Filtrar por ${column.label}`,
      },
      pagination: {
        next: "Página siguiente",
        previous: "Página anterior",
        rowsPerPage: "Filas por página:",
        displayRows: "de",
      },
      toolbar: {
        search: "Buscar",
        downloadCsv: "Descargar CSV",
        print: "Imprimir",
        filterTable: "Filtrar",
      },
      filter: {
        all: "Todo",
        title: "Filtros",
        reset: "Reiniciar",
      },
      selectedRows: {
        text: "Filas(s) seleccionadas",
        delete: "Eliminar",
        deleteAria: "Eliminar las filas seleccionadas",
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
