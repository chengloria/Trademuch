module.exports = {
  findAll: async() => {
    try {
      return await Item.findAll();
    } catch (e) {
      throw e;
    }
  },


  create: async({
    LikeId, itemname, pic
  }) => {
    try {
      if (pic == undefined || pic == null) {
        let pic = await FlickrService.searchGetty(itemname);
      }
      let createItem = await Item.create({
        itemname: itemname,
        LikeId: LikeId,
        pic: pic
      });
      return createItem;
    } catch (e) {
      throw e;
    }
  },

  findByLikeId: async(id) => {
    try {
      let findlike = await Item.findAll({
        where: {
          LikeId: id
        },
        order: 'quantity DESC'
      });
      return findlike;
    } catch (e) {
      throw e;
    }
  }


}
