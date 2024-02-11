export interface Info {
  _id: string;
  _rev: string;
  _createdAt: any;
  _updatedAt: string;
  _type: string;
  title: string;
  image_principal: {
    epigrafe: any;
    imagen: {
      _type: any;
      asset: {
        _ref: string;
        _type: string;
      };
    };
    video_epigrafe: any;
    video: {
      _type: any;
      asset: {
        _ref: string;
        _type: string;
      };
    };
  };
  // file: {
  //   imagen_principal: {
  //     imagen_epigrafe: any;
  //     imagen: {
  //       _type: any;
  //       asset: { _ref: any; _type: any };
  //     };
  //   };
  // };
}
