export const searchValues = (videoslist,val) => {
    return videoslist.filter((item) =>
        item.name
          .toString()
          .toLowerCase()
          .includes(val.toString().toLowerCase())
      );
  };