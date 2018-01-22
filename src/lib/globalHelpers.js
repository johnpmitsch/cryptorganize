GlobalHelpers = {
  headerTintColor: "white",
  buttonColor: "#3498db",
  deleteButtonColor: "#FF4136",
  humanize: str => {
    const frags = str.split("_");
    for (i = 0; i < frags.length; i++) {
      frags[i] = frags[i].charAt(0).toUpperCase() + frags[i].slice(1);
    }
    return frags.join(" ");
  }
};

export default GlobalHelpers;
