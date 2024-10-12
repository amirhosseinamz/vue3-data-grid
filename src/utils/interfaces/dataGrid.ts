import {defineComponent} from "vue";

export interface IColumn {
    key: string;
    title?: string;
    style?: string;
    headStyle?: string;
    sortKey?: string;
    component?: ReturnType<typeof defineComponent> | undefined;
    columnClass?: string;
    width?: string;
}

export interface IGridConfig {
  direction?: 'ltr' | 'rtl';
  hasPagination?: boolean;
  hasDownloadButton?: boolean;
  showHeader?: boolean;
  showRowNumber?: boolean;
  textAlign: 'start' | 'center' | 'end';
}