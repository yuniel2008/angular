import { Injectable } from '@angular/core';
import {Workbook} from 'exceljs';
import * as fs from 'file-saver';
import {Config} from '../../config';


@Injectable({
  providedIn: 'root'
})
export class ExcelService {

  constructor() { }

  // tslint:disable-next-line:typedef
  async generateAdmitionsExcel(
    title: string,
    header: string[],
    mergeHeader: string,
    mergeSystem: string,
    data: any[],
    sheet: string,
    withColum: number[],
    filename: string
  ) {

    // Create workbook and worksheet
    const workbook = new Workbook();
    const worksheet = workbook.addWorksheet(sheet);


// Add Row and formatting
    const titleRow = worksheet.addRow([title]);
    // @ts-ignore
    titleRow.font = { name: 'Corbel', family: 4, size: 16, underline: 'double', bold: true};
    titleRow.alignment = { vertical: 'middle', horizontal: 'center' };
    worksheet.mergeCells('A1:' + mergeHeader);
    titleRow.getCell(1).border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } };
    worksheet.addRow([]);

    const systemRow = worksheet.addRow(['Sistema ' + Config.systemName()]);
    systemRow.font = { name: 'Corbel', family: 4, size: 14, underline: 'double', bold: true};
    systemRow.alignment = { vertical: 'middle', horizontal: 'center' };
    worksheet.addRow([]);
    worksheet.mergeCells('A4:' + mergeSystem);

    worksheet.addRow([]);

    const subTitleRow = worksheet.addRow(['Generado el : ' + new Date().toLocaleDateString('es')]);
    subTitleRow.font = { name: 'Corbel', family: 4,  bold: true};
    worksheet.mergeCells('A7:B7');

// Blank Row
    worksheet.addRow([]);

// Add Header Row
    const headerRow = worksheet.addRow(header);
    headerRow.font = { name: 'Corbel', family: 4,  bold: true};

// Cell Style : Fill and Border
    // tslint:disable-next-line:variable-name
    headerRow.eachCell((cell, number) => {
      cell.fill = {
        type: 'pattern',
        pattern: 'solid',
        fgColor: { argb: '2bc465' },
        bgColor: { argb: 'FF0000FF' }
      };
      cell.border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } };
    });

// Add Data and Conditional Formatting
    data.forEach(d => {
        const row = worksheet.addRow(d);
      // tslint:disable-next-line:variable-name
        row.eachCell((cell, number) => {
          cell.border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } };
        });
      }
    );

    for (let i = 0; i < withColum.length; i++){
      worksheet.getColumn(i + 1).width = withColum[i];
    }
    worksheet.addRow([]);

// Generate Excel File with given name
    // tslint:disable-next-line:no-shadowed-variable
    workbook.xlsx.writeBuffer().then((data: any) => {
      const blob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
      fs.saveAs(blob, filename + '.xlsx');
    });

  }

  // tslint:disable-next-line:typedef
  async generatePCRExcel(
    title: string,
    header: string[],
    mergeHeader: string,
    mergeSystem: string,
    data: any[],
    sheet: string,
    withColum: number[],
    filename: string
  ) {

    // Create workbook and worksheet
    const workbook = new Workbook();
    const worksheet = workbook.addWorksheet(sheet);


// Add Row and formatting
    const titleRow = worksheet.addRow([title]);
    // @ts-ignore
    titleRow.font = { name: 'Corbel', family: 4, size: 16, underline: 'double', bold: true};
    titleRow.alignment = { vertical: 'middle', horizontal: 'center' };
    worksheet.mergeCells('A1:' + mergeHeader);
    titleRow.getCell(1).border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } };
    worksheet.addRow([]);

    const systemRow = worksheet.addRow(['Sistema ' + Config.systemName()]);
    systemRow.font = { name: 'Corbel', family: 4, size: 14, underline: 'double', bold: true};
    systemRow.alignment = { vertical: 'middle', horizontal: 'center' };
    worksheet.addRow([]);
    worksheet.mergeCells('A4:' + mergeSystem);

    worksheet.addRow([]);

    const subTitleRow = worksheet.addRow(['Generado el : ' + new Date().toLocaleDateString('es')]);
    subTitleRow.font = { name: 'Corbel', family: 4,  bold: true};
    worksheet.mergeCells('A7:B7');

// Blank Row
    worksheet.addRow([]);

// Add Header Row
    const headerRow = worksheet.addRow(header);
    headerRow.font = { name: 'Corbel', family: 4,  bold: true};

// Cell Style : Fill and Border
    // tslint:disable-next-line:variable-name
    headerRow.eachCell((cell, number) => {
      cell.fill = {
        type: 'pattern',
        pattern: 'solid',
        fgColor: { argb: '2bc465' },
        bgColor: { argb: 'FF0000FF' }
      };
      cell.border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } };
    });

// Add Data and Conditional Formatting
    data.forEach(d => {
        const row = worksheet.addRow(d);
        // tslint:disable-next-line:variable-name
        const qty = row.getCell(7);
        let color = 'FFFFFFFF';
        // @ts-ignore
        if (qty.value === 'Positiva') {
          color = 'dc3545';
        } else {
          if (qty.value === 'Pendinete') {
            color = '007bff';
          }
        }

        for (let i = 0; i < header.length; i ++){
          row.getCell(i + 1).fill = {
            type: 'pattern',
            pattern: 'solid',
            fgColor: { argb: color }
          };
        }


      // tslint:disable-next-line:variable-name
        row.eachCell((cell, number) => {
          cell.border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } };
        });
      }
    );

    for (let i = 0; i < withColum.length; i++){
      worksheet.getColumn(i + 1).width = withColum[i];
    }
    worksheet.addRow([]);

// Generate Excel File with given name
    // tslint:disable-next-line:no-shadowed-variable
    workbook.xlsx.writeBuffer().then((data: any) => {
      const blob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
      fs.saveAs(blob, filename + '.xlsx');
    });

  }


  // tslint:disable-next-line:typedef
  async generatePCRAdmitionsExcel(
    title: string,
    header: string[],
    mergeHeader: string,
    mergeSystem: string,
    data: any[],
    sheet: string,
    withColum: number[],
    filename: string
  ) {

    // Create workbook and worksheet
    const workbook = new Workbook();
    const worksheet = workbook.addWorksheet(sheet);


// Add Row and formatting
    const titleRow = worksheet.addRow([title]);
    // @ts-ignore
    titleRow.font = { name: 'Corbel', family: 4, size: 16, underline: 'double', bold: true};
    titleRow.alignment = { vertical: 'middle', horizontal: 'center' };
    worksheet.mergeCells('A1:' + mergeHeader);
    titleRow.getCell(1).border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } };
    worksheet.addRow([]);

    const systemRow = worksheet.addRow(['Sistema ' + Config.systemName()]);
    systemRow.font = { name: 'Corbel', family: 4, size: 14, underline: 'double', bold: true};
    systemRow.alignment = { vertical: 'middle', horizontal: 'center' };
    worksheet.addRow([]);
    worksheet.mergeCells('A4:' + mergeSystem);

    worksheet.addRow([]);

    const subTitleRow = worksheet.addRow(['Generado el : ' + new Date().toLocaleDateString('es')]);
    subTitleRow.font = { name: 'Corbel', family: 4,  bold: true};
    worksheet.mergeCells('A7:B7');

// Blank Row
    worksheet.addRow([]);

    data.forEach(a => {

      const admitionsRows =  worksheet.addRow([]);
      admitionsRows.getCell(1).value = 'HC: ' + a[0];
      admitionsRows.getCell(1).font = {  bold: true};

      admitionsRows.getCell(2).value = 'Nombre: ' + a[1];
      admitionsRows.getCell(2).font = {  bold: true};

      admitionsRows.getCell(3).value = 'CI: ' + a[2];
      admitionsRows.getCell(3).font = {  bold: true};

      admitionsRows.getCell(4).value = 'Fecha admisión: ' + a[3];
      admitionsRows.getCell(4).font = {  bold: true};

      admitionsRows.getCell(5).value = 'Centro de aislamiento: ' + a[4];
      admitionsRows.getCell(5).font = {  bold: true};

      admitionsRows.eachCell((cell, number) => {
        cell.border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } };
      });

      worksheet.addRow(['Pruebas PCR:']).font = { name: 'Corbel', family: 4,  bold: true};
      // Add Header Row
      const headerRow = worksheet.addRow(header);
      headerRow.font = { name: 'Corbel', family: 4,  bold: true};

// Cell Style : Fill and Border
      // tslint:disable-next-line:variable-name
      headerRow.eachCell((cell, number) => {
        cell.fill = {
          type: 'pattern',
          pattern: 'solid',
          fgColor: { argb: '2bc465' },
          bgColor: { argb: 'FF0000FF' }
        };
        cell.border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } };
      });

// Add Data and Conditional Formatting
      a[5].forEach(d => {
          const row = worksheet.addRow(d);
          // tslint:disable-next-line:variable-name
          const qty = row.getCell(4);
          let color = 'FFFFFFFF';
          // @ts-ignore
          if (qty.value === 'Positiva') {
            color = 'dc3545';
          } else {
            if (qty.value === 'Pendinete') {
              color = '007bff';
            }
          }

          for (let i = 0; i < header.length; i ++){
            row.getCell(i + 1).fill = {
              type: 'pattern',
              pattern: 'solid',
              fgColor: { argb: color }
            };
          }


          // tslint:disable-next-line:variable-name
          row.eachCell((cell, number) => {
            cell.border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } };
          });
        }
      );

      worksheet.addRow([]);
    });



    for (let i = 0; i < withColum.length; i++){
      worksheet.getColumn(i + 1).width = withColum[i];
    }
    worksheet.addRow([]);

// Generate Excel File with given name
    // tslint:disable-next-line:no-shadowed-variable
    workbook.xlsx.writeBuffer().then((data: any) => {
      const blob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
      fs.saveAs(blob, filename + '.xlsx');
    });

  }
}
