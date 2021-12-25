if(val === "alpha") {
    result = "Adams";
  } else if(val === "bravo") {
    result = "Boston";
  } else if(val === "charlie") {
    result = "Chicago";
  } else if(val === "delta") {
    result = "Denver";
  } else if(val === "echo") {
    result = "Easy";
  } else if(val === "foxtrot") {
    result = "Frank";
  } else {
    result = "None";
  }

  switch(val) {
    case "alpha":
      result = "Adams";
      break;
    case "bravo":
      result = "Boston";
      break;
    case "charlie":
      result = "Chicago";
      break;
    case "delta":
      result = "Denver";
      break;
    case "echo":
      result = "Easy";
      break;
    case "foxtrot":
      result = "Frank";
      break;
    default:
      result = "None";
  }

  const lookup = {
    "alpha": "Adams",
    "bravo": "Boston",
    "charlie": "Chicago",
    "delta": "Denver",
    "echo": "Easy",
    "foxtrot": "Frank"
  };