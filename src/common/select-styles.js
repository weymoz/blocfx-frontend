export default {
  container: provided => ({
    ...provided,
    width: "100%"
  }),

  control: provided => ({
    ...provided,
    border: "1px solid #ebebf5",
    borderRadius: '2px',
    padding: "14px 10px 14px 16px",
    height: "auto",
    minHeight: "auto",
    boxsizing: "border-box"
  }),

  valueContainer: provided => ({
      ...provided,
      padding: 0
  }),

  input: provided => ({
    ...provided,
    margin: 0,
    padding: 0,
  }),


  menu: provided => ({
    ...provided,
    borderRadius: 2
  }),

  menuList: provided => ({
    ...provided,
    paddingTop: 0,
    paddingBottom: 0
  }),

  indicatorSeparator: provided => ({
    ...provided,
    display: "none"
  }),

  option: (provided, state) => {
    return {
      ...provided,

      backgroundColor: "tansparent",
      color: "inherit",
      padding: "10",

      ":active": {
        backgroundColor: "transparent"
      },

      ":hover": {
        backgroundColor: "#f5f6fc"
      }
    };
  },

  singleValue: (provided, { data }) => {
    return {
      ...provided,
      display: "flex",
      marginLeft: "26px"
    };
  }
};
