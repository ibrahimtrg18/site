export type IResponse<T, M = undefined> = {
  data: T;
  meta: M;
};

export type IMedia = {
  data: {
    id: number;
    attributes: {
      name: string;
      alternativeText: string;
      caption: string | null;
      width: number;
      height: number;
      formats: {
        thumbnail: {
          ext: string;
          url: string;
          hash: string;
          mime: string;
          name: string;
          path: string | null;
          size: number;
          width: number;
          height: number;
        };
      };
      hash: string;
      ext: string;
      mime: string;
      size: number;
      url: string;
      previewUrl: string;
      provider: string;
      provider_metadata: unknown | null;
      createdAt: string;
      updatedAt: string;
    };
  };
};
