

export default {
  rules: {
    isRequire (value) {
      if(!value) return 'Email không được để trống';
      return true;
    },

    isValidEmail (value) {
      if (!value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
        return 'Email không đúng định dạng';
      }
      return true;
    },
    
    
  }

}