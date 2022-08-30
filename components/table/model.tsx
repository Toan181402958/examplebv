import React from 'react';
export interface RowData {
  id: number;
  name: string;
  typeFile: string;
  status: string;
  date: string;
  nameStaff: string;
}

export interface TableData {
  title: string;
  isSelected: boolean;
  listRow: Array<RowData>;
  id: number;
}
