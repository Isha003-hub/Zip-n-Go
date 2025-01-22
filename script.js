window.onload = function () {
 // Retrieve references to the DOM elements
  var list_btn = document.getElementById("generate-list");
  var sec_section = document.getElementById("afterSearch");
  var error = document.getElementById("error");
  var destination = document.getElementById("destination");
  var duration = document.getElementById("duration");
  var purpose = document.getElementById("purpose");
  var selecteddesti = document.getElementById("sel_dest");
  var selecteddur = document.getElementById("sel_dur");
  var selectedpur = document.getElementById("sel_purp");
  var formhandler = document.forms.destination_form;
  var clothingList = document.getElementById("category_1");
  var documentList = document.getElementById("category_2");
  var electronicList = document.getElementById("category_3");
  var accessoriesList = document.getElementById("category_4");

  
 // Event handler for the Generate List button click
  list_btn.onclick = function(){
    // Retrieve selected values from the dropdowns
    var sel_opt1 = formhandler.option_1.options[formhandler.option_1.selectedIndex].value;
    var sel_opt2 = formhandler.option_2.options[formhandler.option_2.selectedIndex].value;
    var sel_opt3 = formhandler.option_3.options[formhandler.option_3.selectedIndex].value;

    // Retrieve the text of the selected options for display
    var sel_text1 = formhandler.option_1.options[formhandler.option_1.selectedIndex].text;
    var sel_text2 = formhandler.option_2.options[formhandler.option_2.selectedIndex].text;
    var sel_text3 = formhandler.option_3.options[formhandler.option_3.selectedIndex].text;

    console.log(sel_opt1)
    // Check if any dropdown still has the default option selected
    if(sel_opt1 === "X"){
      error.style.display = "block";
      destination.style.background = "red" // Highlight the destination dropdown in red
    }else if(sel_opt2 === "X"){

      error.style.display = "block";
      duration.style.background = "red"
    }else if(sel_opt3 === "X"){
      error.style.display = "block";
      purpose.style.background = "red"

    }else{
      // Reset styles and hide the error message
      destination.style.background = "transparent"
      duration.style.background = "transparent"
      error.style.display = "none";
      purpose.style.background = "transparent"
      sec_section.style.display = "flex";// Display the section containing the generated list

      // Update the lists based on the selected options
      updateClothingList(destination.value, duration.value, purpose.value);
      updateDocumentList(destination.value, duration.value, purpose.value);
      updateElectronicsList(destination.value, duration.value, purpose.value);
      updateAccessoriesList(destination.value, duration.value, purpose.value);
    }

    // Update the displayed text with selected options
    selecteddesti.innerHTML = sel_text1;
    selecteddur.innerHTML = sel_text2;
    selectedpur.innerHTML = sel_text3;
    return false; // Prvents default from Submission
  }
   //-----------------Clothing----------------- 
  function updateClothingList(dest, dur, purp) {
  clothingList.innerHTML = "";// Clear previous list items
    //India -- 3 Days -- Business
    // Populate clothing list based on destination, duration, and purpose
    if (dest === "india" && dur === "3" && purp === "bus") {
      var items = ["Blazer X 1", "Shirts X 2", "Trousers X 2", "InnerWear X 3", "FootWear X 2"];
      items.forEach((item) => {
        clothingList.innerHTML += "<li class='cat2_items'>" + item + "</li>";
      });
    // India -- 3 Days -- Personal
    } else if (dest === "india" && dur === "3" && purp === "per") {
      var items = ["Top X 5", "Bottom X 5", "InnerWear X 5", "FootWear X 2", "kurta/Saree"];
      items.forEach((item) => {
        clothingList.innerHTML += "<li class='cat2_items'>" + item + "</li>";
      });
    // India -- 7 Days -- Business
    }else if (dest === "india" && dur === "7" && purp === "bus") {
      var items = ["Blazer X 2", "Shirts X 3", "Trousers X 2", "CasualWear X 2", "InnerWear X 7", "FootWear X 2"];
      items.forEach((item) => {
        clothingList.innerHTML += "<li class='cat2_items'>" + item + "</li>";
      });
    // India -- 7 Days -- Personal
    }else if (dest === "india" && dur === "7" && purp === "per") {
      var items = ["Top X 7", "Bottom X 5", "InnerWear X 7", "FootWear X 3", "Kurta/Saree X 3", "NightWear X 2"];
      items.forEach((item) => {
        clothingList.innerHTML += "<li class='cat2_items'>" + item + "</li>";
      });
    } //paris -- 3 Days -- Business
    else if (dest === "paris" && dur === "3" && purp === "bus") {
      var items = ["Blazer X 1", "Shirts X 2", "Trousers X 1", "Shoes X 1", "socks X 3(Pairs)"];
      items.forEach((item) => {
        clothingList.innerHTML += "<li class='cat2_items'>" + item + "</li>";
      });
    //paris -- 3 Days -- Personal
    } else if (dest === "paris" && dur === "3" && purp === "per") {
      var items = ["Casual Wear X 2", "Jacket", "UnderWear X 3", "Socks X 3(Pairs)", "Shoes X 1(Pair)"];
      items.forEach((item) => {
        clothingList.innerHTML += "<li class='cat2_items'>" + item + "</li>";
      });
    //paris -- 7 Days -- Business
    }else if (dest === "paris" && dur === "7" && purp === "bus") {
      var items =  ["Blazer X 2", "Shirts X 3", "Trousers X 2", "Shoes X 1", "Casual Wear X 2", "Tie(s) X 2"];
      items.forEach((item) => {
        clothingList.innerHTML += "<li class='cat2_items'>" + item + "</li>";
      });
    //paris -- 7 Days -- Personal
    }else if (dest === "paris" && dur === "7" && purp === "per") {
      var items = ["Casual Wear X 4", "Jacket X 3", "UnderWear X 7", "sleepWear X 1 Set","Scarf","Shoes X 1 Pair"];
      items.forEach((item) => {
        clothingList.innerHTML += "<li class='cat2_items'>" + item + "</li>";
      });
    }
     //south Korea -- 3 Days -- Business
     else if (dest === "sk" && dur === "3" && purp === "bus") {
      var items = ["Blazer X 1", "Shirts X 2", "Trousers X 1", "Shoes X 1 Pair","Socks x 3 Pairs"];
      items.forEach((item) => {
        clothingList.innerHTML += "<li class='cat2_items'>" + item + "</li>";
      });
    //south Korea -- 3 Days -- Personal
    } else if (dest === "sk" && dur === "3" && purp === "per") {
      var items = ["Casual Wear X 2", "Jacket", "UnderWear", "Shoes X 1 Pair", "Socks X 3 Pairs"];
      items.forEach((item) => {
        clothingList.innerHTML += "<li class='cat2_items'>" + item + "</li>";
      });
    //south Korea -- 7 Days -- Business
    }else if (dest === "sk" && dur === "7" && purp === "bus") {
      var items = ["Blazer X 2", "Shirts X 3", "Trousers X 2", "Shoes X 2 Pairs","Socks x 7 Pairs", "Tie(s)/Cuffins"];
      items.forEach((item) => {
        clothingList.innerHTML += "<li class='cat2_items'>" + item + "</li>";
      });
    //south Korea -- 7 Days -- Personal
    }else if (dest === "sk" && dur === "7" && purp === "per") {
      var items = ["Casual Wear X 3", "Jacket X 4", "UnderWear X 7", "sleepWear X 1 Set", "Scarf", "Shoes X 1 Pair", "Socks X 7 Pairs"];
      items.forEach((item) => {
        clothingList.innerHTML += "<li class='cat2_items'>" + item + "</li>";
      });
    }
  }
  //-------------Documents-----------------
  function updateDocumentList(dest, dur, purp) {
    documentList.innerHTML = "";
    //---------India----------
    if (dest === "india" && dur === "3" && purp === "bus") {
      var items = ["PassPort", "Visa", "National Id", "Travel Insurance", "Flight Tickets"];
      items.forEach((item) => {
        documentList.innerHTML += "<li class='cat2_items'>" + item + "</li>";
      });
    } else if (dest === "india" && dur === "3" && purp === "per") {
      var items = ["Passport", "Country Map", "National ID", "Flight Tickets" , "Visa"];
      items.forEach((item) => {
        documentList.innerHTML += "<li class='cat2_items'>" + item + "</li>";
      });
    }else if (dest === "india" && dur === "7" && purp === "bus") {
      var items = ["Passport", "National ID", "Flight Tickets" , "Visa", "Business Cards", "Hotel Reservation"];
      items.forEach((item) => {
        documentList.innerHTML += "<li class='cat2_items'>" + item + "</li>";
      });
    }else if (dest === "india" && dur === "7" && purp === "per") {
      var items = ["Passport", "Country Map", "National ID", "Travel Insurance", "visa", "Hotel Reservations"];
      items.forEach((item) => {
        documentList.innerHTML += "<li class='cat2_items'>" + item + "</li>";
      });
    } //-----------paris-------------
    else if (dest === "paris" && dur === "3" && purp === "bus") {
      var items = ["PassPort", "Visa", "National Id", "Travel Insurance", "Flight Tickests"];
      items.forEach((item) => {
        documentList.innerHTML += "<li class='cat2_items'>" + item + "</li>";
      });
    } else if (dest === "paris" && dur === "3" && purp === "per") {
      var items = ["Passport", "National ID", "Flight Tickets" , "Travel Insurance", "Emergency Contacts"];
      items.forEach((item) => {
        documentList.innerHTML += "<li class='cat2_items'>" + item + "</li>";
      });
    }else if (dest === "paris" && dur === "7" && purp === "bus") {
      var items = ["Passport", "Visa", "National ID", "Flight Tickets", "Travel Insurance", "Business Cards"];
      items.forEach((item) => {
        documentList.innerHTML += "<li class='cat2_items'>" + item + "</li>";
      });
    }else if (dest === "paris" && dur === "7" && purp === "per") {
      var items = ["Passport", "Flight Tickets", "National ID", "Travel Insurance", "Travel Plans", "Credit/Debit Cards"];
      items.forEach((item) => {
        documentList.innerHTML += "<li class='cat2_items'>" + item + "</li>";
      });
    }
     //----------South Korea------------
     else if (dest === "sk" && dur === "3" && purp === "bus") {
      var items = ["Passport", "Flight Tickets", "National ID", "Travel Insurance", "Business"];
      items.forEach((item) => {
        documentList.innerHTML += "<li class='cat2_items'>" + item + "</li>";
      });
    } else if (dest === "sk" && dur === "3" && purp === "per") {
      var items = ["Passport", "Flight Tickets", "National ID", "Travel Insurance", "Emergency Contact"];
      items.forEach((item) => {
        documentList.innerHTML += "<li class='cat2_items'>" + item + "</li>";
      });
    }else if (dest === "sk" && dur === "7" && purp === "bus") {
      var items = ["Passport", "Flight Tickets", "National ID", "Travel Insurance", "Meeting Agenda", "Visa"];
      items.forEach((item) => {
        documentList.innerHTML += "<li class='cat2_items'>" + item + "</li>";
      });
    }else if (dest === "sk" && dur === "7" && purp === "per") {
      var items = ["Passport", "Flight Tickets", "National ID", "Travel Insurance", "Travel Plans", "Visa"];
      items.forEach((item) => {
        documentList.innerHTML += "<li class='cat2_items'>" + item + "</li>";
      });
    }
  }

  // -------------Electronics-------------------- 
  function updateElectronicsList(dest, dur, purp) {
    electronicList.innerHTML = "";
    //-----------India----------
    if (dest === "india" && dur === "3" && purp === "bus") {
      var items = ["smartphone", "Laptop", "Charger", "Travel Apdapter", "Headphones"];
      items.forEach((item) => {
        electronicList.innerHTML += "<li class='cat2_items'>" + item + "</li>";
      });
    } else if (dest === "india" && dur === "3" && purp === "per") {
      var items = ["Smartphones", "Camera", "PowerBank", "Travel Adapter", "Earphones"];
      items.forEach((item) => {
        electronicList.innerHTML += "<li class='cat2_items'>" + item + "</li>";
      });
    }else if (dest === "india" && dur === "7" && purp === "bus") {
      var items = ["Smartphones", "Tablet", "PowerBank", "Travel Adapter", "Headphones", "WiFi Router"];
      items.forEach((item) => {
        electronicList.innerHTML += "<li class='cat2_items'>" + item + "</li>";
      });
    }else if (dest === "india" && dur === "7" && purp === "per") {
      var items = ["Smartphones", "Camera", "PowerBank", "Travel Adapter",  "Laptop" , "E-Book Reader"];
      items.forEach((item) => {
        electronicList.innerHTML += "<li class='cat2_items'>" + item + "</li>";
      });
    } //------------paris-------------
    else if (dest === "paris" && dur === "3" && purp === "bus") {
      var items = ["Laptop", "Charger", "Travel Apdapter", "Power Bank", "USB Drive"];
      items.forEach((item) => {
        electronicList.innerHTML += "<li class='cat2_items'>" + item + "</li>";
      });
    } else if (dest === "paris" && dur === "3" && purp === "per") {
      var items = ["Smartphones", "PowerBank", "Travel Adapter", "Headphones", "Camera", "Tablet"];
      items.forEach((item) => {
        electronicList.innerHTML += "<li class='cat2_items'>" + item + "</li>";
      });
    }else if (dest === "paris" && dur === "7" && purp === "bus") {
      var items = ["Smartphones", "Laptop", "PowerBank", "Adapter(european)", "HeadPhones", "Portable WIFI" ];
      items.forEach((item) => {
        electronicList.innerHTML += "<li class='cat2_items'>" + item + "</li>";
      });
    }else if (dest === "paris" && dur === "7" && purp === "per") {
      var items = ["Smartphones", "Camera", "PowerBank", "Adapter(european)", "HeadPhones", "Laptop" ];
      items.forEach((item) => {
        electronicList.innerHTML += "<li class='cat2_items'>" + item + "</li>";
      });
    }
     //---------------South Korea------------
     else if (dest === "sk" && dur === "3" && purp === "bus") {
      var items = ["Smartphones", "PowerBank", "Adapter(SouthKorean)", "HeadPhones", "Laptop" ];
      items.forEach((item) => {
        electronicList.innerHTML += "<li class='cat2_items'>" + item + "</li>";
      });
    } else if (dest === "sk" && dur === "3" && purp === "per") {
      var items = ["Smartphones", "charger", "PowerBank", "Adapter(SouthKorean)", "Camera" ];
      items.forEach((item) => {
        electronicList.innerHTML += "<li class='cat2_items'>" + item + "</li>";
      });
    }else if (dest === "sk" && dur === "7" && purp === "bus") {
      var items =["Smartphones", "Laptop", "PowerBank", "Adapter(SouthKorean)", "HeadPhones", "camera" ];
      items.forEach((item) => {
        electronicList.innerHTML += "<li class='cat2_items'>" + item + "</li>";
      });
    }else if (dest === "sk" && dur === "7" && purp === "per") {
      var items = ["Smartphones", "Camera", "PowerBank", "Adapter(SouthKorean)", "HeadPhones",  "Laptop" ];
      items.forEach((item) => {
        electronicList.innerHTML += "<li class='cat2_items'>" + item + "</li>";
      });
    }
  }
//-------------Accesories-------------------- 
function updateAccessoriesList(dest, dur, purp) {
  accessoriesList.innerHTML = "";
  //---------India-----------------
  if (dest === "india" && dur === "3" && purp === "bus") {
    var items = ["Belt", "Watch", "Sunglasses", "Pen/Notped", "Bag"];
    items.forEach((item) => {
      accessoriesList.innerHTML += "<li class='cat2_items'>" + item + "</li>";
    });
  } else if (dest === "india" && dur === "3" && purp === "per") {
    var items = ["Belt", "Jewellery", "Hat", "sunglasses", "Small Bag"];
    items.forEach((item) => {
      accessoriesList.innerHTML += "<li class='cat2_items'>" + item + "</li>";
    });
  }else if (dest === "india" && dur === "7" && purp === "bus") {
    var items = ["Belt", "Watch", "SunGlassers X 2", "Tote Bag", "Tie(s)", "Perfume"];
    items.forEach((item) => {
      accessoriesList.innerHTML += "<li class='cat2_items'>" + item + "</li>";
    });
  }else if (dest === "india" && dur === "7" && purp === "per") {
    var items = ["Belt", "Jewellery", "Hat X 2", "Sunglasses X 2", "Water Bottle", "Tote Bag"];
    items.forEach((item) => {
      accessoriesList.innerHTML += "<li class='cat2_items'>" + item + "</li>";
    });
  }//---------Paris-----------------
  else if (dest === "paris" && dur === "3" && purp === "bus") {
    var items = ["Watch", "Sunglasses", "Business Cards", "BriefCase","Jewellery"];
    items.forEach((item) => {
      accessoriesList.innerHTML += "<li class='cat2_items'>" + item + "</li>";
    });
  } else if (dest === "paris" && dur === "3" && purp === "per") {
    var items = ["Sunglasses", "DeoDorant", "Hat", "Watch", "Small Bagpack"];
    items.forEach((item) => {
      accessoriesList.innerHTML += "<li class='cat2_items'>" + item + "</li>";
    });
  }else if (dest === "paris" && dur === "7" && purp === "bus") {
    var items = ["Watch", "Sunglasses", "Belt", "Business Bag", "Water Bottle" , "Pen/Notepad"];
    items.forEach((item) => {
      accessoriesList.innerHTML += "<li class='cat2_items'>" + item + "</li>";
    });
  }else if (dest === "paris" && dur === "7" && purp === "per") {
    var items = ["SunGlasses", "Belt", "Jewellery", "Hat X 2",  "Tote Bag", "Evening Bag"];
    items.forEach((item) => {
      accessoriesList.innerHTML += "<li class='cat2_items'>" + item + "</li>";
    });
  }
   //---------South Korea-----------------
   else if (dest === "sk" && dur === "3" && purp === "bus") {
    var items = ["Watch", "Sunglasses", "Belt",  "Business Bag", "Pen/notepad"];
    items.forEach((item) => {
      accessoriesList.innerHTML += "<li class='cat2_items'>" + item + "</li>";
    });
  } else if (dest === "sk" && dur === "3" && purp === "per") {
    var items = ["Sunglasses", "DeoDorant", "Cap", "Watch X 2",  "SunsCream"];
    items.forEach((item) => {
      accessoriesList.innerHTML += "<li class='cat2_items'>" + item + "</li>";
    });
  }else if (dest === "sk" && dur === "7" && purp === "bus") {
    var items = ["SunGlasses", "Belt", "Watch", "Deodorant",  "Business Bag", "Pen/NotePad"];
    items.forEach((item) => {
      accessoriesList.innerHTML += "<li class='cat2_items'>" + item + "</li>";
    });
  }else if (dest === "sk" && dur === "7" && purp === "per") {
    var items = ["SunGlasses", "Jewellery", "Hat X 2", "Deodorant",  "Tote Bag", "Travel Pillow"];
    items.forEach((item) => {
      accessoriesList.innerHTML += "<li class='cat2_items'>" + item + "</li>";
    });
  }
}
};
//----------Accordion Toggle Function------------
  function accordian(element) {
  // Toggle the display property of the selected accordion section
    var change = document.getElementById(element)
    if(change.style.display == "none"){
      change.style.borderTop = "1px #00000080 solid" // Add border when expanded
      change.style.display = "flex"
    }else{
      change.style.display = "none"
    }
};