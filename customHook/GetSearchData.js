export const getFilters = (type, value, videoslist) => {
    if (type == "brand") {
      var filter_data = videoslist.filter((item) => item.brand == value);
      return filter_data;
    }
    if (type == "type") {
      var filter_data = videoslist.filter((item) => item.type == value);
      return filter_data;
      }
      if (type == null) {
          return videoslist
      }
  };
  