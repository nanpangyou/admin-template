export type childrenType = {
  path?: string;
  noShowingChildren?: boolean;
  children?: childrenType[];
  value?: unknown;
  meta?: {
    icon?: string;
    title?: string;
    showParent?: boolean;
    extraIcon?: {
      svg?: boolean;
      name?: string;
    };
  };
  showTooltip?: boolean;
  parentId?: number;
  pathList?: number[];
};
